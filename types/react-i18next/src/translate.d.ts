import * as React from "react";
import { i18n } from "i18next";

interface TranslateOptions {
    withRef?: boolean;
    bindI18n?: string;
    bindStore?: string;
    translateFuncName?: string;
    wait?: boolean;
    nsMode?: string;
    i18n?: i18n;
}

export default function translate(namespaces?: string[] | string, options?: TranslateOptions): <C extends Function>(WrappedComponent: C) => C;
