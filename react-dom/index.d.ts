// Type definitions for React v0.14 (react-dom)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace ReactDOM;
export = ReactDOM;

import { ReactInstance, Component, ComponentState,
        ReactElement, SFCElement, CElement,
         DOMAttributes, DOMElement } from 'react';

declare namespace ReactDOM {
    function findDOMNode<E extends Element>(instance: ReactInstance): E;
    function findDOMNode(instance: ReactInstance): Element;

    function render<P extends DOMAttributes<T>, T extends Element>(
        element: DOMElement<P, T>,
        container: Element | null,
        callback?: (element: T) => any): T;
    function render<P>(
        element: SFCElement<P>,
        container: Element | null,
        callback?: () => any): void;
    function render<P, T extends Component<P, ComponentState>>(
        element: CElement<P, T>,
        container: Element | null,
        callback?: (component: T) => any): T;
    function render<P>(
        element: ReactElement<P>,
        container: Element | null,
        callback?: (component?: Component<P, ComponentState> | Element) => any): Component<P, ComponentState> | Element | void;

    function unmountComponentAtNode(container: Element): boolean;

    var version: string;

    function unstable_batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
    function unstable_batchedUpdates<A>(callback: (a: A) => any, a: A): void;
    function unstable_batchedUpdates(callback: () => any): void;

    function unstable_renderSubtreeIntoContainer<P extends DOMAttributes<T>, T extends Element>(
        parentComponent: Component<any, any>,
        element: DOMElement<P, T>,
        container: Element,
        callback?: (element: T) => any): T;
    function unstable_renderSubtreeIntoContainer<P, T extends Component<P, ComponentState>>(
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
        callback?: (component?: Component<P, ComponentState> | Element) => any): Component<P, ComponentState> | Element | void;
}
