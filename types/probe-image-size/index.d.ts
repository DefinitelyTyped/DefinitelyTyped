// Type definitions for probe-image-size 5.0
// Project: https://github.com/nodeca/probe-image-size#readme
// Definitions by: Jinesh Shah <https://github.com/jineshshah36>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

/**
 * Get image size without full download. Supported image types: JPG, GIF, PNG, WebP, BMP, TIFF, SVG, PSD.
 */
declare function probe(source: string, opts: probe.ProbeOptions, callback: probe.ProbeCallback): void;
declare function probe(source: string, opts?: probe.ProbeOptions): Promise<probe.ProbeResult>;
declare function probe(source: string | NodeJS.ReadableStream, callback: probe.ProbeCallback): void;
declare function probe(source: NodeJS.ReadableStream): Promise<probe.ProbeResult>;

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
    }

    interface ProbeOptions {
        retries?: number;
        timeout?: number;
    }

    interface ProbeError extends Error {
        code?: 'ECONTENT';
        status?: number;
    }

    type ProbeCallback = (err: ProbeError | null, result: ProbeResult) => void;

    function sync(data: Buffer): ProbeResult | null;
}

export = probe;
