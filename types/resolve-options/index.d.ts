interface Options {
    cwd?: string | ((...args: any[]) => string) | undefined;
    buffer?: boolean | ((...args: any[]) => boolean) | undefined;
    read?: boolean | ((...args: any[]) => boolean) | undefined;
    base?: string | ((...args: any[]) => string) | undefined;
    since?: Date | number | ((...args: any[]) => Date | number) | undefined;
    passthrough?: boolean | ((...args: any[]) => boolean) | undefined;
    allowEmpty?: boolean | ((...args: any[]) => boolean) | undefined;
    mode?: string | number | ((...args: any[]) => string | number) | undefined;
    dirMode?: string | number | ((...args: any[]) => string | number) | undefined;
    overwrite?: boolean | ((...args: any[]) => boolean) | undefined;
    deep?: boolean | ((...args: any[]) => boolean) | undefined;
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
