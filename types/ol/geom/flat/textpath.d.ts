export function drawTextOnPath(
    flatCoordinates: number[],
    offset: number,
    end: number,
    stride: number,
    text: string,
    startM: number,
    maxAngle: number,
    scale: number,
    measureAndCacheTextWidth: (p0: string, p1: string, p2: { [key: string]: number }) => number,
    font: string,
    cache: { [key: string]: number },
    rotation: number,
): any[][];
