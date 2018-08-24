// Type definitions for react-avatar-editor 10.3
// Project: https://github.com/mosch/react-avatar-editor
// Definitions by: Diogo Corrêa <https://github.com/diogocorrea>
//                 Gabriel Prates <https://github.com/gabsprates>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface ImageState {
    height: number;
    width: number;
    x: number;
    y: number;
    resource: ImageData;
}

export interface CroppedRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface AvatarEditorProps {
    image: string | File;
    width?: number;
    height?: number;
    border?: number | number[];
    borderRadius?: number;
    color?: number[];
    style?: object;
    scale?: number;
    position?: object;
    rotate?: number;
    crossOrigin?: string;
    disableDrop?: boolean;
    onDropFile?(event: DragEvent): void;
    onLoadFailure?(event: Event): void;
    onLoadSuccess?(imgInfo: ImageState): void;
    onImageReady?(event: Event): void;
    onMouseUp?(): void;
    onMouseMove?(event: Event): void;
    onImageChange?(): void;
    onPositionChange?(): void;
}

export default class AvatarEditor extends React.Component<AvatarEditorProps, any> {
    getImage(): HTMLCanvasElement;
    getImageScaledToCanvas(): HTMLCanvasElement;
    getCroppingRect(): CroppedRect;
}
