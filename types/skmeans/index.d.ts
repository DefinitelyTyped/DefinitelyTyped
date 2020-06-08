// Type definitions for skmeans 0.11
// Project: https://github.com/solzimer/skmeans
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type CentroidValues = 'kmrand' | 'kmpp' | null;

interface Data {
    it: number;
    k: number;
    centroids: number;
    idxs: number[];
    test: (x: number, point?: (x1: number, x2: number) => number) => void;
}

/**
 * Calculates unidimiensional and multidimensional k-means clustering on data.
 *
 * @param data Unidimiensional or multidimensional array of values to be clustered.
 * @param k Number of clusters.
 * @param centroids Initial centroid values.
 * @param iterations Maximum number of iterations. If not provided, it will be set to 10000.
 * @param distance Custom distance function. Takes two points as arguments and returns a scalar number.
 */
declare function skmeans(
    data: number[] | number[][],
    k: number,
    centroids?: CentroidValues,
    iterations?: number | null,
    distance?: (x: number, y: number) => number
): Data;

export = skmeans;
