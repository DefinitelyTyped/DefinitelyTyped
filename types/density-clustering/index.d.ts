export class DBSCAN {
    run(
        dataset: number[][],
        neighborhoodRadius: number,
        minPointsPerCluster: number,
        distanceFunction?: (p: number[], q: number[]) => number,
    ): number[][];
    noise: number[];
}

export class OPTICS {
    run(
        dataset: number[][],
        neighborhoodRadius: number,
        minPointsPerCluster: number,
        distanceFunction?: (p: number[], q: number[]) => number,
    ): number[][];
    getReachabilityPlot(): number[][];
}

export class KMEANS {
    run(dataset: number[][], numberOfClusters: number): number[][];
}
