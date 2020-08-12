// Type definitions for lockfile-lint-api 5.1
// Project: https://github.com/lirantal/lockfile-lint/tree/master/packages/lockfile-lint-api
// Definitions by: Markus Lasermann <https://github.com/snaptags>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

export type Hosts = ReadonlyArray<string>;

export interface PackageMetadata {
    version: string;
    resolved?: string;
    dependencies?: Record<string, string>; // e.g. {'balanced-match': '^1.0.0', 'concat-map': '0.0.1'}
}

export type Packages = Record<string, PackageMetadata>;

export interface ValidationOptions {
    emptyHostname?: boolean;
}

export interface Error {
    message: string;
    package: string;
}

export interface ValidationError {
    type: 'error';
    errors: Error[];
}

export interface ValidationSuccess {
    type: 'success';
    object: Packages;
}

export type ValidationResult = ValidationError | ValidationSuccess;

export class ValidateHost {
    constructor(packages: { packages: Packages });
    validate(hosts: Hosts, options?: ValidationOptions): ValidationResult;
    validateSingle(packageName: string, hosts: Hosts): boolean;
}

export class ValidateHttps {
    constructor(packages: { packages: Packages });
    validate(): ValidationResult;
}

export class ValidateScheme {
    constructor(packages: { packages: Packages });
    validate(schemes: ReadonlyArray<string>): ValidationResult;
}

export class ValidateUrl {
    constructor(packages: { packages: Packages });
    validate(allowedUrls: ReadonlyArray<string>, options?: ValidationOptions): ValidationResult;
    validateSingle(packageName: string, allowedUrls: Hosts): boolean;
}

export interface ParseLockfileOptions {
    lockfilePath: string;
    lockfileType: string;
}

export interface ParseLockfileResult {
    type: 'success';
    object: Packages;
}

export class ParseLockfile {
    constructor(options: ParseLockfileOptions);
    parseSync(): ParseLockfileResult;
}
