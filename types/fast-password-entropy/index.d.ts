/**
 * Quickly calculates the entropy of a password
 * Based on http://resources.infosecinstitute.com/password-security-complexity-vs-length/
 */
declare function passwordEntropy(str: string): number;

export = passwordEntropy;
