// Type definitions for react-swipeable 3.3.1
// Project: https://www.npmjs.com/package/react-swipeable
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

///<reference types='react' />

declare namespace ReactSwipeableModule {
    interface onSwipingCallback {
        (event: React.TouchEvent<any>, deltaX: number, deltaY: number, absX: number, absY: number, velocity: number): void;
    }

    interface OnSwipedCallback {
        (event: React.TouchEvent<any>, deltaX: number, deltaY: number, isFlick: boolean, velocity: number): void;
    }

    interface OnSwipedDirectionCallback {
        (event: React.TouchEvent<any>, delta: number, isFlick: boolean): void;
    }

    interface OnSwipingDirectionCallback {
        (event: React.TouchEvent<any>, delta: number): void;
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
