// Type definitions for probe-image-size 7.2
// Project: https://github.com/nodeca/probe-image-size#readme
// Definitions by: Jinesh Shah <https://github.com/jineshshah36>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import needle = require("needle");
import { Transform } from "stream";

/**
 * Get image size without full download. Supported image types: JPG, GIF, PNG, WebP, BMP, TIFF, SVG, PSD.
 */
declare function probe(source: string, opts?: needle.NeedleOptions): Promise<probe.ProbeResult>;
declare function probe(source: NodeJS.ReadableStream, keepOpen?: boolean): Promise<probe.ProbeResult>;

declare class ProbeError extends Error {
    constructor(
        message: string,
        code?: "ECONTENT" | null,
        statusCode?: number,
    )
}

declare namespace probe {
    interface ProbeResult {
        width: number;
        height: number;
        length: number;
        type: string;
        mime: string;
        wUnits: string;
        hUnits: string;
        url: string;
        orientation?: Orientation | undefined;
        variants?: Variant[] | undefined;
    }

    type Orientation = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    interface Variant {
        width: number;
        height: number;
    }

    const Error: typeof ProbeError;

    function sync(data: Buffer): ProbeResult | null;

    // tslint:disable-next-line:no-empty-interface
    interface ParserStream extends Transform {}

    type Parser = () => ParserStream;

    interface Parsers {
        avif: Parser;
        bmp: Parser;
        gif: Parser;
        ico: Parser;
        jpeg: Parser;
        png: Parser;
        psd: Parser;
        svg: Parser;
        tiff: Parser;
        webp: Parser;
    }

    const parsers: Parsers;
}

export = probe;
