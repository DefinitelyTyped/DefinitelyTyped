import * as React from "react";
import ModalImage, { Lightbox, LightboxProps, ModalImageProps } from "react-modal-image";

// @ts-ignore - props.small is required.
<ModalImage />;

<ModalImage small="image-small.jpg" />;

<ModalImage
    className="example-class"
    alt="Example Image"
    small="image-small.jpg"
    smallSrcSet="small-src-set"
    medium="image-medium.jpg"
    large="image-large.jpg"
    hideDownload={true}
    hideZoom={true}
    showRotate={true}
    imageBackgroundColor="#000"
/>;

<Lightbox />;

<Lightbox
    medium="image-medium.jpg"
    large="image-large.jpg"
    alt="Example Image"
    onClose={() => {}}
    hideDownload={true}
    hideZoom={true}
    showRotate={true}
    imageBackgroundColor="#000"
/>;
