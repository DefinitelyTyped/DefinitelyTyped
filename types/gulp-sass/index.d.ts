/// <reference types="node"/>

import { Options } from "node-sass";

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

interface SassOptions extends Options {
    success?: ((results: SassResults) => any) | undefined;
    error?: ((err: Error) => any) | undefined;
    imagePaths?: string[] | undefined;
}

interface GulpSassOptions extends SassOptions {
    errLogToConsole?: boolean | undefined;
    onSuccess?: ((css: string) => any) | undefined;
    onError?: ((err: Error) => any) | undefined;
    sync?: boolean | undefined;
}

interface GulpSass {
    (opts?: GulpSassOptions): NodeJS.ReadWriteStream;
    logError(error?: string): void;
    sync(options?: GulpSassOptions): NodeJS.ReadWriteStream;
}

type Compiler = any;

interface GulpSassFactory {
    (compiler: Compiler): GulpSass;
}

declare var _tmp: GulpSassFactory;
export = _tmp;
