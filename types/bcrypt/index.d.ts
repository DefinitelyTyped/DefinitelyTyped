// Type definitions for bcrypt 5.0
// Project: https://www.npmjs.org/package/bcrypt
// Definitions by:  Peter Harris <https://github.com/codeanimal>
//                  Ayman Nedjmeddine <https://github.com/IOAyman>
//                  David Stapleton <https://github.com/dstapleton92>
//                  BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * @param rounds The cost of processing the data. Default 10.
 * @param minor The minor version of bcrypt to use. Either 'a' or 'b'. Default 'b'.
 *
 * @example
 * import * as bcrypt from 'bcrypt';
 * const saltRounds = 10;
 *
 * const salt = bcrypt.genSaltSync(saltRounds);
 */
export declare function genSaltSync(rounds?: number, minor?: "a" | "b"): string;

/**
 * @param rounds The cost of processing the data. Default 10.
 * @param minor The minor version of bcrypt to use. Either 'a' or 'b'. Default 'b'.
 * @return A promise to be either resolved with the generated salt or rejected with an Error
 *
 * @example
 * import * as bcrypt from 'bcrypt';
 * const saltRounds = 10;
 *
 * (async () => {
 *     const salt = await bcrypt.genSalt(saltRounds);
 * })();
 */
export declare function genSalt(rounds?: number, minor?: "a" | "b"): Promise<string>;

/**
 * @param rounds The cost of processing the data. Default 10.
 * @param minor The minor version of bcrypt to use. Either 'a' or 'b'. Default 'b'.
 * @param callback A callback to be fire once the salt has been generated. Uses eio making it asynchronous.
 *
 * @example
 * import * as bcrypt from 'bcrypt';
 * const saltRounds = 10;
 *
 * // Technique 1 (generate a salt and hash on separate function calls):
 * bcrypt.genSalt(saltRounds, (err, salt) => {
 *     // ...
 * });
 */
export declare function genSalt(callback: (err: Error | undefined, salt: string) => any): void;
export declare function genSalt(rounds: number, callback: (err: Error | undefined, salt: string) => any): void;
export declare function genSalt(
    rounds: number,
    minor: "a" | "b",
    callback: (err: Error | undefined, salt: string) => any,
): void;

/**
 * @param data The data to be encrypted.
 * @param saltOrRounds The salt to be used to hash the password. If specified as a number then a
 * salt will be generated with the specified number of rounds and used.
 *
 * @example
 * import * as bcrypt from 'bcrypt';
 * const saltRounds = 10;
 * const myPlaintextPassword = 's0/\/\P4$$w0rD';
 *
 * // Technique 1 (generate a salt and hash on separate function calls):
 * const salt = bcrypt.genSaltSync(saltRounds);
 * const hash = bcrypt.hashSync(myPlaintextPassword, salt);
 * // Store hash in your password DB.
 *
 * // Technique 2 (auto-gen a salt and hash):
 * const hash2 = bcrypt.hashSync(myPlaintextPassword, saltRounds);
 * // Store hash in your password DB.
 */
export declare function hashSync(data: string | Buffer, saltOrRounds: string | number): string;

/**
 * @param data The data to be encrypted.
 * @param saltOrRounds The salt to be used in encryption. If specified as a number then a
 * salt will be generated with the specified number of rounds and used.
 * @return A promise to be either resolved with the encrypted data salt or rejected with an Error
 *
 * @example
 * import * as bcrypt from 'bcrypt';
 * const saltRounds = 10;
 * const myPlaintextPassword = 's0/\/\P4$$w0rD';
 *
 * (async () => {
 *     // Technique 1 (generate a salt and hash on separate function calls):
 *     const salt = await bcrypt.genSalt(saltRounds);
 *     const hash = await bcrypt.hash(myPlaintextPassword, salt);
 *     // Store hash in your password DB.
 *
 *     // Technique 2 (auto-gen a salt and hash):
 *     const hash2 = await bcrypt.hash(myPlaintextPassword, saltRounds);
 *     // Store hash in your password DB.
 * })();
 */
export declare function hash(data: string | Buffer, saltOrRounds: string | number): Promise<string>;

/**
 * @param data The data to be encrypted.
 * @param saltOrRounds The salt to be used in encryption. If specified as a number then a
 * salt will be generated with the specified number of rounds and used.
 * @param callback A callback to be fired once the data has been encrypted. Uses eio making it asynchronous.
 *
 * @example
 * import * as bcrypt from 'bcrypt';
 * const saltRounds = 10;
 * const myPlaintextPassword = 's0/\/\P4$$w0rD';
 *
 * // Technique 1 (generate a salt and hash on separate function calls):
 * bcrypt.genSalt(saltRounds, (err, salt) => {
 *     bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
 *         // Store hash in your password DB.
 *     });
 * });
 *
 * // Technique 2 (auto-gen a salt and hash):
 * bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
 *     // Store hash in your password DB.
 * });
 */
export declare function hash(
    data: string | Buffer,
    saltOrRounds: string | number,
    callback: (err: Error | undefined, encrypted: string) => any,
): void;

/**
 * @param data The data to be encrypted.
 * @param encrypted The data to be compared against.
 *
 * @example
 * import * as bcrypt from 'bcrypt';
 * const myPlaintextPassword = 's0/\/\P4$$w0rD';
 * const someOtherPlaintextPassword = 'not_bacon';
 *
 * // Load hash from your password DB.
 * bcrypt.compareSync(myPlaintextPassword, hash); // true
 * bcrypt.compareSync(someOtherPlaintextPassword, hash); // false
 */
export declare function compareSync(data: string | Buffer, encrypted: string): boolean;

/**
 * @param data The data to be encrypted.
 * @param encrypted The data to be compared against.
 * @return A promise to be either resolved with the comparison result salt or rejected with an Error
 *
 * @example
 * import * as bcrypt from 'bcrypt';
 * const myPlaintextPassword = 's0/\/\P4$$w0rD';
 * const someOtherPlaintextPassword = 'not_bacon';
 *
 * (async () => {
 *     // Load hash from your password DB.
 *     const result1 = await bcrypt.compare(myPlaintextPassword, hash);
 *     // result1 == true
 *
 *     const result2 = await bcrypt.compare(someOtherPlaintextPassword, hash);
 *     // result2 == false
 * })();
 */
export declare function compare(data: string | Buffer, encrypted: string): Promise<boolean>;

/**
 * @param data The data to be encrypted.
 * @param encrypted The data to be compared against.
 * @param callback A callback to be fire once the data has been compared. Uses eio making it asynchronous.
 *
 * @example
 * import * as bcrypt from 'bcrypt';
 * const myPlaintextPassword = 's0/\/\P4$$w0rD';
 * const someOtherPlaintextPassword = 'not_bacon';
 *
 * // Load hash from your password DB.
 * bcrypt.compare(myPlaintextPassword, hash, (err, result) => {
 *     // result == true
 * });
 * bcrypt.compare(someOtherPlaintextPassword, hash, (err, result) => {
 *     // result == false
 * });
 */
export declare function compare(
    data: string | Buffer,
    encrypted: string,
    callback: (err: Error | undefined, same: boolean) => any,
): void;

/**
 * @param encrypted Hash from which the number of rounds used should be extracted.
 * @returns The number of rounds used to encrypt a given hash.
 */
export declare function getRounds(encrypted: string): number;
