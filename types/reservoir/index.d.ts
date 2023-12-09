export as namespace Reservoir;
export = Reservoir;

/**
 * Create a new reservoir sampler.
 *
 * @param reservoirSize is the maximum size of the reservoir. This is the number of elements
 *   to be randomly chosen from the input provided to it using pushSome. Default is 1.
 * @param randomNumberGenerator is an optional random number generating function to use in
 *   place of the default Math.random.
 */
declare function Reservoir<T>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
    reservoirSize?: number,
    randomNumberGenerator?: () => number,
): Reservoir.ReservoirArray<T>;

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block. Often you will want to describe the
 *~ shape of the return type of the function; that type should
 *~ be declared in here, as this example shows.
 */
declare namespace Reservoir {
    interface ReservoirArray<T> extends Array<T> {
        /**
         * datum: one or more elements to consider for inclusion into the reservoir.
         * Returns the current length of the reservoir.
         */
        pushSome(...datum: T[]): number;
    }
}
