// Type definitions for react-redux-i18n
// Project: https://github.com/zoover/react-redux-i18n
// Definitions by: Clément Devos <https://github.com/clementdevos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts" />
///<reference path="../redux/redux.d.ts" />

declare module 'react-redux-i18n' {
  import R = __React;
  import _Redux = Redux;

  /**
   * Helper methods
   */
  interface I18n {
    t(code: string, options?: any): string;
    l(timestamp: number, options?: any): string;
  }
  export var I18n : I18n;

  type SubTranslationObject = string | { [key: string]: SubTranslationObject };

  type TranslationObjects = { [lang: string]: SubTranslationObject };

  type I18nState = {
    translations: TranslationObjects;
    locale: string;
  }

  type TranslateProps = {
    value: string;
    [prop: string]: string;

  }
  type LocalizeProps = {
    value: string | number;
    dateFormat?: string;
    options?: Object;
  }

  /**
   * React components
   */
  export class Translate extends R.Component<TranslateProps, any>{ }
  export class Localize extends R.Component<LocalizeProps, any>{ }

  /**
   * Reducer
   */
  export function i18nReducer(state?: any, options?: any): _Redux.Reducer<I18nState>;

  /**
   * Reducer init
   */
  export function syncTranslationWithStore(store: _Redux.Store<any>): void;

  /**
   *  Redux Actions
   */
  export function loadTranslations(translationsObject: TranslationObjects): void;

  export function setLocale(locale: string): void;

}
