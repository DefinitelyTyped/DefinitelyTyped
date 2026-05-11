declare namespace pkginfo {
    interface Options {
        /** Boolean indicating whether to return only the latest package information from a registry. */
        latest?: boolean | undefined;
        /** Array of package names (required). */
        packages: string[];
        /** Registry port. Default: 443 (HTTPS) or 80 (HTTP). */
        port?: number | undefined;
        /** Registry protocol. Default: 'https'. */
        protocol?: "http" | "https" | undefined;
        /** Registry. Default: 'registry.npmjs.org'. */
        registry?: string | undefined;
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
