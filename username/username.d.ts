// Type definitions for username v1.0.1
// Project: https://www.npmjs.com/package/username
// Definitions by: Klaus Reimer <https://github.com/kayahr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "username" {
    /**
     * Tries to get the username from the LOGNAME, USER, LNAME or USERNAME environment variables.
     * Falls back to `id -un` on OS X / Linux and `whoami` on Windows in the rare case none of the environment 
     * variables are set. The result is cached.
     *
     * @param callback The callback function to call asynchronously with the result.
     */
    function username(callback: (err: Error, result: string) => void): void;
    
    module username {
        /**
         * Tries to get the username from the LOGNAME, USER, LNAME or USERNAME environment variables. Falls back
         * to returning an empty string in the reare case none of the environment variables are set.
         *
         * @return The username or empty string if not found.
         */
        function sync(): string;
    }

    export = username;
}
