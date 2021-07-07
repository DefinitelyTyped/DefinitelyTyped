import { ImageLoadObject, Image } from "./Objects";

export type ImageLoaderOptions = any;
export type ImageLoader = (imageId: string, options?: ImageLoaderOptions) => ImageLoadObject;
/**
 * Loads an image given an imageId and optional priority and returns a promise which will resolve to
 * the loaded image object or fail if an error occurred.  The loaded image is not stored in the cache.
 *
 * @param imageId A Cornerstone Image Object's imageId
 * @param [options] Options to be passed to the Image Loader
 *
 * @returns An Object which can be used to act after an image is loaded or loading fails
 */
export function loadImage(imageId: string, options?: ImageLoaderOptions): Promise<Image>;
/**
 * Loads an image given an imageId and optional priority and returns a promise which will resolve to
 * the loaded image object or fail if an error occurred. The image is stored in the cache.
 *
 * @param imageId A Cornerstone Image Object's imageId
 * @param [options] Options to be passed to the Image Loader
 *
 * @returns Image Loader Object
 */
export function loadAndCacheImage(imageId: string, options?: ImageLoaderOptions): Promise<Image>;
/**
 * Registers an imageLoader plugin with cornerstone for the specified scheme
 *
 * @param scheme The scheme to use for this image loader (e.g. 'dicomweb', 'wadouri', 'http')
 * @param imageLoader A Cornerstone Image Loader function
 */
export function registerImageLoader(scheme: string, imageLoader: ImageLoader): void;
/**
 * Registers a new unknownImageLoader and returns the previous one
 *
 * @param imageLoader A Cornerstone Image Loader
 *
 * @returns The previous Unknown Image Loader
 */
export function registerUnknownImageLoader(imageLoader: ImageLoader): ImageLoader | undefined;
