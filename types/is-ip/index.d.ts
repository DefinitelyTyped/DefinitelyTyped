// Type definitions for is-ip 2.0
// Project: https://github.com/sindresorhus/is-ip#readme
// Definitions by: coderslagoon <https://github.com/coderslagoon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Check if input is IPv4 or IPv6. */
declare function isIp(input: string): boolean;

declare namespace isIp {
    /** Check if input is IPv4. */
    function v4(input: string): boolean;

    /** Check if input is IPv6. */
    function v6(input: string): boolean;
}

export = isIp;
