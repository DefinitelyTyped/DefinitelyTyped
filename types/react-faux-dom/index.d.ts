// Type definitions for react-faux-dom 3.2
// Project: https://github.com/Olical/react-faux-dom
// Definitions by: Ali Taheri Moghaddar <https://github.com/alitaheri>
//                 Cleve Littlefield <https://github.com/cleverguy25>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export class Element extends HTMLElement {
    style: any;

    constructor(nodeName: string, parentNode?: Element);

    toReact(): React.ReactElement<any>;
}

export const defaultView: {
    getComputedStyle(node: Element): { getPropertyValue(name: string): string };
};

export namespace mixins {
    const core: any;
    const anim: any;
}

export function createElement(nodeName: string): Element;

export function createElementNS(namespace: string, nodeName: string): Element;

export function compareDocumentPosition(): number;

export interface ReactFauxDomProps {
    connectFauxDOM?(node: string, name: string, discardNode?: any): Element;
    animateFauxDOM?(duration: number): void;
}

export function withFauxDOM<P>(WrappedComponent: any): React.ClassicComponentClass<P & ReactFauxDomProps>;
