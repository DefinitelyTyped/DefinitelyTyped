import {
    CaptureController,
    CaptureStartFocusBehavior,
    DisplayMediaStreamOptions,
    MediaTrackConstraintSet,
    SystemAudioPreferenceEnum,
    WindowAudioPreferenceEnum,
} from "w3c-screen-capture";

function testCaptureController() {
    const controller = new CaptureController();

    // Valid behaviors
    controller.setFocusBehavior("focus-capturing-application");
    controller.setFocusBehavior("focus-captured-surface");
    controller.setFocusBehavior("no-focus-change");

    // Inheritance check (EventTarget)
    controller.addEventListener("focus", () => {});

    // @ts-expect-error - Invalid enum value
    controller.setFocusBehavior("focus-unknown");
}

async function testGetDisplayMedia() {
    const controller = new CaptureController();

    const options: DisplayMediaStreamOptions = {
        video: true,
        audio: false,

        // Advanced Enum preferences
        controller: controller,
        selfBrowserSurface: "include",
        systemAudio: "exclude",
        windowAudio: "window",
        surfaceSwitching: "include",
        monitorTypeSurfaces: "exclude",
    };

    const stream = await navigator.mediaDevices.getDisplayMedia(options);
    const track = stream.getTracks()[0];
    track.stop();
}

function testConstraints() {
    // Verifying the extension of constraints
    const constraints: MediaTrackConstraintSet = {
        // New Screen Share specific constraints
        displaySurface: "monitor",
        logicalSurface: true,
        cursor: "motion",
        restrictOwnAudio: false,
        suppressLocalAudioPlayback: true,
    };

    const complexOptions: DisplayMediaStreamOptions = {
        video: constraints,
        audio: { echoCancellation: true },
    };
}

function testSettings(track: MediaStreamTrack) {
    const settings: MediaTrackSettings = track.getSettings();

    if (settings.displaySurface === "window") {
        console.log("Captured a window");
    }

    // @ts-expect-error - Type 'number' is not comparable to type 'string'
    if (settings.cursor === 123) {}
}
