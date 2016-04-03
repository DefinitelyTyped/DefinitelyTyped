// Type definitions for react-cropper
// Project: https://github.com/roadmanfong/react-cropper
// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>
/// <reference path="../cropperjs/cropperjs.d.ts"/>

declare module 'react-cropper' {
    const Cropper: typeof ReactCropper.ReactCropper;
    export default Cropper;
    export {Cropper};
}

declare namespace ReactCropper {
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
    export type Props = cropperjs.CropperOptions & __React.HTMLProps<HTMLImageElement>;
    export class ReactCropper extends __React.Component<Props, {}> {
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
        *
        */
        getContainerData(): void;

        getImageData(): void;

        getCanvasData(): void;

        setCanvasData(data: any);

        getCropBoxData(): void;

        setCropBoxData(data: any): void;

        getCroppedCanvas(options?: any): void;

        setAspectRatio(aspectRatio: number): void;

        setDragMode(): void;

        on(eventname: string, callback: (any?) => void): void;
    }

}
