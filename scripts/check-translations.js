#!/usr/bin/env node

/**
 * 国际化翻译完整性检查脚本
 *
 * 功能：
 * 1. 检查所有翻译文件的 JSON 语法
 * 2. 对比英文和中文翻译文件的键是否一致
 * 3. 检查是否有缺失的翻译
 * 4. 生成检查报告
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '../src/locales');
const LANGUAGES = ['en', 'zh'];
const NAMESPACES = ['common', 'agents', 'projects', 'sessions', 'settings', 'mcp', 'usage', 'errors'];

// 颜色输出
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// 读取并解析 JSON 文件
function readTranslationFile(lang, namespace) {
  const filePath = path.join(LOCALES_DIR, lang, `${namespace}.json`);

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return null;
    }
    throw new Error(`Failed to parse ${filePath}: ${error.message}`);
  }
}

// 获取所有键的扁平化列表
function flattenKeys(obj, prefix = '') {
  const keys = [];

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...flattenKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }

  return keys;
}

// 检查单个命名空间
function checkNamespace(namespace) {
  log(`\n📦 检查命名空间: ${namespace}`, 'cyan');

  const translations = {};
  const errors = [];

  // 读取所有语言的翻译文件
  for (const lang of LANGUAGES) {
    const data = readTranslationFile(lang, namespace);

    if (!data) {
      errors.push(`❌ 缺失文件: ${lang}/${namespace}.json`);
      continue;
    }

    translations[lang] = data;
  }

  if (errors.length > 0) {
    errors.forEach(err => log(err, 'red'));
    return { namespace, errors, warnings: [], success: false };
  }

  // 获取所有键
  const enKeys = flattenKeys(translations.en);
  const zhKeys = flattenKeys(translations.zh);

  const warnings = [];

  // 检查缺失的键
  const missingInZh = enKeys.filter(key => !zhKeys.includes(key));
  const missingInEn = zhKeys.filter(key => !enKeys.includes(key));

  if (missingInZh.length > 0) {
    warnings.push(`⚠️  中文缺失 ${missingInZh.length} 个键:`);
    missingInZh.forEach(key => warnings.push(`   - ${key}`));
  }

  if (missingInEn.length > 0) {
    warnings.push(`⚠️  英文缺失 ${missingInEn.length} 个键:`);
    missingInEn.forEach(key => warnings.push(`   - ${key}`));
  }

  if (warnings.length === 0) {
    log(`✅ 完整性检查通过 (${enKeys.length} 个键)`, 'green');
  } else {
    warnings.forEach(warn => log(warn, 'yellow'));
  }

  return {
    namespace,
    errors,
    warnings,
    success: errors.length === 0,
    keyCount: enKeys.length,
    missingInZh: missingInZh.length,
    missingInEn: missingInEn.length,
  };
}

// 主函数
function main() {
  log('🌐 国际化翻译完整性检查', 'blue');
  log('='.repeat(50), 'blue');

  const results = [];
  let totalErrors = 0;
  let totalWarnings = 0;

  // 检查所有命名空间
  for (const namespace of NAMESPACES) {
    const result = checkNamespace(namespace);
    results.push(result);

    totalErrors += result.errors.length;
    totalWarnings += result.warnings.length;
  }

  // 生成总结报告
  log('\n' + '='.repeat(50), 'blue');
  log('📊 检查总结', 'blue');
  log('='.repeat(50), 'blue');

  const totalKeys = results.reduce((sum, r) => sum + (r.keyCount || 0), 0);
  const totalMissingZh = results.reduce((sum, r) => sum + (r.missingInZh || 0), 0);
  const totalMissingEn = results.reduce((sum, r) => sum + (r.missingInEn || 0), 0);

  log(`\n总翻译键数: ${totalKeys}`);
  log(`命名空间数: ${NAMESPACES.length}`);
  log(`支持语言数: ${LANGUAGES.length}`);

  if (totalErrors > 0) {
    log(`\n❌ 发现 ${totalErrors} 个错误`, 'red');
  }

  if (totalWarnings > 0) {
    log(`⚠️  发现 ${totalWarnings} 个警告`, 'yellow');
    log(`   - 中文缺失: ${totalMissingZh} 个键`, 'yellow');
    log(`   - 英文缺失: ${totalMissingEn} 个键`, 'yellow');
  }

  if (totalErrors === 0 && totalWarnings === 0) {
    log('\n✅ 所有检查通过！翻译文件完整且一致。', 'green');
    process.exit(0);
  } else if (totalErrors === 0) {
    log('\n⚠️  检查完成，但有警告需要处理。', 'yellow');
    process.exit(1);
  } else {
    log('\n❌ 检查失败，请修复错误后重试。', 'red');
    process.exit(1);
  }
}

// 运行检查
try {
  main();
} catch (error) {
  log(`\n❌ 检查过程中发生错误: ${error.message}`, 'red');
  console.error(error);
  process.exit(1);
}
