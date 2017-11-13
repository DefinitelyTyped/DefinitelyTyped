// Type definitions for react-i18next 4.6
// Project: https://github.com/i18next/react-i18next
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { TranslationFunction } from "i18next";

import I18nextProvider from "./src/I18nextProvider";
import Interpolate from "./src/interpolate";
import loadNamespaces from "./src/loadNamespaces";
import Trans from "./src/trans";
import translate from "./src/translate";

export {
    I18nextProvider,
    Interpolate,
    loadNamespaces,
    Trans,
    translate,
    // Exports for TypeScript only
    TranslationFunction
};

/**
 * Extend your component's Prop interface with this one to get access to `this.props.t`
 *
 * Please note that if you use the `translateFuncName` option, you should create
 * your own interface just like this one, but with your name of the translation function.
 *
 * interface MyComponentProps extends ReactI18next.InjectedTranslateProps {}
 */
export interface InjectedTranslateProps {
    t?: TranslationFunction;
}

export as namespace reactI18Next;
