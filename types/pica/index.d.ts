// Type definitions for pica 5.1
// Project: https://github.com/nodeca/pica
// Definitions by: Hamit YILMAZ <https://github.com/hmtylmz>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace pica {
    interface PicaOptions {
        // tile width/height.
        // Images are processed by regions, to restrict peak memory use. Default 1024.
        tile?: number;
        // list of features to use.
        // Default is [ 'js', 'wasm', 'ww' ]. Can be [ 'js', 'wasm', 'cib', 'ww' ] or [ 'all' ].
        // Note, resize via createImageBitmap() ('cib') disabled by default due problems with quality.
        features?: string[];
        // cache timeout, ms. Webworkers create is not fast.
        // This option allow reuse webworkers effectively. Default 2000.
        idle?: number;
        // max webworkers pool size. Default is autodetected CPU count, but not more than 4.
        concurrency?: number;
    }

    interface PicaResizeOptions {
        // 0..3. Default = 3 (lanczos, win=3).
        quality?: number;
        // use alpha channel. Default = false.
        alpha?: boolean;
        // >=0, in percents. Default = 0 (off). Usually between 50 to 100 is good.
        unsharpAmount?: number;
        //  0.5..2.0. By default it's not set. Radius of Gaussian blur.
        // If it is less than 0.5, Unsharp Mask is off. Big values are clamped to 2.0.
        unsharpRadius?: number;
        // 0..255. Default = 0. Threshold for applying unsharp mask.
        unsharpThreshold?: number;
        // Promise instance. If defined, current operation will be terminated on rejection.
        cancelToken?: Promise<unknown>;
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
        // 0..3. Default = 3 (lanczos, win=3).
        quality?: number;
        // use alpha channel. Default = false.
        alpha?: boolean;
        // >=0, in percents. Default = 0 (off). Usually between 50 to 100 is good.
        unsharpAmount?: number;
        // 0.5..2.0. Radius of Gaussian blur.
        // If it is less than 0.5, Unsharp Mask is off. Big values are clamped to 2.0.
        unsharpRadius?: number;
        // 0..255. Default = 0. Threshold for applying unsharp mask.
        unsharpThreshold?: number;
        // Optional. Output buffer to write data, if you don't wish pica to create new one.
        dest?: string;
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
            from: HTMLCanvasElement | HTMLImageElement | File | Blob,
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
