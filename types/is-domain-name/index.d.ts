// Type definitions for is-domain-name 1.0
// Project: https://github.com/emilbayes/is-domain-name#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = isDomainName;

/**
 * Validate Domain Names as outlined by RFC 2181.
 *
 * Domain names are composed of labels interleaved with a separator (`.`). Domain as allowed a
 * total length of 255 chars including separators. Labels should be between 1 and 63 octets.
 *
 * Labels allows domains to form a hierarchy, with the right most label acting as the root.
 * The leftmost label is often called the TLD (Top-Level Domain), the 2nd leftmost informally
 * called the domain and any label to the right of those called subdomains.
 *
 * A common domain with only a single label is `localhost`.
 *
 * This function checks the following:
 *
 * - The domain is no longer than 255 chars
 * - The domain is at least 2 chars. Even though `a` is technically allowed, this module does
 *   not allow it
 * - Labels are between 1 and 63 chars
 * - Labels start and end with alpha-numeric chars, allowing dashes in between
 * - An optional root dot can be allowed with a flag, eg. `example.com.`
 *
 * @param domainName The domain name to validate.
 * @param rootDot Whether or not to validate for a trailing dot, signifying the root.
 * @example
 * import * as assert from 'assert'
 * import isDomainName = require('is-domain-name')
 *
 * assert.ok(isDomainName('localhost'))
 * assert.ok(!isDomainName('-.-'))
 */
declare function isDomainName(
    domainName: string,
    /** @default false */
    rootDot?: boolean,
): boolean;
