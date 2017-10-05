// Type definitions for React (react-dom) 16.0
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
//                 AssureSign <http://www.assuresign.com>
//                 Microsoft <https://microsoft.com>
//                 MartynasZilinskas <https://github.com/MartynasZilinskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace ReactDOM;

import {
    ReactInstance, Component, ComponentState,
    ReactElement, SFCElement, CElement,
    DOMAttributes, DOMElement, ReactNode
} from 'react';

export function findDOMNode<E extends Element>(instance: ReactInstance): E;
export function findDOMNode(instance: ReactInstance): Element;
export function unmountComponentAtNode(container: Element): boolean;

// @TODO: I think ReactPortal should be part of React types (as a valid ReactNode)
// Mostly copied from Reacts own flow definitions:
// https://github.com/facebook/react/blob/589c0a25dfa18c2090549cc6f5b626d69ea53c2a/src/renderers/shared/fiber/isomorphic/ReactTypes.js#L43-L50
export interface ReactPortal {
    $$typeof: symbol | number;
    key: string | null;
    containerInfo: any;
    children: ReactNode;
    implementation: any;
}
export function createPortal(children: ReactNode, container: Element, key?: string): ReactPortal;

export const version: string;
export const render: Renderer;
export const hydrate: Renderer;

export function unstable_batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
export function unstable_batchedUpdates<A>(callback: (a: A) => any, a: A): void;
export function unstable_batchedUpdates(callback: () => any): void;

export function unstable_renderSubtreeIntoContainer<P extends DOMAttributes<T>, T extends Element>(
    parentComponent: Component<any>,
    element: DOMElement<P, T>,
    container: Element,
    callback?: (element: T) => any): T;
export function unstable_renderSubtreeIntoContainer<P, T extends Component<P, ComponentState>>(
    parentComponent: Component<any>,
    element: CElement<P, T>,
    container: Element,
    callback?: (component: T) => any): T;
export function unstable_renderSubtreeIntoContainer<P>(
    parentComponent: Component<any>,
    element: ReactElement<P>,
    container: Element,
    callback?: (component?: Component<P, ComponentState> | Element) => any): Component<P, ComponentState> | Element | void;

export interface Renderer {
    <P extends DOMAttributes<T>, T extends Element>(
        element: DOMElement<P, T>,
        container: Element | null,
        callback?: (element: T) => any
    ): T;
    <P>(
        element: SFCElement<P>,
        container: Element | null,
        callback?: () => any
    ): void;
    <P, T extends Component<P, ComponentState>>(
        element: CElement<P, T>,
        container: Element | null,
        callback?: (component: T) => any
    ): T;
    <P>(
        element: ReactElement<P>,
        container: Element | null,
        callback?: (component?: Component<P, ComponentState> | Element) => any
    ): Component<P, ComponentState> | Element | void;
    <P>(
        parentComponent: Component<any>,
        element: SFCElement<P>,
        container: Element,
        callback?: () => any
    ): void;
}
