// Type definitions for tableify 1.1
// Project: https://github.com/wankdanker/node-tableify
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = tableify;

declare function tableify<T extends Record<string, any>>(
    obj: T | ReadonlyArray<T>,
    columns?: ReadonlyArray<keyof T> | false,
    parents?: any[]
): string;
declare function tableify(obj: any): string;
declare namespace tableify {
    interface Config {
        classes?: boolean;
        classPrefix?: string;
    }
    function defaults(config: Config): {
        <T extends Record<string, any>>(
            obj: T | ReadonlyArray<T>,
            columns?: ReadonlyArray<keyof T> | false,
            parents?: any[]
        ): string;
        (obj: any): string;
    };
}
