// Type definitions for React-DOM v0.14.0-rc
// Project: https://www.npmjs.com/package/react-dom
// Definitions by: Stefan-Bieliauskas <http://www.conts.de>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./../react/react.d.ts" />

declare module __ReactDom {
    export function render<P>(
        element: __React.DOMElement<P>,
        container: Element,
        callback?: () => any): __React.DOMComponent<P>;
    export function render<P, S>(
        element: __React.ClassicElement<P>,
        container: Element,
        callback?: () => any): __React.ClassicComponent<P, S>;
    export function render<P, S>(
        element: __React.ReactElement<P>,
        container: Element,
        callback?: () => any): __React.Component<P, S>;

    export function findDOMNode<TElement extends Element>(
        componentOrElement: __React.Component<any, any> | Element): TElement;
    export function findDOMNode(
        componentOrElement: __React.Component<any, any> | Element): Element;

    export function unmountComponentAtNode(container: Element): boolean;
}

declare module __ReactDomServer {
    export function renderToString(element: __React.ReactElement<any>): string;
    export function renderToStaticMarkup(element: __React.ReactElement<any>): string;
}
declare module "react-dom" {
    export  = __ReactDom
}

declare module "react-dom/server" {
    export  = __ReactDomServer
}