// Type definitions for keytar 4.0.2
// Project: http://atom.github.io/node-keytar/
// Definitions by: Milan Burda <https://github.com/miniak/>, Brendan Forster <https://github.com/shiftkey/>, Hari Juturu <https://github.com/juturu/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/**
 * Get the stored password for the service and account.
 *
 * @param service The string service name.
 * @param account The string account name.
 *
 * @returns Promise, which on success yields the password string or error string on failures.
 */
export declare function getPassword(service: string, account: string): Promise<string>;

/**
 * Add the password for the service and account to the keychain.
 *
 * @param service The string service name.
 * @param account The string account name.
 * @param password The string password.
 *
 * @returns Promise, which on success yields empty string or error string on failure.
 */
export declare function setPassword(service: string, account: string, password: string): Promise<string>;

/**
 * Delete the stored password for the service and account.
 *
 * @param service The string service name.
 * @param account The string account name.
 *
 * @returns Promise, which on success yields empty string or error string on failure
 */
export declare function deletePassword(service: string, account: string): Promise<string>;

/**
 * Find a password for the service in the keychain.
 *
 * @param service The string service name.
 *
 * @returns Promise, which on success yields the password string or error string on failure.
 */
export declare function findPassword(service: string): Promise<string>;
