/// <reference types="node" />

/**
 * Convert PNG to ICO in memory
 *
 * @param input Array of PNG image buffers.
 *
 * The images must have a size of `16x16`, `24x24`, `32x32`, `48x48`, `64x64`, `128x128` or `256x256` and they must
 * have an 8 bit per sample (channel) bit-depth (on Unix you can check this with the `file` command: RGB(A) is
 * supported, while [colormap](https://en.wikipedia.org/wiki/Indexed_color) is not, because it's 8 bits per pixel
 * instead of 8 bits per channel, which is 24 or 32 bits per pixel depending on the presence of the alpha channel).
 * These are limitations in the underlying [`pngjs`](https://github.com/lukeapage/pngjs#pngjs) library. If you have a
 * colormap PNG you can convert it to an RGB/RGBA PNG with commonly used image editing tools.
 */
declare function toIco(input: string | Buffer | Array<string | Buffer>, options?: toIco.ToIcoOptions): Promise<Buffer>;

// eslint-disable-next-line no-redeclare
declare namespace toIco {
    interface ToIcoOptions {
        /**
         * Use the largest image and resize to sizes defined using the [sizes](#sizes) option.
         *
         * @default false
         */
        resize?: boolean | undefined;

        /**
         * Array of sizes to use when resizing.
         *
         * @default [16, 24, 32, 48, 64, 128, 256]
         */
        sizes?: number[] | undefined;
    }
}

export = toIco;
