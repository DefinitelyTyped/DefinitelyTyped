// Type definitions for archy
// Project: https://github.com/substack/node-archy
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8


declare function archy(obj: archy.Data, prefix?: string, opts?: archy.Options): string;
declare function archy(obj: string, prefix?: string, opts?: archy.Options): string;

declare namespace archy {
    interface Data {
        label: string;
        nodes?: (Data | string)[];
    }
    interface Options {
        unicode?: boolean;
    }
}

export = archy;
