// Type definitions for react-avatar-editor 10.3
// Project: https://github.com/mosch/react-avatar-editor
// Definitions by: Diogo Corrêa <https://github.com/diogocorrea>
//                 Gabriel Prates <https://github.com/gabsprates>
//                 Laurent Senta <https://github.com/lsenta>
//                 David Spiess <https://github.com/davidspiess>
//                 John Grisham <https://github.com/JohnGrisham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
    border?: number | number[] | undefined;
    borderRadius?: number | undefined;
    color?: number[] | undefined;
    style?: object | undefined;
    scale?: number | undefined;
    position?: Position | undefined;
    rotate?: number | undefined;
    crossOrigin?: string | undefined;
    disableBoundaryChecks?: boolean | undefined;
    disableDrop?: boolean | undefined;
    onDropFile?(event: DragEvent): void;
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
