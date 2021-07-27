// Type definitions for @phc/bcrypt
// Project: https://github.com/simonepri/phc-bcrypt
// Definitions by: Toan Nguyen <https://github.com/vespaiach>

declare module '@phc/bcrypt' {
    type Options = {
        rounds?: number;
        saltSize?: number;
    };

    /**
     * Computes the hash string of the given password in the PHC format using bcrypt
     * package.
     * @public
     * @param  {string} password The password to hash.
     * @param  {Object} [options] Optional configurations related to the hashing
     * function.
     * @param  {number} [options.rounds=10] Optional
     * Must be an integer within the range (`4` <= `rounds` <= `31`).
     * @return {Promise.<string>} The generated secure hash string in the PHC
     * format.
     */
    export function hash(password: string, options?: Options): Promise<string>;

    /**
     * Determines whether or not the hash stored inside the PHC formatted string
     * matches the hash generated for the password provided.
     * @public
     * @param  {string} phcstr Secure hash string generated from this package.
     * @param  {string} password User's password input.
     * @returns {Promise.<boolean>} A boolean that is true if the hash computed
     * for the password matches.
     */
    export function verify(hash: string, plainPassword: string): Promise<boolean>;

    /**
     * Gets the list of all identifiers supported by this hashing function.
     * @public
     * @returns {string[]} A list of identifiers supported by this hashing function.
     */
    export function identifiers(): string[];
}
