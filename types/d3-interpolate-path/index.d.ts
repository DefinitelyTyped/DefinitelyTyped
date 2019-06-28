// Type definitions for d3-interpolate-path 2.0
// Project: https://github.com/pbeshai/d3-interpolate-path
// Definitions by: Paweł Dąbrowski <https://github.com/paolostyle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PathCommandObject {
    type: string;
    x: number;
    y: number;
}

export function interpolatePath(
    a: string,
    b: string,
    excludeSegment?: (a: PathCommandObject, b: PathCommandObject) => boolean
): (t: number) => string;
