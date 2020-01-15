// Type definitions for react-cropper 0.10
// Project: https://github.com/roadmanfong/react-cropper, http://roadmanfong.github.io/react-cropper
// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
//                 Walter Barbagallo <https://github.com/bwlt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import Cropper from 'cropperjs';
import * as React from 'react';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface ReactCropperProps extends Cropper.Options, Omit<React.HTMLProps<HTMLImageElement>, 'data' | 'ref'> {
    ref?: string | ((cropper: null | ReactCropper) => any);
}

interface ReactCropper extends Cropper {} // tslint:disable-line no-empty-interface
declare class ReactCropper extends React.Component<ReactCropperProps> {
    on(eventname: string, callback: () => void): void;
}
export default ReactCropper;
