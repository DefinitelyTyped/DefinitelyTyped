// Type definitions for ntqdm 1.0
// Project: https://github.com/jhedin/ntqdm
// Definitions by: Christoph Thiede <https://github.com/LinqLover>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ntqdm {
    interface TqdmOptions {
        /** A desciption string to add before the progress bar */
        desc: string;
        /** The number of iterations to complete, needed for infinite iterables */
        total: number;
        /** The minimum number of iterations between progress bar updates */
        minIter: number;
        /** The minimum amount of time between progress bar updates */
        minInterval: number;
        /** whether to output as a log, or update the same line */
        logging: boolean;
    }
}

/** Adds a timed progress bar to iterables */
declare function ntqdm<T>(iter: Iterable<T>, par?: Partial<ntqdm.TqdmOptions>): IterableIterator<T>;

export = ntqdm;
