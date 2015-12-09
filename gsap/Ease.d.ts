// Type definitions for GSAP v1.16.0
// Project: http://greensock.com/
// Definitions by: VILIC VANE <https://vilic.github.io/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class Ease {
    constructor(func?: Function, extraParams?: any[], type?: number, power?: number);

    /** Translates the tween's progress ratio into the corresponding ease ratio. */
    getRatio(p: number): number;
}