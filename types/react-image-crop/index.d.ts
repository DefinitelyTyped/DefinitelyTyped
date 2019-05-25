// Type definitions for react-image-crop 7.0
// Project: https://github.com/DominicTobias/react-image-crop
// Definitions by: Daniela Yassuda <https://github.com/danielasy>
//                 Elias Chaaya <https://github.com/chaaya>
//                 Søren Englund <https://github.com/englund0110>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, CSSProperties, ReactNode } from 'react';

export as namespace ReactCrop;

declare namespace ReactCrop {
    interface Crop {
        aspect?: number;
        x?: number;
        y?: number;
        width?: number;
        height?: number;
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
        onChange: (crop: Crop) => void;
        onComplete?: (crop: Crop) => void;
        onImageLoaded?: (target: HTMLImageElement) => void;
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
        renderSelectionAddon?: (state: any) => ReactNode;
    }

    function makeAspectCrop(crop: Crop, image: HTMLImageElement): Crop;
    function containCrop(previousCrop: Crop, crop: Crop, image: HTMLImageElement): Crop;
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
    resolveCrop: (crop: ReactCrop.Crop, image: HTMLImageElement) => ReactCrop.Crop;
    dragCrop: () => ReactCrop.Crop;
    resizeCrop: () => ReactCrop.Crop;
    straightenYPath: (clientX: number) => number;
    createCropSelection: () => ReactNode;
    makeNewCrop: () => ReactCrop.Crop;
    crossOverCheck: () => void;
}

export = ReactCrop;
