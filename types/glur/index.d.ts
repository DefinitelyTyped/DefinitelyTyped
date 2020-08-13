// Type definitions for glur 1.1
// Project: https://github.com/andr83/glur/issues
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Fast Gaussian Blur in pure JavaScript, via IIR filer.
 * Speed does not depend on blur radius
 * @param src - typed array with image RGBA data (will be updated with blurred image)
 * @param width - image width
 * @param height - image height
 * @param radius - blur radius
 */
declare function blurRGBA(src: Uint8Array, width: number, height: number, radius: number): void;

/**
 * Fast gaussian blur in pure JavaScript via IIR filer
 */
export = blurRGBA;
