// Type definitions for is-valid-domain 0.0
// Project: https://github.com/miguelmota/is-valid-domain
// Definitions by: Guille <https://github.com/guillenotfound>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function isValidDomain(
    text: string,
    opts?: { subdomain?: boolean | undefined; wildcard?: boolean | undefined },
): boolean;

export = isValidDomain;
