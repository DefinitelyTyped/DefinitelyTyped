// Type definitions for react-snapshot 1.3
// Project: https://github.com/geelen/react-snapshot
// Definitions by: Evan Gubarev <https://github.com/gubareve>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface Renderer {
    <T extends Element>(
        element: React.DOMElement<React.DOMAttributes<T>, T>,
        container: Element | DocumentFragment | null,
        callback?: () => void
    ): T;

    (
        element: Array<React.DOMElement<React.DOMAttributes<any>, any>>,
        container: Element | DocumentFragment | null,
        callback?: () => void
    ): Element;

    (
        element: React.SFCElement<any> | Array<React.SFCElement<any>>,
        container: Element | DocumentFragment | null,
        callback?: () => void
    ): void;

    <P, T extends React.Component<P, React.ComponentState>>(
        element: React.CElement<P, T>,
        container: Element | DocumentFragment | null,
        callback?: () => void
    ): T;

    (
        element: Array<React.CElement<any, React.Component<any, React.ComponentState>>>,
        container: Element | DocumentFragment | null,
        callback?: () => void
    ): React.Component<any, React.ComponentState>;

    <P>(
        element: React.ReactElement<P>,
        container: Element | DocumentFragment | null,
        callback?: () => void
    ): React.Component<P, React.ComponentState> | Element | void;

    (
        element: React.ReactElement[],
        container: Element | DocumentFragment | null,
        callback?: () => void
    ): React.Component<any, React.ComponentState> | Element | void;
}

export const render: Renderer;
