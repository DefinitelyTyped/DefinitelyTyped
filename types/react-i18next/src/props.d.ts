import {i18n as I18n, TranslationFunction} from "i18next";

/**
 * Extend your component's Prop interface with this one to get access to `this.props.t`
 *
 * Please note that if you use the `translateFuncName` option, you should create
 * your own interface just like this one, but with your name of the translation function.
 *
 * interface MyComponentProps extends ReactI18next.InjectedTranslateProps {}
 * 
 * Then specify the name of the translate function as generic argument
 * 
 * const translated = translate<string, "_">("view", { translateFuncName: "_" })(YourComponent);
 */
export interface InjectedTranslateProps {
    t: TranslationFunction;
}

/**
 * Extend your component's Prop interface with this one to get access to `this.props.i18n`
 */
export interface InjectedI18nProps {
    i18n: I18n
}
