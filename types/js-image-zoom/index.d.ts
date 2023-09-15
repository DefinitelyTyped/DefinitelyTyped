// Type definitions for js-image-zoom 0.7
// Project: https://github.com/malaman/js-image-zoom/#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:no-unnecessary-class there are no public  member methods
declare class ImageZoom {
    /**
     * Creates an instance of ImageZoom.
     * @param container container DOM element, which contains an image to be zoomed
     * @param opts js-image-zoom options
     */
    constructor(container: HTMLElement, opts: ImageZoom.Options);
}

declare namespace ImageZoom {
    interface Options {
        /**
         * width of the source image
         * @default 0
         */
        width?: number;
        /**
         * height of the source image
         * @default 0
         */
        height?: number;
        /**
         * width of the zoomed image. Zoomed image height equals source image height
         */
        zoomWidth?: number;
        /**
         * url of the source image. Provided if container does not contain img element as a tag
         */
        img?: string;
        /**
         * zoom scale. if not provided, scale is calculated as natural image size / image size,
         * provided in params (optional if zoomWidth param is provided)
         */
        scale?: number;
        /**
         * Zoomed image offset
         */
        offset?: Offset;
        /**
         * DOM node reference where zoomedImage will be appended to (default to the container element of image)
         */
        zoomContainer?: HTMLElement;
        /**
         * custom style applied to the zoomed image (i.e. 'opacity: 0.1;background-color: white;')
         */
        zoomStyle?: string;
        /**
         * position of zoomed image.
         * @default 'right'
         */
        zoomPosition?: ZoomPosition;
        /**
         * custom style applied to to zoom lents (i.e. 'opacity: 0.1;background-color: white;')
         */
        zoomLensStyle?: string;
    }

    interface Offset {
        vertical?: number;
        horizontal?: number;
    }

    type ZoomPosition = "top" | "left" | "bottom" | "right" | "original";
}

export = ImageZoom;
export as namespace ImageZoom;
