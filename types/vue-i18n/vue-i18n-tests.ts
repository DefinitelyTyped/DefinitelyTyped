/// <reference types="../../node" />

const assert = console.assert;
const random = () => Math.trunc(Math.exp(Math.log(Date.now()) * Math.random()));

import * as Vue from 'vue';
import * as VueI18n from 'vue-i18n';
import { ComponentOptions } from 'vue';

/**
 * VueI18n.install
 */
Vue.use(VueI18n);
VueI18n.install(Vue);

/**
 * VueI18n.version
 */
assert(typeof VueI18n.version === 'string');

/**
 * VueI18n Instance
 */
const locale = random().toString();
const key = `_${random()}`;
const value = `${random()}|${random()}|${random()}`;
const i18n = new VueI18n({
  locale,
  fallbackLocale: locale,
  messages: {
    [locale]: {
      [key]: value,
    },
  },
  formatter: {
    format(message, values) {
      return message;
    },
  },
  missing(locale, key, vm) {
  },
  fallbackRoot: false,
  sync: true,
  silentTranslationWarn: true,
});
assert(i18n.messages[locale][key] === value);
assert(i18n.locale === locale);
assert(i18n.fallbackLocale === locale);
assert(typeof i18n.missing === 'function');
assert(typeof i18n.formatter.format === 'function');
assert(i18n.silentTranslationWarn);
i18n.setLocaleMessage(locale, {});
assert(i18n.getLocaleMessage(locale)[key] === undefined);
i18n.mergeLocaleMessage(locale, { [key]: value });
assert(i18n.getLocaleMessage(locale)[key] === value);
assert(typeof i18n.t === 'function');
assert(typeof i18n.tc === 'function');
assert(typeof i18n.te === 'function');

/**
 * Vue
 */
const vm = new Vue({
  i18n,
});
assert(vm.$i18n === i18n);
assert(vm.$t(key) === value);
assert(vm.$t(key, ['', 0, false, null, undefined]) === value);
assert(vm.$t(key, { x: 'x' }) === value);
assert(vm.$t(key, locale) === value);
assert(vm.$t(key, locale, ['', 0, false, null, undefined]) === value);
assert(vm.$t(key, locale, { x: 'x' }) === value);
assert(vm.$tc(key) === value);
assert(vm.$tc(key, 1) === value.split('|')[1]);
assert(vm.$tc(key, 1, []) === value.split('|')[1]);
assert(vm.$tc(key, 1, {}) === value.split('|')[1]);
assert(vm.$tc(key, 1, locale) === value.split('|')[1]);
assert(vm.$tc(key, 1, locale, []) === value.split('|')[1]);
assert(vm.$tc(key, 1, locale, {}) === value.split('|')[1]);
assert(vm.$te(key));
assert(vm.$te(key, locale));

/**
 * VueI18n
 */
{
  let path: VueI18n.Path;
  let locale: VueI18n.Locale;
  let values: VueI18n.Values;
  let choice: VueI18n.Choice;
  let localeMessage: VueI18n.LocaleMessage;
  let localeMessageObject: VueI18n.LocaleMessageObject;
  let localeMessageArray: VueI18n.LocaleMessageArray;
  let localeMessages: VueI18n.LocaleMessages;
  let translateResult: VueI18n.TranslateResult;
  let formatter: VueI18n.Formatter;
  let missingHandler: VueI18n.MissingHandler;
  let i18nOptions: VueI18n.I18nOptions;
}
