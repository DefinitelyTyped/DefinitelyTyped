import * as React from "react";

export interface Position {
    x: number;
    y: number;
}

export interface CroppedRect extends Position {
    width: number;
    height: number;
}

export interface ImageState extends CroppedRect {
    resource: ImageData;
}

export interface AvatarEditorProps {
    className?: string | undefined;
    image: string | File;
    width?: number | undefined;
    height?: number | undefined;
    backgroundColor?: string | undefined;
    border?: number | number[] | undefined;
    borderRadius?: number | undefined;
    color?: number[] | undefined;
    style?: object | undefined;
    scale?: number | undefined;
    position?: Position | undefined;
    rotate?: number | undefined;
    crossOrigin?: string | undefined;
    disableBoundaryChecks?: boolean | undefined;
    disableHiDPIScaling?: boolean | undefined;
    disableCanvasRotation?: boolean | undefined;
    onLoadFailure?(event: Event): void;
    onLoadSuccess?(imgInfo: ImageState): void;
    onImageReady?(event: Event): void;
    onMouseUp?(): void;
    onMouseMove?(event: Event): void;
    onImageChange?(): void;
    onPositionChange?(position: Position): void;
}

export default class AvatarEditor extends React.Component<AvatarEditorProps, any> {
    getImage(): HTMLCanvasElement;
    getImageScaledToCanvas(): HTMLCanvasElement;
    getCroppingRect(): CroppedRect;
}
