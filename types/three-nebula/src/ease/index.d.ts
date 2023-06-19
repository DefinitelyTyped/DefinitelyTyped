export type EasingFunction = (value: number) => number;

export function setEasingByName(easeName: string): EasingFunction;

export function getEasingByName(name: string): EasingFunction;

/**
 * The Ease class provides a collection of easing functions for use with System
 */
export namespace ease {
    export function easeInBack(value: number): number;

    export function easeInCirc(value: number): number;

    export function easeInCubic(value: number): number;

    export function easeInExpo(value: number): number;

    export function easeInOutBack(value: number): number;

    export function easeInOutCirc(value: number): number;

    export function easeInOutCubic(value: number): number;

    export function easeInOutExpo(value: number): number;

    export function easeInOutQuad(value: number): number;

    export function easeInOutQuart(value: number): number;

    export function easeInOutSine(value: number): number;

    export function easeInQuad(value: number): number;

    export function easeInQuart(value: number): number;

    export function easeInSine(value: number): number;

    export function easeLinear(value: number): number;

    export function easeOutBack(value: number): number;

    export function easeOutCirc(value: number): number;

    export function easeOutCubic(value: number): number;

    export function easeOutExpo(value: number): number;

    export function easeOutQuad(value: number): number;

    export function easeOutQuart(value: number): number;

    export function easeOutSine(value: number): number;
}
export type EasingString = keyof Easing;
export interface Easing {
    easeLinear: EasingFunction;
    easeInQuad: EasingFunction;
    easeOutQuad: EasingFunction;
    easeInOutQuad: EasingFunction;
    easeInCubic: EasingFunction;
    easeOutCubic: EasingFunction;
    easeInOutCubic: EasingFunction;
    easeInQuart: EasingFunction;
    easeOutQuart: EasingFunction;
    easeInOutQuart: EasingFunction;
    easeInSine: EasingFunction;
    easeOutSine: EasingFunction;
    easeInOutSine: EasingFunction;
    easeInExpo: EasingFunction;
    easeOutExpo: EasingFunction;
    easeInOutExpo: EasingFunction;
    easeInCirc: EasingFunction;
    easeOutCirc: EasingFunction;
    easeInOutCirc: EasingFunction;
    easeInBack: EasingFunction;
    easeOutBack: EasingFunction;
    easeInOutBack: EasingFunction;
}
