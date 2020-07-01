import { Component, ReactNode } from 'react';
import { I18n, Catalogs } from '@lingui/core';

// tslint:disable-next-line:interface-name
export interface I18nProviderProps {
    children?: ReactNode;
    language: string;
    catalogs?: Catalogs;
    i18n?: I18n;
    defaultRender?: ReactNode;
    locales?: string | string[];
    missing?: string | ((language: string, id: string) => string);
}

export default class I18nProvider extends Component<I18nProviderProps> { }
