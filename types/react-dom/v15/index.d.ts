// Type definitions for React (react-dom) 15.5
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
//                 AssureSign <http://www.assuresign.com>
//                 Microsoft <https://microsoft.com>
//                 MartynasZilinskas <https://github.com/MartynasZilinskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export as namespace ReactDOM;

import {
    ReactInstance, Component, ComponentState,
    ReactElement, SFCElement, CElement,
    DOMAttributes, DOMElement
} from 'react';

export function findDOMNode<E extends Element>(instance: ReactInstance): E;
export function findDOMNode(instance: ReactInstance): Element;

export function render<P extends DOMAttributes<T>, T extends Element>(
    element: DOMElement<P, T>,
    container: Element | null,
    callback?: (element: T) => any
): T;
export function render<P>(
    element: SFCElement<P>,
    container: Element | null,
    callback?: () => any
): void;
export function render<P, T extends Component<P, ComponentState>>(
    element: CElement<P, T>,
    container: Element | null,
    callback?: (component: T) => any
): T;
export function render<P>(
    element: ReactElement<P>,
    container: Element | null,
    callback?: (component?: Component<P, ComponentState> | Element) => any
): Component<P, ComponentState> | Element | void;
export function render<P>(
    parentComponent: Component<any>,
    element: SFCElement<P>,
    container: Element,
    callback?: () => any
): void;

export function unmountComponentAtNode(container: Element): boolean;

export const version: string;

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
