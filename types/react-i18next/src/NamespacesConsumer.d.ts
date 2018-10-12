import * as React from "react";
import { i18n, TranslationFunction } from "i18next";
import { ReactI18NextOptions } from './context';

export interface TChildrenData {
    i18n: i18n;
    t: TranslationFunction;
    lng: string;
    ready: boolean;
}

type NSRenderFunction = (t: TranslationFunction, data: TChildrenData) => React.ReactNode;

export interface NamespacesConsumerProps {
    i18n?: i18n;
    i18nOptions?: ReactI18NextOptions;
    ns: Array<string>;
    defaultNS?: string;
    children: NSRenderFunction;
}

export default class NamespacesConsumer extends React.Component<NamespacesConsumerProps> { }
