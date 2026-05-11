interface Options {
    [property: string]: any;
    lookup?: boolean | undefined;
}

declare class RcLoader {
    constructor(configfilename: string, options: string | Options);
    for(path: string, callback?: (error: any, fileOpts: any) => void): void;
}

export = RcLoader;
