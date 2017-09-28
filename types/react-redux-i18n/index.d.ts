// Type definitions for react-redux-i18n
// Project: https://github.com/zoover/react-redux-i18n
// Definitions by: Clément Devos <https://github.com/clementdevos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'react-redux-i18n' {
  import * as react from "react"
  import * as redux from "redux"

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

  type DispatchCallback<S> = {
    (dispatch?: redux.Dispatch<S>, getState?: () => S): any;
  }

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
  export class Translate extends react.Component<TranslateProps>{ }
  export class Localize extends react.Component<LocalizeProps>{ }

  /**
   * Reducer
   */
  export function i18nReducer(state?: any, options?: any): redux.Reducer<I18nState>;

  /**
   * Reducer init
   */
  export function syncTranslationWithStore(store: redux.Store<any>): void;

  /**
   *  Redux Actions
   */
  export function loadTranslations(translationsObject: TranslationObjects): DispatchCallback<any>;

  export function setLocale(locale: string): DispatchCallback<any>;

}
