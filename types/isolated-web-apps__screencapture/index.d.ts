/**
 * Generated from:
 * - capture_controller.idl
 * - capture_handle_config.idl
 * - media_devices.idl
 * - media_stream_constraints.idl
 * - navigator_media_stream.idl
 *
 * @see https://screen-share.github.io/captured-surface-control/
 * @see https://screen-share.github.io/mouse-events/
 * @see https://w3c.github.io/mediacapture-handle/identity/
 * @see https://w3c.github.io/mediacapture-main/
 * @see https://w3c.github.io/mediacapture-screen-share/
 * @see https://wicg.github.io/prefer-current-tab/
 * @see https://www.w3.org/TR/screen-capture/
 */

declare global {
  interface Navigator {
    getUserMedia(
      constraints: MediaStreamConstraints,
      successCallback: NavigatorUserMediaSuccessCallback,
      errorCallback: NavigatorUserMediaErrorCallback,
    ): void;
    webkitGetUserMedia(
      constraints: MediaStreamConstraints,
      successCallback: NavigatorUserMediaSuccessCallback,
      errorCallback: NavigatorUserMediaErrorCallback,
    ): void;
  }
}

export type NavigatorUserMediaSuccessCallback = (stream: MediaStream) => void;

export type NavigatorUserMediaErrorCallback = (error: MediaStreamError) => void;

export type MediaStreamError = DOMException | OverconstrainedError;

export type DisplayMediaIncludeOrExclude =
  | "include"
  | "exclude";

export type DisplayMediaSystemWindowOrExclude =
  | "system"
  | "window"
  | "exclude";

export type SystemAudioPreferenceEnum = DisplayMediaIncludeOrExclude;

export type WindowAudioPreferenceEnum = DisplayMediaSystemWindowOrExclude;

export type SelfCapturePreferenceEnum = DisplayMediaIncludeOrExclude;

export type SurfaceSwitchingPreferenceEnum = DisplayMediaIncludeOrExclude;

export type MonitorTypeSurfacesEnum = DisplayMediaIncludeOrExclude;

export interface UserMediaStreamConstraints {
  /** @default false */
  video?: boolean | MediaTrackConstraints;
  /** @default false */
  audio?: boolean | MediaTrackConstraints;
}

export interface DisplayMediaStreamOptions {
  /** @default true */
  video?: boolean | MediaTrackConstraints;
  /** @default false */
  audio?: boolean | MediaTrackConstraints;
  /** @default false */
  preferCurrentTab?: boolean;
  controller?: CaptureController;
  selfBrowserSurface?: SelfCapturePreferenceEnum;
  systemAudio?: SystemAudioPreferenceEnum;
  windowAudio?: WindowAudioPreferenceEnum;
  surfaceSwitching?: SurfaceSwitchingPreferenceEnum;
  monitorTypeSurfaces?: MonitorTypeSurfacesEnum;
}

export interface MediaStreamConstraints {
  /** @default false */
  video?: boolean | MediaTrackConstraints;
  /** @default false */
  audio?: boolean | MediaTrackConstraints;
  /** @default false */
  preferCurrentTab?: boolean;
  controller?: CaptureController;
  selfBrowserSurface?: SelfCapturePreferenceEnum;
  systemAudio?: SystemAudioPreferenceEnum;
  windowAudio?: WindowAudioPreferenceEnum;
  surfaceSwitching?: SurfaceSwitchingPreferenceEnum;
  monitorTypeSurfaces?: MonitorTypeSurfacesEnum;
}

export interface AudioOutputOptions {
  /** @default "" */
  deviceId?: string;
}

declare global {
  interface MediaDevices extends EventTarget {
    ondevicechange: ((ev: Event) => any) | null;
    enumerateDevices(): Promise<MediaDeviceInfo[]>;
    getSupportedConstraints(): MediaTrackSupportedConstraints;
    getUserMedia(constraints?: UserMediaStreamConstraints): Promise<MediaStream>;
    getDisplayMedia(constraints?: DisplayMediaStreamOptions): Promise<MediaStream>;
    getAllScreensMedia(): Promise<MediaStream[]>;
    selectAudioOutput(options?: AudioOutputOptions): Promise<MediaDeviceInfo>;
    setCaptureHandleConfig(config?: CaptureHandleConfig): void;
    setPreferredSinkId(sinkId: string): Promise<undefined>;
  }
}

export interface CaptureHandleConfig {
  /** @default false */
  exposeOrigin?: boolean;
  /** @default "" */
  handle?: string;
  /** @default [] */
  permittedOrigins?: string[];
}

export type CaptureStartFocusBehavior =
  | "focus-capturing-application"
  | "focus-captured-surface"
  | "no-focus-change";

export class CaptureController extends EventTarget {
  constructor();
  setFocusBehavior(focusBehavior: CaptureStartFocusBehavior): void;
  oncapturedmousechange: ((ev: Event) => any) | null;
  forwardWheel(element: HTMLElement | null): Promise<undefined>;
  getSupportedZoomLevels(): number[];
  readonly zoomLevel: number | null;
  increaseZoomLevel(): Promise<undefined>;
  decreaseZoomLevel(): Promise<undefined>;
  resetZoomLevel(): Promise<undefined>;
  onzoomlevelchange: ((ev: Event) => any) | null;
}
