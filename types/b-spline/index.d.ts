declare function interpolate<T extends ArrayLike<number>>(
    t: number,
    degree: number,
    points: T[],
    knots?: number[],
    weights?: number[],
): T;

export = interpolate;
