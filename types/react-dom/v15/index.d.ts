export as namespace ReactDOM;

import {
    CElement,
    Component,
    ComponentState,
    DOMAttributes,
    DOMElement,
    ReactElement,
    ReactInstance,
    SFCElement,
} from "react";

export function findDOMNode<E extends Element>(instance: ReactInstance | null | undefined): E;
export function findDOMNode(instance: ReactInstance): Element;

export function render<P extends DOMAttributes<T>, T extends Element>(
    element: DOMElement<P, T>,
    container: Element | null,
    callback?: (element: T) => any,
): T;
export function render<P>(
    element: SFCElement<P>,
    container: Element | null,
    callback?: () => any,
): void;
export function render<P, T extends Component<P, ComponentState>>(
    element: CElement<P, T>,
    container: Element | null,
    callback?: (component: T) => any,
): T;
export function render<P>(
    element: ReactElement<P>,
    container: Element | null,
    callback?: (component?: Component<P, ComponentState> | Element) => any,
): Component<P, ComponentState> | Element | void;
export function render<P>(
    parentComponent: Component<any>,
    element: SFCElement<P>,
    container: Element,
    callback?: () => any,
): void;

export function unmountComponentAtNode(container: Element): boolean;

export const version: string;

export function unstable_batchedUpdates<A, R>(callback: (a: A) => R, a: A): R;
export function unstable_batchedUpdates<R>(callback: () => R): R;

export function unstable_renderSubtreeIntoContainer<P extends DOMAttributes<T>, T extends Element>(
    parentComponent: Component<any>,
    element: DOMElement<P, T>,
    container: Element,
    callback?: (element: T) => any,
): T;
export function unstable_renderSubtreeIntoContainer<P, T extends Component<P, ComponentState>>(
    parentComponent: Component<any>,
    element: CElement<P, T>,
    container: Element,
    callback?: (component: T) => any,
): T;
export function unstable_renderSubtreeIntoContainer<P>(
    parentComponent: Component<any>,
    element: ReactElement<P>,
    container: Element,
    callback?: (component?: Component<P, ComponentState> | Element) => any,
): Component<P, ComponentState> | Element | void;
