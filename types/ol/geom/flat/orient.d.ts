/**
 * Is the linear ring oriented clockwise in a coordinate system with a bottom-left
 * coordinate origin? For a coordinate system with a top-left coordinate origin,
 * the ring's orientation is clockwise when this function returns false.
 */
export function linearRingIsClockwise(flatCoordinates: number[], offset: number, end: number, stride: number): boolean;
/**
 * Determines if linear rings are oriented.  By default, left-hand orientation
 * is tested (first ring must be clockwise, remaining rings counter-clockwise).
 * To test for right-hand orientation, use the opt_right argument.
 */
export function linearRingsAreOriented(
    flatCoordinates: number[],
    offset: number,
    ends: number[],
    stride: number,
    opt_right?: boolean,
): boolean;
/**
 * Determines if linear rings are oriented.  By default, left-hand orientation
 * is tested (first ring must be clockwise, remaining rings counter-clockwise).
 * To test for right-hand orientation, use the opt_right argument.
 */
export function linearRingssAreOriented(
    flatCoordinates: number[],
    offset: number,
    endss: number[][],
    stride: number,
    opt_right?: boolean,
): boolean;
/**
 * Orient coordinates in a flat array of linear rings.  By default, rings
 * are oriented following the left-hand rule (clockwise for exterior and
 * counter-clockwise for interior rings).  To orient according to the
 * right-hand rule, use the opt_right argument.
 */
export function orientLinearRings(
    flatCoordinates: number[],
    offset: number,
    ends: number[],
    stride: number,
    opt_right?: boolean,
): number;
/**
 * Orient coordinates in a flat array of linear rings.  By default, rings
 * are oriented following the left-hand rule (clockwise for exterior and
 * counter-clockwise for interior rings).  To orient according to the
 * right-hand rule, use the opt_right argument.
 */
export function orientLinearRingsArray(
    flatCoordinates: number[],
    offset: number,
    endss: number[][],
    stride: number,
    opt_right?: boolean,
): number;
