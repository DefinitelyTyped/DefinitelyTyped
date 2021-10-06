// Type definitions for penner 0.1
// Project: https://github.com/bcherny/penner
// Definitions by: Sergey Koshechkin <https://github.com/FrankiePo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

export = penner;

export as namespace penner;

type PennerFunction = (
/**
 * current time (ms, s, frames, ...)
 */
currentTime: number,
/**
 * initial value
 */
initialValue: number,
/**
 * change in value (final value - initial value)
 */
changeInValue: number,
/**
 * duration (same units as t)
 */
duration: number,
) => number;

type PennerFunctionKey =
| 'linear'
| 'easeInQuad'
| 'easeOutQuad'
| 'easeInOutQuad'
| 'easeInCubic'
| 'easeOutCubic'
| 'easeInOutCubic'
| 'easeInQuart'
| 'easeOutQuart'
| 'easeInOutQuart'
| 'easeInQuint'
| 'easeOutQuint'
| 'easeInOutQuint'
| 'easeInSine'
| 'easeOutSine'
| 'easeInOutSine'
| 'easeInExpo'
| 'easeOutExpo'
| 'easeInOutExpo'
| 'easeInCirc'
| 'easeOutCirc'
| 'easeInOutCirc'
| 'easeInElastic'
| 'easeOutElastic'
| 'easeInOutElastic'
| 'easeInBack'
| 'easeOutBack'
| 'easeInOutBack'
| 'easeInBounce'
| 'easeOutBounce'
| 'easeInOutBounce';

declare const penner: Record<PennerFunctionKey, PennerFunction>;
