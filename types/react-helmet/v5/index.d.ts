import * as React from "react";

interface OtherElementAttributes {
    [key: string]: string | number | boolean | null | undefined;
}

type HtmlProps = JSX.IntrinsicElements["html"] & OtherElementAttributes;

type BodyProps = JSX.IntrinsicElements["body"] & OtherElementAttributes;

type LinkProps = JSX.IntrinsicElements["link"];

type MetaProps = JSX.IntrinsicElements["meta"];

export interface HelmetTags {
    baseTag: Array<any>;
    linkTags: Array<HTMLLinkElement>;
    metaTags: Array<HTMLMetaElement>;
    noscriptTags: Array<any>;
    scriptTags: Array<HTMLScriptElement>;
    styleTags: Array<HTMLStyleElement>;
}

export interface HelmetProps {
    async?: boolean | undefined;
    base?: any;
    bodyAttributes?: BodyProps | undefined;
    children?: React.ReactNode;
    defaultTitle?: string | undefined;
    defer?: boolean | undefined;
    encodeSpecialCharacters?: boolean | undefined;
    htmlAttributes?: HtmlProps | undefined;
    onChangeClientState?: ((newState: any, addedTags: HelmetTags, removedTags: HelmetTags) => void) | undefined;
    link?: LinkProps[] | undefined;
    meta?: MetaProps[] | undefined;
    noscript?: Array<any> | undefined;
    script?: Array<any> | undefined;
    style?: Array<any> | undefined;
    title?: string | undefined;
    titleAttributes?: Object | undefined;
    titleTemplate?: string | undefined;
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
}

export interface HelmetDatum {
    toString(): string;
    toComponent(): React.ReactElement;
}

export interface HelmetHTMLBodyDatum {
    toString(): string;
    toComponent(): React.HTMLAttributes<HTMLBodyElement>;
}

export interface HelmetHTMLElementDatum {
    toString(): string;
    toComponent(): React.HTMLAttributes<HTMLHtmlElement>;
}

export const peek: () => HelmetData;
export const rewind: () => HelmetData;
export const renderStatic: () => HelmetData;
export const canUseDOM: boolean;
export default Helmet;
