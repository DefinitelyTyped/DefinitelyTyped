declare function interpolatorPiecewise(
    interpolator: (a: number, b: number, t: number) => number,
): (arr: number[]) => (t: number) => number;

export { interpolatorPiecewise };
