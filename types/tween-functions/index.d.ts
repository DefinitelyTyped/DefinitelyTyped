declare namespace tweenFunctions {
    type TweenFunction = (
        /** Current elapsed time */
        time: number,
        /** Beginning value */
        start: number,
        /** Final value */
        end: number,
        /** Total duration of the animation */
        duration: number,
    ) => number;
    type TweenFunctionBack = (
        /** Current elapsed time */
        time: number,
        /** Beginning value */
        start: number,
        /** Final value */
        end: number,
        /** Total duration of the animation */
        duration: number,
        /** Overshoot parameter. Defaults to 1.70158 - Penner’s Magic Number (10% overshoot) */
        overshoot?: number,
    ) => number;
    interface TweenFunctions {
        linear: TweenFunction;
        easeInQuad: TweenFunction;
        easeOutQuad: TweenFunction;
        easeInOutQuad: TweenFunction;
        easeInCubic: TweenFunction;
        easeOutCubic: TweenFunction;
        easeInOutCubic: TweenFunction;
        easeInQuart: TweenFunction;
        easeOutQuart: TweenFunction;
        easeInOutQuart: TweenFunction;
        easeInQuint: TweenFunction;
        easeOutQuint: TweenFunction;
        easeInOutQuint: TweenFunction;
        easeInSine: TweenFunction;
        easeOutSine: TweenFunction;
        easeInOutSine: TweenFunction;
        easeInExpo: TweenFunction;
        easeOutExpo: TweenFunction;
        easeInOutExpo: TweenFunction;
        easeInCirc: TweenFunction;
        easeOutCirc: TweenFunction;
        easeInOutCirc: TweenFunction;
        easeInElastic: TweenFunction;
        easeOutElastic: TweenFunction;
        easeInOutElastic: TweenFunction;
        easeInBack: TweenFunctionBack;
        easeOutBack: TweenFunctionBack;
        easeInOutBack: TweenFunctionBack;
        easeInBounce: TweenFunction;
        easeOutBounce: TweenFunction;
        easeInOutBounce: TweenFunction;
    }
}

/**
 * Easing functions specify the rate of change of a parameter over time.
 */
declare const tweenFunctions: tweenFunctions.TweenFunctions;

export = tweenFunctions;
