// Type definitions for lqip-modern 1.1
// Project: https://github.com/transitive-bullshit/lqip-modern/
// Definitions by: Yaroslav Kiliba <https://github.com/Dattaya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

/// <reference types="node" />

import sharp = require('sharp');

declare namespace lqip {
    interface LqipResult {
        content: Buffer;
        metadata: {
            originalWidth: number;
            originalHeight: number;
            width: number;
            height: number;
            type: OutputFormat;
            dataURIBase64: string;
        };
    }

    type OutputFormat = WebpOptions['outputFormat'] | JpegOptions['outputFormat'] | JpgOptions['outputFormat'];

    type LqipOptions = WebpOptions | JpegOptions | JpgOptions | DefaultOptions;

    interface DefaultOptions {
        concurrency?: number;
        resize?: number | ReadonlyArray<any>;
    }

    interface WebpOptions extends DefaultOptions {
        readonly outputFormat?: 'webp';
        readonly outputOptions?: sharp.WebpOptions;
    }
    interface JpegOptions extends DefaultOptions {
        readonly outputFormat: 'jpeg';
        readonly outputOptions?: sharp.JpegOptions;
    }
    interface JpgOptions extends DefaultOptions {
        readonly outputFormat: 'jpg';
        readonly outputOptions?: sharp.JpegOptions;
    }
}

declare function lqip(input: string | Buffer, options?: lqip.LqipOptions): Promise<lqip.LqipResult>;
declare function lqip(
    input: ReadonlyArray<string> | ReadonlyArray<Buffer>,
    options?: lqip.LqipOptions,
): Promise<lqip.LqipResult[]>;

export = lqip;
