// Type definitions for react-cropper
// Project: https://github.com/roadmanfong/react-cropper
// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="react"/>
/// <reference types="cropperjs"/>

import cropperjs = require('cropperjs');
import React = require("react");

import Data = cropperjs.Data;
import ContainerData = cropperjs.ContainerData;
import ImageData = cropperjs.ImageData;
import CanvasData = cropperjs.CanvasData;
import CropBoxData = cropperjs.CropBoxData;
import CroppedCanvasOptions = cropperjs.CroppedCanvasOptions;
type ReactCropperProps = cropperjs.CropperOptions & React.HTMLProps<HTMLImageElement>;

declare class ReactCropper extends React.Component<ReactCropperProps, {}> implements cropperjs {

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
    getData(rounded?: boolean): Data;

    /**
    * Change the cropped area position and size with new data (base on the original image).
    */
    setData(data: Data): void;

    /**
    * Output the container size data.
    */
    getContainerData(): ContainerData;

    /**
    * Output the image position, size and other related data.
    */
    getImageData(): ImageData;

    /**
    * Output the canvas (image wrapper) position and size data.
    */
    getCanvasData(): CanvasData & {
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
    setCanvasData(data: CanvasData): void;

    /**
    * Output the crop box position and size data.
    */
    getCropBoxData(): CropBoxData;

    /**
    * Change the crop box position and size with new data.
    */
    setCropBoxData(data: CropBoxData): void;

    /**
    * Get a canvas drawn the cropped image.
    */
    getCroppedCanvas(options?: CroppedCanvasOptions): HTMLCanvasElement;

    /**
    * Change the aspect ratio of the crop box.
    */
    setAspectRatio(aspectRatio: number): void;

    /**
    * Change the drag mode.
    */
    setDragMode(mode?: 'none' | 'crop' | 'move'): void;

    on(eventname: string, callback: () => void): void;
}
export default ReactCropper;
