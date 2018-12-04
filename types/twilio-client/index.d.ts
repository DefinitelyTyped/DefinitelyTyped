// Type definitions for twilio-client 1.6
// Project: https://www.npmjs.com/package/twilio-client
// Definitions by: Ryan Castner <https://github.com/audiolion>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { EventEmitter } from "events";

declare namespace Twilio {
    /**
     * 310xx Series: General Errors
     */

    /**
     * Generic Twilio Client error. No further information available. Check the debugger for more info.
     */
    type error31000 = 31000;

    /**
     * Application not found.
     */
    type error31001 = 31001;

    /**
     * Connection declined. Check the debugger for more information on the actual cause.
     */
    type error31002 = 31002;

    /**
     * Connection timeout.
     */
    type error31003 = 31003;

    /**
     * Generic malformed request;
     */
    type error31100 = 31100;

    type GeneralError = error31000 | error31001 | error31002 | error31003;

    /**
     * 311xx Series: Malformed Requests
     */

    /**
     * Missing parameter array in request.
     */
    type error31101 = 31101;

    /**
     * Authorization token missing in request.
     */
    type error31102 = 31102;

    /**
     * Length of parameters cannot exceed MAX_PARAM_LENGTH.
     */
    type error31103 = 31103;

    /**
     * Invalid bridge token.
     */
    type error31104 = 31104;

    /**
     * Invalid client name.
     */
    type error31105 = 31105;

    type MalformedRequestError =
        | error31100
        | error31101
        | error31102
        | error31103
        | error31104
        | error31105;

    /**
     * 312xx Series: Authorization Errors
     */

    /**
     * Generic unknown error.
     */
    type error31201 = 312101;

    /**
     * JWT signature validation failed.
     */
    type error31202 = 31202;

    /**
     * No valid account.
     */
    type error31203 = 31203;

    /**
     * Invalid JWT token.
     */
    type error31204 = 31204;

    /**
     * JWT token expired.
     */
    type error31205 = 31205;

    /**
     * Rate exceeded authorized limit.
     */
    type error31206 = 31206;

    /**
     * JWT token expiration too long.
     */
    type error31207 = 31207;

    /**
     * User denied access to microphone.
     */
    type error31208 = 31208;

    type AuthorizationError =
        | error31201
        | error31202
        | error31203
        | error31204
        | error31205
        | error31206
        | error31207
        | error31208;

    type TwilioError =
        | GeneralError
        | MalformedRequestError
        | AuthorizationError;

    namespace Warning {
        type EventLevel = "WARNING" | "INFO" | "ERROR" | "DEBUG";

        type highRtt = "high-rtt";
        type lowMos = "low-mos";
        type highJitter = "high-jitter";
        type highPacketLoss = "high-packet-loss";
        type NetworkWarningName =
            | highRtt
            | lowMos
            | highJitter
            | highPacketLoss;

        type constantAudioInputLevel = "constant-audio-input-level";
        type constantAudioOutputLevel = "constant-audio-output-level";
        type AudioLevelWarningName =
            | constantAudioInputLevel
            | constantAudioOutputLevel;

        type WarningName = NetworkWarningName | AudioLevelWarningName;
    }

    type SoundName =
        | "incoming"
        | "outgoing"
        | "disconnect"
        | "dtmf0"
        | "dtmf1"
        | "dtmf2"
        | "dtmf3"
        | "dtmf4"
        | "dtmf5"
        | "dtmf6"
        | "dtmf7"
        | "dtmf8"
        | "dtmf9"
        | "dtmfs"
        | "dtmfh";

    interface SoundProperties {
        incoming: "incoming" | string;
        outgoing: "outgoing" | string;
        disconnect: "disconnect" | string;
        dtmf0: "dtmf-0" | string;
        dtmf1: "dtmf-1" | string;
        dtmf2: "dtmf-2" | string;
        dtmf3: "dtmf-3" | string;
        dtmf4: "dtmf-4" | string;
        dtmf5: "dtmf-5" | string;
        dtmf6: "dtmf-6" | string;
        dtmf7: "dtmf-7" | string;
        dtmf8: "dtmf-8" | string;
        dtmf9: "dtmf-9" | string;
        dtmfS: "dtmf-star" | string;
        dtmfH: "dtmf-hash" | string;
    }

    enum Region {
        Au1 = "au1",
        Br1 = "br1",
        De1 = "de1",
        Gll = "gll",
        Ie1 = "ie1",
        Ie1Ix = "ie1-ix",
        Ie1Tnx = "ie1-tnx",
        Jp1 = "jp1",
        Sg1 = "sg1",
        Us1 = "us1",
        Us1Ix = "us1-ix",
        Us1Tnx = "us1-tnx",
        Us2 = "us2",
        Us2Ix = "us2-ix",
        Us2Tnx = "us2-tnx"
    }

    enum RegionURIs {
        Au1 = "chunderw-vpc-gll-au1.twilio.com",
        Br1 = "chunderw-vpc-gll-br1.twilio.com",
        De1 = "chunderw-vpc-gll-de1.twilio.com",
        Gll = "chunderw-vpc-gll.twilio.com",
        Ie1 = "chunderw-vpc-gll-ie1.twilio.com",
        Ie1Ix = "chunderw-vpc-gll-ie1-ix.twilio.com",
        Ie1Tnx = "chunderw-vpc-gll-ie1-tnx.twilio.com",
        Jp1 = "chunderw-vpc-gll-jp1.twilio.com",
        Sg1 = "chunderw-vpc-gll-sg1.twilio.com",
        Us1 = "chunderw-vpc-gll-us1.twilio.com",
        Us1Ix = "chunderw-vpc-gll-us1-ix.twilio.com",
        Us1Tnx = "chunderw-vpc-gll-us1-tnx.twilio.com",
        Us2 = "chunderw-vpc-gll-us2.twilio.com",
        Us2Ix = "chunderw-vpc-gll-us2-ix.twilio.com",
        Us2Tnx = "chunderw-vpc-gll-us2-tnx.twilio.com"
    }

    /**
     * Each web browser implements a different set of `MediaTrackConstraints` which may be used as `AudioConstraints`,
     * so consult your browser's implementation of `getUserMedia` for further details.
     */
    interface AudioConstraints {
        [key: string]: any;
    }

    interface RTCConfiguration {
        [key: string]: any;
    }

    interface WARNING_NAMES {
        audioInputLevel: "audio-input-level";
        audioOutputLevel: "audio-output-level";
        jitter: "jitter";
        mos: "mos";
        packetsLostFraction: "packet-loss";
        rtt: "rtt";
    }

    interface WARNING_PREFIXES {
        max: "high-";
        maxDuration: "constant-";
        min: "low-";
    }

    enum FeedbackIssue {
        AudioLatency = "audio-latency",
        ChoppyAudio = "choppy-audio",
        DroppedCall = "dropped-call",
        Echo = "echo",
        NosiyCall = "noisy-call",
        OneWayAudio = "one-way-audio"
    }

    enum FeedbackScore {
        One = 1,
        Two = 2,
        Three = 3,
        Four = 4,
        Five = 5
    }

    enum CallDirection {
        Incoming = "INCOMING",
        Outgoing = "OUTGOING"
    }

    interface ConnectionConfig {
        soundcache: any;
        publisher: any;
        audioHelper: any;
        pstream: any;
        getUserMedia: any;
    }

    interface ConnectionOptions {
        debug?: boolean;
        enableRingingState?: boolean;
        mediaStreamFactory?: any;
        offerSdp?: any;
        shouldPlayDisconnect?: boolean;
    }

    type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | "*" | "#" | "w";

    /**
     * The connection is incoming and hasn't yet been established.
     */
    type connectionPending = "pending";

    /**
     * The connection has been accepted by or initiated by the local client.
     */
    type connectionConnecting = "connecting";

    /**
     * The callee has been notified of the call but has not yet responded.
     *
     * _Note_: Until 2.0, this state is only surfaced when the `enableRingingState` flag is set
     * to true in `Device.setup` options and the TwiML app is dialing out with the `answerOnBridge` property,
     * eg: `<Dial answerOnBridge=true></Dial>`.
     */
    type connectionRinging = "ringing";

    /**
     * The connection has been established.
     */
    type connectionOpen = "open";

    /**
     * The connection has been disconnected.
     */
    type connectionClosed = "closed";

    type ConnectionState =
        | connectionPending
        | connectionConnecting
        | connectionRinging
        | connectionOpen
        | connectionClosed;

    /**
     * Raised when a {@link Connection} has transitioned from {@link connectionConnecting} to {@link connectionOpen} state.
     */
    type connectionAcceptEvent = "accept";

    /**
     * Raised when a {@link Connection} is closed.
     */
    type connectionDisconnectEvent = "disconnect";

    /**
     * Raised when any {@link Device} error occurs during the lifetime of a connection.
     *
     * These may be errors in your request, your capability token, connection errors, or other application errors.
     */
    type connectionErrorEvent = "error";

    /**
     * Raised when a {@link Connection} is muted or unmuted.
     */
    type connectionMuteEvent = "mute";

    /**
     * Raised when a {@link Connection} has entered the {@link connectionRinging} state.
     *
     * _Note_: Event only fires if `Device.setup`'s {@link enableRingingState} option is `true`
     */
    type connectionRingingEvent = "ringing";

    /**
     * Raised up to 60 times per second, scaling down on slower devices.
     */
    type connectionVolumeEvent = "volume";

    /**
     * Raised when a call-quality-metric has crossed a threshold.
     */
    type connectionWarningEvent = "warning";

    /**
     * Raised when a call-quality-metric has returned to normal.
     */
    type connectionWarningClearedEvent = "warning-cleared";

    type ConnectionEvent =
        | connectionAcceptEvent
        | connectionDisconnectEvent
        | connectionErrorEvent
        | connectionMuteEvent
        | connectionRingingEvent
        | connectionVolumeEvent
        | connectionWarningEvent
        | connectionWarningClearedEvent;

    type ConnectionCustomParameters = Map<string, string>;

    /**
     * A unique identifier for this call, generated by Twilio.
     */
    type callSid = string;

    /**
     * Your Twilio account ID. It is 34 characters long, and always starts with the letters AC.
     */
    type accountSid = string;

    /**
     * The phone number or client identifier of the party that initiated the call.
     * Phone numbers are formatted with a '+' and country code, e.g. `+16175551212` ([E.164][e164] format).
     * Client identifiers begin with the `client:` URI scheme; for example, for a call from a client
     * named 'tommy', the From parameter will be `client:tommy`.
     */
    type from = string;

    /**
     * The phone number or client identifier of the called party. Phone numbers are formatted
     * with a '+' and country code, e.g. `+16175551212` ( [E.164][e164] format). Client identifiers
     * begin with the `client:` URI scheme; for example, for a call to a client named 'joey', the
     * To parameter will be `client:joey`.
     */
    type to = string;

    /**
     * 	The version of the Twilio API used to handle this call. For incoming calls, this is
     * determined by the API version set on the called number. For outgoing calls, this is the
     * API version used by the outgoing call's REST API request.
     */
    type apiVersion = string;

    interface IncomingConnectionParameters {
        CallSid: callSid;
        AccountSid: accountSid;
        From: from;
        To: to;
        ApiVerison: apiVersion;
    }

    interface OutgoingConnectionParameters {
        CallSid: callSid;
    }

    class Connection extends EventEmitter {
        direction: CallDirection;
        parameters: IncomingConnectionParameters | OutgoingConnectionParameters;
        customParameters: ConnectionCustomParameters;
        constructor(config: ConnectionConfig, options: ConnectionOptions);

        /**
         * Accepts an incoming connection.
         *
         * This will begin establishing the media session to this device. The connection status will be set to {@link connectionConnecting} while
         * the media session for the call is setup. The connection status will change to {@link connectionOpen} once the media session
         * is established.
         * @param audioConstraints
         */
        accept(audioConstraints?: AudioConstraints): void;

        /**
         * Ignore a pending connection.
         *
         * This will stop the Client device from playing the incoming sound and set the connection state to {@link connectionClosed}, but
         * will not send a hangup message to the dialing party. The incoming call will keep ringing until another Client with the
         * same name answers the call, or the call times out.
         */
        ignore(): void;

        /**
         * Close this connection.
         */
        disconnect(): void;

        /**
         * Get the local MediaStream being used by the Connection. This contains the local Client's audio input.
         */
        getLocalStream(): MediaStream;

        /**
         * Get the remote MediaStream. This contains the remote Client's audio, which is being received locally and output through
         * the local Client's speakers.
         */
        getRemoteStream(): MediaStream;

        /**
         * Returns a boolean indicating whether the connection is muted.
         */
        isMuted(): boolean;

        /**
         * Mutes or unmutes the current connection based on the boolean parameter you provide. `true` mutes the connection by ending
         * audio gathered from the user's microphone, `false` unmutes the connection.
         */
        mute(shouldMute: boolean): void;

        /**
         * Reject a pending connection.
         *
         * This will cause a hangup to be issued from the client session to the dialing party. If multiple client sessions are active
         * the pending connection will be rejected for all of them.
         */
        reject(): void;

        /**
         * Posts the feedback collected for this call to Twilio. If no parameters are passed, Twilio will report feedback was not
         * available for this call. Posting the feedback using this API will enable you to understand exactly which factors
         * contribute to audio quality problems. Twilio will be able to correlate the metrics with perceived call quality and
         * provide an accurate picture of the factors affecting your users’ call experience.
         */
        postFeedback(
            score: FeedbackScore,
            issue: FeedbackIssue
        ): Promise<any> | Error;

        /**
         * Play DTMF tones. The `digits` parameter is a string and can contain the characters `0-9`, `*`, `#`, and `w`. Each w will
         * cause a 500 ms pause between digits sent. If you're familiar with TwiML, you can think of the `sendDigits` method as
         * the `sendDigits` attribute in the `<Number>` noun. The SDK only supports sending DTMF digits. It does not raise events
         * if DTMF digits are present in the incoming audio stream.
         *
         * @param digits a string of one or more {@link Digit}
         */
        sendDigits(digits: string): void;

        /**
         * Return the status of this connection.
         */
        status(): ConnectionState;

        /**
         * Fired on `requestAnimationFrame` (up to 60fps, depending on browser) with
         *   the current input and output volumes, as a percentage of maximum
         *   volume, between -100dB and -30dB. Represented by a floating point
         *   number between 0.0 and 1.0, inclusive.
         * @param handler
         */
        volume(handler: () => any): void;

        /**
         * Register a handler function to be called when this connection object has finished connecting and changes its state to open.
         */
        on(
            event: connectionAcceptEvent,
            handler: (connection: Connection) => any
        ): this;

        /**
         * Register a handler function to be called when this connection is closed.
         */
        on(
            event: connectionDisconnectEvent,
            handler: (connection: Connection) => any
        ): this;

        /**
         * Register a handler function to be called when any device error occurs during the lifetime of this connection.
         */
        on(
            event: connectionErrorEvent,
            handler: (error: DeviceError) => any
        ): this;

        /**
         * Register a handler function to be called when a connection is muted or unmuted.
         */
        on(
            event: connectionMuteEvent,
            handler: (isMuted: boolean, connection: Connection) => any
        ): this;

        /**
         * _Note_: This feature is behind a flag on `Device.setup`: `enableRingingState`. By default, this event will not fire.
         *
         * Raised when the {@link Connection} has entered the ringing state. By default, TwiML's Dial verb will connect
         * immediately and this state will be brief or skipped entirely. When using the Dial verb with `answerOnBridge=true`,
         * the ringing state will begin when the callee has been notified of the call and will transition into open after
         * the callee accepts the call, or closed if the call is rejected or cancelled.
         *
         * The `hasEarlyMedia` argument is a boolean denoting whether there is early media available from the callee. If `true`,
         * the Client SDK will automatically play the early media -- Sometimes this is ringing, other times it may be an important
         * message about the call. If `false`, there is no remote media to play, so the application may want to play its own
         * outgoing ringtone sound.
         */
        on(
            event: connectionRingingEvent,
            handler: (hasEarlyMedia: boolean) => any
        ): this;

        /**
         * Register a handler function to be called with the Connection’s current input volume and output volume on every
         * animation frame. The handler will be invoked up to 60 times per second, and will scale down dynamically on slower
         * devices to preserve performance. The handler receives inputVolume and outputVolume as percentages of maximum volume
         * represented by a floating point number between 0.0 and 1.0, inclusive. This value represents a range of relative
         * decibel values between -100dB and -30dB.
         */
        on(
            event: connectionVolumeEvent,
            handler: (inputVolume: number, outputVolume: number) => any
        ): this;

        /**
         * Register a handler function to be called when a {@link Warning.WarningName} event is raised.
         */
        on(
            event: connectionWarningEvent,
            handler: (warningName: Warning.WarningName) => any
        ): this;

        /**
         * Register a handler function to be called when a {@link Warning.WarningName} event is cleared.
         */
        on(
            event: connectionWarningClearedEvent,
            handler: (warningName: Warning.WarningName) => any
        ): this;
    }

    class AudioOutputCollection {
        constructor();
        /**
         * Get a `Set` containing `MediaDeviceInfo` objects representing the active devices in the collection.
         */
        get(): Set<MediaDeviceInfo>;

        /**
         * Replace the active devices in the collection by passing one or more device IDs.
         *
         * Fulfilled if the device(s) were set successfully and rejected if:
         *  - Output selection is not supported by the browser or
         *  - A specified deviceId wasn't found or
         *  - No deviceIds were specified
         */
        set(deviceId: string): Promise<any>;

        /**
         * Test the active devices by playing a sound through them.
         *
         * Fulfilled if devices were set successfully and rejected if:
         *  - Output selection is not supported by the browser or
         *  - There are no active devices or
         *  - Client detects one or more devices failed to play
         */
        test(soundUrl?: string): Promise<any>;
    }

    type audioDeviceChangeEvent = "deviceChange";
    type audioInputVolumeEvent = "inputVolume";

    class AudioHelper extends EventEmitter {
        /**
         * A Map of all audio input devices currently available to the browser by their device ID.
         */
        availableInputDevices: Map<string, MediaDeviceInfo>;

        /**
         * A Map of all audio output devices currently available to the browser by their device ID.
         */
        availableOutputDevices: Map<string, MediaDeviceInfo>;

        /**
         * The active input device. This will not initially be populated. Having no inputDevice specified by
         * setInputDevice() will disable input selection related functionality.
         */
        inputDevice: MediaDeviceInfo | null;

        /**
         * False if the browser does not support setSinkId or enumerateDevices and Twilio can not facilitate
         * output selection functionality.
         */
        isOutputSelectionSupported: boolean;

        /**
         * False if the browser does not support AudioContext and Twilio can not analyse the volume in real-time.
         */
        isVolumeSupported: boolean;

        /**
         * An {@link AudioOutputCollection} that controls which output devices are used to play standard
         * speaker sounds: the ringtone you hear when initiating a call, the disconnect sound, DTMF tones the
         * user might press and the audio received from the remote participant. Changing this set of devices
         * will switch the device(s) used for these sounds. If you change these during an active call, the
         * remote participant’s audio will immediately be played through the new set of outputs.
         */
        speakerDevices: AudioOutputCollection;

        /**
         * An {@link AudioOutputCollection} that controls which output devices are used to play the ringing
         * sound when receiving an incoming call. Changing this set of devices will switch the devices used for the incoming call sound.
         */
        ringtoneDevices: AudioOutputCollection;

        constructor(
            onActiveOutputsChanged: any,
            onActiveInputChanged: any,
            getUserMedia: any,
            options: any
        );

        /**
         * Returns a boolean indicating whether the incoming sound is enabled or disabled.
         */
        incoming(): boolean;

        /**
         * Enable or disable the incoming event sound.
         *
         * @param shouldEnable should the sound be enabled or disabled
         */
        incoming(shouldEnable: boolean): void;

        /**
         * Returns a boolean indicating whether the outgoing sound is enabled or disabled.
         */
        outgoing(): boolean;

        /**
         * Enable or disable the outgoing event sound.
         *
         * @param shouldEnable should the sound be enabled or disabled
         */
        outgoing(shouldEnable: boolean): void;

        /**
         * Returns a boolean indicating whether the disconnect sound is enabled or disabled.
         */
        disconnect(): boolean;

        /**
         * Enable or disable the disconnect event sound.
         *
         * @param shouldEnable should the sound be enabled or disabled
         */
        disconnect(shouldEnable: boolean): void;

        /**
         * Replace the current input device with a new device by ID.
         *
         * Once this is set, the input device will be used in the current call, if any, and used by default for
         * any subsequent calls. In addition, whenever an inputDevice is set, the `Device.audio#inputVolume` event
         * will fire on every animation frame. Returns a Promise that resolves if the input device was set successfully.
         *
         * Rejects if the ID is not found, setting the input device
         *   fails, or an ID is not passed.
         */
        setInputDevice(deviceId: string): Promise<any>;

        /**
         * Unset the input device, stopping the tracks. This should only be called when not in a connection, and
         *   will not allow removal of the input device during a live call.
         *
         * This will stop the `Device.audio#inputVolume` polling, and stop the input stream.
         *
         * Rejects if the input device is currently in use by a connection.
         */
        unsetInputDevice(deviceId: string): Promise<any>;

        /**
         * Register a handler that will be fired whenever a new audio device is found, an existing audio device is lost
         * or the label of an existing device is changed. This typically happens when the user plugs in or unplugs an
         * audio device, like a headset or a microphone. This will also trigger after the customer has given access to
         * user media via `getUserMedia` for the first time, as the labels will become populated. If you want to allow users
         * to choose a specific audio device in your application’s UI, attach a listener to this event.
         *
         * *Note*: This does not detect a customer plugging in headphones or other speakers through the headphone jack,
         * as the headphone jack only redirects audio from the internal audio device.
         */
        on(
            event: audioDeviceChangeEvent,
            handler: (lostActiveDevices: MediaDeviceInfo[]) => any
        ): this;

        /**
         * Register a handler that will be fired every animation frame with the current volume of the selected input device,
         * if one is set. The handler will be invoked up to 60 times per second, and will scale down dynamically on slower
         * devices to preserve performance. The handler receives volume as a percentage of maximum volume represented by a
         * floating point number between 0.0 and 1.0, inclusive. This value represents a range of relative decibel values
         * between -100dB and -30dB.
         */
        on(
            event: audioInputVolumeEvent,
            handler: (volume: number) => any
        ): this;
    }

    /**
     * This is triggered when an incoming connection is canceled by the caller before it is accepted by the Twilio Client device.
     */
    type cancelEvent = "cancel";

    /**
     * This is triggered when a connection is opened, whether initiated using `.connect()` or via an
     * [accepted incoming connection](https://www.twilio.com/docs/voice/client/javascript/device#incoming).
     */
    type connectEvent = "connect";

    /**
     * Fired any time a {@link Connection} is closed.
     */
    type disconnectEvent = "disconnect";

    /**
     * Emitted when any device error occurs. These may be errors in your request, your token, connection errors,
     * or other application errors. See the [Twilio Client error code reference](https://www.twilio.com/docs/client/errors)
     * for more information.
     */
    type errorEvent = "error";

    /**
     * This is triggered whenever an incoming connection from an [outbound REST call](https://www.twilio.com/docs/api/rest/making_calls#example-2)
     * or a [TwiML](https://www.twilio.com/docs/api/twiml/client) `<Dial>` to this device is made.
     */
    type incomingEvent = "incoming";

    /**
     * This is triggered when the connection to Twilio drops or the device's token is invalid/expired. In either of these scenarios,
     * the device cannot receive incoming connections or make outgoing connections. If the token expires during an active connection
     * the `offline` event will be fired, but the connection will not be terminated. In this situation you will have to call
     * `Twilio.Device.setup()` with a valid token before attempting or receiving the next connection.
     */
    type offlineEvent = "offline";

    /**
     * This is initially triggered when all operations in `.setup()` have completed and the device is ready and online. It may be
     * triggered again if the device goes offline and comes back online (i.e. the connection drops and returns).
     */
    type readyEvent = "ready";

    type DeviceEvent =
        | cancelEvent
        | connectEvent
        | disconnectEvent
        | errorEvent
        | incomingEvent
        | offlineEvent
        | readyEvent;

    enum DeviceStatus {
        Busy = "busy",
        Offline = "offline",
        Ready = "ready"
    }

    /**
     * When set to `true`, `Device`'s default behavior of silently ignoring the incoming call is removed, and the
     * incoming call will instead cause `Device` to emit an "incoming" event. If accepted, the prior active call will be
     * immediately disconnected, and the incoming call will be accepted, replacing the prior active call.
     */
    type allowIncomingWhileBusy = boolean;

    /**
     * Can be `true` or `MediaTrackConstraints`. Set this property to select a specific microphone, or turn off features
     * like auto-gain control, for the entire `Twilio.Device`. Each web browser implements a different set of `MediaTrackConstraints`,
     * so consult your browser's implementation of `getUserMedia` for further details. This property can also be overridden for each `Twilio.Connection`.
     * See also our knowledge base article on [audioConstraints](https://www.twilio.com/help/faq/twilio-client/how-to-constrain-the-audio-sources-in-google-chrome).
     *
     * Note: If an input device is selected using `Device.audio.setInputDevice`, this parameter will be ignored and the set input device will be used instead.
     */
    type audioConstraints = boolean | AudioConstraints;

    /**
     * Can be `boolean` or `string`. Setting this property to `true` will enable a dialog prompt with the text "A call is currently
     * in progress. Leaving or reloading this page will end the call." when closing a page which has an active connection. Setting
     * the property to a `string` will change the text of the message prompt. NOTE: Where custom text is not supported on the browser,
     * Twilio will display the browser's default dialog.
     */
    type closeProtection = boolean;

    /**
     * Can be `true` or `false`. Set this property to `true` to enable debug logging in your browser console.
     */
    type debug = boolean;

    /**
     * Specifies whether Twilio Client will ask WebRTC to set the Differentiated Services field in the packet headers for all
     * WebRTC traffic. Note: At this time, DSCP is only supported in Google Chrome, and does not work on Windows.
     */
    type dscp = boolean;

    /**
     * When set to `true`, the new `ringing` state and `Connection#ringing` event will be enabled for calls this Device makes.
     * These features are intended to be used alongside the `answerOnBridge` Dial property (eg: `<Dial answerOnBridge=true></Dial>`) to provide better SDK feedback on the call status.
     */
    type enableRingingState = boolean;

    /**
     * If true, replaces default DTMF tones with mock DTMF tones. This prevents double-tones in some cases. This will become
     * default in the next breaking release.
     */
    type fakeLocalDTMF = boolean;

    /**
     * Specifies which Twilio Data Center to use when registering, initiating calls, and receiving calls.
     * [See this page for the list of available regions, and their IP address ranges](https://www.twilio.com/docs/api/client/regions#twilio-js-regions).
     */
    type region = Region;

    /**
     * Pass a custom {@link RTCConfiguration} object to override what Twilio uses to create RTCPeerConnections.
     */
    type rtcConstraints = RTCConfiguration | null;

    /**
     * An object mapping sound names (property) to custom URLs (string value). Note that incoming ringtone will loop for
     * at least 2 seconds and as long as the incoming call is pending. All other sounds will play once; DTMF tones will
     * be cut short if they exceed 1 second, while outgoing and disconnect sounds will be cut short if they exceed 3 seconds.
     * [See the list of all available sound properties and their default values](all available sound properties and their default values below).
     */
    type sounds = { [key: string]: any } | null;

    /**
     * Can be `true` or `false`. Set this property to `false` to disable logging to your browser console when calling deprecated methods.
     */
    type warnings = boolean;

    interface DeviceOptions {
        allowIncomingWhileBusy?: allowIncomingWhileBusy;
        audioConstraints?: audioConstraints;
        closeProtection?: closeProtection;
        debug?: debug;
        dscp?: dscp;
        enableRingingState?: enableRingingState;
        fakeLocalDTMF?: fakeLocalDTMF;
        region?: region;
        rtcConstraints?: rtcConstraints;
        sounds?: sounds;
        warnings?: warnings;
    }

    type RTCMediaEngine = "ORTC" | "WebRTC";

    interface DevicePayload {
        platform: RTCMediaEngine;
        sdk_version: string;
        selected_region: Region;
        call_sid?: string | null;
        temp_call_sid?: string;
        direction?: CallDirection;
    }

    interface DeviceError {
        message: string;
        code: TwilioError;
        connection: Connection;
    }

    class Device extends EventEmitter {
        audioContext: AudioContext;
        extension: "ogg" | "mp3";
        isSupported: boolean;
        audio: AudioHelper;

        constructor(token?: string, options?: DeviceOptions);

        /**
         * @returns The active connection object. Connection objects can be used to perform operations on the connection like mute, unmute, sending DTMF digits, etc.
         */
        activeConnection(): Connection | null | undefined;

        /**
         * Attempts a new connection to the Twilio application that you associated with this `Device`'s capability
         * token when you called `.setup()`
         */
        connect(
            params?: { [key: string]: any },
            audioConstraints?: AudioConstraints
        ): Connection | null;

        /**
         * Destroys the device. Terminates active and pending connections.
         * This will trigger the offline event handler. Device will not be able
         * to make or receive new connections until you call Device.setup() again.
         */
        destroy(): void;

        /**
         * Terminates the active connection. This will trigger the disconnect event handler.
         * It will not prevent new incoming connections.
         */
        disconnectAll(): void;

        /**
         * Get the region the Device is currently connected to.
         */
        region(): Region | "offline";

        /**
         * Register to receive incoming calls.
         */
        registerPresence(): Device;

        /**
         * Initialize the {@link Device}.
         * @param token - A Twilio JWT token string granting this {@link Device} access.
         * @param [options]
         */
        setup(token: string, options?: DeviceOptions): Device;

        /**
         * Get the status of this {@link Device} instance
         */
        status(): DeviceStatus;

        /**
         * Update the token and re-register.
         * @param token - The new token JWT string to register with.
         */
        updateToken(token: string): void;

        /**
         * Register the {@link Device}
         * @param token
         */
        register(token: string): void;

        /**
         * This is triggered when an incoming connection is canceled by the caller before it is accepted by the Twilio Client device.
         */
        on(event: cancelEvent, handler: (connection: Connection) => any): this;

        /**
         * This is triggered when a connection is opened, whether initiated using `.connect()` or via an
         * [accepted incoming connection](https://www.twilio.com/docs/voice/client/javascript/device#incoming).
         *
         * Since this Connection object represents an inactive connection, you'll probably just want to use the
         * event to update your application's UI, then throw away the Connection and wait for the next call.
         */
        on(event: connectEvent, handler: (connection: Connection) => any): this;

        /**
         * Fired any time a {@link Connection} is closed. The handler function receives the `Twilio.Connection` object
         * that was just closed as an argument.
         */
        on(
            event: disconnectEvent,
            handler: (connection: Connection) => any
        ): this;

        /**
         * Emitted when any device error occurs. These may be errors in your request, your token, connection errors,
         * or other application errors. Using the error handler is a great way to debug your application and help catch
         * mistakes in your code.
         */
        on(event: errorEvent, handler: (error: DeviceError) => any): this;

        /**
         * This is triggered whenever an incoming connection from an [outbound REST call](https://www.twilio.com/docs/api/rest/making_calls#example-2) or a
         * TwiML `<Dial>` to this device is made.
         *
         * This connection will be in state `pending` until you call `.accept()` on it.
         */
        on(
            event: incomingEvent,
            handler: (connection: Connection) => any
        ): this;

        /**
         * This is triggered when the connection to Twilio drops or the device's token is invalid/expired.
         * In either of these scenarios, the device cannot receive incoming connections or make outgoing connections.
         * If the token expires during an active connection the `offline` event will be fired, but the connection will not be
         * terminated. In this situation you will have to call `Twilio.Device.setup()` with a valid token before attempting
         * or receiving the next connection.
         */
        on(event: offlineEvent, handler: (device: Device) => any): this;

        /**
         * This is initially triggered when all operations in `.setup()` have completed and the device is
         * ready and online. It may be triggered again if the device goes offline and comes back online (i.e. theconnection drops and returns).
         */
        on(event: readyEvent, handler: (device: Device) => any): this;

        toString(): string;
    }
}

export default Twilio;
