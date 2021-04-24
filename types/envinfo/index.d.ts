// Type definitions for envinfo 7.8
// Project: https://github.com/tabrindle/envinfo#readme
// Definitions by: nashaofu <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Config {
    System?: string[];
    Binaries?: string[];
    Managers?: string[];
    Utilities?: string[];
    Servers?: string[];
    Virtualization?: string[];
    SDKs?: string[];
    IDEs?: string[];
    Languages?: string[];
    Databases?: string[];
    Browsers?: string[];
    npmPackages?: string | string[];
    npmGlobalPackages?: string | string[];
}

export interface RunConfig extends Config {
    preset?: string;
}

export interface Options {
    json?: boolean;
    markdown?: boolean;
    console?: boolean;
    title?: string;
    fullTree?: boolean;
    duplicates?: boolean;
    showNotFound?: boolean;
}

export interface CliOptions extends Options, Config {
    all?: boolean;
    raw?: boolean;
    helper?: string;
    preset?: string;
}

export interface Helpers {
    [key: string]: () => Promise<string>;
}

export function cli(options?: CliOptions): Promise<string>;

export const helpers: Helpers;

export function main(config?: Config, options?: Options): Promise<string>;

export function run(config?: RunConfig, options?: Options): Promise<string>;
