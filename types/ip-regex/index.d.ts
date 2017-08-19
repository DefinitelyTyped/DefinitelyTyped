// Type definitions for ip-regex 2.0
// Project: https://github.com/sindresorhus/ip-regex
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Regular expression for matching IP addresses (IPv4 & IPv6). */
declare function ipRegex(options?: {
    /** Only match an exact string. Useful with RegExp#test to check if a string is an IP address. */
    exact?: boolean;
}): RegExp;

export = ipRegex;
