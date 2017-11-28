import * as React from "react";
import { i18n } from "i18next";

export interface i18nProps {
    wait?: boolean;
    ns: string | string[];
    nsMode?: string;
    bindI18n?: string;
    bindStore?: string;
    i18n?: i18n;
    initialI18nStore?: any;
    initialLanguage?: string;
}

export default class I18n extends React.Component<i18nProps> { }
