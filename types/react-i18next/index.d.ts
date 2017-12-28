// Type definitions for react-i18next 7.0
// Project: https://github.com/i18next/react-i18next
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { i18n as I18n, TranslationFunction } from "i18next";

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

export { InjectedI18nProps, InjectedTranslateProps } from "./src/props";

export as namespace reactI18Next;
