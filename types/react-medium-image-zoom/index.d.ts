// Type definitions for react-medium-image-zoom 3.0
// Project: https://github.com/rpearce/react-medium-image-zoom#readme
// Definitions by: James Bellamy <https://github.com/james-ff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import * as React from "react";

export interface ImageZoom_Image {
    src: string;
    alt?: string;
    className?: string;
    style?: object;
}

export interface ImageZoom_ZoomImage {
    src?: string;
    alt?: string;
    className?: string;
    style?: object;
}

export interface ImageZoomDefaultStyles {
    zoomContainer?: object;
    overlay?: object;
    image?: object;
    zoomImage?: object;
}

export interface ImageZoomProps {
    image: ImageZoom_Image;
    zoomImage?: ImageZoom_ZoomImage;
    zoomMargin?: number;
    isZoomed?: boolean;
    shouldHandleZoom?: () => boolean;
    shouldReplaceImage?: boolean;
    shouldRespectMaxDimension?: boolean;
    defaultStyles?: ImageZoomDefaultStyles;
    onZoom?: () => object;
    onUnzoom?: () => object;
}

export default class ImageZoom extends React.Component<ImageZoomProps, any> {}
