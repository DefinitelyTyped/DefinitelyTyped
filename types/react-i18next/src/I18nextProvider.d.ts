import * as React from "react";
import { i18n } from "i18next";

// tslint:disable-next-line:interface-name
export interface I18nextProviderProps {
    i18n: i18n;
    children: React.ReactElement<any>;
    initialI18nStore?: any;
    initialLanguage?: string;
}

export default class I18nextProvider extends React.Component<I18nextProviderProps> { }
