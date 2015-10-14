// Type definitions for React-DOM v0.14.0-rc
// Project: https://www.npmjs.com/package/react-dom
// Definitions by: Stefan-Bieliauskas <http://www.conts.de>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./../react/react.d.ts" />

declare namespace __ReactDom {
    function render<P>(
        element: __React.DOMElement<P>,
        container: Element,
        callback?: () => any): __React.DOMComponent<P>;
    function render<P, S>(
        element: __React.ClassicElement<P>,
        container: Element,
        callback?: () => any): __React.ClassicComponent<P, S>;
    function render<P, S>(
        element: __React.ReactElement<P>,
        container: Element,
        callback?: () => any): __React.Component<P, S>;

    function findDOMNode<TElement extends Element>(
        componentOrElement: __React.Component<any, any> | Element): TElement;
    function findDOMNode(
        componentOrElement: __React.Component<any, any> | Element): Element;

    function unmountComponentAtNode(container: Element): boolean;
}

declare namespace __ReactDomServer {
    function renderToString(element: __React.ReactElement<any>): string;
    function renderToStaticMarkup(element: __React.ReactElement<any>): string;
}
declare module "react-dom" {
    export = __ReactDom
}

declare module "react-dom/server" {
    export = __ReactDomServer
}
