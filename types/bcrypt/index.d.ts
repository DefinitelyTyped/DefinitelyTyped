// Type definitions for bcrypt 4.0
// Project: https://www.npmjs.org/package/bcrypt
// Definitions by: Peter Harris <https://github.com/codeanimal>
//                 Ayman Nedjmeddine <https://github.com/IOAyman>
//                 David Stapleton <https://github.com/dstapleton92>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @param [rounds=10] The cost of processing the data.
 * @param [minor=b] The minor version of bcrypt to use. Either `a` or `b`.
 */
export function genSaltSync(rounds?: number, minor?: 'a' | 'b'): string;

/**
 * @param [rounds=10] The cost of processing the data..
 * @param [minor=b] The minor version of bcrypt to use. Either `a` or `b`.
 * @return A promise to be either resolved with the generated salt or rejected with an Error
 */
export function genSalt(rounds?: number, minor?: 'a' | 'b'): Promise<string>;
/**
 * @param [rounds=10] The cost of processing the data..
 * @param [minor=b] The minor version of bcrypt to use. Either `a` or `b`.
 * @param [callback] A callback to be fire once the salt has been generated. Uses eio making it asynchronous.
 */
export function genSalt(rounds?: number, minor?: 'a' | 'b', callback?: (err: Error, salt: string) => void): void;

/**
 * @param data The data to be encrypted.
 * @param salt The salt to be used in encryption.
 */
export function hashSync(data: any, saltOrRounds: string | number): string;

/**
 * @param data The data to be encrypted.
 * @param salt The salt to be used in encryption.
 * @param [callback] A callback to be fired once the data has been encrypted. Uses eio making it asynchronous.
 */
export function hash(data: any, saltOrRounds: string | number, callback: (err: Error, encrypted: string) => void): void;
/**
 * @param data The data to be encrypted.
 * @param salt The salt to be used in encryption.
 * @return A promise to be either resolved with the encrypted data salt or rejected with an Error
 */
export function hash(data: any, saltOrRounds: string | number): Promise<string>;

/**
 * @param data The data to be encrypted.
 * @param encrypted The data to be compared against.
 */
export function compareSync(data: any, encrypted: string): boolean;

/**
 * @param data The data to be encrypted.
 * @param encrypted The data to be compared against.
 * @param [callback] A callback to be fire once the data has been compared. Uses eio making it asynchronous.
 */
export function compare(data: any, encrypted: string, callback: (err: Error, same: boolean) => void): void;
/**
 * @param data The data to be encrypted.
 * @param encrypted The data to be compared against.
 * @return A promise to be either resolved with the comparison result salt or rejected with an Error
 */
export function compare(data: any, encrypted: string): Promise<boolean>;

/**
 * Return the number of rounds used to encrypt a given hash
 * @param encrypted Hash from which the number of rounds used should be extracted.
 */
export function getRounds(encrypted: string): number;
