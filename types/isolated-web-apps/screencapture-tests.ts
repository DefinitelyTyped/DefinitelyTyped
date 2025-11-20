import {
    NavigatorUserMediaSuccessCallback,
    NavigatorUserMediaErrorCallback,
    SystemAudioPreferenceEnum,
    WindowAudioPreferenceEnum,
    UserMediaStreamConstraints,
    DisplayMediaStreamOptions,
    MediaStreamConstraints,
    AudioOutputOptions,
    CaptureHandleConfig,
    CaptureController,
    CaptureStartFocusBehavior,
} from 'isolated-web-apps';

const dummyElement: HTMLElement = {} as HTMLElement;
const dummyCaptureController = new CaptureController();

// --------------------------------------------------------------------------------
// Type Aliases (Enums)
// --------------------------------------------------------------------------------

function testTypeAliases() {
    const sysAudioInclude: SystemAudioPreferenceEnum = 'include';
    // $ExpectType "include"
    sysAudioInclude;
    // @ts-expect-error invalid enum value
    const sysAudioInvalid: SystemAudioPreferenceEnum = 'unknown';

    const winAudioWindow: WindowAudioPreferenceEnum = 'window';
    // $ExpectType "window"
    winAudioWindow;

    const focusBehavior: CaptureStartFocusBehavior = 'focus-captured-surface';
    // $ExpectType "focus-captured-surface"
    focusBehavior;
}

// --------------------------------------------------------------------------------
// Constraint and Option Interfaces
// --------------------------------------------------------------------------------

function testOptionInterfaces() {
    const userConstraints: UserMediaStreamConstraints = {
        video: true,
        audio: { deviceId: 'default' },
    };
    // $ExpectType boolean | MediaTrackConstraints | undefined
    userConstraints.video;

    const displayOptions: DisplayMediaStreamOptions = {
        preferCurrentTab: true,
        controller: dummyCaptureController,
        selfBrowserSurface: 'exclude',
        systemAudio: 'include',
        windowAudio: 'system',
        surfaceSwitching: 'include',
        monitorTypeSurfaces: 'exclude',
    };
    // $ExpectType DisplayMediaIncludeOrExclude | undefined
    displayOptions.selfBrowserSurface;

    const combinedConstraints: MediaStreamConstraints = {
        audio: false,
        selfBrowserSurface: 'include',
        systemAudio: 'exclude',
    };
    // $ExpectType CaptureController | undefined
    combinedConstraints.controller;

    const audioOutOptions: AudioOutputOptions = {
        deviceId: 'speaker-id',
    };
    // $ExpectType string | undefined
    audioOutOptions.deviceId;

    const handleConfig: CaptureHandleConfig = {
        exposeOrigin: true,
        handle: 'my-app-id',
        permittedOrigins: ['*'],
    };
    // $ExpectType string[] | undefined
    handleConfig.permittedOrigins;
}

// --------------------------------------------------------------------------------
// CaptureController Class
// --------------------------------------------------------------------------------

function testCaptureController() {
    // $ExpectType CaptureController
    const controller = new CaptureController();

    // $ExpectType void
    controller.setFocusBehavior('focus-capturing-application');

    // $ExpectType ((ev: Event) => any) | null
    controller.oncapturedmousechange;
    // $ExpectType ((ev: Event) => any) | null
    controller.onzoomlevelchange;

    // $ExpectType Promise<undefined>
    controller.forwardWheel(dummyElement);
    // $ExpectType Promise<undefined>
    controller.forwardWheel(null);

    // $ExpectType number[]
    controller.getSupportedZoomLevels();
    // $ExpectType number | null
    controller.zoomLevel;
    // $ExpectType Promise<undefined>
    controller.increaseZoomLevel();
    // $ExpectType Promise<undefined>
    controller.decreaseZoomLevel();
    // $ExpectType Promise<undefined>
    controller.resetZoomLevel();
}

// --------------------------------------------------------------------------------
// MediaDevices & Navigator Global APIs
// --------------------------------------------------------------------------------

async function testMediaDevicesAndNavigator() {
    const constraints: MediaStreamConstraints = { video: true };
    const userConstraints: UserMediaStreamConstraints = { video: true };
    const displayOptions: DisplayMediaStreamOptions = { video: true };

    if (navigator.getUserMedia) {
        const successCallback: NavigatorUserMediaSuccessCallback = (stream) => {
            // $ExpectType MediaStream
            stream;
        };
        const errorCallback: NavigatorUserMediaErrorCallback = (error) => {
            // $ExpectType MediaStreamError
            error;
        };
        // $ExpectType void
        navigator.getUserMedia(constraints, successCallback, errorCallback);
    }

    if (navigator.mediaDevices) {
        // $ExpectType Promise<MediaStream>
        navigator.mediaDevices.getUserMedia(userConstraints);

        // $ExpectType Promise<MediaStream>
        navigator.mediaDevices.getDisplayMedia(displayOptions);

        if (navigator.mediaDevices.getAllScreensMedia) {
            // $ExpectType Promise<MediaStream[]>
            navigator.mediaDevices.getAllScreensMedia();
        }

        // $ExpectType Promise<MediaDeviceInfo>
        navigator.mediaDevices.selectAudioOutput();

        const config: CaptureHandleConfig = { exposeOrigin: true };
        // $ExpectType void
        navigator.mediaDevices.setCaptureHandleConfig(config);

        // $ExpectType Promise<undefined>
        navigator.mediaDevices.setPreferredSinkId("id");
    }
}