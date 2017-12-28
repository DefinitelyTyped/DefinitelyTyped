// Type definitions for chai-jest-snapshot 1.3
// Project: https://github.com/suchipi/chai-jest-snapshot#readme
// Definitions by: Matt Perry <https://github.com/mattvperry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { IBeforeAndAfterContext } from "mocha";

interface ChaiJestSnapshot {
    /** Chai bootstrapper */
    (chai: any, utils: any): void;

    /** Set snapshot file name */
    setFilename(filename: string): void;

    /**
     * Set snapshot test name
     */
    setTestName(testname: string): void;

    /** Configure snapshot name using mocha context */
    configureUsingMochaContext(context: Mocha.IBeforeAndAfterContext): void;

    /** Reset snapshot registry */
    resetSnapshotRegistry(): void;

    /** Add a serializer plugin */
    addSerializer(serializer: any): void;
}

declare var ChaiJestSnapshot: ChaiJestSnapshot;
export default ChaiJestSnapshot;

declare module "chai" {
    interface Assertion {
        /** Assert that the object matches the snapshot */
        matchSnapshot(snapshotFilename?: string, snapshotName?: string, update?: boolean): Assertion;
        matchSnapshot(update: boolean): Assertion;
    }
}
