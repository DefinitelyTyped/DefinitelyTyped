/// <reference types="node"/>

import { LegacyException, LegacyResult, LegacySharedOptions } from "@sass/types";

interface GulpSassError extends Error {
    messageFormatted: string;
    messageOriginal: string;
    relativePath: string;
}

type LegacyGulpSassOptions<sync extends "sync" | "async", TNodePackageImporter extends {}> =
    & Omit<LegacySharedOptions<sync>, "pkgImporter">
    & {
        pkgImporter?: TNodePackageImporter;
    };

interface LegacyGulpSass<TNodePackageImporter extends {}> {
    (opts?: LegacyGulpSassOptions<"async", TNodePackageImporter>): NodeJS.ReadWriteStream;
    logError(error?: GulpSassError): void;
    sync(options?: LegacyGulpSassOptions<"sync", TNodePackageImporter>): NodeJS.ReadWriteStream;
}

interface GulpSassInjectedOptions {
    data: string;
    file?: string;
    indentedSyntax?: boolean;
}

interface LegacyCompiler<TNodePackageImporter extends {}> {
    render(
        options: LegacyGulpSassOptions<"async", TNodePackageImporter> & GulpSassInjectedOptions,
        callback: (exception?: LegacyException, result?: LegacyResult) => void,
    ): void;
    renderSync(options: LegacyGulpSassOptions<"sync", TNodePackageImporter> & GulpSassInjectedOptions): LegacyResult;
}

interface LegacyGulpSassFactory {
    <TNodePackageImporter extends {}>(
        compiler: LegacyCompiler<TNodePackageImporter>,
    ): LegacyGulpSass<TNodePackageImporter>;
}

declare var _tmp: LegacyGulpSassFactory;
export = _tmp;
