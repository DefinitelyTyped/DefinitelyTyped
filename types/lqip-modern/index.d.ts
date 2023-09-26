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
            type: OutputFormat;
            dataURIBase64: string;
        };
    }

    type OutputFormat = WebpOptions["outputFormat"] | JpegOptions["outputFormat"] | JpgOptions["outputFormat"];

    type LqipOptions = WebpOptions | JpegOptions | JpgOptions | DefaultOptions;

    interface DefaultOptions {
        concurrency?: number | undefined;
        resize?: number | ReadonlyArray<any> | undefined;
    }

    interface WebpOptions extends DefaultOptions {
        readonly outputFormat?: "webp" | undefined;
        readonly outputOptions?: sharp.WebpOptions | undefined;
    }
    interface JpegOptions extends DefaultOptions {
        readonly outputFormat: "jpeg";
        readonly outputOptions?: sharp.JpegOptions | undefined;
    }
    interface JpgOptions extends DefaultOptions {
        readonly outputFormat: "jpg";
        readonly outputOptions?: sharp.JpegOptions | undefined;
    }
}

declare function lqip(input: string | Buffer, options?: lqip.LqipOptions): Promise<lqip.LqipResult>;
declare function lqip(
    input: ReadonlyArray<string> | ReadonlyArray<Buffer>,
    options?: lqip.LqipOptions,
): Promise<lqip.LqipResult[]>;

export = lqip;
