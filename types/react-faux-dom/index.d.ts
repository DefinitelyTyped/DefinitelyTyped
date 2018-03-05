// Type definitions for react-faux-dom 4.1
// Project: https://github.com/Olical/react-faux-dom
// Definitions by: Ali Taheri Moghaddar <https://github.com/alitaheri>
//                 Cleve Littlefield <https://github.com/cleverguy25>
//                 Michał Kostrzyński <https://github.com/deviousm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";

export class Element extends HTMLElement {
    style: any;

    constructor(nodeName: string, parentNode?: Element);

    toReact(): React.ReactElement<any>;
}

export const defaultView: {
    getComputedStyle(node: Element): { getPropertyValue(name: string): string };
};

export function createElement(nodeName: string): Element;

export function createElementNS(namespace: string, nodeName: string): Element;

export function compareDocumentPosition(): number;

export interface ReactFauxDomProps {
    connectFauxDOM(node: string, name: string, discardNode?: any): Element;
    drawFauxDOM(): void;
    animateFauxDOM(duration: number): void;
    stopAnimatingFauxDOM(): void;
    isAnimatingFauxDOM(): boolean;
}

export function withFauxDOM<P>(WrappedComponent: any): React.ClassicComponentClass<P & ReactFauxDomProps>;
