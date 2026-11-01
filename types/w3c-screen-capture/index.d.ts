/**
 * @see https://w3c.github.io/mediacapture-screen-share
 */

interface MediaDevices {
    /**
     * Prompts the user for permission to live-capture their display, returning a
     * MediaStream containing video and optionally audio tracks.
     * Requires transient activation and a fully active, focused document.
     * @param options Options dictionary specifying video, audio, and capture
     *   behavior preferences.
     * @return A Promise that resolves to a MediaStream object representing the
     *   captured display.
     * @throws {TypeError} If video is set to false, or if constraints contain an
     *   'advanced' member or invalid numeric/dictionary restrictions.
     * @throws {InvalidStateError} If the controller is already bound, if the
     *   global object lacks transient activation, or if the document is not fully
     *   active or does not have focus.
     * @throws {NotFoundError} If no sources of the requested type are available.
     * @throws {NotAllowedError} If permission is denied or the user never
     *   responds.
     * @throws {NotReadableError} If a hardware error prevents access.
     * @throws {AbortError} If device access fails for other reasons.
     * @example
     * ```typescript
     * try {
     *   let mediaStream = await navigator.mediaDevices.getDisplayMedia({video:true});
     *   videoElement.srcObject = mediaStream;
     * } catch (e) {
     *   console.log('Unable to acquire screen capture: ' + e);
     * }
     * ```
     */
    getDisplayMedia(options?: DisplayMediaStreamOptions): Promise<MediaStream>;
}

interface UserMediaStreamConstraints {
    /** @default false */
    video?: boolean | MediaTrackConstraints;
    /** @default false */
    audio?: boolean | MediaTrackConstraints;
}

type CaptureStartFocusBehavior =
    | "focus-capturing-application"
    | "focus-captured-surface"
    | "no-focus-change";

declare class CaptureController extends EventTarget {
    /** Creates a new CaptureController object. */
    constructor();
    /**
     * Sets the focus behavior desired by the application for the capture session.
     * @param focusBehavior The desired focus behavior preference.
     * @throws {InvalidStateError} If the controller's source is null, has been
     *   stopped, if the display surface type is neither browser nor window, or if
     *   the focus decision is finalized.
     */
    setFocusBehavior(focusBehavior: CaptureStartFocusBehavior): void;
}

type SelfCapturePreferenceEnum =
    | "include"
    | "exclude";

type SystemAudioPreferenceEnum =
    | "include"
    | "exclude";

type WindowAudioPreferenceEnum =
    | "system"
    | "window"
    | "exclude";

type SurfaceSwitchingPreferenceEnum =
    | "include"
    | "exclude";

type MonitorTypeSurfacesEnum =
    | "include"
    | "exclude";

interface DisplayMediaStreamOptions {
    /**
     * Requests a video track if true, and specifies desired processing options if
     * a Constraints structure is provided. Rejects with TypeError if false.
     * @default true
     */
    video?: boolean | MediaTrackConstraints;
    /**
     * Signals an interest in containing an audio track if true, and specifies
     * desired processing options if a Constraints structure is provided.
     * @default false
     */
    audio?: boolean | MediaTrackConstraints;
    /** Associate a CaptureController object with the capture-session. */
    controller?: CaptureController;
    /**
     * Signals application preference for whether the browser display surface
     * associated with the top-level browsing context should be among the choices
     * offered.
     */
    selfBrowserSurface?: SelfCapturePreferenceEnum;
    /**
     * Signals whether the application would like system audio to be included among
     * possible audio sources for monitor display surfaces.
     */
    systemAudio?: SystemAudioPreferenceEnum;
    /**
     * Signals whether the application would like window or system audio among
     * possible audio sources for window display surfaces.
     */
    windowAudio?: WindowAudioPreferenceEnum;
    /**
     * Signals whether the application would like the user agent to offer an option
     * to dynamically switch the captured display surface.
     */
    surfaceSwitching?: SurfaceSwitchingPreferenceEnum;
    /**
     * Signals whether the application would like the user agent to include
     * monitor-type display surfaces among the choices offered.
     */
    monitorTypeSurfaces?: MonitorTypeSurfacesEnum;
}

interface MediaTrackSupportedConstraints {
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

interface MediaTrackConstraintSet {
    displaySurface?: ConstrainDOMString;
    logicalSurface?: ConstrainBoolean;
    cursor?: ConstrainDOMString;
    restrictOwnAudio?: ConstrainBoolean;
    suppressLocalAudioPlayback?: ConstrainBoolean;
}

interface MediaTrackSettings {
    displaySurface?: string;
    logicalSurface?: boolean;
    cursor?: string;
    restrictOwnAudio?: boolean;
    suppressLocalAudioPlayback?: boolean;
    screenPixelRatio?: number;
}

interface MediaTrackCapabilities {
    displaySurface?: string;
    logicalSurface?: boolean;
    cursor?: string[];
}

type CursorCaptureConstraint =
    | "never"
    | "always"
    | "motion";
