const config = {
  theme: {
    colors: {
      primary100: '#ffd6d4',
      primary200: '#fa685f',
      primary500: '#EE4035',
      buttonPrimary500: '#1c1c1a',
      primary600: '#EE4035',
      buttonPrimary600: '#EE4035',
      primary700: '#EE4035',
    },
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = ( app ) =>
{
  console.log( app );
};

export default {
  config,
  bootstrap,
};