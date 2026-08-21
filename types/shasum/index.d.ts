/**
 * Single function that return the sha1sum. Installing this is just a little bit quicker than reading the crypto documentation.
 *   var shasum = require('shasum')
 *   shasum(string || buffer || object)
 * It also works in the browser with browserify.
 */
declare function shasum(str: any, alg?: string | null, format?: "hex" | "latin1" | "base64"): string;

export = shasum;
