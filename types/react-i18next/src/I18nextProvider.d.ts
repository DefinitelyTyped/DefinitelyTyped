import * as React from "react";
import { i18n } from "i18next";

// tslint:disable-next-line:interface-name
export interface I18nextProviderProps {
    i18n: i18n;
    initialI18nStore?: any;
    initialLanguage?: string;
    children: JSX.Element;
}

export default class I18nextProvider extends React.Component<I18nextProviderProps> { }
