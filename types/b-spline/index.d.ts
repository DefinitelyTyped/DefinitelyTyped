// Type definitions for b-spline 2.0
// Project: https://github.com/thibauts/b-spline
// Definitions by: Ruby <https://github.com/Rupertofly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare function interpolate<T extends ArrayLike<number>>(t: number, degree: number, points: T[], knots?: number[], weights?: number[]): T;

export = interpolate;
