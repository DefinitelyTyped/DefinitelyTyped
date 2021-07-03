// Type definitions for get-image-colors 4.0
// Project: https://github.com/colorjs/get-image-colors#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Color } from 'chroma-js';

/**
 * Extract colors from images. Supports GIF, JPG, PNG, and even SVG!
 */
declare function colorPalette(input: Buffer, options: colorPalette.Options, callback: Color[]): void;
declare function colorPalette(input: Buffer, type: string, callback: colorPalette.Callback): void;
declare function colorPalette(input: Buffer, type: string): Promise<Color[]>;
declare function colorPalette(input: string, options?: colorPalette.Options): Promise<Color[]>;
declare function colorPalette(input: string, callback: colorPalette.Callback): void;

declare namespace colorPalette {
    interface Options {
        /**
         * @default undefined
         */
        type?: string;
        /**
         * @default 5
         */
        count?: number;
    }

    /**
     * If you don't like promises, you can use node-style callbacks too
     */
    type Callback = (error: Error | null, colors: Color[]) => void;
}

export = colorPalette;
