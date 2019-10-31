// Type definitions for vuex-i18n 1.10
// Project: https://github.com/dkfbasel/vuex-i18n
// Definitions by: Cedric Kemp <https://github.com/jaeggerr>
//                 Noam Kfir <https://github.com/noamkfir>
//                 Suleimanov Artem <https://github.com/barahliush>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import _Vue, { PluginObject } from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $i18n: Ii18n;
    $t(key: string, options?: any, pluralization?: number): string | undefined;
    $t(key: string, defaultValue: string, options?: any, pluralization?: number): string | undefined;
  }

  interface VueConstructor<V extends Vue = Vue> {
    i18n: Ii18n;
  }
}

export interface i18nState {
  fallback: string | null;
  locale: string | null;
  translations: {
    [key: string]: Translations;
  };
}

export interface Translations {
  [key: string]: string | Translations;
}

export interface Ii18n {
  /** get the current locale */
  locale(): string | null;

  /** get all the registered locales */
  locales(): string[];

  /** set the current locale (i.e. 'de', 'en') */
  set(locale: string): void;

  /**
   * add locale translation to the storage. this will extend existing information
   * (i.e. 'de', {'message': 'Eine Nachricht'})
   */
  add(locale: string, translations: Translations): void;

  /**
   * replace locale translations in the storage. this will remove all previous
   * locale information for the specified locale
   */
  replace(locale: string, translations: Translations): void;

  /**
   * remove the given locale from the store
   */
  remove(locale: string): void;

  /**
   * set a fallback locale if translation for current locale does not exist
   */
  fallback(locale: string): void;

  /**
   * get localized string from store. note that we pass the arguments passed
   * to the function directly to the translateInLanguage function
   */
  translate(key: string, options?: any, pluralization?: number): string | undefined;

  /**
   * get localized string from store. note that we pass the arguments passed
   * to the function directly to the translateInLanguage function
   */
  translate(key: string, defaultValue: string, options?: any, pluralization?: number): string | undefined;

  /**
   * get localized string from store in a given language if available.
   */
  translateIn(locale: string, key: string, options?: any, pluralization?: number): string | undefined;

  /**
   * get localized string from store in a given language if available.
   */
  translateIn(locale: string, key: string, defaultValue: string, options?: any, pluralization?: number): string | undefined;

  /**
   * check if the given locale translations are present in the store
   */
  localeExists(locale: string): boolean;

  /**
   * check if the given key is available
   * optional with a second parameter to limit the scope
   * strict: only current locale (exact match)
   * locale: current locale and parent language locale (i.e. en-us & en)
   * fallback: current locale, parent language locale and fallback locale
   * the default is fallback
   */
  keyExists(key: string, scope?: string): boolean;
}

declare const _default: {
  plugin: PluginObject<Ii18n>;
};

export default _default;
