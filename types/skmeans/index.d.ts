type CentroidValues<TPoint extends number | number[]> = TPoint[] | "kmrand" | "kmpp";

interface DataResult<TPoint extends number | number[]> {
    it: number;
    k: number;
    centroids: TPoint[];
    idxs: number[];
    test: (x: TPoint, distance?: (x: TPoint, y: TPoint) => number) => void;
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
declare function skmeans<TPoint extends number | number[]>(
    data: TPoint[],
    k: number,
    centroids?: CentroidValues<TPoint> | null,
    iterations?: number | null,
    distance?: (x: TPoint, y: TPoint) => number | null,
): DataResult<TPoint>;

export = skmeans;
