import * as React from "react";
import { i18n, TranslationFunction } from "i18next";

export interface TransProps {
    i18nKey?: string;
    count?: number;
    parent?: string;
    i18n?: i18n;
    t?: TranslationFunction;
}

export default class Trans extends React.Component<TransProps> { }
