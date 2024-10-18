/// <reference types="chai" />
/// <reference types="mocha" />

declare global {
    namespace Chai {
        interface Assertion {
            /** Assert that the object matches the snapshot */
            matchSnapshot(snapshotFilename?: string, snapshotName?: string, update?: boolean): Assertion;
            matchSnapshot(update: boolean): Assertion;
        }
    }
}

interface ChaiJestSnapshot extends Chai.ChaiPlugin {
    /** Set snapshot file name */
    setFilename(filename: string): void;

    /**
     * Set snapshot test name
     */
    setTestName(testname: string): void;

    /** Configure snapshot name using mocha context */
    configureUsingMochaContext(context: Mocha.Context): void;

    /** Reset snapshot registry */
    resetSnapshotRegistry(): void;

    /** Add a serializer plugin */
    addSerializer(serializer: any): void;
}

declare var ChaiJestSnapshot: ChaiJestSnapshot;
export = ChaiJestSnapshot;
