import * as Hammer from "hammerjs";
import * as React from "react";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

type HammerOptionsWithRecognizers = Omit<HammerOptions, "recognizers"> & {
    recognizers?: { [gesture: string]: RecognizerOptions } | undefined;
};

declare namespace ReactHammer {
    interface ReactHammerProps {
        children: React.ReactElement;
        direction?:
            | "DIRECTION_NONE"
            | "DIRECTION_LEFT"
            | "DIRECTION_RIGHT"
            | "DIRECTION_UP"
            | "DIRECTION_DOWN"
            | "DIRECTION_HORIZONTAL"
            | "DIRECTION_VERTICAL"
            | "DIRECTION_ALL"
            | undefined;
        options?: HammerOptionsWithRecognizers | undefined;
        recognizeWith?: { [gesture: string]: Recognizer | string } | undefined;
        vertical?: boolean | undefined;
        action?: HammerListener | undefined;
        onDoubleTap?: HammerListener | undefined;
        onPan?: HammerListener | undefined;
        onPanCancel?: HammerListener | undefined;
        onPanEnd?: HammerListener | undefined;
        onPanStart?: HammerListener | undefined;
        onPinch?: HammerListener | undefined;
        onPinchCancel?: HammerListener | undefined;
        onPinchEnd?: HammerListener | undefined;
        onPinchIn?: HammerListener | undefined;
        onPinchOut?: HammerListener | undefined;
        onPinchStart?: HammerListener | undefined;
        onPress?: HammerListener | undefined;
        onPressUp?: HammerListener | undefined;
        onRotate?: HammerListener | undefined;
        onRotateCancel?: HammerListener | undefined;
        onRotateEnd?: HammerListener | undefined;
        onRotateMove?: HammerListener | undefined;
        onRotateStart?: HammerListener | undefined;
        onSwipe?: HammerListener | undefined;
        onSwipeRight?: HammerListener | undefined;
        onSwipeLeft?: HammerListener | undefined;
        onSwipeUp?: HammerListener | undefined;
        onSwipeDown?: HammerListener | undefined;
        onTap?: HammerListener | undefined;
    }
}
declare const ReactHammer: React.ComponentClass<ReactHammer.ReactHammerProps>;
export = ReactHammer;
