// Type definitions for react-helmet 5.0
// Project: https://github.com/nfl/react-helmet
// Definitions by: Evan Bremer <https://github.com/evanbb>, Isman Usoh <https://github.com/isman-usoh>, François Nguyen <https://github.com/lith-light-g>, Kok Sam <https://github.com/sammkj>, Yui T. <https://github.com/yuit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

interface HelmetProps {
    base?: any;
    bodyAttributes?: Object;
    defaultTitle?: string;
    encodeSpecialCharacters?: boolean;
    htmlAttributes?: any;
    onChangeClientState?: (newState: any) => void;
    link?: Array<any>;
    meta?: Array<any>;
    noscript?: Array<any>;
    script?: Array<any>;
    style?: Array<any>;
    title?: string;
    titleAttributes?: Object;
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
    toComponent(): React.HTMLAttributes<HTMLElement>;
}

export const peek: () => HelmetData;
export const rewind: () => HelmetData;
export const renderStatic: () => HelmetData;
export const canUseDOM: boolean;
export default Helmet;
