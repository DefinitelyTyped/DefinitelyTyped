// Type definitions for poisson-disk-sampling 2.2
// Project: https://github.com/kchapelier/poisson-disk-sampling
// Definitions by: Aliyss <https://github.com/Aliyss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import FixedDensityPDS = require('./src/implementations/fixed-density');
import VariableDensityPDS = require('./src/implementations/variable-density');

declare class PoissonDiskSampling {
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

export = PoissonDiskSampling;
