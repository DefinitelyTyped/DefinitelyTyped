// Type definitions for react-easy-crop 1.15
// Project: https://github.com/ricardo-ch/react-easy-crop
// Definitions by: Simon Donoghue <https://github.com/smdonoghue>
//                 Per Bergland <https://github.com/perbergland>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'react';

export interface Size {
    width: number;
    height: number;
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
    /**
     * The image to be cropped.
     **/
    image: string;
    /**
     * Position of the image. { x: 0, y: 0 } will center the image under the cropper.
     **/
    crop: Location;
    /**
     * Zoom of the image between minZoom and maxZoom. Defaults to 1.
     **/
    zoom?: number;
    /**
     * Rotation of the image. Defaults to 0.
     **/
    rotation?: number;
    /**
     * Aspect of the cropper. The value is the ratio between its width and its height.
     * The default value is 4/3
     **/
    aspect?: number;
    /**
     * Minimum zoom of the image. Defaults to 1.
     **/
    minZoom?: number;
    /**
     * Maximum zoom of the image. Defaults to 3.
     **/
    maxZoom?: number;
    /**
     * Shape of the crop area. Defaults to 'rect'.
     **/
    cropShape?: 'rect' | 'round';
    /**
     * Size of the crop area (in pixels).
     * If you don't provide it, it will be computed automatically using the aspect prop and the image size.
     * Warning: this cannot be changed once the component is displayed.
     * If you need to change it (based on some user inputs for instance),
     * you can force the component to be reset by using a key.
     **/
    cropSize?: Size;
    /**
     * Whether to show or not the grid (third-lines). Defaults to true.
     **/
    showGrid?: boolean;
    /**
     * Multiplies the value by which the zoom changes. Defaults to 1.
     **/
    zoomSpeed?: number;
    /**
     * Allows setting the crossOrigin attribute on the image.
     **/
    crossOrigin?: string;
    /**
     * Called everytime the crop is changed. Use it to update your crop state.
     **/
    onCropChange: (location: Location) => void;
    /**
     * Called everytime the zoom is changed. Use it to update your zoom state.
     **/
    onZoomChange?: (zoom: number) => void;
    /**
     * Called everytime the rotation is changed (with mobile gestures).
     * Use it to update your rotation state.
     **/
    onRotationChange?: (rotation: number) => void;
    /**
     * Called when the user stops moving the image or stops zooming.
     * It will be passed the corresponding cropped area on the image in percentages and pixels
     **/
    onCropComplete?: (croppedArea: Area, croppedAreaPixels: Area) => void;
    /**
     * Called when error occurs while loading an external image
     **/
    onImgError?: (event: React.ReactEventHandler<HTMLImageElement>) => void;
    /**
     * Custom styles to be used with the Cropper.
     * Styles passed via the style prop are merged with the defaults.
     **/
    style?: {
        containerStyle: React.CSSProperties;
        imageStyle: React.CSSProperties;
        cropAreaStyle: React.CSSProperties;
    };
    /**
     * Custom class names to be used with the Cropper.
     * Classes passed via the classes prop are merged with the defaults.
     **/
    classes?: {
        containerClassName: string;
        imageClassName: string;
        cropAreaClassName: string;
    };
    /**
     * Whether the position of the image should be restricted to the boundaries of the cropper.
     * Useful setting in case of zoom < 1 or if the cropper should preserve all image content
     * while forcing a specific aspect ratio for image throughout the application.
     * Example: https://codesandbox.io/s/1rmqky233q.
     **/
    restrictPosition?: boolean;
    /**
     * Use this to set the initial crop position/zoom of the cropper
     * (for example, when editing a previously cropped image).
     * The value should be the same as the croppedAreaPixelspassed to
     * onCropComplete Example: https://codesandbox.io/s/pmj19vp2yx.
     **/
    initialCroppedAreaPixels?: Area;
    /**
     * Called everytime a user starts a wheel, touch or mousedown event.
     **/
    onInteractionStart?: () => void;
    /**
     * Called everytime a user ends a wheel, touch or mousedown event.
     **/
    onInteractionEnd?: () => void;
}

declare class Cropper extends Component<CropperProps> {}

export default Cropper;
