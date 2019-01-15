// Type definitions for npm-run-path 2.0
// Project: https://github.com/sindresorhus/npm-run-path#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = npmRunPath;

/**
 * Get your [PATH](https://en.wikipedia.org/wiki/PATH_(variable)) prepended with locally installed binaries.
 */
declare function npmRunPath(options?: npmRunPath.Options): string;

declare namespace npmRunPath {
    function env(options?: EnvOptions): ProcessEnv;

    interface Options {
        /**
         * Working directory.
         */
        cwd?: string;
        /**
         * PATH to be appended.
         * Set it to an empty string to exclude the default [PATH](https://github.com/sindresorhus/path-key).
         * @default PATH
         */
        path?: string;
    }

    interface EnvOptions {
        /**
         * Working directory.
         */
        cwd?: string;
        /**
         * Accepts an object of environment variables, like `process.env`, and modifies the PATH using the correct
         * [PATH key](https://github.com/sindresorhus/path-key). Use this if you're modifying the PATH for use
         * in the `child_process` options.
         */
        env?: ProcessEnv;
    }

    interface ProcessEnv {
        [key: string]: string | undefined;
    }
}
