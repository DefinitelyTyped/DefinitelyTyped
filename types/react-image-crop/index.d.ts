// Type definitions for react-image-crop 8.1
// Project: https://github.com/DominicTobias/react-image-crop
// Definitions by: Daniela Yassuda <https://github.com/danielasy>
//                 Elias Chaaya <https://github.com/chaaya>
//                 Søren Englund <https://github.com/englund0110>
//                 Jonathan Guo <https://github.com/JonathanGuo>
//                 Lewis Monteith <https://github.com/lemonJS>
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
        unit?: 'px' | '%';
    }

    interface PercentCrop extends Crop {
        unit?: '%';
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
        onChange: (crop: Crop, percentCrop: PercentCrop) => void;
        onComplete?: (crop: Crop, percentCrop: PercentCrop) => void;
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
        renderComponent?: ReactNode;
        renderSelectionAddon?: (state: any) => ReactNode;
        ruleOfThirds?: boolean;
        circularCrop?: boolean;
    }

    function makeAspectCrop(crop: Crop, imageWidth: number, imageHeight: number): Crop;
    function containCrop(prevCrop: Crop, crop: Crop, imageWidth: number, imageHeight: number): Crop;
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
    resolveCrop: (crop: ReactCrop.Crop, imageWidth: number, imageHeight: number) => ReactCrop.Crop;
    dragCrop: () => ReactCrop.Crop;
    resizeCrop: () => ReactCrop.Crop;
    straightenYPath: (clientX: number) => number;
    createCropSelection: () => ReactNode;
    makeNewCrop: () => ReactCrop.Crop;
    crossOverCheck: () => void;
}

export = ReactCrop;
