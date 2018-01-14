import * as React from "react";
import { i18n, TranslationFunction } from "i18next";

export interface Options {
    i18n: i18n;
    t: TranslationFunction;
}

export interface i18nProps {
    wait?: boolean;
    ns: string | string[];
    nsMode?: string;
    bindI18n?: string;
    bindStore?: string;
    i18n?: i18n;
    initialI18nStore?: any;
    initialLanguage?: string;
    children: (t: TranslationFunction, options: Options) => JSX.Element;
}

export default class I18n extends React.Component<i18nProps> { }
