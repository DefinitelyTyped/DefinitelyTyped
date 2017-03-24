// Type definitions for cropperjs
// Project: https://github.com/fengyuanchen/cropperjs
// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace cropperjs {
    export enum CropperViewMods {
        CropBoxIsJustWithInTheContainer = 0,
        CropBoxShouldBeWithInTheCanvas = 1,
        CanvasShouldNotBeWithInTheContainer = 2,
        ContainerSshouldBeWithInTheCanvas = 3
    }
    export interface CropperCustomEvent extends CustomEvent {
        detail: Data;
    }
    export interface CropperOptions {
        /**
        * Function called when crop box is ready
        */
        ready?: (event: CropperCustomEvent) => void;
        /**
        * Function called when crop box is moved or resized
        */
        crop?: (event: CropperCustomEvent) => void;
        /**
        * Function called at start of crop box being moved or resized
        */
        cropstart?: (event: CropperCustomEvent) => void;
        /**
        * Function called when crop box is moved
        */
        cropmove?: (event: CropperCustomEvent) => void;
        /**
        * Function called when crop box is finished being moved or resized
        */
        cropend?: (event: CropperCustomEvent) => void;
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
    interface Data {
        /**
        * the offset left of the cropped area
        */
        x: number;
        /**
        * the offset top of the cropped area
        */
        y: number;
        /**
        * the width of the cropped area
        */
        width: number;
        /**
        * the height of the cropped area
        */
        height: number;
        /**
        * the rotated degrees of the image
        */
        rotate: number;
        /**
        * the scaling factor to apply on the abscissa of the image
        */
        scaleX: number;
        /**
        * the scaling factor to apply on the ordinate of the image
        */
        scaleY: number;
    }
    interface ContainerData {
        /**
        * The current width of the container
        */
        width: number;
        /**
        * The current height of the container
        */
        height: number;
    }
    interface CropBoxData {
        /**
        * the offset left of the crop box
        */
        left: number;
        /**
        * the offset top of the crop box
        */
        top: number;
        /**
        * the width of the crop box
        */
        width: number;
        /**
        * the height of the crop box
        */
        height: number;
    }
    interface CanvasData {
        /**
        * offset left of the canvas
        */
        left: number;
        /**
        * new offset top of the canvas
        */
        top: number;
        /**
        * new width of the canvas
        */
        width: number;
        /**
        * new height of the canvas
        */
        height: number;
    }
    interface ImageData {
        /**
        * the offset left of the image
        */
        left: number;
        /**
        * the offset top of the image
        */
        top: number;
        /**
        * the width of the image
        */
        width: number;
        /**
        * the height of the image
        */
        height: number;
        /**
        * the natural width of the image
        */
        naturalWidth: number;
        /**
        * the natural height of the image
        */
        naturalHeight: number;
        /**
        * the aspect ratio of the image
        */
        aspectRatio: number;
        /**
        * the rotated degrees of the image if rotated
        */
        rotate: number;
        /**
        * the scaling factor to apply on the abscissa of the image if scaled
        */
        scaleX: number;
        /**
        * the scaling factor to apply on the ordinate of the image if scaled
        */
        scaleY: number;
    }
    interface CroppedCanvasOptions {
        /**
        * the destination width of the output canvas
        */
        width?: number;
        /**
        * the destination height of the output canvas
        */
        height?: number;
        /**
        * a color to fill any alpha values in the output canvas
        */
        fillColor?: string;
    }
}

declare class cropperjs {
    constructor(element: HTMLImageElement, options: cropperjs.CropperOptions);
    /**
             * Show the crop box manually.
             */
    crop(): void;

    /**
    * Clear the crop box.
    */
    reset(): void;

    /**
    * Replace the image's src and rebuild the cropper.
    * @param url A new image url
    */
    replace(url: string): void;

    /**
    * Enable (unfreeze) the cropper.
    */
    enable(): void;

    /**
    * Disable (freeze) the cropper
    */
    disable(): void;

    /**
    * Destroy the cropper and remove the instance from the image.
    */
    destroy(): void;

    /**
    * Move the canvas (image wrapper) with relative offsets.
    * @param offsetX Moving size (px) in the horizontal direction.
    * @param offsetY Moving size (px) in the vertical direction.
    * If not present, its default value is offsetX.
    */
    move(offsetX: number, offsetY?: number): void;

    /**
    * Move the canvas (image wrapper) to an absolute point.
    * @param x The left value of the canvas
    * @param y The top value of the canvas
    * If not present, its default value is x.
    */
    moveTo(x: number, y?: number): void;

    /**
    * Zoom the canvas (image wrapper) with a relative ratio.
    * Zoom in: requires a positive number (ratio > 0)
    * Zoom out: requires a negative number (ratio < 0)
    */
    zoom(ratio: number): void;

    /**
    * Rotate the canvas (image wrapper) with a relative degree.
    * Rotate right: requires a positive number (degree > 0)
    * Rotate left: requires a negative number (degree < 0)
    */
    rotate(degree: number): void;

    /**
    * Clear the crop box.
    */
    clear(): void;

    /**
    * Output the cropped area position and size data (base on the original image).
    */
    getData(rounded?: boolean): cropperjs.Data;

    /**
    * Change the cropped area position and size with new data (base on the original image).
    */
    setData(data: cropperjs.Data): void;

    /**
    * Output the container size data.
    */
    getContainerData(): cropperjs.ContainerData;

    /**
    * Output the image position, size and other related data.
    */
    getImageData(): cropperjs.ImageData;

    /**
    * Output the canvas (image wrapper) position and size data.
    */
    getCanvasData(): cropperjs.CanvasData & {
        /**
        * the natural width of the canvas (read only)
        */
        naturalWidth: number;
        /**
        * the natural height of the canvas (read only)
        */
        naturalHeight: number;
    };

    /**
    * Change the canvas (image wrapper) position and size with new data.
    */
    setCanvasData(data: cropperjs.CanvasData): void;

    /**
    * Output the crop box position and size data.
    */
    getCropBoxData(): cropperjs.CropBoxData;

    /**
    * Change the crop box position and size with new data.
    */
    setCropBoxData(data: cropperjs.CropBoxData): void;

    /**
    * Get a canvas drawn the cropped image.
    */
    getCroppedCanvas(options?: cropperjs.CroppedCanvasOptions): HTMLCanvasElement;

    /**
    * Change the aspect ratio of the crop box.
    */
    setAspectRatio(aspectRatio: number): void;

    /**
    * Change the drag mode.
    */
    setDragMode(mode?: 'none' | 'crop' | 'move'): void;

}

export = cropperjs;
export as namespace Cropper;
