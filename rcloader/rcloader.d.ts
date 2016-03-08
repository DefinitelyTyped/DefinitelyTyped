// Type definitions for rcloader
// Project: https://github.com/spalger/rcloader
// Definitions by: Panu Horsmalahti <https://github.com/panuhorsmalahti>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "rcloader" {
    interface Options {
        [property: string]: any;
        lookup?: boolean;
    }

    class RcLoader {
        constructor(configfilename: string, options: string | Options);
        for(path: string, callback?: (error: any, fileOpts: any) => void): void;
    }

    export = RcLoader;
}
