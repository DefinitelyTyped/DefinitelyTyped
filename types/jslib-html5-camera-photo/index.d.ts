// Type definitions for jslib-html5-camera-photo 3.1
// Project: https://mabelanger.github.io/jslib-html5-camera-photo/
// Definitions by: Glen Cheney <https://github.com/Vestride>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface FacingModes {
    USER: 'user';
    ENVIRONMENT: 'environment';
}

interface ImageTypes {
    PNG: 'png';
    JPG: 'jpg';
}

type FacingMode = 'user' | 'environment';
type ImageType = 'png' | 'jpg';

interface Resolution {
    height?: MediaTrackConstraints['height'];
    width?: MediaTrackConstraints['width'];
}

export const FACING_MODES: FacingModes;
export const IMAGE_TYPES: ImageTypes;

export interface CaptureConfigOption {
    /**
     * Used to get a desired resolution. Example, a sizeFactor of `1` get the
     * same resolution of the camera while sizeFactor of `0.5` get the half
     * resolution of the camera. The sizeFactor can be between range of `]0, 1]`
     * and the default value is `1`.
     */
    sizeFactor?: number;
    /**
     * Used to get the desired image type between `jpg` or `png`. to specify
     * the imageType use the constant IMAGE_TYPES, for example to specify jpg
     * format use IMAGE_TYPES.JPG. The default imageType is `png`
     */
    imageType?: ImageType;
    /**
     * Used to get the desired compression when `jpg` is selected. choose a
     * compression between `[0, 1]`, 1 is maximum, 0 is minimum. The default
     * value imageCompression is `0.92`.
     */
    imageCompression?: number | null;
    /**
     * Used to get an image mirror when is set to `true`, the result of the
     * `dataUri` is the mirror of the actual camera data. Many software that use
     * camera mirror like hangout etc... Please note if you want to enable this
     * option, for consistency with the camera video, you need to use css
     * `transform: rotateY(180deg)` to the **&lt;video&gt;** tag to mirror the
     * stream, because the stream is not mirrored. It's only apply to the canvas
     * dataUri. The default value is `false` (no mirror).
     */
    isImageMirror?: boolean;
}

declare class CameraPhoto {
    videoElement: HTMLVideoElement;
    windowURL: URL;
    mediaDevices: MediaDevices | null;
    settings: MediaTrackSettings | null;
    numberOfMaxResolutionTry: number;
    stream: MediaStream | null;
    inputVideoDeviceInfos: MediaDeviceInfo[];
    constructor(videoElement: HTMLVideoElement);
    getCameraSettings(): MediaTrackSettings | null;
    getInputVideoDeviceInfos(): MediaDeviceInfo[];
    startCamera(idealFacingMode?: FacingMode, idealResolution?: Resolution): Promise<MediaStream>;
    startCameraMaxResolution(idealFacingMode?: FacingMode | {}): Promise<MediaStream>;
    getDataUri(userConfig: CaptureConfigOption): string;
    stopCamera(): Promise<void>;
}

export default CameraPhoto;
