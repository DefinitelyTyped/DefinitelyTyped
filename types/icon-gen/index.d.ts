// Type definitions for icon-gen 2.0
// Project: https://github.com/akabekobeko/npm-icon-gen#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace icongen {
    interface Options {
        favicon?: {
            ico: number[];
            name: string;
            sizes: number[];
        } | {};
        icns?: {
            name: string;
            sizes: number[];
        } | {};
        ico?: {
            name: string;
            sizes: number[];
        } | {};
        report?: boolean;
    }
}

declare function icongen(src: string, dest: string, options?: icongen.Options): Promise<string[]>;

export = icongen;
