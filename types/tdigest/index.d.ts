// Type definitions for tdigest 0.1
// Project: https://github.com/welch/tdigest
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class TDigest {
    /**
     *
     * @param delta The compression factor, the max fraction of mass that
     * can be owned by one centroid (bigger, up to 1.0, means more
     * compression). `false` switches off `TDigest` behavior and treats
     * the distribution as discrete, with no merging and exact values
     * reported.
     * @param K A size threshold that triggers recompression as the TDigest
     * grows during input. (Set it to 0 to disable automatic recompression)
     * @param CX Specifies how often to update cached cumulative totals used
     * for quantile estimation during ingest (see `_cumulate()`). Set to
     * `0` to use exact quantiles for each new point.
     *
     * @example
     * import { TDigest } from 'tdigest';
     *
     * const x = [];
     * for (let i = 0; i < 100000; i += 1) {
     *     x.push(Math.random() * 10 - 5);
     * };
     * td = new TDigest();
     * td.push(x);
     * td.compress();
     * console.log(td.summary());
     * console.log("median ~ " + td.percentile(0.5));
     */
    constructor(delta: number | false, K?: number, CX?: number);

    /**
     * Prepare to digest new points.
     */
    reset(): void;

    size(): number;

    /**
     * @return An array of centroids ordered by mean.
     */
    toArray(everything?: false): Centroid[];
    toArray(everything: true): FullCentroid[];

    summary(): string;

    /**
     * Incorporate value or array of values `x`, having count `n` into the TDigest.
     */
    push(
        x: number | readonly number[],
        /** @default 1 */
        n?: number,
    ): void;

    /**
     * Incorporate a centroid or an array of centroids.
     */
    push_centroid(c: Centroid | readonly Centroid[]): void;

    /**
     * Find the centroid closest to x. The assumption of
     * unique means and a unique nearest centroid departs from the
     * paper, see `_digest()`.
     */
    find_nearest(x: number): FullCentroid | null;

    /**
     * Find centroids lower and upper such that `lower.mean < x <
     * upper.mean` or `lower.mean === x === upper.mean`. Don't call
     * this for x out of bounds.
     */
    bound_mean(x: number): [FullCentroid, FullCentroid];

    /**
     * Return approximate percentile-ranks (0..1) for data value x.
     * or list of x. Calculated according to
     * https://en.wikipedia.org/wiki/Percentile_rank.
     *
     * (Note that in continuous mode, boundary sample values will
     * report half their centroid weight inward from 0/1 as the
     * percentile-rank. X values outside the observed range return
     * 0/1)
     */
    p_rank(x: number): number;
    p_rank(xlist: readonly number[]): number[];

    /**
     * Find centroids lower and upper such that `lower.mean_cumn < x <
     * upper.mean_cumn` or `lower.mean_cumn === x === upper.mean_cumn`. Don't call
     * this for cumn out of bounds.
     */
    bound_mean_cumn(cumn: number): [FullCentroid, FullCentroid];

    /**
     * For percentage `p` (0..1), or for each `p` in a list of `ps`, return
     * the smallest data value `q` at which at least `p` percent of the
     * observations <= `q`.
     *
     * For discrete distributions, this selects q using the Nearest
     * Rank Method
     * (https://en.wikipedia.org/wiki/Percentile#The_Nearest_Rank_method)
     * (in scipy, same as percentile(...., interpolation='higher').
     *
     * For continuous distributions, interpolates data values between
     * count-weighted bracketing means.
     */
    percentile(p: number): number;
    percentile(plist: readonly number[]): number[];

    /**
     * TDigests experience worst case compression (none) when input
     * increases monotonically. Improve on any bad luck by
     * reconsuming digest centroids as if they were weighted points
     * while shuffling their order (and hope for the best).
     */
    compress(): void;
}

export interface Centroid {
    n: number;
    mean: number;
}

export interface FullCentroid extends Centroid {
    cumn: number;
    mean_cumn: number;
}

export interface DigestConfiguration {
    /** @default 'auto' */
    mode: 'disc' | 'cont' | 'auto';
    /** @default 0.9 */
    ratio: number;
    /** @default 1000 */
    thresh: number;
}

/**
 * Allocate a distribution digest structure. This is an extension
 * of a TDigest structure that starts in exact histogram (discrete)
 * mode, and automatically switches to TDigest mode for large
 * samples that appear to be from a continuous distribution.
 */
export class Digest extends TDigest {
    constructor(config?: Partial<DigestConfiguration>);
    push(x: number | readonly number[]): void;
    /**
     * While in `'auto'` mode, if there are many unique elements, assume
     * they are from a continuous distribution and switch to `'cont'`
     * mode (tdigest behavior). Return `true` on transition from
     * disctete to continuous.
     */
    check_continuous(): boolean;
}
