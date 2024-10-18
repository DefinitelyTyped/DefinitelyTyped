/**
 * This package parses SPDX license expression strings describing license terms, like `package.json` license strings,
 * into consistently structured ECMAScript object
 */
declare function parse(source: string): parse.Info;

declare namespace parse {
    type Info = LicenseInfo | ConjunctionInfo;

    interface LicenseInfo {
        license: string;
        plus?: true | undefined;
    }

    interface ConjunctionInfo {
        conjunction: "and" | "or";
        left: LicenseInfo | ConjunctionInfo;
        right: LicenseInfo | ConjunctionInfo;
    }

    interface Token {
        type: "OPERATOR" | "LICENSE" | "DOCUMENTREF" | "LICENSEREF" | "EXCEPTION";
        string: string;
    }
}

export = parse;
