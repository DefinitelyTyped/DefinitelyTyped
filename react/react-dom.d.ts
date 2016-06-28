// Type definitions for React v0.14 (react-dom)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="react.d.ts" />

declare namespace __React {
    namespace __DOM {
        function findDOMNode<E extends Element>(instance: ReactInstance): E;
        function findDOMNode(instance: ReactInstance): Element;

        function render<P extends DOMAttributes, T extends Element>(
            element: DOMElement<P, T>,
            container: Element,
            callback?: (element: T) => any): T;
        function render<P>(
            element: SFCElement<P>,
            container: Element,
            callback?: () => any): void;
        function render<P, T extends Component<P, {}>>(
            element: CElement<P, T>,
            container: Element,
            callback?: (component: T) => any): T;
        function render<P>(
            element: ReactElement<P>,
            container: Element,
            callback?: (component?: Component<P, {}> | Element) => any): Component<P, {}> | Element | void;

        function unmountComponentAtNode(container: Element): boolean;

        var version: string;

        function unstable_batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
        function unstable_batchedUpdates<A>(callback: (a: A) => any, a: A): void;
        function unstable_batchedUpdates(callback: () => any): void;

        function unstable_renderSubtreeIntoContainer<P extends DOMAttributes, T extends Element>(
            parentComponent: Component<any, any>,
            element: DOMElement<P, T>,
            container: Element,
            callback?: (element: T) => any): T;
        function unstable_renderSubtreeIntoContainer<P, T extends Component<P, {}>>(
            parentComponent: Component<any, any>,
            element: CElement<P, T>,
            container: Element,
            callback?: (component: T) => any): T;
        function render<P>(
            parentComponent: Component<any, any>,
            element: SFCElement<P>,
            container: Element,
            callback?: () => any): void;
        function unstable_renderSubtreeIntoContainer<P>(
            parentComponent: Component<any, any>,
            element: ReactElement<P>,
            container: Element,
            callback?: (component?: Component<P, {}> | Element) => any): Component<P, {}> | Element | void;
    }

    namespace __DOMServer {
        function renderToString(element: ReactElement<any>): string;
        function renderToStaticMarkup(element: ReactElement<any>): string;
        var version: string;
    }
}

declare module "react-dom" {
    import DOM = __React.__DOM;
    export = DOM;
}

declare module "react-dom/server" {
    import DOMServer = __React.__DOMServer;
    export = DOMServer;
}
