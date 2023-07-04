// Type definitions for density-clustering 1.3
// Project: https://github.com/uhho/density-clustering
// Definitions by:  Matt Fedderly <https://github.com/mfedderly>
//                  Levi Gruspe <https://github.com/lggruspe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
