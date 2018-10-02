// Type definitions for react-cropper 0.10
// Project: https://github.com/roadmanfong/react-cropper
// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as cropperjs from 'cropperjs';
import * as React from 'react';

import Data = cropperjs.Data;
import ContainerData = cropperjs.ContainerData;
import ImageData = cropperjs.ImageData;
import CanvasData = cropperjs.CanvasData;
import CropBoxData = cropperjs.CropBoxData;
import CroppedCanvasOptions = cropperjs.CroppedCanvasOptions;
type ReactCropperProps = cropperjs.CropperOptions & React.HTMLProps<HTMLImageElement>;

interface ReactCropper extends cropperjs {} // tslint:disable-line no-empty-interface
declare class ReactCropper extends React.Component<ReactCropperProps> {
    on(eventname: string, callback: () => void): void;
}
export default ReactCropper;
