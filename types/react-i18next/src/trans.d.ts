import * as React from "react";
import { i18n, TranslationFunction } from "i18next";

export interface TOptions {
    [key: string]: any;
}

export interface Values {
	[key: string]: any;
}

export interface TransProps {
    i18nKey?: string;
    count?: number;
    parent?: React.ReactNode | (() => React.ReactNode);
    i18n?: i18n;
    t?: TranslationFunction;
    tOptions?: TOptions;
    defaults?: string;
    values?: Values;
    components?: React.ReactNode[];
    ns?: string;
}

export default class Trans extends React.Component<TransProps> { }
