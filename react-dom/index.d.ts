// Type definitions for React v0.14 (react-dom)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="react" />

export as namespace ReactDOM;
export = ReactDOM;

declare namespace ReactDOM {
    function findDOMNode<E extends Element>(instance: React.ReactInstance): E;
    function findDOMNode(instance: React.ReactInstance): Element;

    function render<P extends React.DOMAttributes<T>, T extends Element>(
        element: React.DOMElement<P, T>,
        container: Element | null,
        callback?: (element: T) => any): T;
    function render<P>(
        element: React.SFCElement<P>,
        container: Element | null,
        callback?: () => any): void;
    function render<P, T extends React.Component<P, React.ComponentState>>(
        element: React.CElement<P, T>,
        container: Element | null,
        callback?: (component: T) => any): T;
    function render<P>(
        element: React.ReactElement<P>,
        container: Element | null,
        callback?: (component?: React.Component<P, React.ComponentState> | Element) => any): React.Component<P, ComponentState> | Element | void;

    function unmountComponentAtNode(container: Element): boolean;

    var version: string;

    function unstable_batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
    function unstable_batchedUpdates<A>(callback: (a: A) => any, a: A): void;
    function unstable_batchedUpdates(callback: () => any): void;

    function unstable_renderSubtreeIntoContainer<P extends React.DOMAttributes<T>, T extends Element>(
        parentComponent: React.Component<any, any>,
        element: React.DOMElement<P, T>,
        container: Element,
        callback?: (element: T) => any): T;
    function unstable_renderSubtreeIntoContainer<P, T extends React.Component<P, React.ComponentState>>(
        parentComponent: React.Component<any, any>,
        element: React.CElement<P, T>,
        container: Element,
        callback?: (component: T) => any): T;
    function render<P>(
        parentComponent: React.Component<any, any>,
        element: React.SFCElement<P>,
        container: Element,
        callback?: () => any): void;
    function unstable_renderSubtreeIntoContainer<P>(
        parentComponent: React.Component<any, any>,
        element: React.ReactElement<P>,
        container: Element,
        callback?: (component?: React.Component<P, React.ComponentState> | Element) => any): React.Component<P, React.ComponentState> | Element | void;
}
