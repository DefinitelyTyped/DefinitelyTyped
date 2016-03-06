// Type definitions for keytar 3.0.0
// Project: http://atom.github.io/node-keytar/
// Definitions by: Milan Burda <https://github.com/miniak/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'keytar' {
    /**
     * Get the stored password for the service and account.
     *
     * @param service The string service name.
     * @param account The string account name.
     *
     * @returns the string password or null on failures.
     */
    export function getPassword(service: string, account: string): string;

    /**
     * Add the password for the service and account to the keychain.
     *
     * @param service The string service name.
     * @param account The string account name.
     * @param password The string password.
     *
     * @returns true on success, false on failure.
     */
    export function addPassword(service: string, account: string, password: string): boolean;

    /**
     * Delete the stored password for the service and account.
     *
     * @param service The string service name.
     * @param account The string account name.
     *
     * @returns the string password or null on failures.
     */
    export function deletePassword(service: string, account: string): string;

    /**
     * Replace the password for the service and account in the keychain.
     *
     * This is a simple convenience function that internally calls deletePassword(service, account)
     * followed by addPassword(service, account, password).
     *
     * @param service The string service name.
     * @param account The string account name.
     * @param password The string password.
     *
     * @returns true on success, false on failure.
     */
    export function replacePassword(service: string, account: string, password: string): boolean;

    /**
     * Find a password for the service in the keychain.
     *
     * @param service The string service name.
     *
     * @returns the string password or null on failures.
     */
    export function findPassword(service: string): string;
}
