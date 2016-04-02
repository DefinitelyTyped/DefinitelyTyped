// Type definitions for cropperjs
// Project: https://github.com/fengyuanchen/cropperjs
// Definitions by: https://github.com/stepancar
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module cropperjs {
    export enum CropperViewMods {
        CropBoxIsJustWithInTheContainer = 0,
        CropBoxShouldBeWithInTheCanvas = 1,
        CanvasShouldNotBeWithInTheContainer = 2,
        ContainerSshouldBeWithInTheCanvas = 3
    }
    export interface CropperOptions {
        /**
        * Define the view mode of the cropper.
        * @default 0
        */
        viewMode?: CropperViewMods;
        /**
        * Define the dragging mode of the cropper.
        * 'crop': create a new crop box
        * 'move': move the canvas
        * 'none': do nothing
        */
        dragMode?: string;
        /**
        * Set the aspect ratio of the crop box. By default, the crop box is free ratio.
        * @default Nan
        */
        aspectRatio?: number;
        /**
        * The previous cropped data if you had stored, will be passed to setData method automatically.
        * @default null
        */
        data?: Object;
        /**
        * Add extra elements (containers) for previewing.
        * Valid selector for Document.querySelectorAll
        * @default ''
        */
        preview?: string;
        /**
        * Rebuild the cropper when resize the window.
        * @default true
        */
        responsive?: boolean;
        /**
        * By default, the plugin will check the image origin, and if it is a cross-origin image,
        * a crossOrigin attribute will be added to the image element and a timestamp will be added to the image url to reload the image for "getCroppedCanvas".
        * By adding crossOrigin attribute to image will stop adding timestamp to image url, and stop reload of image.
        * @default true
        */
        checkCrossOrigin?: boolean;
        /**
        * Show the black modal above the image and under the crop box.
        * @default true
        */
        modal?: boolean;
        /**
        * Show the dashed lines above the crop box.
        * @default true
        */
        guides?: boolean;
        /**
        * Show the center indicator above the crop box.
        * @default true
        */
        center?: boolean;
        /**
        * Show the white modal above the crop box (highlight the crop box).
        * @default true
        */
        highlight?: boolean;
        /**
        * Show the grid background of the container.
        * @default true
        */
        background?: boolean;
        /**
        * Enable to crop the image automatically when initialize.
        * @default true
        */
        autoCrop?: boolean;
        /**
        * A number between 0 and 1. Define the automatic cropping area size (percentage).
        * @default 0.8 (80% of the image)
        */
        autoCropArea?: number;
        /**
        * Enable to move the image.
        * @default true
        */
        movable?: boolean;
        /**
        * Enable to rotate the image.
        * @default true
        */
        rotatable?: boolean;
        /**
        * Enable to scale the image.
        * @default true
        */
        scalable?: boolean;
        /**
        * Enable to zoom the image.
        * @default true
        */
        zoomable?: boolean;
        /**
        * Enable to zoom the image by dragging touch.
        * @default true
        */
        zoomOnTouch?: boolean;
        /**
        * Enable to zoom the image by wheeling mouse.
        * @default true
        */
        zoomOnWheel?: boolean;
        /**
        * Define zoom ratio when zoom the image by wheeling mouse.
        * @default 0.1
        */
        wheelZoomRatio?: number;
        /**
        * Enable to move the crop box.
        * @default true
        */
        cropBoxMovable?: boolean;
        /**
        * Enable to resize the crop box.
        * @default true
        */
        cropBoxResizable?: boolean;
        /**
        * Enable to toggle drag mode between "crop" and "move" when click twice on the cropper.
        * @default true
        */
        toggleDragModeOnDblclick?: boolean;
        /**
        * The minimum width of the container
        * @default 200
        */
        minContainerWidth?: number;
        /**
        * The minimum height of the container.
        * @default 100
        */
        minContainerHeight?: number;
        /**
        * The minimum width of the canvas (image wrapper).
        * @default 0
        */
        minCanvasWidth?: number;
        /**
        * The minimum height of the canvas (image wrapper).
        * @default 0
        */
        minCanvasHeight?: number;
        /**
        * The minimum width of the crop box.
        * @default 0
        */
        minCropBoxWidth?: number;
        /**
        * The minimum height of the crop box.
        * @default 0
        */
        minCropBoxHeight?: number;
        /**
        * This function will be called when a cropper instance starts to load an image.
        * Return false to prevent to build
        * @default null
        */
        build?: () => boolean;
        /**
        * This function will be called when a cropper instance has built completely.
        * @default null
        */
        built?: () => void;
    }
    export class Cropper {
        constructor(element: HTMLImageElement, options: CropperOptions);
        /**
        * Show the crop box manually.
        */
        crop();
        /**
        * Clear the crop box.
        */
        reset();
        /**
        * Replace the image's src and rebuild the cropper.
        * @param url A new image url
        */
        replace(url: string);
        /**
        * Enable (unfreeze) the cropper.
        */
        enable();
        /**
        * Disable (freeze) the cropper
        */
        disable();
        /**
        * Destroy the cropper and remove the instance from the image.
        */
        destroy();
        /**
        * Move the canvas (image wrapper) with relative offsets.
        * @param offsetX Moving size (px) in the horizontal direction.
        * @param offsetY Moving size (px) in the vertical direction.
        * If not present, its default value is offsetX.
        */
        move(offsetX: number, offsetY?: number);
        /**
        * Move the canvas (image wrapper) to an absolute point.
        * @param x The left value of the canvas
        * @param y The top value of the canvas
        * If not present, its default value is x.
        */
        moveTo(x: number, y?: number);
        /**
        * Zoom the canvas (image wrapper) with a relative ratio.
        * Zoom in: requires a positive number (ratio > 0)
        * Zoom out: requires a negative number (ratio < 0)
        */
        zoom(ratio: number);

    }
}
declare var Cropper: typeof cropperjs.Cropper;
declare module "cropperjs" {
    export = Cropper;
}
