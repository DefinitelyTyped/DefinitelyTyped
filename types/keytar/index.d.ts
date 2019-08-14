// Type definitions for keytar 4.4.1
// Project: http://atom.github.io/node-keytar/
// Definitions by: Milan Burda <https://github.com/miniak>
//                 Brendan Forster <https://github.com/shiftkey>
//                 Hari Juturu <https://github.com/juturu>
//                 Queenie Ma <https://github.com/queeniema>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/**
 * Get the stored password for the service and account.
 *
 * @param service The string service name.
 * @param account The string account name.
 *
 * @returns A promise for the password string.
 */
export declare function getPassword(service: string, account: string): Promise<string | null>;

/**
 * Save the password for the service and account to the keychain. Adds a new entry if necessary, or updates an existing entry if one exists.
 *
 * @param service The string service name.
 * @param account The string account name.
 * @param password The string password.
 *
 * @returns A promise for the set password completion.
 */
export declare function setPassword(service: string, account: string, password: string): Promise<void>;

/**
 * Delete the stored password for the service and account.
 *
 * @param service The string service name.
 * @param account The string account name.
 *
 * @returns A promise for the deletion status. True on success.
 */
export declare function deletePassword(service: string, account: string): Promise<boolean>;

/**
 * Find all accounts and password for the service in the keychain.
 *
 * @param service The string service name.
 *
 * @returns A promise for the credentials array.
 */
export declare function findCredentials(service: string): Promise<Array<{ account: string, password: string }>>;

/**
 * Find a password for the service in the keychain. This is ideal for scenarios where an account is not required.
 *
 * @param service The string service name.
 *
 * @returns A promise for the password string.
 */
export declare function findPassword(service: string): Promise<string | null>;
