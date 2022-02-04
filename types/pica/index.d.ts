// Type definitions for pica 9.0
// Project: https://github.com/nodeca/pica
// Definitions by: Hamit YILMAZ <https://github.com/hmtylmz>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 sapphi-red <https://github.com/sapphi-red>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace pica {
    interface PicaOptions {
        // tile width/height.
        // Images are processed by regions, to restrict peak memory use. Default 1024.
        tile?: number | undefined;
        // list of features to use.
        // Default is [ 'js', 'wasm', 'ww' ]. Can be [ 'js', 'wasm', 'cib', 'ww' ] or [ 'all' ].
        // Note, `cib` is buggy in Chrome and not supports default `mks2013` filter.
        features?: string[] | undefined;
        // cache timeout, ms. Webworkers create is not fast.
        // This option allow reuse webworkers effectively. Default 2000.
        idle?: number | undefined;
        // max webworkers pool size. Default is autodetected CPU count, but not more than 4.
        concurrency?: number | undefined;
        // function which returns a new canvas, used internally by pica.
        // Default returns a <canvas> element but this function could return an OffscreenCanvas
        // instead (to run pica in a Service Worker).
        createCanvas?(width: number, height: number): HTMLCanvasElement;
    }

    interface PicaResizeOptions {
        // 0..3. deprecated, use `.filter` instead.
        quality?: number | undefined;
        // filter name. 'box' or 'hamming' or 'lanczos2' or 'lanczos3' or 'mks2013'. Default = 'mks2013'.
        // `mks2013` does both resize and sharpening, it's optimal and not recommended to change.
        filter?: string | undefined;
        // >=0, in percents. Default = 0 (off). Usually between 100 to 200 is good.
        // Note, `mks2013` filter already does optimal sharpening.
        unsharpAmount?: number | undefined;
        //  0.5..2.0. By default it's not set. Radius of Gaussian blur.
        // If it is less than 0.5, Unsharp Mask is off. Big values are clamped to 2.0.
        unsharpRadius?: number | undefined;
        // 0..255. Default = 0. Threshold for applying unsharp mask.
        unsharpThreshold?: number | undefined;
        // Promise instance. If defined, current operation will be terminated on rejection.
        cancelToken?: Promise<unknown> | undefined;
    }

    interface PicaResizeBufferOptions {
        // Uint8Array with source data.
        src: number[];
        // src image width.
        width: number;
        // src image height.
        height: number;
        // output width, >=0, in pixels.
        toWidth: number;
        // output height, >=0, in pixels.
        toHeigh: number;
        // 0..3. deprecated, use `.filter` instead.
        quality?: number | undefined;
        // filter name. Default = 'mks2013'.
        // `mks2013` does both resize and sharpening, it's optimal and not recommended to change.
        filter?: string | undefined;
        // >=0, in percents. Default = 0 (off). Usually between 100 to 200 is good.
        // Note, `mks2013` filter already does optimal sharpening.
        unsharpAmount?: number | undefined;
        // 0.5..2.0. Radius of Gaussian blur.
        // If it is less than 0.5, Unsharp Mask is off. Big values are clamped to 2.0.
        unsharpRadius?: number | undefined;
        // 0..255. Default = 0. Threshold for applying unsharp mask.
        unsharpThreshold?: number | undefined;
        // Optional. Output buffer to write data, if you don't wish pica to create new one.
        dest?: string | undefined;
    }

    interface Pica {
        /**
         * Resize image from one canvas (or image) to another.
         * Sizes are taken from source and destination objects.
         * Result is Promise, resolved with to on success.
         * (!) If you need to process multiple images, do it sequentially to optimize CPU & memory use.
         * Pica already knows how to use multiple cores (if browser allows).
         */
        resize(
            from: HTMLCanvasElement | HTMLImageElement | ImageBitmap | File | Blob,
            to: HTMLCanvasElement,
            options?: PicaResizeOptions,
        ): Promise<HTMLCanvasElement>;

        /**
         * Convenience method, similar to canvas.toBlob(), but with promise interface & polyfill for old browsers.
         */
        toBlob(canvas: HTMLCanvasElement, mimeType: string, quality?: number): Promise<Blob>;

        /**
         * Supplementary method, not recommended for direct use.
         * Resize Uint8Array with raw RGBA bitmap (don't confuse with jpeg / png / ... binaries).
         * It does not use tiles & webworkers. Left for special cases when you really need to process raw binary data (for example, if you decode jpeg files "manually").
         */
        resizeBuffer(options: PicaResizeBufferOptions): Promise<number[]>;
    }

    interface PicaStatic {
        new (config?: PicaOptions): Pica;
        (config?: PicaOptions): Pica;
    }
}

declare const pica: pica.PicaStatic;
export as namespace pica;

export = pica;
