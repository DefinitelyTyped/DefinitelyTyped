// Type definitions for du 1.0
// Project: https://github.com/rvagg/node-du#readme
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    disk?: boolean;
    filter?: (dir: string) => boolean;
}

declare function du(dir: string, options?: Options): Promise<number>;
declare function du(dir: string, options: Options, callback: (err: Error | null, data?: number) => any): void;
declare function du(dir: string, callback: (err: Error | null, data?: number) => any): void;

export = du;
