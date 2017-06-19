// Type definitions for react-pointable 1.1
// Project: https://github.com/MilllerTime/react-pointable
// Definitions by: Stefan Fochler <https://github.com/istefo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export type TouchAction = 'auto' | 'none' | 'pan-x' | 'pan-y' | 'manipulation';

export interface PointableProps extends React.HTMLAttributes<HTMLElement> {
    tagName?: keyof HTMLElementTagNameMap;
    touchAction?: TouchAction;
    elementRef?(el: HTMLElement): void;
    onPointerMove?(evt: PointerEvent): void;
    onPointerDown?(evt: PointerEvent): void;
    onPointerUp?(evt: PointerEvent): void;
    onPointerOver?(evt: PointerEvent): void;
    onPointerOut?(evt: PointerEvent): void;
    onPointerEnter?(evt: PointerEvent): void;
    onPointerLeave?(evt: PointerEvent): void;
    onPointerCancel?(evt: PointerEvent): void;
}

export default class Pointable extends React.Component<PointableProps> {
    static defaultProps: {
        tagName: 'div',
        touchAction: 'auto'
    };
}
