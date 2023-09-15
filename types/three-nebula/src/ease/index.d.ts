export type EasingFunction = (value: number) => number;

export function setEasingByName(easeName: string): EasingFunction;

export function getEasingByName(name: string): EasingFunction;

/**
 * The Ease class provides a collection of easing functions for use with System
 */
export namespace ease {
    function easeInBack(value: number): number;

    function easeInCirc(value: number): number;

    function easeInCubic(value: number): number;

    function easeInExpo(value: number): number;

    function easeInOutBack(value: number): number;

    function easeInOutCirc(value: number): number;

    function easeInOutCubic(value: number): number;

    function easeInOutExpo(value: number): number;

    function easeInOutQuad(value: number): number;

    function easeInOutQuart(value: number): number;

    function easeInOutSine(value: number): number;

    function easeInQuad(value: number): number;

    function easeInQuart(value: number): number;

    function easeInSine(value: number): number;

    function easeLinear(value: number): number;

    function easeOutBack(value: number): number;

    function easeOutCirc(value: number): number;

    function easeOutCubic(value: number): number;

    function easeOutExpo(value: number): number;

    function easeOutQuad(value: number): number;

    function easeOutQuart(value: number): number;

    function easeOutSine(value: number): number;
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
