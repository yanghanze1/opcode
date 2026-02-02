import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入翻译资源
import commonEN from '@/locales/en/common.json';
import agentsEN from '@/locales/en/agents.json';
import projectsEN from '@/locales/en/projects.json';
import sessionsEN from '@/locales/en/sessions.json';
import settingsEN from '@/locales/en/settings.json';
import mcpEN from '@/locales/en/mcp.json';
import usageEN from '@/locales/en/usage.json';
import errorsEN from '@/locales/en/errors.json';

import commonZH from '@/locales/zh/common.json';
import agentsZH from '@/locales/zh/agents.json';
import projectsZH from '@/locales/zh/projects.json';
import sessionsZH from '@/locales/zh/sessions.json';
import settingsZH from '@/locales/zh/settings.json';
import mcpZH from '@/locales/zh/mcp.json';
import usageZH from '@/locales/zh/usage.json';
import errorsZH from '@/locales/zh/errors.json';

// 翻译资源
const resources = {
  en: {
    common: commonEN,
    agents: agentsEN,
    projects: projectsEN,
    sessions: sessionsEN,
    settings: settingsEN,
    mcp: mcpEN,
    usage: usageEN,
    errors: errorsEN,
  },
  zh: {
    common: commonZH,
    agents: agentsZH,
    projects: projectsZH,
    sessions: sessionsZH,
    settings: settingsZH,
    mcp: mcpZH,
    usage: usageZH,
    errors: errorsZH,
  },
};

i18n
  // 语言检测插件
  .use(LanguageDetector)
  // React 绑定
  .use(initReactI18next)
  // 初始化配置
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'agents', 'projects', 'sessions', 'settings', 'mcp', 'usage', 'errors'],

    // 语言检测配置
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'opcode-language',
    },

    interpolation: {
      escapeValue: false, // React 已经处理 XSS
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
