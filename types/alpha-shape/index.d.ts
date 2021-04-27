// Type definitions for alpha-shape 1.0
// Project: https://github.com/mikolalysenko/alpha-shape
// Definitions by: ArranZeyuWang <https://github.com/ArranZeyuWang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*
* Constructing alpha shapes for point sets.
*/

export = alpha_shape;

declare function alpha_shape(alpha: number, points: number[][]): number[][];
