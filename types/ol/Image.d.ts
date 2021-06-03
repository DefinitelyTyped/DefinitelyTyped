import { Extent } from './extent';
import ImageBase from './ImageBase';
import ImageState from './ImageState';

/**
 * A function that takes an {@link module:ol/Image~Image} for the image and a
 * {string} for the src as arguments. It is supposed to make it so the
 * underlying image {@link module:ol/Image~Image#getImage} is assigned the
 * content specified by the src. If not specified, the default is
 * <code>function(image, src) {
 *   image.getImage().src = src;
 * }</code>Providing a custom imageLoadFunction can be useful to load images with
 * post requests or - in general - through XHR requests, where the src of the
 * image element would be set to a data URI when the content is loaded.
 */
export type LoadFunction = (p0: ImageWrapper, p1: string) => void;
export default class ImageWrapper extends ImageBase {
    constructor(
        extent: Extent,
        resolution: number | undefined,
        pixelRatio: number,
        src: string,
        crossOrigin: string,
        imageLoadFunction: LoadFunction,
    );
    protected state: ImageState;
    getImage(): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    /**
     * Load the image or retry if loading previously failed.
     * Loading is taken care of by the tile queue, and calling this method is
     * only needed for preloading or for reloading in case of an error.
     */
    load(): void;
    setImage(image: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement): void;
}
export function listenImage(
    image: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement,
    loadHandler: () => any,
    errorHandler: () => any,
): () => void;
