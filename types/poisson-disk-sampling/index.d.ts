// Type definitions for poisson-disk-sampling 2.2
// Project: https://github.com/kchapelier/poisson-disk-sampling
// Definitions by: Aliyss <https://github.com/Aliyss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const tinyNDArray: any;

export function squaredEuclideanDistance(point1: number[], point2: number[]): number;
export function euclideanDistance(point1: number[], point2: number[]): number;
export function getNeighbourhood(dimensionNumber: number): number[];
export function getNeighbourhoodMemoized(dimensionNumber: number): number[];

export class FixedDensityPDS {
    shape: number[];
    minDistance: number;
    maxDistance: number;
    maxTries: number;
    rng: ((...params: number[]) => number) | null;
    dimension: number;
    squaredMinDistance: number;
    minDistancePlusEpsilon: number;
    deltaDistance: number;
    cellSize: number;
    neighbourhood: number[][];
    currentPoint: number[] | null;
    processList: [];
    samplePoints: number[][];
    gridShape: number[];
    grid: { stride: number[]; data: Uint32Array };

    constructor(
        options: {
            shape: number[];
            minDistance: number;
            tries?: number;
        },
        rng?: ((...params: number[]) => number) | null,
    );

    addRandomPoint(): number[];
    addPoint(point: number[]): number[] | null;

    protected directAddPoint(point: number[]): number[];
    protected inNeighbourhood(point: number[]): boolean;

    next(): number[] | null;
    fill(): number[][];
    getAllPoints(): number[][];
    getAllPointsWithDistance(): void;
    reset(): void;
}

export class VariableDensityPDS {
    constructor(
        options: {
            shape: number[];
            minDistance: number;
            maxDistance?: number;
            tries?: number;
            distanceFunction: (...params: number[]) => number;
            bias?: number;
        },
        rng?: ((...params: number[]) => number) | null,
    );

    addRandomPoint(): number[];
    addPoint(point: number[]): number[] | null;

    protected directAddPoint(point: number[]): number[];
    protected inNeighbourhood(point: number[]): boolean;

    next(): number[] | null;
    fill(): number[][];
    getAllPoints(): number[][];
    getAllPointsWithDistance(): number[][];
    reset(): void;
}

export class _PoissonDiskSampling {
    shape: number[];
    implementation: FixedDensityPDS | VariableDensityPDS;

    constructor(
        options: {
            shape: number[];
            minDistance: number;
            maxDistance?: number;
            tries?: number;
            distanceFunction?: ((...params: number[]) => number) | null;
            bias?: ((...params: number[]) => number) | null;
        },
        rng?: ((...params: number[]) => number) | null,
    );

    addRandomPoint(): number[];
    addPoint(point: number[]): number[] | null;
    next(): number[] | null;
    fill(): number[][];
    getAllPoints(): number[][];
    getAllPointsWithDistance(): number[][];
    reset(): void;
}

declare const PoissonDiskSampling: typeof _PoissonDiskSampling;
export default PoissonDiskSampling;

export function sampleSphere(d: number, rng: (...params: number[]) => number): number[];
