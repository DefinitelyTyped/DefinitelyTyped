import * as React from "react";
import { i18n } from "i18next";
import { ReactI18NextOptions } from "./context";

export interface OtherTranslateOptions {
    i18n?: i18n;
}

export type TranslateOptions = ReactI18NextOptions & OtherTranslateOptions;

export interface TranslateProps {
    i18n?: i18n;
    initialI18nStore?: any;
    initialLanguage?: string;
}

// tslint:disable-next-line:ban-types
export default function translate<TKey extends string>(namespaces?: TKey | TKey[], options?: TranslateOptions): <C extends Function>(WrappedComponent: C, props?: TranslateProps) => C;
