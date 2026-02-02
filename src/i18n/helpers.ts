import i18n from './config';

/**
 * 获取当前语言
 */
export const getCurrentLanguage = (): string => {
  return i18n.language || 'en';
};

/**
 * 切换语言
 */
export const changeLanguage = async (lang: string): Promise<void> => {
  await i18n.changeLanguage(lang);
};

/**
 * 获取支持的语言列表
 */
export const getSupportedLanguages = () => {
  return [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '简体中文' },
  ];
};

/**
 * 检查是否为中文
 */
export const isChineseLanguage = (): boolean => {
  return getCurrentLanguage().startsWith('zh');
};
