// Type definitions for jquery-cropper 1.0
// Project: https://github.com/fengyuanchen/jquery-cropper
// Definitions by: Mustafa Salaheldin <https://github.com/mustafasalahuldin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface CropperOptions {
    viewMode?: number;
    dragMode?: string;
    initialAspectRatio?: number;
    aspectRatio?: number;
    data?: any;
    preview?: any;
    responsive?: boolean;
    restore?: boolean;
    checkCrossOrigin?: boolean;
    checkOrientation?: string;
    modal?: boolean;
    guides?: boolean;
    center?: boolean;
    highlight?: boolean;
    background?: boolean;
    autoCrop?: boolean;
    autoCropArea?: number;
    movable?: boolean;
    rotatable?: boolean;
    scalable?: boolean;
    zoomable?: boolean;
    zoomOnTouch?: boolean;
    zoomOnWheel?: boolean;
    wheelZoomRatio?: number;
    cropBoxMovable?: number;
    cropBoxResizable?: number;
    toggleDragModeOnDblclick?: number;
    minContainerWidth?: number;
    minContainerHeight?: number;
    minCanvasWidth?: number;
    minCanvasHeight?: number;
    minCropBoxWidth?: number;
    minCropBoxHeight?: number;
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
