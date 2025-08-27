/// <reference types="node" />

export = svgRender;

/**
 * Render high-quality PNG images from an SVG.
 *
 * @example
 * import { promises as fs } from 'fs';
 * import render = require('svg-render');
 *
 * (async () => {
 *   const outputBuffer = await render({
 *     buffer: await fs.readFile('/path/to/my/input.svg'),
 *     width: 512
 *   });
 *
 *   await fs.writeFile('./output.png', outputBuffer);
 * })();
 */
declare function svgRender(options: svgRender.Options): Promise<Buffer>;

declare namespace svgRender {
    interface Options {
        /**
         * The SVG being rendered.
         */
        buffer: Buffer;

        /**
         * The desired width of the output PNG. Defaults to the width defined in the SVG
         * (or proportionally scaled based on `height` when defined).
         */
        width?: number | undefined;

        /**
         * The desired height of the output PNG. Defaults to the height defined in the SVG
         * (or proportionally scaled based on `width` when defined).
         */
        height?: number | undefined;

        /**
         * Whether to replace instances of `use` tags in the SVG with the contents that
         * those tags are linking to. This is generally necessary for rendering method
         * being used to work correctly.
         *
         * @default true
         */
        expandUseTags?: boolean | undefined;
    }
}
