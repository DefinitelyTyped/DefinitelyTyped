// Type definitions for merge-images 1.2
// Project: https://github.com/lukechilds/merge-images
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Mateus Nardo <https://github.com/mdnm>
//                 Kyle Hensel <https://github.com/k-yle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export as namespace mergeImages;

export = mergeImages;

/**
 * @returns A Promise which resolves to a base64 data URI.
 *
 * @example
 * import mergeImages = require('merge-images');
 *
 * mergeImages(['/body.png', '/eyes.png', '/mouth.png'])
 *   .then(b64 => document.querySelector('img').src = b64);
 *   // data:image/png;base64,iVBORw0KGgoAA...
 */
declare function mergeImages(sources: mergeImages.ImageSource[], options?: mergeImages.Options): Promise<string>;

declare namespace mergeImages {
    type Image = string | Buffer;

    type ImageSource = Image | { src: Image; x?: number; y?: number; opacity?: number };

    interface Options {
        /**
         * A DOMString indicating the image format.
         *
         * @default 'image/png'
         */
        format?: string;

        /**
         * A number between `0` and `1` indicating image quality if the requested format is `'image/jpeg'` or `'image/webp'`.
         *
         * @default 0.92
         */
        quality?: number;

        /**
         * The width in pixels the rendered image should be. Defaults to the width of the widest source image.
         *
         * @default undefined
         *
         * @example
         * mergeImages(['/body.png', '/eyes.png', '/mouth.png'], {
         *   width: 128,
         * })
         *   .then(b64 => ...);
         *   // data:image/png;base64,iVBORw0KGgoAA...
         */
        width?: number;

        /**
         * The height in pixels the rendered image should be. Defaults to the height of the tallest source image.
         *
         * @default undefined
         *
         * @example
         * mergeImages(['/body.png', '/eyes.png', '/mouth.png'], {
         *   height: 128,
         * })
         *   .then(b64 => ...);
         *   // data:image/png;base64,iVBORw0KGgoAA...
         */
        height?: number;

        /**
         * `Canvas` implementation to be used to allow usage outside of the browser. e.g Node.js with [node-canvas](https://github.com/Automattic/node-canvas).
         *
         * @default undefined
         *
         * @example
         * import mergeImages = require('merge-images');
         * import { Canvas, Image } from 'canvas';
         *
         * mergeImages(['./body.png', './eyes.png', './mouth.png'], {
         *   Canvas: Canvas,
         *   Image: Image
         * })
         *   .then(b64 => ...);
         *   // data:image/png;base64,iVBORw0KGgoAA...
         */
        Canvas?: any;

        /**
         * `Image` implementation to be used to allow usage outside of the browser. e.g Node.js with node-canvas.
         * This should be a valid image source for the node-canvas `Image` rather than a DOM `Image`.
         * Check the [node-canvas](https://github.com/Automattic/node-canvas) docs for more information on valid Image sources.
         *
         * @default undefined
         *
         * @example
         * import mergeImages = require('merge-images');
         * import { Canvas, Image } from 'canvas';
         *
         * mergeImages(['./body.png', './eyes.png', './mouth.png'], {
         *   Canvas: Canvas,
         *   Image: Image
         * })
         *   .then(b64 => ...);
         *   // data:image/png;base64,iVBORw0KGgoAA...
         */
        Image?: any;

        /**
         * The `crossOrigin` attribute that `Image` instances should use. e.g `anonymous` to [support CORS-enabled images](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image).
         *
         * @default undefined
         */
        crossOrigin?: "anonymous" | "use-credentials" | "";
    }
}
