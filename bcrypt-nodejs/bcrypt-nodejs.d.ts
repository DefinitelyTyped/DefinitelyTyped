// Type definitions for bcrypt-nodejs
// Project: https://github.com/shaneGirish/bcrypt-nodejs
// Definitions by: David Broder-Rodgers <https://github.com/DavidBR-SW/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "bcrypt-nodejs" {
    /**
     * Generate a salt synchronously
     * @param rounds Number of rounds to process the data for (default - 10)
     * @return Generated salt
     */
    export function genSaltSync(rounds?: number): string;

    /**
     * Generate a salt asynchronously
     * @param rounds Number of rounds to process the data for (default - 10)
     * @param callback Callback with error and resulting salt, to be fired once the salt has been generated
     */
    export function genSalt(rounds: number, callback: (error: Error, result: string) => void): void;

    /**
     * Generate a hash synchronously
     * @param data Data to be encrypted
     * @param salt Salt to be used in encryption (default - new salt generated with 10 rounds)
     * @return Generated hash
     */
    export function hashSync(data: string, salt?: string): string;

    /**
     * Generate a hash asynchronously
     * @param data Data to be encrypted
     * @param salt Salt to be used in encryption
     * @param callback Callback with error and hashed result, to be fired once the data has been encrypted
     */
    export function hash(data: string, salt: string, callback: (error: Error, result: string) => void): void;

    /**
     * Generate a hash asynchronously
     * @param data Data to be encrypted
     * @param salt Salt to be used in encryption
     * @param progressCallback Callback to be fired multiple times during the hash calculation to signify progress
     * @param callback Callback with error and hashed result, to be fired once the data has been encrypted
     */
    export function hash(data: string, salt: string, progressCallback: () => void, callback: (error: Error, result: string) => void): void;

    /**
     * Compares data with a hash synchronously
     * @param data Data to be compared
     * @param hash Hash to be compared to
     * @return true if matching, false otherwise
     */
    export function compareSync(data: string, hash: string): boolean;

    /**
     * Compares data with a hash asynchronously
     * @param data Data to be compared
     * @param hash Hash to be compared to
     * @param callback Callback with error and match result, to be fired once the data has been compared
     */
    export function compare(data: string, hash: string, callback: (error: Error, result: boolean) => void): void;

    /**
     * Get number of rounds used for hash
     * @param hash Hash from which the number of rounds used should be extracted
     * @return number of rounds used to encrypt a given hash
     */
    export function getRounds(hash: string): number;
}
