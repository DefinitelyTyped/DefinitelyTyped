// Type definitions for first-run 1.2
// Project: https://github.com/sindresorhus/first-run
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = firstRun;

/**
 * Check if it's the first time the process is run.
 */
declare function firstRun(options?: firstRun.Options): boolean;

declare namespace firstRun {
    /**
     * Clear the state.
     */
    function clear(): void;

    interface Options {
        /**
         * The name used to identify it.
         * @default name field in your package.json
         */
        name: string;
    }
}
