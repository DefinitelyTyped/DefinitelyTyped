// Type definitions for react-image-crop 6.0
// Project: https://github.com/DominicTobias/react-image-crop
// Definitions by: Daniela Yassuda <https://github.com/danielasy>
//                 Elias Chaaya <https://github.com/chaaya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, CSSProperties, ReactNode } from 'react';

export as namespace ReactCrop;

declare namespace ReactCrop {
    interface Crop {
        aspect?: number;
        x: number;
        y: number;
        width?: number;
        height?: number;
    }

    interface PixelCrop {
        x: number;
        y: number;
        width: number;
        height: number;
    }

    interface ReactCropProps {
        src: string;
        crop?: Crop;
        imageAlt?: string;
        minWidth?: number;
        minHeight?: number;
        maxWidth?: number;
        maxHeight?: number;
        keepSelection?: boolean;
        onChange: (crop: Crop, pixelCrop: PixelCrop) => void;
        onComplete?: (crop: Crop, pixelCrop: PixelCrop) => void;
        onImageLoaded?: (target: HTMLImageElement, pixelCrop: PixelCrop) => void;
        onDragStart?: () => void;
        onDragEnd?: () => void;
        disabled?: boolean;
        crossorigin?: 'anonymous' | 'use-credentials';
        children?: ReactNode;
        style?: CSSProperties;
        imageStyle?: CSSProperties;
        onImageError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
        className?: string;
        locked?: boolean;
    }

    function getPixelCrop(image: HTMLImageElement, percentCrop: Crop): Crop;
    function makeAspectCrop(crop: Crop, imageAspect: number): Crop;
    function containCrop(previousCrop: Crop, crop: Crop, imageAspect: number): Crop;
}

declare class ReactCrop extends Component<ReactCrop.ReactCropProps> {
    onCropMouseTouchDown: (e: MouseEvent) => void;
    onComponentMouseTouchDown: (e: MouseEvent) => void;
    onDocMouseTouchMove: (e: MouseEvent) => void;
    onComponentKeyDown: (e: MouseEvent) => void;
    onDocMouseTouchEnd: (e: MouseEvent) => void;
    onImageLoad: (image: HTMLImageElement) => void;
    getCropStyle: () => CSSProperties;
    getNewSize: () => {
        width: number,
        height: number,
    };
    dragCrop: () => ReactCrop.Crop;
    resizeCrop: () => ReactCrop.Crop;
    straightenYPath: (clientX: number) => number;
    createCropSelection: () => ReactNode;
    makeNewCrop: () => ReactCrop.Crop;
    crossOverCheck: () => void;
}

export = ReactCrop;
