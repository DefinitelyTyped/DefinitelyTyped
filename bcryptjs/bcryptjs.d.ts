// Type definitions for bcryptjs
// Project: https://github.com/dcodeIO/bcrypt.js
// Definitions by: David Price <https://github.com/davidpricedev>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * Since bcryptjs has the same interface as bcrypt, most of the definitions were borrowed from the existing bcrypt definitions.
 * So most of the credit goes to: Peter Harris <https://github.com/codeanimal>
 *
 * dcodeIO is the handle of the author of the library.
 */
declare module dcodeIO {

    export var bcrypt: IBcryptJs;

    export interface IBcryptJs {
        /**
         * @param rounds  The cost of processing the data. Default 10.
         */
        genSaltSync(rounds?: number): string;

        /**
         * @param rounds    The cost of processing the data. Default 10.
         * @param callback  A callback to be fire once the sald has been generated. Uses eio making it asynchronous.
         */
        genSalt(rounds: number, callback: (err: Error, salt: string) => void): void;
        /**
         * @param callback  A callback to be fire once the sald has been generated. Uses eio making it asynchronous.
         */
        genSalt(callback: (err: Error, salt: string) => void): void;

        /**
         * @param data  The data to be encrypted.
         * @param salt  The salt to be used in encryption.
         */
        hashSync(data: any, salt: string): string;
        /**
         * @param data    The data to be encrypted.
         * @param rounds  A salt will be generated using the rounds specified.
         */
        hashSync(data: any, rounds: number): string;

        /**
         * @param data      The data to be encrypted.
         * @param salt      The salt to be used in encryption.
         * @param callback  A callback to be fired once the data has been encrypted. Uses eio making it asynchronous.
         */
        hash(data: any, salt: string, callback: (err: Error, encrypted: string) => void): void;
        /**
         * @param data      The data to be encrypted.
         * @param rounds    A salt will be generated using the rounds specified.
         * @param callback  A callback to be fired once the data has been encrypted. Uses eio making it asynchronous.
         */
        hash(data: any, rounds: number, callback: (err: Error, encrypted: string) => void): void;

        /**
         * @param data      The data to be encrypted.
         * @param encrypted The data to be compared against.
         */
        compareSync(data: any, encrypted: string): boolean;

        /**
         * @param data      The data to be encrypted.
         * @param encrypted The data to be compared against.
         * @param callback  A callback to be fire once the data has been compared. Uses eio making it asynchronous.
         */
        compare(data: any, encrypted: string, callback: (err: Error, same: boolean) => void): void;

        /**
         * Return the number of rounds used to encrypt a given hash
         *
         * @param encrypted Hash from which the number of rounds used should be extracted.
         */
        getRounds(encrypted: string): number;
    }
}