// Type definitions for react-helmet-with-visor 5.4
// Project: https://github.com/kokushkin/react-helmet-with-visor
// Definitions by: Nickolay Kulikov <https://github.com/kokushkin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

interface OtherElementAttributes {
    [key: string]: string | number | boolean | null | undefined;
}

type HtmlProps = JSX.IntrinsicElements['html'] & OtherElementAttributes;

type BodyProps = JSX.IntrinsicElements['body'] & OtherElementAttributes;

type LinkProps = JSX.IntrinsicElements['link'];

type MetaProps = JSX.IntrinsicElements['meta'];

export interface HelmetTags {
    baseTag: any[];
    linkTags: HTMLLinkElement[];
    metaTags: HTMLMetaElement[];
    noscriptTags: any[];
    scriptTags: HTMLScriptElement[];
    styleTags: HTMLStyleElement[];
    openedVisorTags: any[];
}

export interface HelmetProps {
    async?: boolean;
    base?: any;
    bodyAttributes?: BodyProps;
    defaultTitle?: string;
    defer?: boolean;
    encodeSpecialCharacters?: boolean;
    htmlAttributes?: HtmlProps;
    onChangeClientState?: (newState: any, addedTags: HelmetTags, removedTags: HelmetTags) => void;
    link?: LinkProps[];
    meta?: MetaProps[];
    noscript?: any[];
    script?: any[];
    style?: any[];
    title?: string;
    titleAttributes?: object;
    titleTemplate?: string;
}

export class Helmet extends React.Component<HelmetProps> {
    static peek(): HelmetData;
    static rewind(): HelmetData;
    static renderStatic(): HelmetData;
    static canUseDOM: boolean;
}

export interface HelmetData {
    base: HelmetDatum;
    bodyAttributes: HelmetHTMLBodyDatum;
    htmlAttributes: HelmetHTMLElementDatum;
    link: HelmetDatum;
    meta: HelmetDatum;
    noscript: HelmetDatum;
    script: HelmetDatum;
    style: HelmetDatum;
    title: HelmetDatum;
    titleAttributes: HelmetDatum;
    openedVisor: HelmetDatum;
}

export interface HelmetDatum {
    toString(): string;
    toComponent(): React.Component<any>;
}

export interface HelmetHTMLBodyDatum {
    toString(): string;
    toComponent(): React.HTMLAttributes<HTMLBodyElement>;
}

export interface HelmetHTMLElementDatum {
    toString(): string;
    toComponent(): React.HTMLAttributes<HTMLHtmlElement>;
}

export function peek(): HelmetData;
export function rewind(): HelmetData;
export function renderStatic(): HelmetData;
export const canUseDOM: boolean;
export default Helmet;

export class HelmetsOpenedVisor extends React.Component {
}
