/// <reference types="node" />
import * as fs from "fs";

declare namespace ncp {
    interface File {
        name: string;
        mode: number;

        /** Accessed time */
        atime: Date;

        /** Modified time */
        mtime: Date;
    }

    interface Options {
        filter?: RegExp | ((filename: string) => boolean) | undefined;
        transform?: ((read: NodeJS.ReadableStream, write: NodeJS.WritableStream, file: File) => void) | undefined;
        clobber?: boolean | undefined;
        dereference?: boolean | undefined;
        stopOnErr?: boolean | undefined;
        errs?: fs.PathLike | undefined;
        limit?: number | undefined;
    }
}

declare const ncp: {
    (source: string, destination: string, callback: (err: Error[] | null) => void): void;
    (
        source: string,
        destination: string,
        options: ncp.Options & { stopOnErr: true },
        callback: (err: Error | null) => void,
    ): void;
    (
        source: string,
        destination: string,
        options: ncp.Options & { errs?: undefined },
        callback: (err: Error[] | null) => void,
    ): void;
    (
        source: string,
        destination: string,
        options: ncp.Options & { errs: fs.PathLike },
        callback: (err: fs.WriteStream | null) => void,
    ): void;
    (
        source: string,
        destination: string,
        options: ncp.Options,
        callback: (err: Error | Error[] | fs.WriteStream | null) => void,
    ): void;

    ncp: typeof ncp;

    /**
     * **NOTE:** This function provides design-time support for util.promisify.
     *
     * It does not exist at runtime.
     */
    __promisify__(source: string, destination: string, options?: ncp.Options): Promise<void>;
};

export = ncp;
