import { type Component } from "react";

export interface EmulatorProps {
    /** The authentication service to use, or null for no authentication. */
    auth?: object | null;
    gps?: GeolocationCoordinates;
    height?: number;
    /** True if the audio should be disabled. This is only relevant when using the webrtc engine. */
    muted?: boolean;
    onAudioStateChange?: (state: boolean) => void;
    onError?: (error: Error) => void;
    /** Called upon state change, one of ["connecting", "connected", "disconnected"] */
    onStateChange?: (
        state: "connecting" | "connected" | "disconnected",
    ) => void;
    poll?: boolean;
    /** gRPC Endpoint where we can reach the emulator. */
    uri: string;
    view: "webrtc" | "png";
    /** Volume between [0, 1] when audio is enabled. 0 is muted, 1.0 is 100% */
    volume?: number;
    width?: number;
}

export type EmulatorKey =
    | "AudioVolumeDown"
    | "AudioVolumeUp"
    | "Power"
    | "AppSwitch"
    | "GoHome"
    | "GoBack"
    | KeyboardEvent["key"];

export interface EmulatorState {
    audio: boolean;
}

/**
 * A React component that displays a remote android emulator.
 *
 * The emulator will mount a png or webrtc view component to display the current state
 * of the emulator. It will translate mouse events on this component and send them
 * to the actual emulator.
 *
 * #### Authentication Service
 *
 * The authentication service should implement the following methods:
 *
 * - `authHeader()` which must return a set of headers that should be send along with a request.
 * - `unauthorized()` a function that gets called when a 401 was received.
 *
 * #### Type of view
 *
 * You usually want this to be webrtc as this will make use of the efficient
 * webrtc implementation. The png view will request screenshots, which are
 * very slow, and require the envoy proxy. You should not use this for remote emulators.
 *
 * Note that chrome will not autoplay the video if it is not muted and no interaction
 * with the page has taken place. See https://developers.google.com/web/updates/2017/09/autoplay-policy-changes.
 *
 * #### Pressing hardware buttons
 *
 * This component has a method `sendKey` that sends a key to the emulator.
 * You can use this to send physical button events to the emulator for example:
 *
 * "AudioVolumeDown" - 	Decreases the audio volume.
 * "AudioVolumeUp"   -	Increases the audio volume.
 * "Power"	         -  The Power button or key, turn off the device.
 * "AppSwitch"       -  Should bring up the application switcher dialog.
 * "GoHome"          -  Go to the home screen.
 * "GoBack"          -  Open the previous screen you were looking at.
 */
export class Emulator extends Component<EmulatorProps, EmulatorState> {
    static defaultProps: Partial<EmulatorProps>;

    /**
     * Sends the given key to the emulator.
     *
     * You can use this to send physical hardware events to the emulator for example:
     *
     * "AudioVolumeDown" - 	Decreases the audio volume.
     * "AudioVolumeUp"   -	Increases the audio volume.
     * "Power"	         -  The Power button or key, turn off the device.
     * "AppSwitch"       -  Should bring up the application switcher dialog.
     * "GoHome"          -  Go to the home screen.
     * "GoBack"          -  Open the previous screen you were looking at.
     *
     * See https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values for
     * a list of valid values you can send as well.
     */
    sendKey(key: EmulatorKey): void;
}
