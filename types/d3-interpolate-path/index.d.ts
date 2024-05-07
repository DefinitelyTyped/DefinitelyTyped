export interface PathCommandObject {
    type: string;
    x: number;
    y: number;
}

export function interpolatePath(
    a: string,
    b: string,
    excludeSegment?: (a: PathCommandObject, b: PathCommandObject) => boolean,
): (t: number) => string;
