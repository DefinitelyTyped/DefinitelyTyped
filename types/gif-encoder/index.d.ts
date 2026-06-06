/// <reference types="node" />

import { Readable } from "stream";

type Pixels = ArrayLike<number>;

declare class GIFEncoder extends Readable {
    constructor(
        /**
         * Width, in pixels, of the GIF to output.
         */
        width: number,
        /**
         * Height, in pixels, of the GIF to output.
         */
        height: number,
        options?: {
            /**
             * Number, in bytes, to store in internal buffer. Defaults to 64kB.
             */
            highWaterMark?: number | undefined;
        },
    );

    read(size?: number): Buffer | null;

    on(
        event:
            | "close"
            | "end"
            | "pause"
            | "resume"
            | "readable"
            | "writeHeader#start"
            | "writeHeader#stop"
            | "frame#start"
            | "frame#stop"
            | "finish#start"
            | "finish#stop",
        listener: () => void,
    ): this;
    on(event: "data", listener: (chunk: Buffer) => void): this;
    on(event: "error", listener: (err: Error) => void): this;

    once(
        event:
            | "close"
            | "end"
            | "pause"
            | "resume"
            | "readable"
            | "writeHeader#start"
            | "writeHeader#stop"
            | "frame#start"
            | "frame#stop"
            | "finish#start"
            | "finish#stop",
        listener: () => void,
    ): this;
    once(event: "data", listener: (chunk: Buffer) => void): this;
    once(event: "error", listener: (err: Error) => void): this;

    /**
     * Set millisecond delay between frames.
     */
    setDelay(
        /**
         * Amount of milliseconds to delay between frames.
         */
        ms: number,
    ): void;

    /**
     * Set delay between frames based on frames per second. Cannot be used with setDelay().
     */
    setFrameRate(
        /**
         * Amount of frames per second.
         */
        framesPerSecond: number,
    ): void;

    /**
     * Alters behavior of how to render between frames.
     */
    setDispose(
        /**
         * If no transparent color has been set, defaults to 0.
         * Otherwise, defaults to 2.
         *
         * 0 -  No disposal specified. The decoder is
         *      not required to take any action.
         *
         * 1 -  Do not dispose. The graphic is to be left
         *      in place.
         *
         * 2 -  Restore to background color. The area used by the
         *      graphic must be restored to the background color.
         *
         * 3 -  Restore to previous. The decoder is required to
         *      restore the area overwritten by the graphic with
         *      what was there prior to rendering the graphic.
         */
        disposalCode: 0 | 1 | 2 | 3,
    ): void;

    /**
     * Sets the amount of times to repeat the GIF.
     */
    setRepeat(
        /**
         * If n is -1, play once.
         *
         * If n is 0, loop indefinitely.
         *
         * If n is a positive number, loop n times.
         */
        amount: number,
    ): void;

    /**
     * Sets the color which represents transparency in the GIF.
     */
    setTransparent(
        /**
         * RGB color to represent transparent background, e.g. 0x00FF00
         */
        color: number,
    ): void;

    /**
     * Set the quality (computational/performance trade-off).
     */
    setQuality(
        /**
         * A positive number.
         *
         * 1 is best colors, worst performance.
         *
         * 20 is suggested maximum but there is no limit.
         *
         * 10 is the default, provided an even trade-off.
         */
        quality: number,
    ): void;

    /**
     * Write out header bytes, following the GIF89a specification.
     */
    writeHeader(): void;

    /**
     * Write out a new frame to the GIF.
     */
    addFrame(
        /**
         * ArrayLike of pixels (0x00 - 0xFF) for the new frame.
         * It should follow the sequence of r, g, b, a and be 4 * height * width in length.
         * This can be collected from a canvas through context.getImageData(0, 0, width, height).data
         *
         * If used with the options palette and indexedPixels, then this becomes the index in the palette.
         */
        imageData: Pixels,
        /**
         * Optional parameter for options.
         */
        options?: {
            /**
             * Array of pixels to use as palette for the frame.
             * It should follow the sequence of r, g, b, a.
             *
             * Must be used with options.indexedPixels
             */
            palette: Pixels;
            /**
             * Indicator to treat imageData as RGBA values (false) or indices in palette (true)
             */
            indexedPixels: boolean;
        },
    ): void;

    /**
     * Write out footer bytes.
     */
    finish(): void;

    /**
     * We have a secondary internal buffer that collects each byte from writeByte.
     * This is to prevent create a new Buffer and data event for every byte of data.
     *
     * This method empties the internal buffer and pushes it out to the stream buffer for reading.
     */
    flushData(): void;

    /**
     * Internal store for imageData passed in by addFrame.
     */
    pixels: Pixels;

    /**
     * Internal store for palette passed in by addFrame.
     */
    userPalette: Pixels;

    /**
     * First part of addFrame; runs setImagePixels(removeAlphaChannel(imageData)) and runs analyzePixels().
     */
    analyzeImage(
        /**
         * ArrayLike of pixels (0x00 - 0xFF) for the analyzed frame.
         * It should follow the sequence of r, g, b, a and be 4 * height * width in length.
         * This can be collected from a canvas through context.getImageData(0, 0, width, height).data
         *
         * If used with the options palette and indexedPixels, then this becomes the index in the palette.
         */
        imageData: Pixels,
        /**
         * Optional parameter for options.
         */
        options?: {
            /**
             * Array of pixels to use as palette for the frame.
             * It should follow the sequence of r, g, b, a.
             *
             * Must be used with options.indexedPixels
             */
            palette: Pixels;
            /**
             * Indicator to treat imageData as RGBA values (false) or indices in palette (true)
             */
            indexedPixels: boolean;
        },
    ): void;

    /**
     * Reduces imageData into a Uint8Array of length 3 * width * height containing sequences of r, g, b; removing the alpha channel.
     */
    removeAlphaChannel(
        /**
         * ArrayLike of pixels (0x00 - 0xFF) for the source frame.
         * It should follow the sequence of r, g, b, a and be 4 * height * width in length.
         * This can be collected from a canvas through context.getImageData(0, 0, width, height).data
         */
        imageData: Pixels,
    ): void;

    /**
     * Save pixels as this.pixels for image analysis.
     */
    setImagePixels(
        /**
         * ArrayLike of pixels (0x00 - 0xFF) for the frame to save.
         * It should follow the sequence of r, g, b, a and be 4 * height * width in length.
         * This can be collected from a canvas through context.getImageData(0, 0, width, height).data
         */
        pixels: Pixels,
    ): void;

    /**
     * Save palette as this.userPalette for frame writing.
     */
    setImagePalette(
        /**
         * Array of pixels to use as palette for the frame.
         * It should follow the sequence of r, g, b, a.
         */
        palette: Pixels,
    ): void;

    /**
     * Second part of addFrame; behavior varies on if it is the first frame or following frame.
     *
     * In either case, it writes out a bunch of bytes about the image (e.g. palette, color tables).
     */
    writeImageInfo(): void;

    /**
     * Third part of addFrame; encodes the analyzed/indexed pixels for the GIF format.
     */
    outputImage(): void;
}

export = GIFEncoder;
