// Type definitions for react-hammerjs 0.5
// Project: https://github.com/JedWatson/react-hammerjs#readme
// Definitions by: Jason Unger <https://github.com/jsonunger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as Hammer from 'hammerjs';
import * as React from 'react';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

type HammerOptionsWithRecognizers = Omit<HammerOptions, 'recognizers'> & {
    recognizers?: { [gesture: string]: RecognizerOptions };
};

declare namespace ReactHammer {
    interface ReactHammerProps {
        direction?: number;
        options?: HammerOptionsWithRecognizers;
        recognizeWith?: { [gesture: string]: Recognizer | string };
        vertical?: boolean;
        action?: HammerListener;
        onDoubleTap?: HammerListener;
        onPan?: HammerListener;
        onPanCancel?: HammerListener;
        onPanEnd?: HammerListener;
        onPanStart?: HammerListener;
        onPinch?: HammerListener;
        onPinchCancel?: HammerListener;
        onPinchEnd?: HammerListener;
        onPinchIn?: HammerListener;
        onPinchStart?: HammerListener;
        onPress?: HammerListener;
        onPressUp?: HammerListener;
        onRotate?: HammerListener;
        onRotateCancel?: HammerListener;
        onRotateEnd?: HammerListener;
        onRotateMove?: HammerListener;
        onRotateStart?: HammerListener;
        onSwipe?: HammerListener;
        onTap?: HammerListener;
    }
}
declare const ReactHammer: React.ComponentClass<ReactHammer.ReactHammerProps>;
export = ReactHammer;
