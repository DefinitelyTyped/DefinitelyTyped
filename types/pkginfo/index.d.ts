/// <reference types="node" />

declare namespace PkgInfo {
    interface Options {
        dir?: string;
        include: string[];
    }

    interface FindResults {
        dir?: string;
        package: Record<string, any>;
    }

    interface PkgInfo {
        (pmodule: NodeJS.Module, options?: Options | string[] | string, ...properties: string[]): PkgInfo;

        //
        // ### function find (dir)
        // #### @pmodule {Module} Parent module to read from.
        // #### @dir {string} **Optional** Directory to start search from.
        // Searches up the directory tree from `dir` until it finds a directory
        // which contains a `package.json` file.
        //
        read(
            pmodule: NodeJS.Module,
            dir?: string,
        ): FindResults;

        find(
            pmodule: NodeJS.Module,
            dir?: string,
        ): Record<string, any>;
    }
}

declare const pkgInfo: PkgInfo.PkgInfo & { version: string };

export = pkgInfo;
