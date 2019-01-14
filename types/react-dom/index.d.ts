// Type definitions for React (react-dom) 16.0
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
//                 AssureSign <http://www.assuresign.com>
//                 Microsoft <https://microsoft.com>
//                 MartynasZilinskas <https://github.com/MartynasZilinskas>
//                 Josh Rutherford <https://github.com/theruther4d>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {
    ReactInstance, Component, ComponentState,
    ReactElement, SFCElement, CElement,
    DOMAttributes, DOMElement, ReactNode, ReactPortal
} from 'react';

// tslint:disable-next-line:export-just-namespace
export = ReactDOM;
export as namespace ReactDOM;

declare namespace ReactDOM {
    function findDOMNode(instance: ReactInstance): Element | null | Text;
    function unmountComponentAtNode(container: Element): boolean;

    function createPortal(children: ReactNode, container: Element, key?: null | string): ReactPortal;

    const version: string;
    const render: Renderer;
    const hydrate: Renderer;

    function unstable_batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
    function unstable_batchedUpdates<A>(callback: (a: A) => any, a: A): void;
    function unstable_batchedUpdates(callback: () => any): void;

    function unstable_renderSubtreeIntoContainer<T extends Element>(
        parentComponent: Component<any>,
        element: DOMElement<DOMAttributes<T>, T>,
        container: Element,
        callback?: (element: T) => any): T;
    function unstable_renderSubtreeIntoContainer<P, T extends Component<P, ComponentState>>(
        parentComponent: Component<any>,
        element: CElement<P, T>,
        container: Element,
        callback?: (component: T) => any): T;
    function unstable_renderSubtreeIntoContainer<P>(
        parentComponent: Component<any>,
        element: ReactElement<P>,
        container: Element,
        callback?: (component?: Component<P, ComponentState> | Element) => any): Component<P, ComponentState> | Element | void;

    interface Renderer {
        // Deprecated(render): The return value is deprecated.
        // In future releases the render function's return type will be void.

        <T extends Element>(
            element: DOMElement<DOMAttributes<T>, T>,
            container: Element | null,
            callback?: () => void
        ): T;

        (
            element: Array<DOMElement<DOMAttributes<any>, any>>,
            container: Element | null,
            callback?: () => void
        ): Element;

        (
            element: SFCElement<any> | Array<SFCElement<any>>,
            container: Element | null,
            callback?: () => void
        ): void;

        <P, T extends Component<P, ComponentState>>(
            element: CElement<P, T>,
            container: Element | null,
            callback?: () => void
        ): T;

        (
            element: Array<CElement<any, Component<any, ComponentState>>>,
            container: Element | null,
            callback?: () => void
        ): Component<any, ComponentState>;

        <P>(
            element: ReactElement<P>,
            container: Element | null,
            callback?: () => void
        ): Component<P, ComponentState> | Element | void;

        (
            element: Array<ReactElement<any>>,
            container: Element | null,
            callback?: () => void
        ): Component<any, ComponentState> | Element | void;

        (
            parentComponent: Component<any> | Array<Component<any>>,
            element: SFCElement<any>,
            container: Element,
            callback?: () => void
        ): void;
    }
}
