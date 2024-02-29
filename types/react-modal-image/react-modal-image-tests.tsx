import * as React from "react";
import ModalImage, { Lightbox, ModalImageProps } from "react-modal-image";

const props: ModalImageProps = {
    /* The small image to display */
    small: "https://example.com/image-small.jpg",

    /* The large image to display */
    large: "https://example.com/image-large.jpg",

    /* The alt tag for the image */
    alt: "Example Image",

    /* Should the download button be hidden? */
    hideDownload: true,

    /* Should the zoom button be hidden? */
    hideZoom: true,

    /* The color to display in the background. */
    imageBackgroundColor: "#000",

    /* The class name for the modal */
    className: "example-class",
};

class ReactModalImageTest extends React.Component {
    render() {
        return (
            <>
                <ModalImage {...props} />
                <Lightbox {...props} />
            </>
        );
    }
}
