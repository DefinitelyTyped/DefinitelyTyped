// Type definitions for react-modal-image 2.6
// Project: https://github.com/aautio/react-modal-image#readme
// Definitions by: Steel <https://github.com/CodeSteel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as React from "react";

export interface ModalImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /* The small image to display */
    small: string;

    /* The srcset attribute for the small image */
    smallSrcSet?: string;

    /* The medium image to display */
    medium?: string;

    /* The large image to display */
    large?: string;

    /* The alt tag for the image */
    alt?: string;

    /* Should the download button be hidden? */
    hideDownload?: boolean;

    /* Should the zoom button be hidden? */
    hideZoom?: boolean;

    /* Should the rotate button be shown? */
    showRotate?: boolean;

    /* The color to display in the background. */
    imageBackgroundColor?: string;

    /* The class name for the modal */
    className?: string;
}

declare class ModalImage extends React.Component<ModalImageProps> {}
declare class Lightbox extends React.Component<ModalImageProps> {}

export default ModalImage;
export { Lightbox };
