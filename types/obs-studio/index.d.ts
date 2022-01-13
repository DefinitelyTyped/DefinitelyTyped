// Type definitions for non-npm package obs-browser 2.16
// Project: https://github.com/obsproject/obs-browser
// Definitions by: Dillon Pentz <https://github.com/VodBox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace obsstudio {
    /**
     * OBS Browser plugin version.
     */
    const pluginVersion: string;

    /**
     * Gets the current control permission level, as set by the user in the obs-browser plugin settings.
     *
     * Control permission levels are returned as numbers, and represent the following:
     *
     * 0 = NONE
     * 1 = READ_ONLY
     * 2 = BASIC
     * 3 = ADVANCED
     * 4 = ALL
     *
     * @param callback The callback provided by the caller to receive the control level.
     */
    // tslint:disable-next-line:no-any
    function getControlLevel(callback?: (level: OBSControlLevel) => any): void;

    /**
     * Gets the currently selected scene in OBS Studio.
     *
     * Requires permission level of READ_ONLY or higher.
     *
     * @param callback The callback provided by the caller to receive the current scene, if successful.
     */
    // tslint:disable-next-line:no-any
    function getCurrentScene(callback?: (scene: OBSSceneInfo) => any): void;

    /**
     * Gets the output status of OBS Studio.
     *
     * Requires permission level of READ_ONLY or higher.
     *
     * @param callback The callback provided by the caller to receive the output status, if successful.
     */
    // tslint:disable-next-line:no-any
    function getStatus(callback?: (status: OBSStatus) => any): void;

    /**
     * Save the Replay Buffer in OBS Studio.
     *
     * Requires permission level of BASIC or higher.
     */
    function saveReplayBuffer(): void;

    /**
     * Starts the Replay Buffer in OBS Studio.
     *
     * Requires permission level of ADVANCED or higher.
     */
    function startReplayBuffer(): void;

    /**
     * Stops the Replay Buffer in OBS Studio.
     *
     * Requires permission level of ADVANCED or higher.
     */
    function stopReplayBuffer(): void;

    /**
     * Starts streaming in OBS Studio.
     *
     * Requires permission level of ALL.
     */
    function startStreaming(): void;

    /**
     * Stops streaming in OBS Studio.
     *
     * Requires permission level of ALL.
     */
    function stopStreaming(): void;

    /**
     * Starts recording in OBS Studio.
     *
     * Requires permission level of ALL.
     */
    function startRecording(): void;

    /**
     * Stops recording in OBS Studio.
     *
     * Requires permission level of ALL.
     */
    function stopRecording(): void;

    /**
     * Pauses recording in OBS Studio.
     *
     * Requires permission level of ALL.
     */
    function pauseRecording(): void;

    /**
     * Unpauses recording in OBS Studio.
     *
     * Requires permission level of ALL.
     */
    function unpauseRecording(): void;

    /**
     * Starts the VirtualCam in OBS Studio.
     *
     * Requires permission level of ALL.
     */
    function startVirtualcam(): void;

    /**
     * Stops the VirtualCam in OBS Studio.
     *
     * Requires permission level of ALL.
     */
    function stopVirtualcam(): void;

    /**
     * This function is called when the visibility of the browser source changes in OBS.
     *
     * @deprecated since version 2.8.5
     */
    function onVisibilityChange(visibility: boolean): void;

    /**
     * This function is called when the active/inactive state of the browser source changes in OBS.
     *
     * @deprecated since version 2.8.5
     */
    function onActiveChange(visibility: boolean): void;
}

type OBSControlLevel = 0 | 1 | 2 | 3 | 4;

interface OBSStatus {
    recording: boolean;
    recordingPaused: boolean;
    streaming: boolean;
    replaybuffer: boolean;
    virtualcam: boolean;
}

interface OBSSceneInfo {
    name: string;
    width: number;
    height: number;
}

interface VisibleInfo {
    visible: boolean;
}

interface ActiveInfo {
    active: boolean;
}

interface OBSStudioEventMap {
    obsStreamingStarting: CustomEvent<null>;
    obsStreamingStarted: CustomEvent<null>;
    obsStreamingStopping: CustomEvent<null>;
    obsStreamingStopped: CustomEvent<null>;

    obsRecordingStarting: CustomEvent<null>;
    obsRecordingStarted: CustomEvent<null>;
    obsRecordingPaused: CustomEvent<null>;
    obsRecordingUnpaused: CustomEvent<null>;
    obsRecordingStopping: CustomEvent<null>;
    obsRecordingStopped: CustomEvent<null>;

    obsReplayBufferStarting: CustomEvent<null>;
    obsReplayBufferStarted: CustomEvent<null>;
    obsReplayBufferStopping: CustomEvent<null>;
    obsReplayBufferStopped: CustomEvent<null>;

    obsVirtualcamStarted: CustomEvent<null>;
    obsVirtualcamStopped: CustomEvent<null>;

    obsSceneChanged: CustomEvent<OBSSceneInfo>;

    obsSourceVisibleChanged: CustomEvent<VisibleInfo>;
    obsSourceActiveChanged: CustomEvent<ActiveInfo>;

    obsExit: CustomEvent<null>;
}

interface Window {
    addEventListener<K extends keyof OBSStudioEventMap>(
        type: K,
        // tslint:disable-next-line:no-any
        listener: (event: Event & OBSStudioEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;

    removeEventListener<K extends keyof OBSStudioEventMap>(
        type: K,
        // tslint:disable-next-line:no-any
        listener: (event: Event & OBSStudioEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;
}
