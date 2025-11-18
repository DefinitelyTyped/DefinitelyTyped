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

export type NavigatorUserMediaSuccessCallback = (stream: MediaStream) => void;

export type NavigatorUserMediaErrorCallback = (error: MediaStreamError) => void;

export type MediaStreamError = any;

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
  video?: any;
  /** @default false */
  audio?: any;
}

export interface DisplayMediaStreamOptions {
  /** @default true */
  video?: any;
  /** @default false */
  audio?: any;
  /** @default false */
  preferCurrentTab?: boolean;
  /** @remarks Extended attributes: [RuntimeEnabled=CaptureController] */
  controller?: CaptureController;
  selfBrowserSurface?: SelfCapturePreferenceEnum;
  systemAudio?: SystemAudioPreferenceEnum;
  /** @remarks Extended attributes: [RuntimeEnabled=GetDisplayMediaWindowAudioCapture] */
  windowAudio?: WindowAudioPreferenceEnum;
  surfaceSwitching?: SurfaceSwitchingPreferenceEnum;
  monitorTypeSurfaces?: MonitorTypeSurfacesEnum;
}

export interface MediaStreamConstraints {
  /** @default false */
  video?: any;
  /** @default false */
  audio?: any;
  /** @default false */
  preferCurrentTab?: boolean;
  controller?: CaptureController;
  selfBrowserSurface?: SelfCapturePreferenceEnum;
  systemAudio?: SystemAudioPreferenceEnum;
  /** @remarks Extended attributes: [RuntimeEnabled=GetDisplayMediaWindowAudioCapture] */
  windowAudio?: WindowAudioPreferenceEnum;
  surfaceSwitching?: SurfaceSwitchingPreferenceEnum;
  monitorTypeSurfaces?: MonitorTypeSurfacesEnum;
}

export interface AudioOutputOptions {
  /** @default "" */
  deviceId?: string;
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

/** @remarks Extended attributes: [Exposed=Window, SecureContext, RuntimeEnabled=CaptureController] */
export class CaptureController extends EventTarget {
  /** @remarks Extended attributes: [CallWith=ExecutionContext] */
  constructor()
  /** @remarks Extended attributes: [RaisesException, MeasureAs=ConditionalFocus] */
  setFocusBehavior(focusBehavior: CaptureStartFocusBehavior): void;
  /** @remarks Extended attributes: [RuntimeEnabled=CapturedMouseEvents] */
  oncapturedmousechange: ((this: CaptureController, ev: Event) => any) | null;
  /** @remarks Extended attributes: [RuntimeEnabled=CapturedSurfaceControl, MeasureAs=CapturedSurfaceControl, CallWith=ScriptState] */
  forwardWheel(element: HTMLElement | null): Promise<undefined>;
  /** @remarks Extended attributes: [RuntimeEnabled=CapturedSurfaceControl, MeasureAs=CapturedSurfaceControl, RaisesException] */
  getSupportedZoomLevels(): number[];
  /** @remarks Extended attributes: [RuntimeEnabled=CapturedSurfaceControl, MeasureAs=CapturedSurfaceControl] */
  readonly zoomLevel: number | null;
  /** @remarks Extended attributes: [RuntimeEnabled=CapturedSurfaceControl, MeasureAs=CapturedSurfaceControl, CallWith=ScriptState] */
  increaseZoomLevel(): Promise<undefined>;
  /** @remarks Extended attributes: [RuntimeEnabled=CapturedSurfaceControl, MeasureAs=CapturedSurfaceControl, CallWith=ScriptState] */
  decreaseZoomLevel(): Promise<undefined>;
  /** @remarks Extended attributes: [RuntimeEnabled=CapturedSurfaceControl, MeasureAs=CapturedSurfaceControl, CallWith=ScriptState] */
  resetZoomLevel(): Promise<undefined>;
  /** @remarks Extended attributes: [RuntimeEnabled=CapturedSurfaceControl, MeasureAs=CapturedSurfaceControl] */
  onzoomlevelchange: ((this: CaptureController, ev: Event) => any) | null;
}

