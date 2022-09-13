// Type definitions for shasum 1.0
// Project: https://github.com/dominictarr/shasum
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Single function that return the sha1sum. Installing this is just a little bit quicker than reading the crypto documentation.
 *   var shasum = require('shasum')
 *   shasum(string || buffer || object)
 * It also works in the browser with browserify.
 */
declare function shasum(str: any, alg?: string | null, format?: "hex" | "latin1" | "base64"): string;

export = shasum;
