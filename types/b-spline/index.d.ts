// Type definitions for b-spline
// Definitions by: Ruby <https://github.com/Rupertofly>
declare function b_spline<T extends ArrayLike<number>>(t: number, degree: number, points: T[], knots?: number[], weights?: number[]): T;

export default b_spline;
