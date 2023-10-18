type Types = "normal" | "normal+" | "medium" | "medium+" | "extra" | "onlyNumbers";
export { asyncValidator, genAsync, genSync, syncValidator, withMyOwnCharacters };
/*
 * @description sync token generator
 *
 * @param {string} type "normal", "normal+", "medium", "medium+", "extra" or "onlyNumbers"
 *
 * - "normal" = (a-z)
 * - "normal+" = (A-Z)
 * - "medium" = (a-z + 0-9)
 * - "medium+" = (A-Z + 0-9)
 * - "extra" = (a-Z + 0-9)
 * - "onlyNumbers" = (0-9)
 *
 * @param {number} length length of token
 * @example genSync("extra", 100)
 * @returns {string}
 */
declare function genSync(type: Types, length: number): string;
/*
 * @description async token generator
 *
 * @param {string} type "normal", "normal+", "medium", "medium+", "extra" or "onlyNumbers"
 *
 * - "normal" = (a-z)
 * - "normal+" = (A-Z)
 * - "medium" = (a-z + 0-9)
 * - "medium+" = (A-Z + 0-9)
 * - "extra" = (a-Z + 0-9)
 * - "onlyNumbers" = (0-9)
 *
 * @param {number} length length of token
 * @example genAsync("extra", 100)
 * @returns {Promise<string>}
 */
declare function genAsync(type: Types, length: number): Promise<string>;
/*
 * @description Create a Token with your own characters
 *
 * @param {string} characters string Sample: "abc123" generate a token with a,b,c,1,2,3 characters
 * @param {number} length length of the token
 * @example withMyOwnCharacters("abc123", 100)
 * @returns {Promise<string>}
 */
declare function withMyOwnCharacters(type: string, length: number): Promise<string>;
/*
 * @description sync validator for genSync() and genAsync() or other Token
 *
 * @param {string} type same type as the generated Token
 *
 * @param {number} length same length as the generated Token
 *
 * @param {string} token The received token from genSync() or genAsync()
 *
 * @param {string | undefined} allowedPlusCharacters (This is optional) extra allowed characters in string -> "!%/"
 *
 * @example syncValidator("extra", 50, token, "")
 * @returns {boolean}
 */
declare function syncValidator(type: Types, length: number, token: string, allowedPlusCharacters?: string): boolean;
/*
 * @description async validator for genSync() and genAsync() or other Token
 *
 * @param {string} type same type as the generated Token
 *
 * @param {number} length same length as the generated Token
 *
 * @param {string} token The received token from genSync() or genAsync()
 *
 * @param {string | undefined} allowedPlusCharacters (This is optional) extra allowed characters in string -> "!%/"
 *
 * @example asyncValidator("extra", 50, token, "")
 * @returns {Promise<boolean>}
 */
declare function asyncValidator(
    type: Types,
    length: number,
    token: string,
    allowedPlusCharacters?: string,
): Promise<boolean>;
