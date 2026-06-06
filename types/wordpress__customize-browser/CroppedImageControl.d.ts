import { Attachment, Cropper } from "./external";
import { MediaControl } from "./MediaControl";

export interface ImageSelectOptions {
    handles: boolean;
    keys: boolean;
    instance: boolean;
    persistent: boolean;
    imageWidth: number;
    imageHeight: number;
    minWidth?: number | undefined;
    minHeight?: number | undefined;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    aspectRatio?: string | undefined;
    maxWidth?: number | undefined;
    maxHeight?: number | undefined;
}

export class CroppedImageControl extends MediaControl {
    onSelect(): void;
    onCropped(croppedImage: any): void; // TODO
    calculateImageSelectOptions(attachment: Attachment, controller: Cropper): ImageSelectOptions;
    mustBeCropped(flexW: boolean, flexH: boolean, dstW: number, dstH: number, imgW: number, imgH: number): boolean;
    onSkippedCrop(): void;
    setImageFromAttachment(attachment: any): void; // TODO
}
