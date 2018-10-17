import { i18n as I18n, TranslationFunction } from "i18next";

/**
 * Extend your component's Prop interface with this one to get access to `this.props.t`
 */
export interface InjectedTranslateProps {
    t: TranslationFunction;
}

/**
 * Extend your component's Prop interface with this one to get access to `this.props.i18n`
 */
export interface InjectedI18nProps {
    i18n: I18n;
}
