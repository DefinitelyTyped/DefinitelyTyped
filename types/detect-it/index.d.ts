// Type definitions for detect-it 2.1
// Project: https://github.com/rafrex/detect-it#readme
// Definitions by: Thomas Tilkema <https://github.com/thomastilkema>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import detectHover from 'detect-hover';
import detectPassiveEvents from 'detect-passive-events';
import detectPointer from 'detect-pointer';
import detectTouchEvents from 'detect-touch-events';

interface detectIt {
    deviceType: 'hybrid' | 'mouseOnly' | 'touchOnly';
    hasMouse: boolean;
    hasTouch: boolean;
    maxTouchPoints: number;
    passiveEvents: boolean;
    primaryHover: 'hover' | 'none';
    primaryPointer: 'coarse' | 'fine' | 'none';

    state: state;

    update(): void;
}

interface state {
    detectHover: detectHover;
    detectPassiveEvents: detectPassiveEvents;
    detectPointer: detectPointer;
    detectTouchEvents: detectTouchEvents;
}

declare const detectIt: detectIt;
export default detectIt;
