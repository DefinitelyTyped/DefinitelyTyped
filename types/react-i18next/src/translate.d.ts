import * as React from "react";
import { i18n } from "i18next";

export interface TranslateOptions {
    withRef?: boolean;
    bindI18n?: string;
    bindStore?: string;
    translateFuncName?: string;
    wait?: boolean;
    nsMode?: string;
    i18n?: i18n;
}

// tslint:disable-next-line:ban-types
type ComponentWrapper = <C extends Function>(WrappedComponent: C) => C;
export default function translate<TNamespace extends string = string>(namespaces?: TNamespace | TNamespace[], options?: TranslateOptions): ComponentWrapper;
