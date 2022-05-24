declare class FixedDensityPDS {
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
export = FixedDensityPDS;
