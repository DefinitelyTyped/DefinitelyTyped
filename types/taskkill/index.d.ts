// Type definitions for taskkill 5.0
// Project: https://github.com/sindresorhus/taskkill#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Kill asynchronously.
 * @async
 * @param input
 * @param [options]
 */
export function taskkill(input: Input, options?: Options): Promise<void>;

/**
 * Kill synchronously.
 * @param input
 * @param [options]
 */
export function taskkillSync(input: Input, options?: Options): void;

/**
 * One or more process IDs or image names, but not mixed.
 */
export type Input = string | string[] | number | number[];

export interface Options {
    /**
     * Name or IP address of a remote computer (do not use backslashes).
     * The default is the local computer.
     */
    system?: string | undefined;
    /**
     * A user specified by User or Domain\User.
     * The default is the permissions of the current logged on user on the computer issuing the command.
     */
    username?: string | undefined;
    /**
     * Password of the user account for the specified `username`.
     */
    password?: string | undefined;
    /**
     * Types of processes to include or exclude from termination.
     * See the `taskkill` docs for supported filters.
     */
    filter?: string | undefined;
    /**
     * Forcefully terminate processes.
     * Ignored for remote processes as all remote processes are forcefully terminated.
     */
    force?: boolean | undefined;
    /**
     * Terminate all child processes along with the parent process, commonly known as a tree kill.
     */
    tree?: boolean | undefined;
}
