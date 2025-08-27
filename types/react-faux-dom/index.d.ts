import * as React from "react";

export class Element extends HTMLElement {
    style: any;

    constructor(nodeName: string, parentNode?: Element);

    toReact(): React.ReactElement;
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

export function withFauxDOM<P>(
    WrappedComponent: React.ComponentClass<P>,
): React.ComponentClass<Pick<P, Exclude<keyof P, keyof ReactFauxDomProps>>>;
