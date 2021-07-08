declare class VariableDensityPDS {
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
export = VariableDensityPDS;
