// Type definitions for resolve-options 1.1
// Project: https://github.com/gulpjs/resolve-options
// Definitions by: Przemysław Struciński <https://github.com/delprzemo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

interface Options {
    cwd?: string | ((...args: any[]) => string);
    buffer?: boolean | ((...args: any[]) => boolean);
    read?: boolean | ((...args: any[]) => boolean);
    base?: string | ((...args: any[]) => string);
    since?: Date | number | ((...args: any[]) => Date | number);
    passthrough?: boolean | ((...args: any[]) => boolean);
    allowEmpty?: boolean | ((...args: any[]) => boolean);
    mode?: string | number | ((...args: any[]) => string | number);
    dirMode?: string | number | ((...args: any[]) => string | number);
    overwrite?: boolean | ((...args: any[]) => boolean);
    deep?: boolean | ((...args: any[]) => boolean);
}

interface ConfigItem {
    type: string | string[];
    default?: any;
}

interface Resolver {
    resolve: (key: string) => number | string | boolean | Date | undefined | null;
}

interface Config {
    [par: string]: ConfigItem;
}

declare function createResolver(config: Config, options: Options): Resolver;

export = createResolver;
