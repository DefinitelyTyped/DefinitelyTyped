/// <reference types="node" />

import { LegacySharedOptions as Options } from "sass";

interface SassResults {
    css: string;
    map: string;
    stats: {
        entry: string;
        start: Date;
        end: Date;
        duration: number;
        includedFiles: string[];
    };
}

type SassOptions = Options<"sync"> & {
    success?: ((results: SassResults) => any) | undefined;
    error?: ((err: Error) => any) | undefined;
    imagePaths?: string[] | undefined;
};

interface GulpSassOptions extends SassOptions {
    errLogToConsole?: boolean | undefined;
    onSuccess?: ((css: string) => any) | undefined;
    onError?: ((err: Error) => any) | undefined;
    sync?: boolean | undefined;
}

interface Sass {
    (opts?: GulpSassOptions): NodeJS.ReadWriteStream;
    logError(error?: string): void;
    sync(options?: GulpSassOptions): NodeJS.ReadWriteStream;
}

declare var _tmp: Sass;
export = _tmp;
