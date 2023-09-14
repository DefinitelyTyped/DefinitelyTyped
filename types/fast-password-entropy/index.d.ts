// Type definitions for fast-password-entropy 1.1
// Project: https://github.com/autonomoussoftware/fast-password-entropy#readme
// Definitions by: Josh Hoover <https://github.com/floomby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Quickly calculates the entropy of a password
 * Based on http://resources.infosecinstitute.com/password-security-complexity-vs-length/
 */
declare function passwordEntropy(str: string): number;

export = passwordEntropy;
