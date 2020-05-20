// Type definitions for npm-registry-package-info 1.0
// Project: https://github.com/kgryte/npm-registry-package-info#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace pkginfo {
    interface Options {
        /** Boolean indicating whether to return only the latest package information from a registry. */
        latest?: boolean;
        /** Array of package names (required). */
        packages: string[];
        /** Registry port. Default: 443 (HTTPS) or 80 (HTTP). */
        port?: number;
        /** Registry protocol. Default: 'https'. */
        protocol?: 'http' | 'https';
        /** Registry. Default: 'registry.npmjs.org'. */
        registry?: string;
    }

    interface Data {
        data: any;
        meta: {
            failure: number;
            success: number;
            total: number;
        };
    }

    type Callback = (error: Error | null, data: Data) => void;

    function factory(opts: Options, callback: Callback): () => void;
}

declare function pkginfo(opts: pkginfo.Options, callback: pkginfo.Callback): void;

export = pkginfo;
