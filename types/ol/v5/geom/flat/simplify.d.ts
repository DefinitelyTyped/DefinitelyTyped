export function douglasPeucker(flatCoordinates: number[], offset: number, end: number, stride: number, squaredTolerance: number, simplifiedFlatCoordinates: number[], simplifiedOffset: number): number;
export function douglasPeuckerArray(
    flatCoordinates: number[],
    offset: number,
    ends: number[],
    stride: number,
    squaredTolerance: number,
    simplifiedFlatCoordinates: number[],
    simplifiedOffset: number,
    simplifiedEnds: number[]
): number;
export function douglasPeuckerMultiArray(
    flatCoordinates: number[],
    offset: number,
    endss: number[][],
    stride: number,
    squaredTolerance: number,
    simplifiedFlatCoordinates: number[],
    simplifiedOffset: number,
    simplifiedEndss: number[][]
): number;
export function quantize(flatCoordinates: number[], offset: number, end: number, stride: number, tolerance: number, simplifiedFlatCoordinates: number[], simplifiedOffset: number): number;
export function quantizeArray(
    flatCoordinates: number[],
    offset: number,
    ends: number[],
    stride: number,
    tolerance: number,
    simplifiedFlatCoordinates: number[],
    simplifiedOffset: number,
    simplifiedEnds: number[]
): number;
export function quantizeMultiArray(
    flatCoordinates: number[],
    offset: number,
    endss: number[][],
    stride: number,
    tolerance: number,
    simplifiedFlatCoordinates: number[],
    simplifiedOffset: number,
    simplifiedEndss: number[][]
): number;
export function radialDistance(flatCoordinates: number[], offset: number, end: number, stride: number, squaredTolerance: number, simplifiedFlatCoordinates: number[], simplifiedOffset: number): number;
export function simplifyLineString(
    flatCoordinates: number[],
    offset: number,
    end: number,
    stride: number,
    squaredTolerance: number,
    highQuality: boolean,
    opt_simplifiedFlatCoordinates?: number[]
): number[];
export function snap(value: number, tolerance: number): number;
