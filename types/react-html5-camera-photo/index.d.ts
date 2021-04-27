// Type definitions for react-html5-camera-photo 1.5
// Project: https://mabelanger.github.io/react-html5-camera-photo/
// Definitions by: Ryan Blackman <https://github.com/rblackman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { FC } from "react";

interface FacingMode {
    USER: "user";
    ENVIRONMENT: "environment";
}

export const FACING_MODES: FacingMode;

interface ImageTypes {
    PNG: "png";
    JPG: "jpg";
}

export const IMAGE_TYPES: ImageTypes;

export interface CameraProps {
    /**
     * Callback called when the camera is started.
     */
    onCameraStart?: () => void;
    /**
     * Callback called when the camera is stopped.
     */
    onCameraStop?: () => void;
    /**
     * Callback called with the error object as parameter when error occur while opening the camera. Often the permission.
     * @param error The error information.
     */
    onCameraError?: (error: Error) => void;
    /**
     * The function called when a photo is taken. the dataUri is passed as a parameter.
     * @param dataUri The Data URI of the captured photo.
     */
    onTakePhoto?: (dataUri: string) => void;
    /**
     * The function called when a photo is taken and the animation is done. the dataUri is passed as a parameter.
     * @param dataUri The Data URI of the captured photo.
     */
    onTakePhotoAnimationDone?: (dataUri: string) => void;
    /**
     * The ideal facing mode of the camera, environment or user.
     * @example <caption>To request a camera facing the environment.</caption>
     * // FACING_MODES.ENVIRONMENT
     * @example <caption>To request a camera facing the user.</caption>
     * // FACING_MODES.USER
     */
    idealFacingMode?: "environment" | "user";
    /**
     * Object of the ideal resolution of the camera.
     */
    idealResolution?: { width: number; height: number };
    /**
     * If is true, the camera will start with his own maximum resolution.
     */
    isMaxResolution?: boolean;
    /**
     * If is true, the camera image will be mirror.
     */
    isImageMirror?: boolean;
    /**
     * If is true, the camera do not play click sound when the photo was taken.
     */
    isSilentMode?: boolean;
    /**
     * If is true, the camera image will be set fullscreen to force the maximum width and height of the viewport.
     */
    isFullscreen?: boolean;
    /**
     * If is true, if the camera start with error, it will show the error between h1 tag on the top of the component.
     * Useful to notify the user about permission error.
     */
    isDisplayStartCameraError?: boolean;
    /**
     * Number of the factor resolution.
     * The sizeFactor can be between range of ]0, 1].
     * @example <caption>A sizeFactor of 1 get the same resolution of the camera</caption>
     * // 1
     * @example <caption>A sizeFactor of 0.5 get the half resolution of the camera.</caption>
     * // 0.5
     */
    sizeFactor?: number;
    /**
     * String used to get the desired image type between jpg or png.
     * @example <caption>To specify jpg format</caption>
     * // IMAGE_TYPES.JPG
     * @example <caption>To specify png format</caption>
     * // IMAGE_TYPES.PNG
     */
    imageType?: "png" | "jpg";
    /**
     * Number used to get the desired compression when jpg is selected.
     * Choose a compression between [0, 1], 1 is maximum, 0 is minimum.
     */
    imageCompression?: number;
}

/**
 * A camera component.
 * @param props Camera properties.
 */
export const Camera: FC<CameraProps>;

export default Camera;
