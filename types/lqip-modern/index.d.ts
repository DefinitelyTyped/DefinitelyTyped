// Type definitions for lqip-modern 1.1
// Project: https://github.com/transitive-bullshit/lqip-modern/
// Definitions by: Yaroslav Kiliba <https://github.com/Dattaya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

/// <reference types="node" />

import sharp = require("sharp");

declare namespace lqip {
    interface LqipResult {
        content: Buffer;
        metadata: {
            originalWidth: number;
            originalHeight: number;
            width: number;
            height: number;
            type: string;
            dataURIBase64: string;
        };
    }

    type OutputFormat = 'webp' | 'jpeg' | 'jpg';

    interface OutputOptions {
        'webp': sharp.WebpOptions;
        'jpeg': sharp.JpegOptions;
        'jpg': sharp.JpegOptions;
    }

    interface LqipOptions<T extends OutputFormat> {
        concurrency?: number;
        outputFormat?: T;
        outputOptions?: OutputOptions[T];
        resize?: number | ReadonlyArray<any>;
    }
}

declare function lqip<T extends lqip.OutputFormat = 'webp'>(input: string | Buffer, options?: lqip.LqipOptions<T>): Promise<lqip.LqipResult>;
declare function lqip<T extends lqip.OutputFormat = 'webp'>(input: ReadonlyArray<string> | ReadonlyArray<Buffer>, options?: lqip.LqipOptions<T>): Promise<lqip.LqipResult[]>;

export = lqip;
