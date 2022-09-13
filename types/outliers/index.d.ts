// Type definitions for outliers 0.0
// Project: https://github.com/MatthewMueller/outliers
// Definitions by: Glenn Reyes <https://github.com/glennreyes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function outliers(input: number[]): number[];
declare function outliers<T>(path?: string): (element: T, index: number, array: T[]) => boolean;

export = outliers;
