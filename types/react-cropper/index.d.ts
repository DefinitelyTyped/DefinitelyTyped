// Type definitions for react-cropper 0.10
// Project: https://github.com/roadmanfong/react-cropper
// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Cropper from 'cropperjs';
import * as React from 'react';

import Data = Cropper.Data;
import ContainerData = Cropper.ContainerData;
import ImageData = Cropper.ImageData;
import CanvasData = Cropper.CanvasData;
import CropBoxData = Cropper.CropBoxData;
import CroppedCanvasOptions = Cropper.CroppedCanvasOptions;
type ReactCropperProps = Cropper.CropperOptions & React.HTMLProps<HTMLImageElement>;

interface ReactCropper extends Cropper {} // tslint:disable-line no-empty-interface
declare class ReactCropper extends React.Component<ReactCropperProps> {
    on(eventname: string, callback: () => void): void;
}
export default ReactCropper;
