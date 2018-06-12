import * as React from "react";
import { i18n, TranslationFunction } from "i18next";

export interface TOptions {
    [key: string]: any;
}

export interface TransProps {
    i18nKey?: string;
    count?: number;
    parent?: string;
    i18n?: i18n;
    t?: TranslationFunction;
    tOptions?: TOptions;
}

export default class Trans extends React.Component<TransProps> { }
