// Type definitions for lockfile-lint-api 5.1
// Project: https://github.com/lirantal/lockfile-lint/tree/master/packages/lockfile-lint-api
// Definitions by: Markus Lasermann <https://github.com/snaptags>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

export type hosts = ReadonlyArray<string>;

export interface packageMetadata {
    version: string;
    resolved?: string;
    dependencies?: {};
}

export type packages = Record<string, packageMetadata>;

export interface validationOptions {
    emptyHostname?: boolean;
}

export interface error {
    message: string;
    package: string;
}

export interface validationError {
    type: 'error';
    errors: error[];
}

export interface validationSuccess {
    type: 'success';
    object: packages;
}

export type validationResult = validationError | validationSuccess;

export class ValidateHost {
    constructor(packages: { packages: packages });
    validate: (hosts: hosts, options?: validationOptions) => validationResult;
    validateSingle: (packageName: string, hosts: hosts) => boolean;
}

export class ValidateHttps {
    constructor(packages: { packages: packages });
    validate: () => validationResult;
}

export class ValidateScheme {
    constructor(packages: { packages: packages });
    validate: (schemes: ReadonlyArray<string>) => validationResult;
}

export class ValidateUrl {
    constructor(packages: { packages: packages });
    validate: (allowedUrls: ReadonlyArray<string>, options?: validationOptions) => validationResult;
    validateSingle: (packageName: string, allowedUrls: hosts) => boolean;
}

export interface ParseLockfileOptions {
    lockfilePath: string;
    lockfileType: string;
}

export interface ParseLockfileResult {
    type: 'success';
    object: packages;
}

export class ParseLockfile {
    constructor(options: ParseLockfileOptions);
    parseSync: () => ParseLockfileResult;
}
