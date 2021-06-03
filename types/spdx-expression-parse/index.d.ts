// Type definitions for spdx-expression-parse 3.0
// Project: https://github.com/jslicense/spdx-expression-parse.js#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * This package parses SPDX license expression strings describing license terms, like `package.json` license strings,
 * into consistently structured ECMAScript object
 */
declare function parse(source: string): parse.Info;

declare namespace parse {
    type Info = LicenseInfo | ConjuctionInfo;

    interface LicenseInfo {
        license: string;
        plus?: true;
    }

    interface ConjuctionInfo {
        conjunction: 'and' | 'or';
        left: LicenseInfo | ConjuctionInfo;
        right: LicenseInfo | ConjuctionInfo;
    }

    interface Token {
        type: 'OPERATOR' | 'LICENSE' | 'DOCUMENTREF' | 'LICENSEREF' | 'EXCEPTION';
        string: string;
    }
}

export = parse;
