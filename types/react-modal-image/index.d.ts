import * as React from "react";

export interface ModalImageProps {
    /** Optional. `class` for the small preview image. */
    className?: string | undefined;

    /** Optional. `alt` for the small image and the heading text in Lightbox. */
    alt?: string | undefined;

    /** `src` for the small preview image. */
    small: string;

    /** Optional. `srcSet` for the small preview image. */
    smallSrcSet?: string | undefined;

    /** Optional if `large` is defined. Image shown when zoomed out in Lightbox. */
    medium?: string | undefined;

    /**	Optional if `medium` is defined. Image shown when zoomed in Lightbox. Downloadable. */
    large?: string | undefined;

    /** Optional. Set to `true` to hide download-button from the Lightbox. */
    hideDownload?: boolean | undefined;

    /** Optional. Set to `true` to hide zoom-button from the Lightbox. */
    hideZoom?: boolean | undefined;

    /** Optional. Set to `true` to show rotate-button within the Lightbox. */
    showRotate?: boolean | undefined;

    /** Optional. Background color of the image shown in Lightbox. Defaults to black. Handy for transparent images. */
    imageBackgroundColor?: string | undefined;
}

export interface LightboxProps {
    /** Optional if `large` is defined. Image shown when zoomed out in Lightbox. */
    medium?: string | undefined;

    /**	Optional if `medium` is defined. Image shown when zoomed in Lightbox. Downloadable. */
    large?: string | undefined;

    /** Optional. `alt` for the small image and the heading text in Lightbox. */
    alt?: string | undefined;

    /** Will be invoked when the Lightbox requests to be closed. */
    onClose?: (() => void) | undefined;

    /** Optional. Set to `true` to hide download-button from the Lightbox. */
    hideDownload?: boolean | undefined;

    /** Optional. Set to `true` to hide zoom-button from the Lightbox. */
    hideZoom?: boolean | undefined;

    /** Optional. Set to `true` to show rotate-button within the Lightbox. */
    showRotate?: boolean | undefined;

    /** Optional. Background color of the image shown in Lightbox. Defaults to black. Handy for transparent images. */
    imageBackgroundColor?: string | undefined;
}

declare class ModalImage extends React.Component<ModalImageProps> {}
declare class Lightbox extends React.Component<LightboxProps> {}

export default ModalImage;
export { Lightbox };
