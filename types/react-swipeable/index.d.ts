// Type definitions for react-swipeable 4.0
// Project: https://www.npmjs.com/package/react-swipeable
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as React from 'react';

type onSwipingCallback = (event: React.TouchEvent<HTMLElement>, deltaX: number, deltaY: number, absX: number, absY: number, velocity: number) => void;
type OnSwipedCallback = (event: React.TouchEvent<HTMLElement>, deltaX: number, deltaY: number, isFlick: boolean, velocity: number) => void;
type OnSwipedDirectionCallback = (event: React.TouchEvent<HTMLElement>, delta: number, isFlick: boolean) => void;
type OnSwipingDirectionCallback = (event: React.TouchEvent<HTMLElement>, delta: number) => void;
type OnTapCallback = (event: React.TouchEvent<HTMLElement>) => void;

interface Props extends React.ClassAttributes<ReactSwipeable>, React.HTMLAttributes<HTMLElement> {
    onSwiped?: OnSwipedCallback;
    onSwiping?: onSwipingCallback;
    onSwipingUp?: OnSwipingDirectionCallback;
    onSwipingRight?: OnSwipingDirectionCallback;
    onSwipingDown?: OnSwipingDirectionCallback;
    onSwipingLeft?: OnSwipingDirectionCallback;
    onSwipedUp?: OnSwipedDirectionCallback;
    onSwipedRight?: OnSwipedDirectionCallback;
    onSwipedDown?: OnSwipedDirectionCallback;
    onSwipedLeft?: OnSwipedDirectionCallback;
    onTap?: OnTapCallback;
    flickThreshold?: number;
    delta?: number;
    preventDefaultTouchmoveEvent?: boolean;
    stopPropagation?: boolean;
    nodeName?: string;
    trackMouse?: boolean;
    children?: React.ReactNode;
}

declare class ReactSwipeable extends React.Component<Props, void> {}
declare namespace ReactSwipeable {}

export = ReactSwipeable;
