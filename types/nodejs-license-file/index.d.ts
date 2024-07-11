export function parse(options: ParseOptions): License;
export function generate(options: GenerateOptions): string;
export interface License {
    valid: boolean;
    serial: string;
    data: any;
}
export interface ParseOptions {
    publicKeyPath?: string | undefined;
    publicKey?: string | undefined;
    licenseFilePath?: string | undefined;
    licenseFile?: string | undefined;
    template: string;
}
export interface GenerateOptions {
    privateKeyPath?: string | undefined;
    privateKey?: string | undefined;
    template: string;
    data: any;
}
