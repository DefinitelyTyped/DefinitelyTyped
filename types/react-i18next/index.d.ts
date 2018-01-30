// Type definitions for react-i18next 7.3
// Project: https://github.com/i18next/react-i18next
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
//                 Simon Baumann <https://github.com/chnoch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { TranslationFunction } from "i18next";

import {
    setDefaults,
    getDefaults,
    setI18n,
    getI18n,
    ReactI18NextOptions,
    reactI18nextModule
} from "./src/context";
import I18n from "./src/I18n";
import I18nextProvider from "./src/I18nextProvider";
import Interpolate from "./src/interpolate";
import loadNamespaces from "./src/loadNamespaces";
import Trans from "./src/trans";
import translate from "./src/translate";

export {
    setDefaults,
    getDefaults,
    setI18n,
    getI18n,
    ReactI18NextOptions,
    reactI18nextModule,
    I18n,
    I18nextProvider,
    Interpolate,
    loadNamespaces,
    Trans,
    translate,
    TranslationFunction
};

export { InjectedI18nProps, InjectedTranslateProps } from "./src/props";

export as namespace reactI18Next;
