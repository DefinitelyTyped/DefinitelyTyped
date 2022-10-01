/** Constrain an angle to 360 degrees */
export function constrain(angle: number): number;

export function adjust(
    arc: 'raw' | 'increasing' | 'decreasing' | 'longer' | 'shorter',
    angles: [number, number],
): [number, number];
