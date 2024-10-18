/// <reference types="node" />

import { Options, Output } from "clean-css";

declare namespace GulpCleanCss {
    interface Details {
        stats: Output["stats"];
        errors: Output["errors"];
        warnings: Output["warnings"];
        path: string;
        name: string;
    }
}

declare function GulpCleanCss(
    options?: Options,
    callback?: (details: GulpCleanCss.Details) => void,
): NodeJS.ReadWriteStream;

export = GulpCleanCss;
