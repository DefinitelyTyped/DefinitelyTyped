// Type definitions for url-regex-safe 1.0
// Project: https://github.com/niftylettuce/url-regex-safe
// Definitions by: Stuart Long <https://github.com/stuartlong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Options = Partial<{
    exact: boolean;
    strict: boolean;
    auth: boolean;
    localhost: boolean;
    parens: boolean;
    apostrophes: boolean;
    trailingPeriod: boolean;
    ipv4: boolean;
    ipv6: boolean;
    tlds: string[];
    returnString: boolean;
}>;

declare function createUrlRegExp(options?: Options): RegExp;

export as namespace urlRegexSafe;

export = createUrlRegExp;
