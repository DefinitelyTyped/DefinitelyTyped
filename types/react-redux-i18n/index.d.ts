declare module "react-redux-i18n" {
    import * as react from "react";
    import * as redux from "redux";

    /**
     * Helper methods
     */
    interface I18n {
        t(code: string, options?: any): string;
        l(timestamp: number, options?: any): string;
    }
    export var I18n: I18n;

    type SubTranslationObject = string | { [key: string]: SubTranslationObject };

    type TranslationObjects = { [lang: string]: SubTranslationObject };

    type DispatchCallback<S extends redux.Action> = {
        (dispatch?: redux.Dispatch<S>, getState?: () => S): any;
    };

    type I18nState = {
        translations: TranslationObjects;
        locale: string;
    };

    type TranslateProps = {
        className?: string | undefined;
        dangerousHTML?: boolean | undefined;
        style?: React.CSSProperties | undefined;
        tag?: React.ElementType | undefined;
        value: string;
        [prop: string]: any;
    };

    type LocalizeProps = {
        className?: string | undefined;
        dangerousHTML?: boolean | undefined;
        dateFormat?: string | undefined;
        options?: Object | undefined;
        style?: React.CSSProperties | undefined;
        tag?: React.ElementType | undefined;
        value: string | number | object;
    };

    /**
     * React components
     */
    export class Translate extends react.Component<TranslateProps> {}
    export class Localize extends react.Component<LocalizeProps> {}

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
