// Type definitions for wait-for-localhost 3.0
// Project: https://github.com/sindresorhus/wait-for-localhost#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = waitForLocalhost;

/**
 * Wait for localhost to be ready.
 */
declare function waitForLocalhost(options?: waitForLocalhost.Options): Promise<void>;

declare namespace waitForLocalhost {
    interface Options {
        /**
         * @default 80
         */
        port?: number;

        /**
         * Use the `GET` HTTP-method instead of `HEAD` to check if the server is running.
         * @default false
         */
        useGet?: boolean;
    }
}
