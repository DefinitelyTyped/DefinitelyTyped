/// <reference types="jquery"/>

interface CropperOptions {
    viewMode?: number | undefined;
    dragMode?: string | undefined;
    initialAspectRatio?: number | undefined;
    aspectRatio?: number | undefined;
    data?: any;
    preview?: any;
    responsive?: boolean | undefined;
    restore?: boolean | undefined;
    checkCrossOrigin?: boolean | undefined;
    checkOrientation?: string | undefined;
    modal?: boolean | undefined;
    guides?: boolean | undefined;
    center?: boolean | undefined;
    highlight?: boolean | undefined;
    background?: boolean | undefined;
    autoCrop?: boolean | undefined;
    autoCropArea?: number | undefined;
    movable?: boolean | undefined;
    rotatable?: boolean | undefined;
    scalable?: boolean | undefined;
    zoomable?: boolean | undefined;
    zoomOnTouch?: boolean | undefined;
    zoomOnWheel?: boolean | undefined;
    wheelZoomRatio?: number | undefined;
    cropBoxMovable?: number | undefined;
    cropBoxResizable?: number | undefined;
    toggleDragModeOnDblclick?: number | undefined;
    minContainerWidth?: number | undefined;
    minContainerHeight?: number | undefined;
    minCanvasWidth?: number | undefined;
    minCanvasHeight?: number | undefined;
    minCropBoxWidth?: number | undefined;
    minCropBoxHeight?: number | undefined;
    ready?(): any;
    cropstart?(): any;
    cropmove?(): any;
    cropend?(): any;
    crop?(data?: any): void;
    zoom?(): any;
}

interface JQuery {
    cropper(options?: CropperOptions): JQuery;
    cropper(method: string, ...arguments: any[]): JQuery;
    selector: JQuery;
}
