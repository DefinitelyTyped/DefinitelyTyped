/// <reference types="node"/>

import { CompileResult, FileImporter, Importer, Options } from "@sass/types";

interface GulpSassError extends Error {
    messageFormatted: string;
    messageOriginal: string;
    relativePath: string;
}

type GulpSassOptions<sync extends "sync" | "async", TNodePackageImporter extends {}> =
    & Omit<Options<sync>, "importers">
    & {
        importers?: (Importer<sync> | FileImporter<sync> | TNodePackageImporter)[];
    };

interface GulpSass<TNodePackageImporter extends {}> {
    (opts?: GulpSassOptions<"async", TNodePackageImporter>): NodeJS.ReadWriteStream;
    logError(error?: GulpSassError): void;
    sync(options?: GulpSassOptions<"sync", TNodePackageImporter>): NodeJS.ReadWriteStream;
}

interface Compiler<TNodePackageImporter extends {}> {
    compile(path: string, options: GulpSassOptions<"sync", TNodePackageImporter>): CompileResult;
    compileAsync(path: string, options: GulpSassOptions<"async", TNodePackageImporter>): Promise<CompileResult>;
    compileString(source: string, options: GulpSassOptions<"sync", TNodePackageImporter>): CompileResult;
    compileStringAsync(source: string, options: GulpSassOptions<"async", TNodePackageImporter>): Promise<CompileResult>;
}

interface GulpSassFactory {
    <TNodePackageImporter extends {}>(compiler: Compiler<TNodePackageImporter>): GulpSass<TNodePackageImporter>;
}

declare var _tmp: GulpSassFactory;
export = _tmp;
