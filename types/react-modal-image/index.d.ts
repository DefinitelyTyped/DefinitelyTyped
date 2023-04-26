// Type definitions for react-modal-image 2.6
// Project: https://github.com/aautio/react-modal-image#readme
// Definitions by: Steel <https://github.com/CodeSteel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as React from 'react';

export interface ModalImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /* The small image to display */
    small: string;

    /* The large image to display */
    large: string;

    /* The alt tag for the image */
    alt?: string;

    /* Should the download button be hidden? */
    hideDownload?: boolean;

    /* Should the zoom button be hidden? */
    hideZoom?: boolean;

    /* Should the rotate button be hidden? */
    hideRotate?: boolean;

    /* Should the fullscreen button be hidden? */
    hideFullscreen?: boolean;

    /* The download url for the image */
    download?: string;

    /* The color to display in the background. */
    imageBackgroundColor?: string;

    /* The zoom scale */
    zoomMargin?: number;

    /* Should the modal close when the background is clicked? */
    shouldHideOnClickOutside?: boolean;

    /* Should the modal close when the esc key is pressed? */
    shouldCloseOnEsc?: boolean;

    /* Custom styles for the modal */
    customModalStyles?: React.CSSProperties;

    /* The custom loader to display while the image is loading */
    customLoader?: React.ReactNode;

    /* The class name for the modal */
    className?: string;
}

// export default function ModalImage(props: ModalImageProps): JSX.Element;
declare class ModalImage extends React.Component<ModalImageProps> {}

export default ModalImage;
