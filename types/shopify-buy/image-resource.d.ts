import Resource from './resource';
import { Image } from './storefront/common';

export default class ImageResource extends Resource {
    helpers: {
        /**
         * Generates the image src for a resized image with maximum dimensions `maxWidth` and `maxHeight`.
         * Images do not scale up.
         */
        imageForSize(image: Image, options: { maxWidth: number; maxHeight: number }): string;
    };
}
