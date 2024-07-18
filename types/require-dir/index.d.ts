interface options {
    recurse?: boolean | undefined;
    duplicates?: boolean | undefined;
    extensions?: string[] | undefined;
    filter?: any;
    mapKey?: any;
    mapValue?: any;
}

declare function requireDir(directory: string, options?: options): { [path: string]: any };

export = requireDir;
