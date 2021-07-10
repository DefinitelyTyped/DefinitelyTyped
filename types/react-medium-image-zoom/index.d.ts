// Type definitions for react-medium-image-zoom 3.0
// Project: https://github.com/rpearce/react-medium-image-zoom#readme
// Definitions by: James Bellamy <https://github.com/james-ff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import * as React from "react";

export interface ImageZoom_Image {
    src: string;
    alt?: string | undefined;
    className?: string | undefined;
    style?: object | undefined;
}

export interface ImageZoom_ZoomImage {
    src?: string | undefined;
    alt?: string | undefined;
    className?: string | undefined;
    style?: object | undefined;
}

export interface ImageZoomDefaultStyles {
    zoomContainer?: object | undefined;
    overlay?: object | undefined;
    image?: object | undefined;
    zoomImage?: object | undefined;
}

export interface ImageZoomProps {
    image: ImageZoom_Image;
    zoomImage?: ImageZoom_ZoomImage | undefined;
    zoomMargin?: number | undefined;
    isZoomed?: boolean | undefined;
    shouldHandleZoom?: (() => boolean) | undefined;
    shouldReplaceImage?: boolean | undefined;
    shouldRespectMaxDimension?: boolean | undefined;
    defaultStyles?: ImageZoomDefaultStyles | undefined;
    onZoom?: (() => object) | undefined;
    onUnzoom?: (() => object) | undefined;
}

export default class ImageZoom extends React.Component<ImageZoomProps, any> {}
