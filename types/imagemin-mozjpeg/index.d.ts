// Type definitions for imagemin-mozjpeg 8.0
// Project: https://github.com/imagemin/imagemin-mozjpeg#readme
// Definitions by: Jeff Chan <https://github.com/hkjeffchan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from "imagemin";

declare function imageminMozjpeg(options?: imageminMozjpeg.Options): Plugin;

declare namespace imageminMozjpeg {
    interface Options {
        /** Compression quality, in range 0 (worst) to 100 (perfect). */
        quality?: number | undefined;

        /**
         * false creates baseline JPEG file.
         * @default true
         */
        progressive?: boolean | undefined;

        /**
         * Input file is Targa format (usually not needed).
         * @default false
         */
        targa?: boolean | undefined;

        /**
         * Revert to standard defaults instead of mozjpeg defaults.
         * @default false
         */
        revert?: boolean | undefined;

        /**
         * Disable progressive scan optimization.
         * @default false
         */
        fastCrush?: boolean | undefined;

        /**
         * Set DC scan optimization mode.
         *  0 One scan for all components
         *  1 One scan per component
         *  2 Optimize between one scan for all components and one scan for 1st component plus one scan for remaining components
         * @default 1
         */
        dcScanOpt?: number | undefined;

        /**
         * Trellis optimization.
         * @default true
         */
        trellis?: boolean | undefined;

        /**
         * Trellis optimization of DC coefficients.
         * @default true
         */
        trellisDC?: boolean | undefined;

        /**
         * Set Trellis optimization method. Available methods: psnr, hvs-psnr, ssim, ms-ssim
         * @default 'hvs-psnr'
         */
        tune?: "psnr" | "hvs-psnr" | "ssim" | "ms-ssim" | undefined;

        /**
         * Black-on-white deringing via overshoot.
         * @default true
         */
        overshoot?: boolean | undefined;

        /**
         * Use arithmetic coding.
         * @default false
         */
        arithmetic?: boolean | undefined;

        /**
         * Set DCT method:
         * int Use integer DCT
         * fast Use fast integer DCT (less accurate)
         * float Use floating-point DCT
         * @default 'int'
         */
        dct?: "int" | "fast" | "float" | undefined;

        /**
         * Use 8-bit quantization table entries for baseline JPEG compatibility.
         * @default false
         */
        quantBaseline?: boolean | undefined;

        /**
         * Use predefined quantization table.
         * 0 JPEG Annex K
         * 1 Flat
         * 2 Custom, tuned for MS-SSIM
         * 3 ImageMagick table by N. Robidoux
         * 4 Custom, tuned for PSNR-HVS
         * 5 Table from paper by Klein, Silverstein and Carney
         */
        quantTable?: number | undefined;

        /**
         * Set the strength of smooth dithered input. (1...100)
         */
        smooth?: number | undefined;

        /**
         * Set the maximum memory to use in kilobytes.
         */
        maxMemory?: number | undefined;

        /**
         * Set component sampling factors. Each item should be in the format HxV, for example 2x1.
         */
        sample?: string[] | undefined;
    }
}

export = imageminMozjpeg;
