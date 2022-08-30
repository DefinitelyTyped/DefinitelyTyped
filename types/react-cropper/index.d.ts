// Type definitions for react-cropper 1.3
// Project: https://github.com/roadmanfong/react-cropper, http://roadmanfong.github.io/react-cropper
// Definitions by: Walter Barbagallo <https://github.com/bwlt>
//                 Harald Friessnegger <https://github.com/frisi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

import Cropper from 'cropperjs';
import * as React from 'react';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

interface ReactCropperProps extends Cropper.Options, Omit<React.HTMLProps<HTMLImageElement>, 'data' | 'ref'> {
    ref?: React.LegacyRef<ReactCropper> | undefined;
}

interface ReactCropper extends Cropper {} // tslint:disable-line no-empty-interface
declare class ReactCropper extends React.Component<ReactCropperProps> {
    on(eventname: string, callback: () => void): void;
}
export default ReactCropper;
