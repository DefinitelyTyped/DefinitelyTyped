// Type definitions for almost-equal 1.1
// Project: https://github.com/mikolalysenko/almost-equal#readme
// Definitions by: Curtis Maddalozzo <https://github.com/cmaddalozzo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function almostEqual(value: number, other: number, absoluteTolerance?: number, relativeTolerance?: number): boolean;
declare namespace almostEqual {
  const FLT_EPSILON: number;
  const DBL_EPSILON: number;
}
export = almostEqual;
