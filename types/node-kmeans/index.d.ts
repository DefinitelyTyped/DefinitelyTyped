// Type definitions for node-kmeans 1.1
// Project: https://www.npmjs.com/package/node-kmeans
// Definitions by: 3aquin3 <https://github.com/aquine-kujaruk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ClusterizeOptions {
    k: number;
    seed?: number;
    distance?: (a: number[], b: number[]) => number;
}

export interface ClusteringOutput {
    centroid: number[];
    cluster: number[][];
    clusterInd: number[];
}

export function clusterize(
    vector: number[] | number[][],
    options: ClusterizeOptions,
    callback: (err: Error | null, result?: ClusteringOutput[]) => void,
): void;
