/**
 * @see https://w3c.github.io/mediacapture-screen-share
 */

declare global {
    interface MediaDevices {
        getDisplayMedia(options?: DisplayMediaStreamOptions): Promise<MediaStream>;
    }
}

export interface UserMediaStreamConstraints {
    /** @default false */
    video?: boolean | MediaTrackConstraints;
    /** @default false */
    audio?: boolean | MediaTrackConstraints;
}

export type CaptureStartFocusBehavior =
    | "focus-capturing-application"
    | "focus-captured-surface"
    | "no-focus-change";

declare global {
    class CaptureController extends EventTarget {
        constructor();
        setFocusBehavior(focusBehavior: CaptureStartFocusBehavior): void;
    }
}

export type SelfCapturePreferenceEnum =
    | "include"
    | "exclude";

export type SystemAudioPreferenceEnum =
    | "include"
    | "exclude";

export type WindowAudioPreferenceEnum =
    | "system"
    | "window"
    | "exclude";

export type SurfaceSwitchingPreferenceEnum =
    | "include"
    | "exclude";

export type MonitorTypeSurfacesEnum =
    | "include"
    | "exclude";

export interface DisplayMediaStreamOptions {
    /** @default true */
    video?: boolean | MediaTrackConstraints;
    /** @default false */
    audio?: boolean | MediaTrackConstraints;
    controller?: CaptureController;
    selfBrowserSurface?: SelfCapturePreferenceEnum;
    systemAudio?: SystemAudioPreferenceEnum;
    windowAudio?: WindowAudioPreferenceEnum;
    surfaceSwitching?: SurfaceSwitchingPreferenceEnum;
    monitorTypeSurfaces?: MonitorTypeSurfacesEnum;
}

export interface MediaTrackSupportedConstraints {
    /** @default true */
    displaySurface?: boolean;
    /** @default true */
    logicalSurface?: boolean;
    /** @default true */
    cursor?: boolean;
    /** @default true */
    restrictOwnAudio?: boolean;
    /** @default true */
    suppressLocalAudioPlayback?: boolean;
}

export interface MediaTrackConstraintSet {
    displaySurface?: ConstrainDOMString;
    logicalSurface?: ConstrainBoolean;
    cursor?: ConstrainDOMString;
    restrictOwnAudio?: ConstrainBoolean;
    suppressLocalAudioPlayback?: ConstrainBoolean;
}

export interface MediaTrackSettings {
    displaySurface?: string;
    logicalSurface?: boolean;
    cursor?: string;
    restrictOwnAudio?: boolean;
    suppressLocalAudioPlayback?: boolean;
    screenPixelRatio?: number;
}

export interface MediaTrackCapabilities {
    displaySurface?: string;
    logicalSurface?: boolean;
    cursor?: string[];
}

export type DisplayCaptureSurfaceType =
    | "monitor"
    | "window"
    | "browser";

export type CursorCaptureConstraint =
    | "never"
    | "always"
    | "motion";
