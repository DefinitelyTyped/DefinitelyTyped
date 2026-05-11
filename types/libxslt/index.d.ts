import * as xmljs from "libxmljs";

import { ApplyCallback, ApplyDocumentCallback, ApplyStringCallback, ParseCallback } from "./internal-types";
export const libxmljs: typeof xmljs;

export interface ApplyOptions {
    outputFormat: "string" | "document";
    noWrapParams?: boolean | undefined;
}

export interface Stylesheet {
    apply(source: string, params?: object): string;
    apply(source: xmljs.Document, params?: object): xmljs.Document;
    apply(
        source: string | xmljs.Document,
        params: object,
        options: { outputFormat: "string"; noWrapParams?: boolean | undefined },
    ): string;
    apply(
        source: string | xmljs.Document,
        params: object,
        options: { outputFormat: "document"; noWrapParams?: boolean | undefined },
    ): xmljs.Document;
    apply(source: string | xmljs.Document, params?: object, options?: ApplyOptions): string | xmljs.Document;

    apply(source: string, callback: ApplyStringCallback): void;
    apply(source: xmljs.Document, callback: ApplyDocumentCallback): void;
    apply(source: string, params: object, callback: ApplyStringCallback): void;
    apply(source: xmljs.Document, params: object, callback: ApplyDocumentCallback): void;
    apply(
        source: string | xmljs.Document,
        params: object,
        options: { outputFormat: "string"; noWrapParams?: boolean | undefined },
        callback: ApplyStringCallback,
    ): void;
    apply(
        source: string | xmljs.Document,
        params: object,
        options: { outputFormat: "document"; noWrapParams?: boolean | undefined },
        callback: ApplyDocumentCallback,
    ): void;
    apply(source: string | xmljs.Document, params: object, options: ApplyOptions, callback: ApplyCallback): void;

    applyToFile(sourcePath: string, callback: ApplyStringCallback): void;
    applyToFile(sourcePath: string, params: object, callback: ApplyStringCallback): void;
    applyToFile(sourcePath: string, params: object, options: ApplyOptions, callback: ApplyStringCallback): void;
}

export function parse(source: string | xmljs.Document): Stylesheet;
export function parse(source: string | xmljs.Document, callback: ParseCallback): void;

export function parseFile(sourcePath: string, callback: ParseCallback): void;
