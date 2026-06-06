/// <reference types="node" />

import { Color } from "chroma-js";

/**
 * Extract colors from images. Supports GIF, JPG, PNG, and even SVG!
 */
declare function colorPalette(
    input: Buffer | string,
    typeOrOptions: string | colorPalette.Options,
    callback: colorPalette.Callback,
): void;
declare function colorPalette(input: Buffer | string, typeOrOptions?: string | colorPalette.Options): Promise<Color[]>;
declare function colorPalette(input: Buffer | string, callback: colorPalette.Callback): void;

declare namespace colorPalette {
    interface Options {
        /**
         * @default undefined
         */
        type?: string | undefined;
        /**
         * @default 5
         */
        count?: number | undefined;
    }

    /**
     * If you don't like promises, you can use node-style callbacks too
     */
    type Callback = (error: Error | null, colors: Color[]) => void;
}

export = colorPalette;
