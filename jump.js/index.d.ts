// Type definitions for jump.js 1.0
// Project: https://github.com/callmecavs/jump.js
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare type TransitionFunc = (t: number, b: number, c: number, d: number) => number;
declare interface JumpOptions {
    duration?: number;
    offset?: number;
    callback?: () => void;
    easing?: TransitionFunc;
    a11y?: boolean;
}
declare type Jump = (target: string | Element | number, opts?: JumpOptions) => void;
declare const jump: Jump;
export = jump;
