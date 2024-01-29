interface Options {
    dirname: string;
    filter?: ((name: string, path: string) => string | false | undefined) | RegExp | undefined;
    excludeDirs?: RegExp | undefined;
    map?: ((name: string, path: string) => string) | undefined;
    resolve?: ((module: any) => any) | undefined;
    recursive?: true | false | undefined;
}

declare function requireAll(options: string | Options): { [key: string]: any };

export = requireAll;
