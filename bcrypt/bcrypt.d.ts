// Type definitions for bcrypt
// Project: https://www.npmjs.org/package/bcrypt
// Definitions by: Peter Harris <https://github.com/codeanimal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/**
 * @param rounds  The cost of processing the data. Default 10.
 */
declare export function genSaltSync(rounds?: number): string;

/**
 * @param rounds    The cost of processing the data. Default 10.
 * @param callback  A callback to be fire once the sald has been generated. Uses eio making it asynchronous.
 */
declare export function genSalt(rounds: number, callback: (err: Error, salt: string) => void): void;
/**
 * @param callback  A callback to be fire once the sald has been generated. Uses eio making it asynchronous.
 */
declare export function genSalt(callback: (err: Error, salt: string) => void): void;

/**
 * @param data  The data to be encrypted.
 * @param salt  The salt to be used in encryption.
 */
declare export function hashSync(data: any, salt: string): string;
/**
 * @param data    The data to be encrypted.
 * @param rounds  A salt will be generated using the rounds specified.
 */
declare export function hashSync(data: any, rounds: number): string;

/**
 * @param data      The data to be encrypted.
 * @param salt      The salt to be used in encryption.
 * @param callback  A callback to be fired once the data has been encrypted. Uses eio making it asynchronous.
 */
declare export function hash(data: any, salt: string, callback: (err: Error, encrypted: string) => void): void;
/**
 * @param data      The data to be encrypted.
 * @param rounds    A salt will be generated using the rounds specified.
 * @param callback  A callback to be fired once the data has been encrypted. Uses eio making it asynchronous.
 */
declare export function hash(data: any, rounds: number, callback: (err: Error, encrypted: string) => void): void;

/**
 * @param data      The data to be encrypted.
 * @param encrypted The data to be compared against.
 */
declare export function compareSync(data: any, encrypted: string): boolean;

/**
 * @param data      The data to be encrypted.
 * @param encrypted The data to be compared against.
 * @param callback  A callback to be fire once the data has been compared. Uses eio making it asynchronous.
 */
declare export function compare(data: any, encrypted: string, callback: (err: Error, same: boolean) => void): void;

/**
 * Return the number of rounds used to encrypt a given hash
 * 
 * @param encrypted Hash from which the number of rounds used should be extracted.
 */
declare export function getRounds(encrypted: string): number;
