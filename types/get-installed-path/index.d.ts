// Type definitions for get-installed-path 4.0
// Project: https://github.com/tunnckoCore/get-installed-path
// Definitions by: Jamie Magee <https://github.com/JamieMagee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

export function getInstalledPath(name: string, opts?: Options): Promise<string>;
export function getInstalledPathSync(name: string, opts?: Options): string;

export interface Options {
    cwd?: string;
    local?: boolean;
    paths?: readonly string[];
}
