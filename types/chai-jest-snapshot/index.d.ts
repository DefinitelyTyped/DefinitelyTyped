// Type definitions for chai-jest-snapshot 1.3
// Project: https://github.com/suchipi/chai-jest-snapshot#readme
// Definitions by: Matt Perry <https://github.com/mattvperry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />
/// <reference types="mocha" />

declare global {
    namespace Chai {
        interface Assertion {
            /**
             * Assert that the object matches the snapshot
             * @param snapshotFilename
             * @param snapshotName
             * @param update
             */
            matchSnapshot(snapshotFilename?: string, snapshotName?: string, update?: boolean): Assertion;
            matchSnapshot(update: boolean): Assertion;
        }
    }
}

interface ChaiJestSnapshot {
    /**
     * Chai bootstrapper
     * @param chai
     * @param utils
     */
    (chai: any, utils: any): void;

    /**
     * Set snapshot file name
     * @param filename
     */
    setFileName(filename: string): void;

    /**
     * Set snapshot test name
     * @param testname
     */
    setTestName(testname: string): void;

    /**
     * Configure snapshot name using mocha context
     * @param context
     */
    configureUsingMochaContext(context: Mocha.IBeforeAndAfterContext): void;

    /**
     * Reset snapshot registry
     */
    resetSnapshotRegistry(): void;

    /**
     * Add a serializer plugin
     * @param serializer
     */
    addSerializer(serializer: any): void;
}

declare var ChaiJestSnapshot: ChaiJestSnapshot;
export default ChaiJestSnapshot;
