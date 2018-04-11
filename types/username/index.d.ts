// Type definitions for username v3.0.0
// Project: https://www.npmjs.com/package/username
// Definitions by: Klaus Reimer <https://github.com/kayahr>
//                 Akos Krivachy <https://github.com/krivachy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/**
 * Tries to get the username from the LOGNAME, USER, LNAME or USERNAME environment variables.
 * Falls back to `id -un` on OS X / Linux and `whoami` on Windows in the rare case none of the environment
 * variables are set. The result is cached.
 *
 * @return Promise<string> A promise containing the username or empty string if not found.
 */
declare function username(): Promise<string>;

declare namespace username {
    /**
     * Tries to get the username from the LOGNAME, USER, LNAME or USERNAME environment variables. Falls back
     * to returning an empty string in the reare case none of the environment variables are set.
     *
     * @return The username or empty string if not found.
     */
    function sync(): string;
}

export = username;
