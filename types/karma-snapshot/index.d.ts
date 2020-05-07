// Type definitions for karma-snapshot 0.6
// Project: https://github.com/localvoid/karma-snapshot
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * See {@link https://github.com/localvoid/karma-snapshot#config}
         */
        snapshot?: SnapshotOptions;
    }

    /**
     * Custom path resolver
     */
    type SnapshotPathResolver = (basePath: string, suiteName: string) => string;

    interface SnapshotOptions {
        /**
         * Run snapshot tests in UPDATE mode
         * @default false
         */
        update?: boolean;
        /**
         * Prune unused snapshots
         * @default false
         */
        prune?: boolean;
        /**
         * Snapshot format
         * @default 'md'
         */
        format?: string | SnapshotSerializer;
        /**
         * Checks existince of the source file associated with tests
         * @default false
         */
        checkSourceFile?: boolean;
        /**
         * Custom path resolver
         */
        pathResolver?: SnapshotPathResolver;
        /**
         * Limit number of unused snapshots reported in the warning.
         * `-1` means unlimited.
         * @default -1
         */
        limitUnusedSnapshotsInWarning?: number;
    }

    /**
     * Custom serializer
     */
    interface SnapshotSerializer {
        serialize: (name: string, suite: SnapshotSuite) => string;
        deserialize: (content: string) => { name: string; suite: SnapshotSuite };
    }

    // these are required to correctly implement custom serializer

    /**
     * a tree with snapshots that has a similar structure to test suites
     */
    interface SnapshotSuite {
        /** references to children suites, */
        children: { [key: string]: SnapshotSuite };
        /** snapshot lists for tests in the current snapshot */
        snapshots: { [key: string]: Snapshot[] };
        visited?: boolean;
        dirty?: boolean;
    }

    /**
     * details about snapshot.
     */
    interface Snapshot {
        /**
         * which language should be used in a markdown format to improve readability
         */
        lang?: string;
        /**
         * snapshot value that will be checked by an assertion plugin
         */
        code: string;
        /**
         * Flag that should be marked by an assertion plugin when it visits suites and snapshots.
         * Visited flags are used to automatically prune removed snapshots
         */
        visited?: boolean;
        /**
         * Flag that should be marked by an assertion plugin when it updates or adds a new snapshot
         */
        dirty?: boolean;
    }
}
