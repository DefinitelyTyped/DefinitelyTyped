// Type definitions for React-DOM v0.14.0-rc
// Project: https://www.npmjs.com/package/react-dom
// Definitions by: Stefan-Bieliauskas <http://www.conts.de>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./../react/react.d.ts" />

declare class __ReactDom {
    public  render<P>(
        element: __React.DOMElement<P>,
        container: Element,
        callback?: () => any): __React.DOMComponent<P>;
    public render<P, S>(
        element: __React.ClassicElement<P>,
        container: Element,
        callback?: () => any): __React.ClassicComponent<P, S>;
    public render<P, S>(
        element: __React.ReactElement<P>,
        container: Element,
        callback?: () => any): __React.Component<P, S>;

    public findDOMNode<TElement extends Element>(
        componentOrElement: __React.Component<any, any> | Element): TElement;
    public findDOMNode(
        componentOrElement: __React.Component<any, any> | Element): Element;

    public unmountComponentAtNode(container: Element): boolean;
}

declare class __ReactDomServer {
    public  renderToString(element: __React.ReactElement<any>): string;
    public  renderToStaticMarkup(element: __React.ReactElement<any>): string;
}
declare module "react-dom" {
    export  = __ReactDom
}

declare module "react-dom/server" {
    export  = __ReactDomServer
}