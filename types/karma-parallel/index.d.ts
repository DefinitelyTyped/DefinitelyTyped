// Type definitions for karma-parallel 0.3
// Project: https://github.com/joeljeske/karma-parallel#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * Options for this plugin
         * see {@link https://github.com/joeljeske/karma-parallel#options}
         */
        parallelOptions?: ParallelOptions;
    }
    interface ParallelOptions {
        /**
         * regex or function used to determine if a reporter needs to only received aggregated events from the browser shards.
         * It is used to ensure coverage reporting is accurate amongst all the shards of a browser
         *  It is also useful for some programmatic reporters such as junit reporters that need to operate on a single set of test outputs and not once for each shard.
         * Set to null to disable aggregated reporting
         */
        aggregatedReporterTest?: ((reporter: object) => boolean) | RegExp | null;
        /**
         * The number of browser instances to use to test.
         * If you test on multiple types of browsers, this spin up the number of executors for each browser type
         * @default cpu_cores-1
         */
        executors?: number;
        /**
         * This plugin works by overriding the test suite describe() function.
         * When it encounters a describe, it must decide if it will skip the tests inside of it, or not
         * @default 'round-robin'
         */
        shardStrategy?: 'round-robin' | 'description-length' | 'custom';
        /**
         * Custom function that will determine if a describe block should run in the current executor.
         * It is a function that is serialized and re-constructed on each executor.
         * The function will be called for every top level describe block and should return true if the describe block should run for a the current executor
         */
        customShardStrategy?: (options: ShardStrategOptions) => boolean;
    }

    interface ShardStrategOptions {
        /**
         * the total number of executors
         */
        readonly executors: number;
        /**
         * the 0-based index of the current executor
         */
        readonly shardIndex: number;
        /**
         * the string passed to the describe block (useful for gaining context of the current description)
         */
        readonly description: string;
    }
}
