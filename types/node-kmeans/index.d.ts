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
