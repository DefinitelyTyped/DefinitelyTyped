import * as React from 'react';
import ModalImage, { ModalImageProps } from 'react-modal-image';

const props: ModalImageProps = {
    /* The small image to display */
    small: 'https://example.com/image-small.jpg',

    /* The large image to display */
    large: 'https://example.com/image-large.jpg',

    /* The alt tag for the image */
    alt: 'Example Image',

    /* Should the download button be hidden? */
    hideDownload: true,

    /* Should the zoom button be hidden? */
    hideZoom: true,

    /* Should the rotate button be hidden? */
    hideRotate: true,

    /* Should the fullscreen button be hidden? */
    hideFullscreen: true,

    /* The download url for the image */
    download: 'https://example.com/image-download.jpg',

    /* The color to display in the background. */
    imageBackgroundColor: '#000',

    /* The zoom scale */
    zoomMargin: 10,

    /* Should the modal close when the background is clicked? */
    shouldHideOnClickOutside: true,

    /* Should the modal close when the esc key is pressed? */
    shouldCloseOnEsc: true,

    /* Custom styles for the modal */
    customModalStyles: { width: '50%', height: '50%' },

    /* The custom loader to display while the image is loading */
    customLoader: <div>Loading...</div>,

    /* The class name for the modal */
    className: 'example-class',
};

class ReactModalImageTest extends React.Component {
    render() {
        return <ModalImage {...props} />;
    }
}
