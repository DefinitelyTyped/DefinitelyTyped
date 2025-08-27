import { ReactNode } from "react";

declare namespace ReactHtml5CameraPhoto {
    // Facing modes for camera
    interface FacingMode {
        USER: "user";
        ENVIRONMENT: "environment";
    }

    const FACING_MODES: FacingMode;

    // Image types for photo output
    interface ImageTypes {
        PNG: "png";
        JPG: "jpg";
    }

    const IMAGE_TYPES: ImageTypes;

    interface CameraProps {
        /**
         * Callback called when the camera is started.
         */
        onCameraStart?: ((mediaStream: MediaStream) => void) | undefined;
        /**
         * Callback called when the camera is stopped.
         */
        onCameraStop?: (() => void) | undefined;
        /**
         * Callback called with the error object as parameter when error occur while opening the camera. Often the permission.
         * @param error The error information.
         */
        onCameraError?: ((error: Error) => void) | undefined;
        /**
         * The function called when a photo is taken. the dataUri is passed as a parameter.
         * @param dataUri The Data URI of the captured photo.
         */
        onTakePhoto?: ((dataUri: string) => void) | undefined;
        /**
         * The function called when a photo is taken and the animation is done. the dataUri is passed as a parameter.
         * @param dataUri The Data URI of the captured photo.
         */
        onTakePhotoAnimationDone?: ((dataUri: string) => void) | undefined;
        /**
         * The ideal facing mode of the camera, environment or user.
         * @example <caption>To request a camera facing the environment.</caption>
         * // FACING_MODES.ENVIRONMENT
         * @example <caption>To request a camera facing the user.</caption>
         * // FACING_MODES.USER
         */
        idealFacingMode?: FacingMode[keyof FacingMode] | undefined;
        /**
         * Object of the ideal resolution of the camera.
         */
        idealResolution?: { width: number; height: number } | undefined;
        /**
         * If is true, the camera will start with his own maximum resolution.
         */
        isMaxResolution?: boolean | undefined;
        /**
         * If is true, the camera image will be mirror.
         */
        isImageMirror?: boolean | undefined;
        /**
         * If is true, the camera do not play click sound when the photo was taken.
         */
        isSilentMode?: boolean | undefined;
        /**
         * If is true, the camera image will be set fullscreen to force the maximum width and height of the viewport.
         */
        isFullscreen?: boolean | undefined;
        /**
         * If is true, if the camera start with error, it will show the error between h1 tag on the top of the component.
         * Useful to notify the user about permission error.
         */
        isDisplayStartCameraError?: boolean | undefined;
        /**
         * Number of the factor resolution.
         * The sizeFactor can be between range of ]0, 1].
         * @example <caption>A sizeFactor of 1 get the same resolution of the camera</caption>
         * // 1
         * @example <caption>A sizeFactor of 0.5 get the half resolution of the camera.</caption>
         * // 0.5
         */
        sizeFactor?: number | undefined;
        /**
         * String used to get the desired image type between jpg or png.
         * @example <caption>To specify jpg format</caption>
         * // IMAGE_TYPES.JPG
         * @example <caption>To specify png format</caption>
         * // IMAGE_TYPES.PNG
         */
        imageType?: ImageTypes[keyof ImageTypes] | undefined;
        /**
         * Number used to get the desired compression when jpg is selected.
         * Choose a compression between [0, 1], 1 is maximum, 0 is minimum.
         */
        imageCompression?: number | undefined;
    }
}

/**
 * A camera component.
 * @param props Camera properties.
 */
declare function ReactHtml5CameraPhoto(props: ReactHtml5CameraPhoto.CameraProps): ReactNode;

export = ReactHtml5CameraPhoto;
