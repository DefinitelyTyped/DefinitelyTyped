// Type definitions for bcrypt 5.0
// Project: https://www.npmjs.org/package/bcrypt
// Definitions by:  Peter Harris <https://github.com/codeanimal>
//                  Ayman Nedjmeddine <https://github.com/IOAyman>
//                  David Stapleton <https://github.com/dstapleton92>
//                  BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * @param rounds    The cost of processing the data. Default 10.
 * @param minor     The minor version of bcrypt to use. Either 'a' or 'b'. Default 'b'.
 */
export declare function genSaltSync(rounds?: number, minor?: "a" | "b"): string;

/**
 * @param rounds    The cost of processing the data. Default 10.
 * @param minor     The minor version of bcrypt to use. Either 'a' or 'b'. Default 'b'.
 * @return A promise to be either resolved with the generated salt or rejected with an Error
 */
export declare function genSalt(rounds?: number, minor?: "a" | "b"): Promise<string>;

/**
 * @param rounds    The cost of processing the data. Default 10.
 * @param minor     The minor version of bcrypt to use. Either 'a' or 'b'. Default 'b'.
 * @param callback  A callback to be fire once the salt has been generated. Uses eio making it asynchronous.
 */
export declare function genSalt(callback: (err: Error | undefined, salt: string) => any): void;
export declare function genSalt(rounds: number, callback: (err: Error | undefined, salt: string) => any): void;
export declare function genSalt(
    rounds: number,
    minor: "a" | "b",
    callback: (err: Error | undefined, salt: string) => any,
): void;

/**
 * @param data  The data to be encrypted.
 * @param salt  The salt to be used in encryption.
 */
export declare function hashSync(data: string | Buffer, saltOrRounds: string | number): string;

/**
 * @param data      The data to be encrypted.
 * @param salt      The salt to be used in encryption.
 * @return A promise to be either resolved with the encrypted data salt or rejected with an Error
 */
export declare function hash(data: string | Buffer, saltOrRounds: string | number): Promise<string>;

/**
 * @param data      The data to be encrypted.
 * @param salt      The salt to be used in encryption.
 * @param callback  A callback to be fired once the data has been encrypted. Uses eio making it asynchronous.
 */
export declare function hash(
    data: string | Buffer,
    saltOrRounds: string | number,
    callback: (err: Error | undefined, encrypted: string) => any,
): void;

/**
 * @param data      The data to be encrypted.
 * @param encrypted The data to be compared against.
 */
export declare function compareSync(data: string | Buffer, encrypted: string): boolean;

/**
 * @param data      The data to be encrypted.
 * @param encrypted The data to be compared against.
 * @return A promise to be either resolved with the comparison result salt or rejected with an Error
 */
export declare function compare(data: string | Buffer, encrypted: string): Promise<boolean>;

/**
 * @param data      The data to be encrypted.
 * @param encrypted The data to be compared against.
 * @param callback  A callback to be fire once the data has been compared. Uses eio making it asynchronous.
 */
export declare function compare(
    data: string | Buffer,
    encrypted: string,
    callback: (err: Error | undefined, same: boolean) => any,
): void;

/**
 * Return the number of rounds used to encrypt a given hash
 *
 * @param encrypted Hash from which the number of rounds used should be extracted.
 */
export declare function getRounds(encrypted: string): number;
