import * as React from "react";

interface OtherElementAttributes {
    [key: string]: string | number | boolean | null | undefined;
}

type HtmlProps = React.JSX.IntrinsicElements["html"] & OtherElementAttributes;

type BodyProps = React.JSX.IntrinsicElements["body"] & OtherElementAttributes;

type LinkProps = React.JSX.IntrinsicElements["link"];

type MetaProps = React.JSX.IntrinsicElements["meta"];

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
    noscript?: any[] | undefined;
    script?: any[] | undefined;
    style?: any[] | undefined;
    title?: string | undefined;
    titleAttributes?: object | undefined;
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
    openedVisor: HelmetDatum;
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

export function peek(): HelmetData;
export function rewind(): HelmetData;
export function renderStatic(): HelmetData;
export const canUseDOM: boolean;
export default Helmet;

export class HelmetsOpenedVisor extends React.Component {
}
