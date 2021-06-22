// Type definitions for nodejs-license-file 4.0
// Project: https://github.com/bushev/nodejs-license-file
// Definitions by: Troy McKinnon <https://github.com/trodi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function parse(options: ParseOptions): License;
export function generate(options: GenerateOptions): string;
export interface License {
    valid: boolean;
    serial: string;
    data: any;
}
export interface ParseOptions {
    publicKeyPath?: string;
    publicKey?: string;
    licenseFilePath?: string;
    licenseFile?: string;
    template: string;
}
export interface GenerateOptions {
    privateKeyPath?: string;
    privateKey?: string;
    template: string;
    data: any;
}
