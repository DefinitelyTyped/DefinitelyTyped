/// <reference types="webrtc" />

interface ImageCapture {
    takePhoto(photoSettings?: PhotoSettings): Promise<Blob>;

    getPhotoCapabilities(): Promise<PhotoCapabilities>;

    getPhotoSettings(): Promise<PhotoSettings>;

    grabFrame(): Promise<ImageBitmap>;

    readonly track: MediaStreamTrack;
}

declare var ImageCapture: {
    prototype: ImageCapture;
    new(videoTrack: MediaStreamTrack): ImageCapture;
};

interface PhotoCapabilities {
    redEyeReduction?: "never" | "always" | "controllable";
    imageHeight?: MediaSettingsRange;
    imageWidth?: MediaSettingsRange;
    fillLightMode?: ("auto" | "off" | "flash")[];
}

interface PhotoSettings {
    fillLightMode?: "auto" | "off" | "flash" | undefined;
    imageHeight?: number | undefined;
    imageWidth?: number | undefined;
    redEyeReduction?: boolean | undefined;
}

interface MediaSettingsRange {
    max?: number;
    min?: number;
    step?: number;
}

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
    whiteBalanceMode?: string | undefined;
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

type MeteringMode = "none" | "manual" | "single-shot" | "continuous";

interface Point2D {
    x: number;
    y: number;
}
