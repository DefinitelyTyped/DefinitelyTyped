// Type definitions for react-swipeable 3.3.1
// Project: https://www.npmjs.com/package/react-swipeable
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare namespace ReactSwipeableModule {

    import React = __React;

    interface onSwipingCallback {
        (event: React.TouchEvent, deltaX: number, deltaY: number, absX: number, absY: number, velocity: number): void;
    }

    interface OnSwipedCallback {
        (event: React.TouchEvent, deltaX: number, deltaY: number, isFlick: boolean): void;
    }

    interface OnSwipedDirectionCallback {
        (event: React.TouchEvent, delta: number, isFlick: boolean): void;
    }

    interface OnSwipingDirectionCallback {
        (event: React.TouchEvent, delta: number): void;
    }

    interface Props {
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
        flickThreshold?: number;
        delta?: number;
        preventDefaultTouchmoveEvent?: boolean;
        nodeName?: string;
    }

    interface ReactSwipeable extends React.ComponentClass<Props> { }

}


declare module "react-swipeable" {
    let module: ReactSwipeableModule.ReactSwipeable;
    export = module;
}
