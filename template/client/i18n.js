import Vue from 'vue';
import VueI18n from 'vue-i18n';
import langs from './languages';
import en from './languages/english';

Vue.use(VueI18n);

function createI18n (ssrContext) {
  let locale = 'en';

  if (ssrContext && ssrContext.lang) {
    locale = ssrContext.lang;
  } else if (typeof document !== 'undefined') {
    locale = document.documentElement.lang;
  }

  const messages = { en };

  if (locale !== 'en' && langs[locale]) {
    langs[locale] = langs[locale];
  }

  return new VueI18n({
                       locale: 'en',
                       fallbackLocale: 'en',
                       messages,
                     });
}

export default createI18n;
