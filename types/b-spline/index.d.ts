// Type definitions for b-spline 2.0.1
// Project: https://github.com/thibauts/b-spline
// Definitions by: Ruby <https://github.com/Rupertofly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare function b_spline<T extends ArrayLike<number>>(t: number, degree: number, points: T[], knots?: number[], weights?: number[]): T;

export default b_spline;
