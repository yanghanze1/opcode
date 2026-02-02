module.exports = {
  locales: ['en', 'zh'],
  output: 'src/locales/$LOCALE/$NAMESPACE.json',
  input: ['src/**/*.{ts,tsx}'],

  // 默认命名空间
  defaultNamespace: 'common',

  // 命名空间
  lexers: {
    ts: ['JavascriptLexer'],
    tsx: ['JsxLexer'],
  },

  // 保持 key 排序
  sort: true,

  // 保留旧的翻译
  keepRemoved: false,

  // 使用 key 作为默认值
  defaultValue: (locale, namespace, key) => {
    return key;
  },

  // 命名空间分离
  createOldCatalogs: false,

  // 缩进
  indentation: 2,

  // 命名空间映射规则
  namespaceSeparator: ':',
  keySeparator: '.',
};
