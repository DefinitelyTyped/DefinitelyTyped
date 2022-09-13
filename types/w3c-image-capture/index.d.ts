// Type definitions for non-npm package W3C Image Capture 1.0
// Project: https://www.w3.org/TR/image-capture/
// Definitions by: Cosium <https://github.com/cosium>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.7

/// <reference types="webrtc" />

declare class ImageCapture {
    constructor(videoTrack: MediaStreamTrack);

    takePhoto(photoSettings?: PhotoSettings): Promise<Blob>;

    getPhotoCapabilities(): Promise<PhotoCapabilities>;

    getPhotoSettings(): Promise<PhotoSettings>;

    grabFrame(): Promise<ImageBitmap>;

    readonly track: MediaStreamTrack;
}

interface PhotoCapabilities {
    readonly redEyeReduction: RedEyeReduction;
    readonly imageHeight: MediaSettingsRange;
    readonly imageWidth: MediaSettingsRange;
    readonly fillLightMode: FillLightMode[];
}

interface PhotoSettings {
    fillLightMode?: FillLightMode | undefined;
    imageHeight?: number | undefined;
    imageWidth?: number | undefined;
    redEyeReduction?: boolean | undefined;
}

interface MediaSettingsRange {
    readonly max: number;
    readonly min: number;
    readonly step: number;
}

type RedEyeReduction = 'never' | 'always' | 'controllable';
type FillLightMode = 'auto' | 'off' | 'flash';

interface MediaTrackCapabilities {
    whiteBalanceMode: MeteringMode[];
    exposureMode: MeteringMode[];
    focusMode: MeteringMode[];

    exposureCompensation: MediaSettingsRange;
    colorTemperature: MediaSettingsRange;
    iso: MediaSettingsRange;
    brightness: MediaSettingsRange;
    contrast: MediaSettingsRange;
    saturation: MediaSettingsRange;
    sharpness: MediaSettingsRange;

    focusDistance: MediaSettingsRange;
    pan: MediaSettingsRange;
    tilt: MediaSettingsRange;
    zoom: MediaSettingsRange;
    torch: boolean;
}

declare namespace W3C {
    type ConstrainPoint2D = Point2D[] | ConstrainPoint2DParameters;
}

interface MediaTrackConstraintSet {
    whiteBalanceMode?: W3C.ConstrainString | undefined;
    exposureMode?: W3C.ConstrainString | undefined;
    focusMode?: W3C.ConstrainString | undefined;
    pointsOfInterest?: W3C.ConstrainPoint2D | undefined;

    exposureCompensation?: W3C.ConstrainDouble | undefined;
    colorTemperature?: W3C.ConstrainDouble | undefined;
    iso?: W3C.ConstrainDouble | undefined;

    brightness?: W3C.ConstrainDouble | undefined;
    contrast?: W3C.ConstrainDouble | undefined;
    saturation?: W3C.ConstrainDouble | undefined;
    sharpness?: W3C.ConstrainDouble | undefined;

    focusDistance?: W3C.ConstrainDouble | undefined;
    zoom?: boolean | W3C.ConstrainDouble | undefined;
    pan?: boolean | W3C.ConstrainDouble | undefined;
    tilt?: boolean | W3C.ConstrainDouble | undefined;

    torch?: W3C.ConstrainBoolean | undefined;
}

interface MediaTrackSettings {
    whiteBalanceMode?: MeteringMode | undefined;
    exposureMode?: MeteringMode | undefined;
    focusMode?: MeteringMode | undefined;
    pointsOfInterest?: Point2D[] | undefined;

    exposureCompensation?: number | undefined;
    colorTemperature?: number | undefined;
    iso?: number | undefined;

    brightness?: number | undefined;
    contrast?: number | undefined;
    saturation?: number | undefined;
    sharpness?: number | undefined;

    focusDistance?: number | undefined;
    pan?: number | undefined;
    tilt?: number | undefined;
    zoom?: number | undefined;

    torch?: boolean | undefined;
}

interface MediaTrackSupportedConstraints {
    whiteBalanceMode: boolean;
    exposureMode: boolean;
    focusMode: boolean;
    pointsOfInterest: boolean;

    exposureCompensation: boolean;
    colorTemperature: boolean;
    iso: boolean;

    brightness: boolean;
    contrast: boolean;
    saturation: boolean;
    sharpness: boolean;
    focusDistance: boolean;
    zoom: boolean;
    torch: boolean;
}

interface ConstrainPoint2DParameters {
    exact: Point2D[];
    ideal: Point2D[];
}

type MeteringMode = 'none' | 'manual' | 'single-shot' | 'continuous';

interface Point2D {
    x: number;
    y: number;
}
