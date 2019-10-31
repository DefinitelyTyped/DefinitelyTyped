// Type definitions for react-easy-crop 1.16
// Project: https://github.com/ricardo-ch/react-easy-crop
// Definitions by: Simon Donoghue <https://github.com/smdonoghue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { CSSProperties, Component } from 'react';

export interface Size {
    width: number;
    height: number;
}

export interface ImageSize {
    width: number;
    height: number;
    naturalWidth: number;
    naturalHeight: number;
}

export interface Location {
    x: number;
    y: number;
}

export interface Area {
    width: number;
    height: number;
    x: number;
    y: number;
}

export interface CropperProps {
    image: string;
    crop: Location;
    zoom?: number;
    rotation?: number;
    aspect?: number;
    minZoom?: number;
    maxZoom?: number;
    cropShape?: 'rect' | 'round';
    cropSize?: Size;
    showGrid?: boolean;
    zoomSpeed?: number;
    crossOrigin?: string;
    onCropChange: (location: Location) => void;
    onZoomChange?: (zoom: number) => void;
    onRotationChange?: (rotation: number) => void;
    onCropComplete?: (croppedArea: Area, croppedAreaPixels: Area) => void;
    onInteractionStart?: () => void;
    onInteractionEnd?: () => void;
    onImageLoaded?: (imageSize: ImageSize) => void;
    onImgError?: () => void;
    style?: {
        containerStyle: React.CSSProperties;
        imageStyle: React.CSSProperties;
        cropAreaStyle: React.CSSProperties;
    };
    classes?: {
        containerClassName: string;
        imageClassName: string;
        cropAreaClassName: string;
    };
    restrictPosition?: boolean;
    initialCroppedAreaPixels?: Area;
}

declare class Cropper extends Component<CropperProps> {}

export default Cropper;
