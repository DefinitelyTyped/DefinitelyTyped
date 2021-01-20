import { MediaControl } from './MediaControl';
import { Attachment, Cropper } from './external';

export interface ImageSelectOptions {
    handles: boolean;
    keys: boolean;
    instance: boolean;
    persistent: boolean;
    imageWidth: number;
    imageHeight: number;
    minWidth?: number;
    minHeight?: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    aspectRatio?: string;
    maxWidth?: number;
    maxHeight?: number;
}

export class CroppedImageControl extends MediaControl {
    onSelect(): void;
    onCropped(croppedImage: any): void; // TODO
    calculateImageSelectOptions(attachment: Attachment, controller: Cropper): ImageSelectOptions;
    mustBeCropped(flexW: boolean, flexH: boolean, dstW: number, dstH: number, imgW: number, imgH: number): boolean;
    onSkippedCrop(): void;
    setImageFromAttachment(attachment: any): void; // TODO
}
