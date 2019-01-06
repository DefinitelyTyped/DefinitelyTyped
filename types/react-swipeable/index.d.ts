// Type definitions for react-swipeable 4.2
// Project: https://www.npmjs.com/package/react-swipeable
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
//                 Konstantin Vasilev <https://github.com/mctep>
//                 Hiroki Horiuchi <https://github.com/horiuchi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

declare class ReactSwipeable<T extends Element = HTMLElement> extends React.Component<ReactSwipeable.SwipeableProps<T>> {}

declare namespace ReactSwipeable {
    type OnSwipingCallback<T extends Element = HTMLElement> = (event: React.TouchEvent<T>, deltaX: number, deltaY: number, absX: number, absY: number, velocity: number) => void;
    type OnSwipedCallback<T extends Element = HTMLElement> = (event: React.TouchEvent<T>, deltaX: number, deltaY: number, isFlick: boolean, velocity: number) => void;
    type OnSwipedDirectionCallback<T extends Element = HTMLElement> = (event: React.TouchEvent<T>, delta: number, isFlick: boolean) => void;
    type OnSwipingDirectionCallback<T extends Element = HTMLElement> = (event: React.TouchEvent<T>, delta: number) => void;
    type OnTapCallback<T extends Element = HTMLElement> = (event: React.TouchEvent<T>) => void;

    interface SwipeableProps<T extends Element = HTMLElement> extends React.ClassAttributes<ReactSwipeable<T>>, React.HTMLAttributes<T> {
        onSwiped?: OnSwipedCallback<T>;
        onSwiping?: OnSwipingCallback<T>;
        onSwipingUp?: OnSwipingDirectionCallback<T>;
        onSwipingRight?: OnSwipingDirectionCallback<T>;
        onSwipingDown?: OnSwipingDirectionCallback<T>;
        onSwipingLeft?: OnSwipingDirectionCallback<T>;
        onSwipedUp?: OnSwipedDirectionCallback<T>;
        onSwipedRight?: OnSwipedDirectionCallback<T>;
        onSwipedDown?: OnSwipedDirectionCallback<T>;
        onSwipedLeft?: OnSwipedDirectionCallback<T>;
        onTap?: OnTapCallback<T>;
        flickThreshold?: number;
        delta?: number;
        preventDefaultTouchmoveEvent?: boolean;
        stopPropagation?: boolean;
        nodeName?: string;
        trackMouse?: boolean;
        disabled?: boolean;
        innerRef?: React.Ref<T>;
        children?: React.ReactNode;
    }
}

export = ReactSwipeable;
