// Type definitions for agora-rtc-sdk 2.6
// Project: https://github.com/AgoraIO/web-archive#readme
// Definitions by: Menthays <https://github.com/menthays>
//                 Derek Lu <https://github.com/scaret>
//                 Wangjie <https://github.com/wangjie-agora>
//                 Yu SiCheng <https://github.com/ysclyy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/**
 * AgoraRTC is the entry point for all the methods that can be called in Agora Web SDK.
 *
 * You can use the AgoraRTC methods to create {@link Client} and {@link Stream} objects.
 *
 * Other methods of the AgoraRTC object check for system requirements and set up error logging.
 */

// tslint:disable-next-line:export-just-namespace
export = AgoraRTC;
export as namespace AgoraRTC;

declare namespace AgoraRTC {
    /**
     * Gets the Sources for Screen-sharing
     *
     * To share the screen on Electron, call this method to get the screen sources. See [Share the Screen](../../screensharing_web?platform=Web#electron) for details.
     *
     * If this method succeeds, the SDK returns a list of screen sources in an array of {@link DesktopCapturerSource} objects.
     * @example **Sample Code**
     * ```javascript
     * AgoraRTC.getScreenSources(function(err, sources) {
     *   console.log(sources)
     * }
     * ```
     */
    function getScreenSources(callback: (sources: DesktopCapturerSource[]) => void): void;
    /**
     * Creates a Client Object
     *
     * This method creates and returns a client object. You can only call this method once each call session.
     * @example `AgoraRTC.createClient(config)`
     * @param config Defines the property of the client, see {@link ClientConfig} for details.
     */
    function createClient(config: ClientConfig): Client;
    /**
     * Creates a Stream Object
     *
     * This method creates and returns a stream object.
     * @example `AgoraRTC.createStream(spec)`
     * @param spec Defines the properties of the stream, see {@link StreamSpec} for details.
     */
    function createStream(spec: StreamSpec): Stream;
    /**
     * Checks the Web Browser Compatibility
     *
     * This method checks the compatibility between the Web SDK and the current web browser.
     *
     * Use this method before calling {@link createClient} to check the compatibility between the system and the web browser.
     *
     * **Note:**
     *
     * Agora has yet to conduct comprehensive tests on Chromium kernel browsers, such as QQ and 360.
     * Agora will gradually achieve compatibility on most mainstream browsers in subsequent versions of the Web SDK.
     * @returns - true: The Web SDK is compatible with the current web browser.
     * - false: The Web SDK is not compatible with the current web browser.
     */
    function checkSystemRequirements(): boolean;
    /**
     * Gets the supported codec of the web browser
     *
     * This method returns the codecs supported by both the Agora Web SDK and the web browser. The Agora Web SDK supports VP8 and H.264 for video, and OPUS for audio.
     *
     * This method supports all web browsers. For web browsers that do not support WebRTC or are not recognized, the returned codec list is empty.
     *
     * @returns  Returns a `Promise` object. In the `.then(function(result){})` callback, `result` has the following properties:
     * - `video`: array, the supported video codecs. The array might include `"H264"` and `"VP8"`, or be empty.
     * - `audio`: array, the supported audio codecs. The array might include `"OPUS"`, or be empty.
     *
     * @example
     * **Sample code**
     *
     * ``` javascript
     * // Gets the supported decoding formats as the receiver
     * AgoraRTC.getSupportedCodec()
     *   .then(function(result){
     *     console.log(`Supported video codec: ${result.video.join(",")}`);
     *     console.log(`Supported audio codec: ${result.audio.join(",")}`);
     *   });
     *
     * // Gets the supported encoding formats as the sender
     * navigator.mediaDevices.getUserMedia({video: true, audio: true})
     *  .then(function(mediaStream){
     *     return AgoraRTC.getSupportedCodec({stream: mediaStream});
     *  })
     *  .then(function(result){
     *     console.log(`Supported video codec: ${result.video.join(",")}`);
     *     console.log(`Supported audio codec: ${result.audio.join(",")}`);
     *  });
     * ```
     */
    function getSupportedCodec(supportedCodecOptions?: {
        /**
         * (Optional) Specifies a [[MediaStream]] object.
         *
         * If this parameter is empty, this method gets the supported decoding formats of the web browser as the receiver.
         * Otherwise the method gets the supported encoding formats as the sender. In most cases, the supported decoding and encoding formats are the same.
         */
        stream: MediaStream
    }): Promise<{ video: Array<"VP8" | "H264">, audio: Array<"OPUS"> }>;
    /**
     * Enumerates the Media Devices
     *
     * This method enumerates the available media input and output devices, such as microphones, cameras, headsets, and so on.
     *
     * If this method succeeds, the SDK returns a list of media devices in an array of {@link MediaDeviceInfo} objects.
     * @example
     * **Sample Code**
     *
     * ``` javascript
     * AgoraRTC.getDevices (function(devices) {
     * var devCount = devices.length;
     *
     * var id = devices[0].deviceId;
     * });
     * ```
     */
    function getDevices(callback: (devices: MediaDeviceInfo[]) => void): void;
    /**
     * Media Stream
     *
     * The `MediaStream` interface represents a stream of media content.
     *
     * A stream consists of several tracks such as video or audio tracks. Each track is specified as an instance of [[MediaStreamTrack]].
     *
     * See [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) for details.
     */
    interface MediaStream {
        /**
         * (Read-only) A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString) containing 36 characters denoting a universally unique identifier (UUID) for the object.
         *
         * See [MediaStream.id](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/id) for details.
         */
        id: string;
        /**
         * (Read-only) A Boolean value that returns `true` if the stream is active, or `false` otherwise.
         *
         * See [active](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/active) for details.
         */
        active: boolean;
    }
    /**
     * Screen Source Information
     *
     * This interface contains information on the screen source, see [DesktopCapturerSource](https://electronjs.org/docs/api/structures/desktop-capturer-source).
     *
     */
    interface DesktopCapturerSource {
        /**
         * ID of the screen source.
         */
        readonly id: string;
        /**
         * Name of the screen source.
         */
        readonly name: string;
        /**
         * Thumbnail of the screen source. See [nativeImage](https://electronjs.org/docs/api/native-image#nativeimage) for supported types.
         */
        readonly thumbnail: any;
    }

    /**
     * Media Stream Track
     *
     * This interface represents a single media track within a stream, for example an audio track or a video track.
     *
     * See [MediaStreamTrack](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack) for details.
     *
     */
    interface MediaStreamTrack {
        kind: "audio" | "video";
    }

    /**
     * Media Device Information
     *
     * This interface contains information that describes a single media input or output device.
     *
     * The list of devices obtained by calling {@link AgoraRTC.getDevices} is an array of `MediaDeviceInfo` objects, one per media device.
     */
    interface MediaDeviceInfo {
        /**
         * Device ID
         *
         * Unique ID of the device.
         */
        readonly deviceId: string;
        /**
         * Device Label
         *
         * Returns a `DOMString` that is a label describing this device (for example "External USB Webcam").
         *
         * **Note:**
         *
         * For security reasons, the label field is always blank unless an active media stream exists or the user has granted persistent permission for media device access.
         *
         */
        readonly label: string;
        /**
         * Device Type
         *
         * Returns an enumerated value that is "videoinput", "audioinput" or "audiooutput".
         */
        readonly kind: string;
    }

    /** Audio statistics of the remote stream. */
    interface RemoteAudioStats {
        /**
         * End-to-end delay in ms.
         *
         * Delay from capturing to playing the audio.
         */
        readonly End2EndDelay?: string;
        /**
         * Transport delay in ms.
         *
         * Delay from sending to receiving the audio.
         */
        readonly TransportDelay?: string;
        /** Packet loss rate (%) of the remote audio. */
        readonly PacketLossRate?: string;
        /** Volume of the received audio. */
        readonly RecvLevel?: string;
        /** Bitrate of the received audio, in Kbps. */
        readonly RecvBitrate?: string;
        /**
         * Decoding type of the received audio.
         *
         * - "1": Opus.
         * - "2": AAC.
         */
        readonly CodecType?: string;
        /**
         * Whether the audio is muted or not.
         *
         * - "1": Muted.
         * - "0": Unmuted.
         */
        readonly MuteState?: string;
        /** Total freeze time of the received audio. */
        readonly TotalFreezeTime?: string;
        /** Total playing duration of the received audio. */
        readonly TotalPlayDuration?: string;
    }

    /** Audio statistics of the local stream. */
    interface LocalAudioStats {
        /** Energy level of the captured audio. */
        readonly RecordingLevel?: string;
        /** Energy level of the sent audio. */
        readonly SendLevel?: string;
        /** Sampling rate, in kHz. */
        readonly SamplingRate?: string;
        /** Bitrate of the sent audio, in Kbps. */
        readonly SendBitrate?: string;
        /**
         * Encoding type of the sent audio.
         *
         * - "1": Opus.
         * - "2": AAC.
         */
        readonly CodecType?: string;
        /**
         * Whether the audio is muted or not.
         *
         * - "1": Muted.
         * - "0": Unmuted.
         */
        readonly MuteState?: string;
    }

    /** Video statistics of the remote stream. */
    interface RemoteVideoStats {
        /**
         * End-to-end delay in ms.
         *
         * Delay from capturing to playing the video.
         */
        readonly End2EndDelay?: string;
        /**
         * Transport delay in ms.
         *
         * Delay from sending to receiving the video.
         */
        readonly TransportDelay?: string;
        /** Packet loss rate (%) of the remote video. */
        readonly PacketLossRate?: string;
        /** Bitrate of the received video, in Kbps. */
        readonly RecvBitrate?: string;
        /** Resolution width of the received video, in pixels. */
        readonly RecvResolutionWidth?: string;
        /** Resolution height of the received video, in pixels. */
        readonly RecvResolutionHeight?: string;
        /** Rendering frame rate of the decoded video, in fps. */
        readonly RenderFrameRate?: string;
        /**
         * Whether the video is muted or not.
         *
         * - "1": Muted.
         * - "0": Unmuted.
         */
        readonly MuteState?: string;
        /** Total freeze time of the received video. */
        readonly TotalFreezeTime?: string;
        /** Total playing duration of the received video. */
        readonly TotalPlayDuration?: string;
        /** Width (pixels) of the rendered video */
        readonly RenderResolutionWidth?: string;
        /** Height (pixels) of the rendered video */
        readonly RenderResolutionHeight?: string;
    }

    /** Video statistics of the local stream. */
    interface LocalVideoStats {
        /** Bitrate of the local video set in [[setVideoProfile]]. */
        readonly TargetSendBitrate?: string;
        /** Frame rate of the sent video, in fps. */
        readonly SendFrameRate?: string;
        /** Bitrate of the sent video, in Kbps. */
        readonly SendBitrate?: string;
        /** Width of the sent video, in pixels. */
        readonly SendResolutionWidth?: string;
        /** Height of the sent video, in pixels. */
        readonly SendResolutionHeight?: string;
        /** Delay from capturing to encoding the local video, in ms. */
        readonly EncodeDelay?: string;
        /**
         * Whether the video is muted or not.
         *
         * - "1": Muted.
         * - "0": Unmuted.
         */
        readonly MuteState?: string;
        /** Width (pixels) of the captured video. */
        readonly CaptureResolutionWidth?: string;
        /** Height (pixels) of the captured video. */
        readonly CaptureResolutionHeight?: string;
        /** Frame rate of the captured video, in fps. */
        readonly CaptureFrameRate?: string;
        /** Total freeze time of the encoded video, in seconds. */
        readonly TotalFreezeTime?: string;
        /** Total duration of the published video, in seconds. */
        readonly TotalDuration?: string;
    }

    /** Statistics of the network connection. */
    interface TransportStats {
        /** RTT (Round-Trip Time) between the SDK and the access node of the SD-RTN, in ms. */
        readonly RTT?: string;
        /**
         * Network type.
         *
         * - "bluetooth": Bluetooth network.
         * - "cellular": Cellular network.
         * - "ethernet": Ethernet.
         * - "none": No network.
         * - "wifi": Wi-Fi.
         * - "wimax": WiMax.
         * - "other": Other network type.
         * - "unknown": Unknown network type.
         * - "UNSUPPORTED": The browser does not support getting the network type.
         *
         * **Note:**
         *
         * Chrome 61+ is required for this function, and the compatibility is not guaranteed.
         * See [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API) for details.
         */
        readonly NetworkType?: "bluetooth" | "cellular" | "ethernet" | "none" | "wifi" | "wimax" | "other" | "unknown" | "UNSUPPORTED";
        /** The estimated available bandwidth for sending the stream, in Kbps. */
        readonly OutgoingAvailableBandwidth?: string;
    }

    /** Statistics of the session connection. */
    interface SessionStats {
        /** Call duration in seconds, represented by an aggregate value. */
        readonly Duration?: string;
        /**
         * Number of users in the channel.
         *
         * - rtc mode: The number of all users in the channel.
         * - live mode
         *  - If the local user is an audience: The number of hosts in the channel + 1.
         *  - If the user is a host: The number of hosts in the channel.
         */
        readonly UserCount?: string;
        /** Total number of bytes sent, represented by an aggregate value. */
        readonly SendBytes?: string;
        /** Total number of bytes received, represented by an aggregate value. */
        readonly RecvBytes?: string;
        /** Total sent bitrate of the stream, in Kbps, represented by an instantaneous value. */
        readonly SendBitrate?: string;
        /** Total received bitrate of the stream, in Kbps, represented by an instantaneous value. */
        readonly RecvBitrate?: string;
    }

    /** Statistics of the network quality. */
    interface NetworkQualityStats {
        /**
         * The uplink network quality.
         *
         *  - "0": The network quality is unknown.
         *  - "1": The network quality is excellent.
         *  - "2": The network quality is quite good, but the bitrate may be slightly lower than excellent.
         *  - "3": Users can feel the communication slightly impaired.
         *  - "4": Users can communicate only not very smoothly.
         *  - "5": The network is so bad that users can hardly communicate.
         *  - "6": The network is down and users cannot communicate at all.
         */
        readonly uplinkNetworkQuality?: string;
        /**
         * The downlink network quality.
         *
         *  - "0": The network quality is unknown.
         *  - "1": The network quality is excellent.
         *  - "2": The network quality is quite good, but the bitrate may be slightly lower than excellent.
         *  - "3": Users can feel the communication slightly impaired.
         *  - "4": Users can communicate only not very smoothly.
         *  - "5": The network is so bad that users can hardly communicate.
         *  - "6": The network is down and users cannot communicate at all.
         */
        readonly downlinkNetworkQuality?: string;
    }

    /** Manages the user layout configuration in the CDN live streaming. */
    interface TranscodingUser {
        /** User ID of the CDN live host. */
        uid?: number | string;
        /**
         * The position of the upper left end of the video on the horizontal axis.
         *
         * Integer only. The value range is [0,10000], and the default value is 0.
         */
        x?: number;
        /**
         * The position of the upper left end of the video on the vertical axis.
         *
         * Integer only. The value range is [0,10000], and the default value is 0.
         */
        y?: number;
        /**
         * Width of the video.
         *
         * Integer only. The value range is [0,10000], and the default value is 360.
         */
        width?: number;
        /**
         * Height of the video.
         *
         * Integer only. The value range is [0,10000], and the default value is 640.
         */
        height?: number;
        /**
         * Layer position of the video frame.
         *
         * Integer only. The value range is [0,100].
         *
         * From v2.3.0, Agora SDK supports setting zOrder as 0.
         *
         * - 0: (Default) Lowest.
         * - 100: Highest.
         *
         */
        zOrder?: number;
        /**
         * Transparency of the video frame.
         *
         * The value ranges between 0.0 and 1.0:
         *
         * - 0.0: Completely transparent.
         * - 1.0: (Default) Opaque.
         */
        alpha?: number;
    }

    /** A list of `RemoteAudioStats` objects, one per uid. */
    interface RemoteAudioStatsMap {
        [uid: string]: RemoteAudioStats;
    }

    /** A list of `LocalAudioStats` objects, one per uid. */
    interface LocalAudioStatsMap {
        [uid: string]: LocalAudioStats;
    }

    /** A list of `RemoteVideoStats` objects, one per uid. */
    interface RemoteVideoStatsMap {
        [uid: string]: RemoteVideoStats;
    }

    /** A list of `LocalVideoStats` objects, one per uid. */
    interface LocalVideoStatsMap {
        [uid: string]: LocalVideoStats;
    }

    /**
     * Logger Settings
     *
     * Provides methods to enable/disable log upload and set output log level.
     */
    namespace Logger {
        /** Outputs all logs. */
        type DEBUG = 0;
        /** Outputs logs of the INFO, WARNING and ERROR levels. */
        type INFO = 1;
        /** Outputs logs of the WARNING and ERROR levels. */
        type WARNING = 2;
        /** Outputs logs of the ERROR level. */
        type ERROR = 3;
        /** Outputs no log. */
        type NONE = 4;
        /**
         * Sets the Log Level
         *
         * This method sets the output log level.
         *
         * The log level follows the sequence of NONE, ERROR, WARNING, INFO, and DEBUG.
         * For example, if you set the log level as `AgoraRTC.Logger.setLogLevel(AgoraRTC.Logger.INFO);`, then you can see logs in levels INFO, ERROR, and WARNING.
         * @param level The output log level.
         */
        function setLogLevel(level: DEBUG|INFO|WARNING|ERROR|NONE): void;
        /**
         * Enables Log Upload
         *
         * Call this method to enable log upload to Agora’s server.
         *
         * The log-upload function is disabled by default, if you need to enable this function, please call this method before all the other methods.
         *
         * **Note:**
         *
         * If the user fails to join the channel, the log information is not available on Agora’s server.
         * @example `AgoraRTC.Logger.enableLogUpload();`
         */
        function enableLogUpload(): void;
        /**
         * Disables Log Upload
         *
         * This method disables log upload.
         *
         * By default, the log-upload function is disabled. If you have used {@link enableLogUpload}, call this method when you need to stop uploading the log.
         * @example `AgoraRTC.Logger.disableLogUpload();`
         */
        function disableLogUpload(): void;
    }

    /**
     * A class defining the properties of the `config` parameter in the {@link createClient} method.
     *
     * **Note:**
     *
     * - Ensure that you do not leave {@link mode} and {@link codec} as empty.
     * - Ensure that you set these properties before calling {@link Client.join}.
     *
     * [[include:ClientConfig-example.md]]
     * @example
     * **Sample Code**
     * ``` javascript
     * var config = {
     *      mode: "live",
     *      codec: "vp8",
     *      proxyServer: "YOUR NGINX PROXY SERVER IP",
     *      turnServer: {
     *          turnServerURL: "YOUR TURNSERVER URL",
     *          username: "YOUR USERNAME",
     *          password: "YOUR PASSWORD",
     *          udpport: "THE UDP PORT YOU WANT TO ADD",
     *          tcpport: "THE TCP PORT YOU WANT TO ADD",
     *          forceturn: false
     *      }
     * }
     * var client = AgoraRTC.createClient(config);```
     */
    interface ClientConfig  {
        /**
         * The channel profile.
         *
         * Agora Web SDK needs to know the application scenario to apply different optimization methods.
         *
         * Currently Agora Web SDK supports the following channel profiles:
         * - `"live"`: Sets the channel profile as live broadcast. Host and audience roles that can be set by calling the [[Client.setClientRole]] method.
         * The host sends and receives voice/video, while the audience can only receive voice/video.
         * - `"rtc"`: Sets the channel profile as communication. This is used in one-on-one calls or group calls, where all users in the channel can talk freely.
         *
         * **Note:**
         *
         * If you need to communicate with Agora Native SDK, Agora recommends the following settings:
         * - For Native SDK v2.3.2 and later:
         *  * Set {@link mode} as `"rtc"` or `"live"` if the Native SDK uses the communication channel profile.
         *  * Set {@link mode} as `"live"` if the Native SDK uses the live broadcast channel profile.
         * - For Native SDK before v2.3.2, set  mode as "live" regardless of which channel profile the Native SDK uses.
         *
         * **Note:**
         *
         * If you set {@link mode} as `"rtc"`, the Agora Recording SDK is not supported.
         */
        mode: "live" | "rtc";
        /**
         * The codec the Web browser uses for encoding and decoding.
         * - `"vp8"`: Sets the browser to use VP8 for encoding and decoding.
         * - `"h264"`: Sets the browser to use H264 for encoding and decoding.
         *
         * **Note:**
         *
         * Set {@link codec} as `"h264"` as long as Safari is involved in the session.
         */
        codec: "vp8" | "h264";
        /**
         * Your Nginx server domain name.
         *
         * ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
         *
         * Enterprise users with a company firewall can use this property to pass signaling messages to the Agora SD-RTN through the Nginx Server.
         */
        proxyServer?: string;
        /**
         * TURN server settings.
         *
         * Enterprise users with a company firewall can use this property to pass audio and video data to the Agora SD-RTN through the TURN Server.
         */
        turnServer?: {
            /** Your TURN Server URL address. ASCII characters only, and the string length must be greater than 0 and less than 256 bytes. */
            turnServerURL: string;
            /** Your TURN Server username. ASCII characters only, and the string length must be greater than 0 and less than 256 bytes. */
            username: string;
            /** Your TURN Server password. ASCII characters only, and the string length must be greater than 0 and less than 256 bytes. */
            password: string;
            /** The UDP port(s) you want to add to TURN Server. Numeric characters only, and the string length must be greater than 0 and less than 256 bytes. */
            udpport: string;
            /** The TCP port(s) you want add to TURN Server. Numeric characters only, and the string length must be greater than 0 and less than 256 bytes. */
            tcpport?: string;
            /**
             * Sets whether to force data transfer by TURN Server:
             * - true: Force data transfer.
             * - false: (default) Not to force data transfer.
             */
            forceturn?: boolean;
        };
    }

    /**
     * A class for managing user-specific CDN live audio/video transcoding settings.
     *
     * @example **Sample Code**
     * ``` javascript
     * var LiveTranscoding = {
     *   width: 640,
     *   height: 360,
     *   videoBitrate: 400,
     *   videoFramerate: 15,
     *   lowLatency: false,
     *   audioSampleRate: AgoraRTC.AUDIO_SAMPLE_RATE_48000,
     *   audioBitrate: 48,
     *   audioChannels: 1,
     *   videoGop: 30,
     *   videoCodecProfile: AgoraRTC.VIDEO_CODEC_PROFILE_HIGH,
     *   userCount: 0,
     *   backgroundColor: 0x000000,
     *   transcodingUsers: [],
     * };
     * ```
     */
    interface LiveTranscoding {
        /**
         * Width of the video.
         *
         * Positive integer, the default value is 640. The value range is [1, 10000].
         */
        width?: number;
        /**
         * Height of the video.
         *
         * Positive integer, the default value is 360. The value range is [1, 10000].
         */
        height?: number;
        /**
         * Bitrate of the CDN live output video stream.
         *
         * Positive integer. The default value is 400 Kbps. The value range is [1,1000000].
         */
        videoBitrate?: number;
        /**
         * Frame rate of the output data stream set for CDN live.
         *
         * Positive integer. The default value is 15 fps. The value range is [1, 10000].
         */
        videoFramerate?: number;
        /**
         * Latency mode:
         * - true: Low latency with unassured quality.
         * - false: (Default）High latency with assured quality.
         */
        lowLatency?: boolean;
        /**
         * Audio sampling rate:
         *
         * - 32000: 32 kHz
         * - 44100: (Default) 44.1 kHz
         * - 48000: 48 kHz
         */
        audioSampleRate?: 32000 | 44100 | 48000;
        /**
         * Bitrate of the CDN live audio output stream in Kbps.
         *
         * Positive integer. The default value is 48, and the highest value is 128.
         */
        audioBitrate?: number;
        /**
         * Agora’s self-defined audio channel type.
         *
         * Agora recommends choosing 1 or 2. Special players are required if you choose 3, 4 or 5:
         *
         * - 1: (Default) Mono
         * - 2: Dual sound channels
         * - 3: Three sound channels
         * - 4: Four sound channels
         * - 5: Five sound channels
         */
        audioChannels?: 1 | 2 | 3 | 4 | 5;
        /** Video GOP in frames. The default value is 30 frames. The value range is [1,10000]. */
        videoGop?: number;
        /**
         * Video codec profile type:
         *
         * - 66: Baseline video codec profile. Generally used in video calls on mobile phones.
         * - 77: Main video codec profile.Generally used in mainstream electronics, such as MP4 players, portable video players, PSP, and iPads.
         * - 100: (Default) High video codec profile.Generally used in high - resolution broadcasts or television.
         */
        videoCodecProfile?: 66 | 77 | 100;
        /** Number of users; default value is 0. The maximum is 17. */
        userCount?: number;
        /**
         * The background color in RGB hex value.
         *
         * Value only, do not include a #. The default value is 0x000000. The value range is [0x000000, 0xffffff].
         */
        backgroundColor?: number;
        /**
         * Manages the user layout configuration in the CDN live streaming.
         *
         * Agora supports a maximum of 17 transcoding users in a CDN streaming channel. See [[TranscodingUser]] for details.
         */
        transcodingUsers?: TranscodingUser[];
    }

    /**
     * A class for configuring the imported live broadcast voice or video stream.
     *
     * @example **Sample Code**
     * ```javascript
     * var InjectStreamConfig = {
     *   width: 0,
     *   height: 0,
     *   videoGop: 30,
     *   videoFramerate: 15,
     *   videoBitrate: 400,
     *   audioSampleRate: 44100,
     *   audioChannels: 1,
     * };
     * ```
     */
    interface InjectStreamConfig {
        /**
         * Width of the added stream to the broadcast.
         *
         * Integer, the default value is 0, which is the same width as the original stream. The value range is [0, 10000].
         */
        width?: number;
        /**
         * Height of the added stream to the broadcast.
         *
         * Integer, the default value is 0, which is the same height as the original stream. The value range is [0, 10000].
         */
        height?: number;
        /**
         * Video GOP of the added stream to the broadcast.
         *
         * Positive integer. The default value is 30 frames. The value range is [1, 10000].
         */
        videoGop?: number;
        /**
         * Video frame rate of the added stream to the broadcast.
         *
         * Positive integer. The default value is 15 fps. The value range is [1, 10000].
         */
        videoFramerate?: number;
        /**
         * Video bitrate of the added stream to the broadcast.
         *
         * Positive integer. The default value is 400 Kbps. The value range is [1, 10000].
         *
         * **Note:**
         *
         * The setting of the video bitrate is closely linked to the resolution. If the video bitrate you set is beyond the reasonable range, the SDK will set it within the reasonable range instead.
         */
        videoBitrate?: number;
        /**
         * Audio sampling rate of the added stream to the broadcast.
         *
         * - 32000: 32 kHz
         * - 44100: (Default) 44.1 kHz
         * - 48000: 48 kHz
         *
         * **Note:**
         *
         * Agora recommends that you stay with the default value and not reset it at this point of time.
         */
        audioSampleRate?: number;
        /**
         * Audio bitrate of the added stream to the broadcast.
         *
         * Positive integer. The default value is 48. The value range is [1, 10000].
         *
         * **Note:**
         *
         * Agora recommends that you stay with the default value and not reset it at this point of time.
         */
        audioBitrate?: number;
        /**
         * Audio channels to add into the broadcast.
         *
         * Positive integer. The default value is 1. The value range is [1, 2].
         *
         * **Note:**
         *
         * Agora recommends that you stay with the default value and not reset it at this point of time.
         */
        audioChannels?: number;
    }

    /**
     * A class defining the `spec` paramter in the {@link createStream} method.
     * [[include:StreamSpec-example.md]]
     */
    interface StreamSpec  {
        /**
         * The stream ID.
         *
         * Please set the stream ID as the user ID, which can be retrieved from the callback of {@link Client.join}.
         */
        streamID?: number | string;
        /**
         * Marks whether this stream contains an audio track.
         */
        audio: boolean;
        /**
         * Marks whether this stream contains a video track.
         */
        video: boolean;
        /**
         * Marks whether this stream contains a screen-sharing track.
         */
        screen?: boolean;
        /**
         * Specifies the audio source of the stream.
         */
        audioSource?: MediaStreamTrack;
        /**
         * Specifies the video source of the stream.
         *
         * **Note:**
         *
         * If you use a video source created by the Canvas API, re-draw on the canvas every one second when the drawing is still to keep the video publishing.
         */
        videoSource?: MediaStreamTrack;
        /**
         * The camera device ID retrieved from the {@link getDevices} method.
         *
         * The retrieved ID is ASCII characters, and the string length is greater than 0 and less than 256 bytes.
         */
        cameraId?: string;
        /**
         * The microphone device ID retrieved from the {@link getDevices} method.
         *
         * The retrieved ID is ASCII characters, and the string length is greater than 0 and less than 256 bytes.
         */
        microphoneId?: string;
        /**
         * Marks whether the video image of the publisher is mirrored on the publisher’s webpage.
         *
         * The default value is `true` (except in the screen-share mode). Agora recommends enabling this function when using the front camera, and disabling it when using the rear camera.
         */
        mirror?: boolean;
        /**
         * The extension ID of the Chrome screen-sharing extension.
         *
         * ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
         *
         * Set this property if you use the Chrome screen-sharing extension. See [Chrome Extension for Screen Sharing](../../../chrome_screensharing_plugin?platform=Web) for details.
         *
         * **Note:**
         *
         * Chrome 72 and later versions support screen sharing without the extension. You can leave `extensionId` as empty.
         *
         * If you set the `extensionId`, then you need to use the screen-sharing extension.
         */
        extensionId?: string;
        /**
         * The screen-sharing mode on the Firefox browser.
         *
         * If you are using the Firefox browser, setting this property specifies the screen-sharing mode:
         * - `"screen"`: (default) share the current screen
         * - `"application"`: share all windows of an App
         * - `"window"`: share a specified window of an App
         *
         * **Note:**
         *
         * Firefox on Windows does not support the application mode.
         *
         * See [Screen Sharing on Firefox](../../../screensharing_web?platform=Web#a-name-ff-a-screen-sharing-on-firefox) for details.
         */
        mediaSource?: "screen" | "application" | "window";
        /** Marks whether to enable audio processing. */
        audioProcessing?: {
            /**
             * Marks whether to enable audio gain control.
             *
             * The default value is `true` (enable). If you wish not to enable the audio gain control, set `AGC` as `false`.
             *
             * **Note:**
             *
             * Safari does not support this setting.
             */
            AGC?: boolean;
            /**
             * Marks whether to enable acoustic echo cancellation.
             *
             * The default value is `true` (enable). If you wish not to enable the  acoustic echo cancellation, set `AEC` as `false`.
             *
             * **Note:**
             *
             * Safari does not support this setting.
             */
            AEC?: boolean;
            /**
             * Marks whether to enable automatic noise suppression.
             *
             * The default value is `true` (enable). If you wish not to enable automatic noise suppression, set `ANS` as `false`.
             *
             * **Note:**
             *
             * - Safari does not support this setting.
             * - Noise suppression is always enabled on Firefox. Setting `ANS` as `false` does not take effect on Firefox.
             */
            ANS?: boolean;
        };
    }

    /**
     * The connection statistics of the local stream.
     */
    interface LocalStreamStats {
        /** Bytes of the sent audio. */
        audioSendBytes: string;
        /** Packets of the sent audio. */
        audioSendPackets: string;
        /**
         * Number of lost packets of the sent audio.
         *
         * **Note:**
         *
         * Safari and Firefox do not support this property.
         */
        audioSendPacketsLost: string;
        /** Bytes of the sent video. */
        videoSendBytes: string;
        /** Packets of the sent video. */
        videoSendPackets: string;
        /** Number of lost packets of the sent video. */
        videoSendPacketsLost: string;
        /** Frame rate of the sent video. */
        videoSendFrameRate: string;
        /** Resolution width of the sent video. */
        videoSendResolutionWidth?: string;
        /** Resolution height of the sent video. */
        videoSendResolutionHeight?: string;
        /** Delay in accessing the SD-RTN (ms). */
        accessDelay: string;
    }

    /**
     * The connection statistics of the remote stream.
     */
    interface RemoteStreamStats {
        /** Bytes of the received audio. */
        audioReceiveBytes: string;
        /** Packets of the received audio. */
        audioReceivePackets: string;
        /** Number of lost packets of the received audio. */
        audioReceivePacketsLost: string;
        /** Bytes of the received video. */
        videoReceiveBytes: string;
        /** Packets of the received video. */
        videoReceivePackets: string;
        /** Number of lost packets of the received video. */
        videoReceivePacketsLost: string;
        /** Frame rate rof the received video. */
        videoReceiveFrameRate: string;
        /** Decode frame rate after the video is received. */
        videoReceiveDecodeFrameRate: string;
        /** Resolution width of the received video. */
        videoReceivedResolutionWidth?: string;
        /** Resolution height of the received video. */
        videoReceivedResolutionHeight?: string;
        /** Delay in accessing the SD-RTN (ms). */
        accessDelay: string;
        /**
         * End to end delay (ms).
         *
         * Delay from sending to receiving data.
         */
        endToEndDelay: string;
        /**
         * Delay in receiving the video (ms).
         *
         * Delay from sending to playing the video, only supported by Chrome for now.
         */
        videoReceiveDelay: string;
        /**
         * Delay in receiving the audio (ms).
         *
         * Delay from sending to playing the audio, only supported by Chrome for now.
         */
        audioReceiveDelay: string;
    }

    /**  Statistics of the system network. */
    interface NetworkStats {
        /**
         * Network type.
         *
         * - "bluetooth": Bluetooth network.
         * - "cellular": Cellular network.
         * - "ethernet": Ethernet.
         * - "none": No network.
         * - "wifi": Wi-Fi.
         * - "wimax": WiMax.
         * - "other": Other network type.
         * - "unknown": Unknown network type.
         * - "UNSUPPORTED": The browser does not support getting the network type.
         */
        NetworkType: "bluetooth" | "cellular" | "ethernet" | "none" | "wifi" | "wimax" | "other" | "unknown" | "UNSUPPORTED";
    }

    /** System statistics. */
    interface SystemStats {
        /** Battery level of the system (%). */
        BatteryLevel: 'string';
    }

    /**
     * The Stream object created by the {@link createStream} method.
     *
     * A stream represents a published local or remote media stream object in a call session.
     *
     * All Stream methods can be called for both local and remote streams, except for {@link Stream.init} that only applies to the local stream.
     */
    interface Stream {
        /** Occurs when the user gives access to the camera and microphone. */
        on(event: "accessAllowed", callback: (evt: any) => void): void;
        /** Occurs when the user denies access to the camera and microphone. */
        on(event: "accessDenied", callback: (evt: any) => void): void;
        /** Occurs when screen-sharing stops. */
        on(event: "stopScreenSharing", callback: (evt: any) => void): void;
        /**
         * Occurs when the audio mixing stream playback starts/resumes.
         *
         * **Note:**
         * This callback is triggered when the audio mixing stream is loaded and starts playing, or when the paused audio mixing stream resumes playing.
         */
        on(event: "audioMixingPlayed", callback: (evt: any) => void): void;
        /** Occurs when the last audio mixing stream playback finishes. */
        on(event: "audioMixingFinished", callback: (evt: any) => void): void;
        /**
         * Initializes the Stream Object
         *
         * This method initializes the local stream object.
         *
         * If this method fails, see [getUserMedia Exceptions](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Exceptions) for error information.
         *
         * Some errors might be returned in the callback, for example: `{type: "error",  msg: "NotAllowedError", info: "Permission denied"}`.
         *
         * The possible error information in the `msg` field includes:
         *
         * - NotAllowedError: User refuses to grant access to camera or audio resource.
         * - MEDIA_OPTION_INVALID: The camera is occupied or the resolution is not supported (on browsers in early versions).
         * - DEVICES_NOT_FOUND: No device is found.
         * - NOT_SUPPORTED: The browser does not support using camera and microphone.
         * - PERMISSION_DENIED: The device is disabled by the browser or the user has denied permission of using the device.
         * - CONSTRAINT_NOT_SATISFIED: The settings are illegal (on browsers in early versions).
         * - PluginNotInstalledProperly: A screen-sharing request is made with no plugin installed or with a wrong [[extensionId]] on the Chrome browser.
         * - UNDEFINED: Undefined error.
         *
         * The `info` field shows the extra information for the error. If no more extra information, its value will be `null`.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * init(function() {
         *     console.log("local stream initialized");
         *     // publish the stream
         *     //……
         * }, function(err) {
         *     console.error("local stream init failed ", err);
         *     //error handling
         * });
         *
         * ```
         * @param onSuccess The callback when the method succeeds.
         * @param onFailure The callback when the method fails.
         */
        init(onSuccess?: () => void, onFailure?: (err: any) => void): void;
        /**
         * Plays the Audio/Video Stream
         *
         * This method plays the video or audio stream.
         *
         * **Note:**
         *
         * Due to browser policy changes, this method must be triggered by the user's gesture on the Chrome 70+ and Safari browsers.
         * See [Autoplay Policy Changes](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes) for details.
         * @example **Sample Code**
         *
         * ``` javascript
         * stream.play("agora_remote", {fit: 'contain'}); // stream will be played in the element with the ID agora_remote
         * ```
         * @param HTMLElementID Represents the HTML element ID. Digits and letters in the ASCII character set, “_”, “-", and ".". The string length must be greater than 0 and less than 256 bytes.
         * @param option Options for playing the stream.
         *
         */
        play(HTMLElementID: string, option?: {
            /**
             * Video display mode:
             *
             * - `"cover"`: Uniformly scale the video until it fills the visible boundaries (cropped).
             * One dimension of the video may have clipped contents. Refer to the `cover` option of `object-fit` in CSS.
             *
             * - `"contain"`: Uniformly scale the video until one of its dimension fits the boundary (zoomed to fit).
             * Areas that are not filled due to the disparity in the aspect ratio will be filled with black. Refer to the `contain` option of `object-fit` in CSS.
             *
             * For local streams, by default the cover mode is used for video playing and the contain mode is used for screen sharing; for remote streams, by default the cover mode is used.
             */
            fit?: "cover" | "contain",
            /**
             * Sets whether to mute the playing stream.
             *
             * The `muted` flag can be used as a workaround for the browser's autoplay policy.
             *
             * On Chrome 70+ and Safari, a video stream with sound does not play until triggered by a user gesture.
             * If you want to play the video anyway without a user gesture, you can set the `muted` flag to true, so that the video is automatically played without sound.
             *
             * For more information, see [Autoplay Policy Changes](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes).
             */
            muted?: boolean,
        }): void;
        /**
         * Stops the Audio/Video Stream
         *
         * Call this method to stop playing the stream set by {@link Stream.play}.
         */
        stop(): void;
        /**
         * Returns Whether the Stream is Playing
         *
         * @returns
         * - `true`: The stream is being rendered or playing on the page.
         * - `false`: The stream is neither being rendered nor playing on the page.
         */
        isPlaying(): boolean;
        /**
         * Closes the Audio/Video Stream
         *
         * This method closes the video/audio stream.
         *
         * After calling this method, the camera and microphone authorizations are reset.
         */
        close(): void;
        /**
         * Enables the Audio
         *
         * This method enables the audio track in the stream.
         *
         * **Note:** For local streams, it works only when the audio flag is `true` in the stream.
         *
         * By default the audio track is enabled. If you call {@link muteAudio}, call this method to enable audio.
         * @returns
         * - `true`: Success.
         * - `false`: Failure. Possible reasons include no audio, stream not initialized, and audio track already enabled.
         */
        unmuteAudio(): void;
        /**
         * Disables the Audio
         *
         * This method disables the audio track in the stream.
         *
         * - For local streams, the SDK stops sending audio after you call this method.
         * - For remote streams, the SDK still receives audio but stops playing it after you call this method.
         *
         * **Note:** For local streams, it works only when the audio flag is `true` in the stream.
         * @returns
         * - `true`: Success.
         * - `false`: Failure. Possible reasons include no audio, stream not initialized, and audio track already disabled.
         */
        muteAudio(): void;
        /**
         * Enables the Video
         *
         * This method enables the video track in the stream.
         *
         * **Note:** For local streams, it works only when the video flag is `true` in the stream.
         *
         * By default the video track is enabled. If you call {@link muteVideo}, call this method to enable video.
         * @returns
         * - `true`: Success.
         * - `false`: Failure. Possible reasons include no video, stream not initialized, and video track already enabled.
         */
        unmuteVideo(): void;
        /**
         * Disables the Video
         *
         * This method disables the video track in the stream.
         *
         * - For local streams, the SDK stops sending video after you call this method.
         * - For remote streams, the SDK still receives video but stops playing it after you call this method.
         *
         * **Note:** For local streams, it works only when the video flag is `true` in the stream.
         * @returns
         * - `true`: Success.
         * - `false`: Failure. Possible reasons include no video, stream not initialized, and video track already disabled.
         */
        muteVideo(): void;
        /**
         * Enables the Audio
         *
         * **DEPRECATED** from v 2.5.1, use [[unmuteAudio]] instead.
         *
         * This method enables the audio track in the stream.
         *
         * It works only when the audio flag is `true` in the stream.
         *
         * By default the audio track is enabled. If you call {@link disableAudio}, call this method to enable audio.
         */
        enableAudio(): void;
        /**
         * Disables the Audio
         *
         * **DEPRECATED** from v 2.5.1, use [[muteAudio]] instead.
         *
         * This method disables the audio track in the stream.
         *
         * It works only when the audio flag is `true` in the stream.
         */
        disableAudio(): void;
        /**
         * Enables the Video
         *
         * **DEPRECATED** from v 2.5.1, use [[unmuteVideo]] instead.
         *
         * This method enables the video track in the stream.
         *
         * It works only when the video flag is `true` in the stream.
         *
         * By default the video track is enabled. If you call {@link disableVideo}, call this method to enable video.
         *
         */
        enableVideo(): void;
        /**
         * Disables the Video
         *
         * **DEPRECATED** from v 2.5.1, use [[muteVideo]] instead.
         *
         * This method disables the video track in the stream.
         *
         * It works only when the video flag is `true` in the stream.
         */
        disableVideo(): void;
        /**
         * Retrieves the Audio Flag
         *
         * This method retrieves the audio flag.
         * @returns
         * - true: The stream contains audio data.
         * - false: The stream does not contain audio data.
         */
        hasAudio(): boolean;
        /**
         * Retrieves the Video Flag
         *
         * This method retrieves the video flag.
         * @returns
         * - true: The stream contains video data.
         * - false: The stream does not contain video data.
         */
        hasVideo(): boolean;
        /**
         * Retrieves the Current Audio Level
         *
         * This method retrieves the current audio level.
         *
         * Call `setTimeout` or `setInterval` to retrieve the local or remote audio change.
         * @example **Sample Code**
         * ``` javascript
         * setInterval(function() {
         *   var audioLevel = stream.getAudioLevel();
         *   // Use audioLevel to render the UI
         * }, 100)
         * ```
         *
         * This method does not apply to streams that contain no audio data and may result in warnings.
         *
         * **Note:**
         *
         * Due to browser policy changes, this method must be triggered by the user's gesture on the Chrome 70+ and Safari browser.
         * See [Autoplay Policy Changes](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes) for details.
         */
        getAudioLevel(): number;
        /**
         * Retrieves the Audio Track
         *
         * This method retrieves the audio track in the stream and can be used together with [[replaceTrack]].
         * @returns If the stream contains an audio track, it will be returned in a `MediaStreamTrack` object.
         */
        getAudioTrack(): MediaStreamTrack | void;
        /**
         * Retrieves the Video Track
         *
         * This method retrieves the video track in the stream and can be used together with [[replaceTrack]].
         * @returns If the stream contains a video track, it will be returned in a `MediaStreamTrack` object.
         */
        getVideoTrack(): MediaStreamTrack | void;
        /**
         * Replaces the Audio/Video Track
         *
         * This method replaces the audio or video `MediaStreamTrack` in the local stream.
         *
         * After the local stream is published, you can use this method to switch the cameras, or switch between the microphone and the music player.
         *
         * The new track can be retrieved by `getUserMedia`, `MediaElement.captureStream` or other methods.
         *
         * The replaced track will be stopped.
         *
         * **Note:**
         *
         * - Supports Chrome 65+, Safari, and latest Firefox.
         * - Firefox does not support switching audio tracks between different microphones. You can replace the audio track from the microphone with an audio file, or vice versa.
         * - Replacing audio tracks from external audio devices may not be fully supported on Safari.
         * - The subscriber will not be notified if the track gets replaced.
         * - Agora recommends you use [[switchDevice]] to switch the media input devices.
         *
         * @example **Sample Code**
         *
         * ```javascript
         * // Suppose we have a localStream1
         * localStream2 = AgoraRTC.createStream({video: true, cameraId: "XXX"});
         * localStream2.setVideoProfile('<same as localStream1>')
         * localStream2.init(function(){
         *     var newVideoTrack = localStream2.getVideoTrack();
         *     localStream1.replaceTrack(newVideoTrack);
         * });
         * ```
         *
         * @param MediaStreamTrack The new track.
         * @param onSuccess The callback when the method succeeds.
         * @param onFailure The callback when the method fails.
         */
        replaceTrack(MediaStreamTrack: MediaStreamTrack,
                     onSuccess?: () => void,
                     onFailure?: (err: string) => void): void;
        /**
         * Adds the Audio or Video Track
         *
         * This method adds the audio or video tracks into the stream.
         *
         * @param track The track can be retrieved from the `mediaStream` method.
         *
         * @example **Sample Code**
         *
         * ```javascript
         * var localStream = AgoraRTC.createStream({audio: true, video: false});
         * localStream.addTrack(anotherStream.getVideoTrack());
         * ```
         *
         * **Note:**
         *
         * - Firefox does not support this function.
         * - A Stream object can have only one audio track and one video track at most.
         */
        addTrack(track: MediaStreamTrack): void;
        /**
         * Removes the Audio or Video Track
         *
         * This method removes the audio or video tracks from the stream.
         *
         * **Note:**
         *
         * If you need to change both the audio and video tracks, Agora recommend using the [[replaceTrack]] method instead.
         *
         * @example **Sample Code**
         *
         * ```javascript
         * var localStream = AgoraRTC.createStream({audio: true, video: true});
         * localStream.removeTrack(localStream.getAudioTrack());
         * ```
         *
         * @param track The track can be retrieved from the `mediaStream` method.
         *
         * **Note:**
         *
         * Firefox does not support this function.
         */
        removeTrack(track: MediaStreamTrack): void;
        /**
         * Sets the Audio Profile
         *
         * This method sets the audio profile.
         *
         * It is optional and works only when called before {@link Stream.init}. The default value is `"music_standard"`.
         *
         * **Note:**
         *
         * Due to the limitations of browsers, some browsers may not be fully compatible with the audio profile you set.
         *
         * - Firefox does not support setting the audio encoding rate.
         * - Safari does not support stereo audio.
         * - The latest version of Google Chrome does not support playing stereo audio, but supports sending a stereo audio stream.
         *
         * @param profile The audio profile has the following options:
         * - `"speech_low_quality"`: Sample rate 16 kHz, mono, encoding rate 24 Kbps.
         * - `"speech_standard"`: Sample rate 32 kHz, mono, encoding rate 24 Kbps.
         * - `"music_standard"`: Sample rate 48 kHz, mono, encoding rate 40 Kbps.
         * - `"standard_stereo"`: Sample rate 48 kHz, stereo, encoding rate 64 Kbps.
         * - `"high_quality"`: Sample rate 48 kHz, mono, encoding rate 128 Kbps.
         * - `"high_quality_stereo"`: Sample rate 48 kHz, stereo, encoding rate 192 Kbps.
         */
        setAudioProfile(profile: "speech_low_quality" | "speech_standard" | "music_standard" | "standard_stereo" | "high_quality" | "high_quality_stereo"): void;
        /**
         * Sets the Volume
         *
         * This method set the volume for the remote stream.
         *
         * It can be called either before or after the remote stream is played.
         *
         * @param volume Ranges from 0 (muted) to 100 (loudest).
         */
        setAudioVolume(volume: number): void;
        /**
         * Sets the Audio Output
         *
         * This method sets the audio output device for the remote stream. You can use it to switch between the microphone and the speakerphone.
         *
         * It can be called either before or after the remote stream is played.
         *
         * **Note:**
         *
         * Only Chrome 49+ supports this function.
         * @param deviceId The device ID can be retrieved from {@link getDevices}, whose [[kind]] should be "audiooutput".
         *
         * The retrieved ID is ASCII characters, and the string length is greater than 0 and less than 256 bytes.
         */
        setAudioOutput(deviceId: string,
                       onSuccess?: () => void,
                       onFailure?: (err: string) => void): void;
        /**
         * Switches the Media Input Device
         *
         * This method switches between the media input devices:
         *
         * - Audio input devices, such as microphones.
         * - Video input devices, such as cameras.
         *
         * If you call this method after [[publish]], there is no need to re-publish the stream after switching the device.
         *
         * **Note:**
         *
         *  This method does not support the following scenarios:
         *
         * - Dual-stream mode is enabled by [[enableDualStream]].
         * - The remote stream.
         * - The stream is created by defining the [[audioSource]] and [[videoSource]] properties.
         * - The Firefox browser.
         *
         * @param type Type of the device: "audio" or "video".
         * @param deviceId  Device ID, which can be retrieved from [[getDevices]]. The retrieved ID is ASCII characters, and the string length is greater than 0 and less than 256 bytes.
         * @param onSuccess The callback when the method succeeds.
         * @param onFailure The callback when the method fails.
         */
        switchDevice(
            type: "audio" | "video",
            deviceId: string,
            onSuccess?: () => void,
            onFailure?: (err: string) => void
        ): void;
        /**
         * Sets the Video Profile
         *
         * This method sets the video profile.
         *
         * It is optional and works only when called before {@link Stream.init}. The default value is `"480p_1"`.
         *
         * @example `setVideoProfile("480p");`
         * @param profile The video profile. See the following table for its definition and supported profiles in different scenarios.
         *
         * [[include:VideoProfileDefinition.md]]
         */
        setVideoProfile(profile: string): void;
        /**
         * Sets the Screen Profile
         *
         * This method sets the profile of the screen in screen-sharing.
         * @param profile The screen profile. See the following table for details.
         *
         * [[include:ScreenProfileDefinition.md]]
         */
        setScreenProfile(profile: string): void;
        /**
         * Starts Audio Mixing
         *
         * This method mixes the specified online audio file with the audio stream from the microphone; or, it replaces the microphone’s audio stream with the specified online audio file.
         *
         * You can specify the number of playback loops and play time duration.
         *
         * **Note:**
         *
         * - This method supports the following browsers:
         *   * Safari 12 and later
         *   * Chrome 65 and later
         *   * Firefox 66 and later
         * - Call this method when you are in a channel, otherwise, it may cause issues.
         * - Due to browser policy changes, this method must be triggered by the user's gesture on the Chrome 70+ and Safari browser.
         *   See [Autoplay Policy Changes](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes) for details.
         *
         * @param options Audio mixing settings.
         * @param callback
         * The callback of this method:
         *
         * - null: The method succeeds.
         * - err: The method fails.
         *
         * **Note:**
         * The callbacks of the other audio mixing methods are the same as this one, using the Node.js callback pattern.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * stream.startAudioMixing({
         *     filePath: 'example.mp3'
         * }, function(error) {
         *     if (error) {
         *         // Error handling
         *         return;
         *     }
         *     // Processes after stream playing
         * })
         *
         * ```
         */
        startAudioMixing(
            options: {
                /**
                 * Path of the online audio file to mix. ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
                 *
                 * Supported audio formats: mp3, aac, and other audio formats depending on the browser.
                 */
                filePath: string,
                /**
                 * Whether or not to store the audio mixing file in the cache.
                 *
                 * - `true`: (default) store the audio mixing file in the cache to speed up mixing this file the next time.
                 * - `false`: do not store the audio mixing file in the cache to save RAM.
                 */
                cacheResource?: boolean,
                /**
                 * Number of playback loops (only supports Chrome 65+)
                 *
                 * A positive integer. The value range is [1,10000]. The default value is 1.
                 */
                cycle?: number,
                /**
                 * Whether the audio mixing file loops infinitely.
                 *
                 * - `true`: The audio mixing file loops infinitely. Do not use this option if `cycle` is specified.
                 * - `false`: (Default) Disables the infinite loops.
                 */
                loop?: boolean,
                /**
                 * Sets the playback position (ms) of the audio mixing file. An integer, and the value range is [0,100000000].
                 *
                 * If you need to play the file from the beginning, set this paramter to 0.
                 */
                playTime: number,
                /**
                 * Whether the online audio file replaces the local audio stream.
                 *
                 * - `true`: The content of the online audio file replaces the audio stream from the microphone.
                 * - `false`: (Default) The online audio file is mixed with the audio stream from the microphone.
                 *
                 * **Note:**
                 *
                 * Safari does not support this parameter.
                 */
                replace?: boolean
            },
            callback?: (err: string | null) => void): void;
        /**
         * Stops Audio Mixing
         *
         */
        stopAudioMixing(callback?: (err: string | null) => void): void;
        /**
         * Pauses Audio Mixing
         *
         */
        pauseAudioMixing(callback?: (err: string | null) => void): void;
        /**
         * Resumes Audio Mixing
         *
         */
        resumeAudioMixing(callback?: (err: string | null) => void): void;
        /**
         * Adjusts Audio Mixing Volume
         *
         * @param level The volume of the mixing audio. The value ranges between 0 and 100 (default).
         */
        adjustAudioMixingVolume(level: number): void;
        /**
         * Retrieves Audio Mixing Duration
         *
         * @returns Returns the audio mixing duration (ms) if successful.
         */
        getAudioMixingDuration(): number | void;
        /**
         * Retrieves the Current Position of the Audio Mixing
         *
         * Retrieves the playback position (ms) of the audio.
         *
         * @returns Returns the current position of the audio mixing if successful.
         */
        getAudioMixingCurrentPosition(): number | void;
        /**
         * Sets the Audio Mixing Position
         *
         * Sets the playback position of the audio mixing file to a different start position (by default plays from the beginning).
         *
         * @param position The time (ms) to start playing the audio mixing file, an integer. The value range is [0,100000000].
         */
        setAudioMixingPosition(position: number, callback?: (err: string | null) => void): void;
        /**
         * Plays a specified audio effect.
         *
         * This method supports playing multiple audio effect files at the same time, and is different from [[startAudioMixing]].
         *
         * You can use this method to add specific audio effects for specific scenarios. For example, gaming.
         *
         * **Note:**
         *
         * - Due to web browser autoplay policy changes, this method must be triggered by a user gesture on Chrome 70+ and Safari web browsers.
         * See [Autoplay Policy Changes](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes) for details.
         * - This method supports the following web browsers:
         *   * Safari 12 and later
         *   * Chrome 65 and later
         *   * Firefox 66 and later
         * - Call this method when you are in a channel. Otherwise, it may cause issues.
         *
         * @param options Audio effect options.
         * @param callback
         * The callback of this method:
         *
         * - null: the method call succeeds.
         * - err: the method call fails.
         *
         * **Note:**
         *
         * The callbacks of the audio effect methods all use the Node.js callback pattern.
         *
         * @example **Sample code**
         *
         * ``` javascript
         * stream.playEffect({
         *      soundId: 1,
         *     filePath: "biu.mp3"
         * }, function(error) {
         *     if (error) {
         *         // Error handling
         *         return;
         *     }
         *     // Process after the method call succeeds
         * });
         *
         * ```
         */
        playEffect(
            options: {
                /**
                 * The ID of the specified audio effect.
                 *
                 * A positive integer. The value range is [1,10000]. Each audio effect has a unique ID.
                 *
                 * If the audio effect is preloaded into the memory through the [[preloadEffect]] method, ensure that the soundId value is set to the same value as in [[preloadEffect]].
                 */
                soundId: number,
                /**
                 * The URL of the online audio effect file.
                 *
                 * The URL must contain ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
                 *
                 * Supported audio formats: MP3, AAC, and other audio formats depending on the browser.
                 */
                filePath: string,
                /**
                 * The number of playback loops (only supported on Chrome 65 and later).
                 *
                 * A positive integer. The value range is [1,10000]. The default value is 1.
                 */
                cycle?: number
            },
            callback?: (err: string | null) => void
        ): void;
        /**
         * Stops playing a specified audio effect.
         *
         * @param soundId The ID of the audio effect. Each audio effect has a unique ID. The value range is [1,10000].
         * @example **Sample code**
         * ```javascript
         * // When the audio effect 1 is playing
         * stream.stopEffect(1, function(err){
         *     if (err){
         *         console.error("Failed to stop Effect, reason: ", err);
         *     }else{
         *         console.log("Effect is stopped successfully");
         *     }
         * });
         * ```
         */
        stopEffect(
            soundId: number,
            callback?: (err: string | null) => void
        ): void;
        /**
         * Pauses a specified audio effect.
         *
         * @param soundId The ID of the audio effect. Each audio effect has a unique ID. The value range is [1,10000].
         * @example **Sample code**
         * ``` javascript
         * // When the audio effect 1 is playing
         * stream.pauseEffect(1, function(err){
         *     if (err){
         *         console.error("Failed to pause Effect, reason: ", err);
         *     }else{
         *         console.log("Effect is paused successfully");
         *     }
         * });
         * ```
         */
        pauseEffect(
            soundId: number,
            callback?: (err: string | null) => void
        ): void;
        /**
         * Resumes playing a specified audio effect.
         *
         * @param soundId The ID of the audio effect. Each audio effect has a unique ID. The value range is [1,10000].
         * @example **Sample code**
         * ``` javascript
         * // When the audio effect 1 is paused
         * stream.resumeEffect(1, function(err){
         *     if (err){
         *         console.error("Failed to resume Effect, reason: ", err);
         *     }else{
         *         console.log("Effect is resumed successfully");
         *     }
         * });
         * ```
         */
        resumeEffect(
            soundId: number,
            callback?: (err: string | null) => void
        ): void;
        /**
         * Sets the volume of a specified audio effect.
         *
         * @param soundId The ID of the audio effect. Each audio effect has a unique ID. The value range is [1,10000].
         * @param volume Volume of the audio effect. The value range is [0,100].The default value is 100 (the original volume).
         * @example **Sample code**
         * ``` javascript
         * // When the audio effect 1 is loaded
         * stream.setVolumeOfEffect(1, 50, function(err){
         *     if (err){
         *         console.error("Failed to set volume of Effect, reason: ", err);
         *     }else{
         *         console.log("Effect volume is set to", 50);
         *     }
         * });
         * ```
         */
        setVolumeOfEffect(
            soundId: number,
            volume: number,
            callback?: (err: string | null) => void
        ): void;
        /**
         * Preloads a specified audio effect file into the memory.
         *
         * To ensure smooth communication, limit the size of the audio effect file.
         *
         * @param soundId The ID of the audio effect. Each audio effect has a unique ID. The value range is [1,10000].
         * @param filePath The URL of the online audio effect file. Supports MP3, AAC, and other audio formats depending on the browser.
         *
         * @example **Sample code**
         * ``` javascript
         * stream.preloadEffect(1, "https://web-demos-static.agora.io/agora/smlt.flac", function(err){
         *     if (err){
         *         console.error("Failed to preload effect, reason: ", err);
         *     }else{
         *         console.log("Effect is preloaded successfully");
         *     }
         * });
         * ```
         */
        preloadEffect(
            soundId: number,
            filePath: string,
            callback?: (err: string | null) => void
        ): void;
        /**
         * Releases a specified preloaded audio effect from the memory.
         *
         * @param soundId The ID of the audio effect. Each audio effect has a unique ID. The value range is [1,10000].
         *
         * @example **Sample code**
         * ``` javascript
         * // When the audio effect 1 is loaded
         * stream.unloadEffect(1, function(err){
         *     if (err){
         *         console.error("Failed to unload effect, reason: ", err);
         *     }else{
         *         console.log("Effect is unloaded successfully");
         *     }
         * });
         * ```
         */
        unloadEffect(
            soundId: number,
            callback?: (err: string | null) => void
        ): void;
        /**
         * Gets the volume of the audio effects.
         *
         * @returns Returns an array that contains `soundId` and `volume`. Each `soundId` has a corresponding`volume`.
         *
         * - `soundId`: The ID of the audio effect. Each audio effect has a unique ID. The value range is [1,10000].
         * - `volume`: Volume of the audio effect. The value range is [0,100].
         *
         * @example **Sample code**
         * ``` javascript
         * var volumes = stream.getEffectsVolume();
         * volumes.forEach(function({soundId, volume}){
         *     console.log("SoundId", soundId, "Volume", volume);
         * });
         * ```
         */
        getEffectsVolume(): Array<{ soundId: number, volume: number }>;
        /**
         * Sets the volume of the audio effects.
         *
         * @param volume Volume of the audio effect. The value range is [0,100].The default value is 100 (the original volume).
         * @example **Sample code**
         * ```javascript
         * stream.setEffectsVolume(0, function(err){
         *     if (err){
         *         console.error("Failed to set effects volume, reason: ", err);
         *     }else{
         *         console.log("Effects volume is set successfully");
         *     }
         * });
         * ```
         */
        setEffectsVolume(
            volume: number,
            callback?: (err: string | null) => void
        ): void;
        /**
         * Stops playing all audio effects.
         *
         * @example **Sample code**
         * ```javascript
         * stream.stopAllEffects(function(err){
         *     if (err){
         *         console.error("Failed to stop effects, reason: ", err);
         *     }else{
         *         console.log("Effects are stopped successfully");
         *     }
         * });
         * ```
         */
        stopAllEffects(
            callback?: (err: string | null) => void
        ): void;
        /**
         * Pauses all audio effects.
         *
         * @example **Sample code**
         * ``` javascript
         * stream.pauseAllEffects(function(err){
         *     if (err){
         *         console.error("Failed to pause effects, reason: ", err);
         *     }else{
         *         console.log("Effects are paused successfully");
         *     }
         * });
         * ```
         */
        pauseAllEffects(
            callback?: (err: string | null) => void
        ): void;
        /**
         * Resumes playing all audio effects.
         *
         * @example **Sample code**
         * ``` javascript
         * stream.resumeAllEffects(function(err){
         *     if (err){
         *         console.error("Failed to resume effects, reason: ", err);
         *     }else{
         *         console.log("Effects are resumed successfully");
         *     }
         * });
         * ```
         */
        resumeAllEffects(
            callback?: (err: string | null) => void
        ): void;
        /**
         * Retrieves the Stream ID
         *
         * This method retrieves the stream ID.
         * @example `stream.getId()`
         */
        getId(): number;
        /**
         * Gets Connection Statistics
         *
         * This method gets the connection statistics of the stream.
         *
         * **Note:**
         *
         * It may take some time to get some of the statistics.
         *
         * @param callback The callback contains the connection statistics of the stream.
         *
         * - If it is a publishing stream, then the stats is {@link LocalStreamStats}.
         * - If it is a subscribing stream, then the stats is {@link RemoteStreamStats}.
         *
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * localStream.getStats((stats) => {
         *     console.log(`Local Stream accessDelay: ${stats.accessDelay}`);
         *     console.log(`Local Stream audioSendBytes: ${stats.audioSendBytes}`);
         *     console.log(`Local Stream audioSendPackets: ${stats.audioSendPackets}`);
         *     console.log(`Local Stream audioSendPacketsLost: ${stats.audioSendPacketsLost}`);
         *     console.log(`Local Stream videoSendBytes: ${stats.videoSendBytes}`);
         *     console.log(`Local Stream videoSendFrameRate: ${stats.videoSendFrameRate}`);
         *     console.log(`Local Stream videoSendPackets: ${stats.videoSendPackets}`);
         *     console.log(`Local Stream videoSendPacketsLost: ${stats.videoSendPacketsLost}`);
         *     console.log(`Local Stream videoSendResolutionHeight: ${stats.videoSendResolutionHeight}`);
         *     console.log(`Local Stream videoSendResolutionWidth: ${stats.videoSendResolutionWidth}`);
         * });
         *
         *
         * remoteStream.getStats((stats) => {
         *     console.log(`Remote Stream accessDelay: ${stats.accessDelay}`);
         *     console.log(`Remote Stream audioReceiveBytes: ${stats.audioReceiveBytes}`);
         *     console.log(`Remote Stream audioReceiveDelay: ${stats.audioReceiveDelay}`);
         *     console.log(`Remote Stream audioReceivePackets: ${stats.audioReceivePackets}`);
         *     console.log(`Remote Stream audioReceivePacketsLost: ${stats.audioReceivePacketsLost}`);
         *     console.log(`Remote Stream endToEndDelay: ${stats.endToEndDelay}`);
         *     console.log(`Remote Stream videoReceiveBytes: ${stats.videoReceiveBytes}`);
         *     console.log(`Remote Stream videoReceiveDecodeFrameRate: ${stats.videoReceiveDecodeFrameRate}`);
         *     console.log(`Remote Stream videoReceiveDelay: ${stats.videoReceiveDelay}`);
         *     console.log(`Remote Stream videoReceiveFrameRate: ${stats.videoReceiveFrameRate}`);
         *     console.log(`Remote Stream videoReceivePackets: ${stats.videoReceivePackets}`);
         *     console.log(`Remote Stream videoReceivePacketsLost: ${stats.videoReceivePacketsLost}`);
         *     console.log(`Remote Stream videoReceiveResolutionHeight: ${stats.videoReceiveResolutionHeight}`);
         *     console.log(`Remote Stream videoReceiveResolutionWidth: ${stats.videoReceiveResolutionWidth}`);
         * });
         *
         * ```
         */
        getStats(callback: (stats: LocalStreamStats | RemoteStreamStats) => void): void;
    }

    /**
     * The Client object returned by the {@link createClient} method provides access to much of the core AgoraRTC functionality.
     */
    interface Client {
        /**
         * Occurs when the local stream is published.
         * @example **Sample Code**
         * ``` javascript
         * client.on("stream-published", function(evt) {
         *     console.log("local stream published");
         *     //……
         * })
         *
         * ```
         */
        on(event: "stream-published", callback: (evt: any) => void): void;
        /**
         * Occurs when the remote stream is added.
         * @example **Sample Code**
         * ``` javascript
         * client.on("stream-added", function(evt) {
         *     var stream = evt.stream;
         *     console.log("new stream added ", stream.getId());
         *     // Subscribe the stream.
         *     //……
         * })
         *
         * ```
         *
         */
        on(event: "stream-added", callback: (evt: any) => void): void;
        /**
         * Occurs when the remote stream is removed; for example, a peer user calls {@link Client.unpublish}.
         * @example **Sample Code**
         * ``` javascript
         * client.on("stream-removed", function(evt) {
         *     var stream = evt.stream;
         *     console.log("remote stream was removed", stream.getId());
         *     //……
         * });
         *
         * ```
         */
        on(event: "stream-removed", callback: (evt: any) => void): void;
        /**
         * Occurs when a user subscribes to a remote stream.
         * @example **Sample Code**
         * ``` javascript
         * client.on("stream-subscribed", function(evt) {
         *     var stream = evt.stream;
         *     console.log("new stream subscribed ", stream.getId());
         *     // Play the stream.
         *     //……
         * })
         *
         * ```
         */
        on(event: "stream-subscribed", callback: (evt: any) => void): void;
        /**
         * Occurs when the peer user leaves the channel; for example, the peer user calls {@link Client.leave}.
         * @example **Sample Code**
         * ``` javascript
         * client.on("peer-leave", function(evt) {
         *     var uid = evt.uid;
         *     console.log("remote user left ", uid);
         *     //……
         * });
         *
         * ```
         */
        on(event: "peer-leave", callback: (evt: any) => void): void;
        /**
         * Occurs when the peer user mutes the audio.
         * @example **Sample Code**
         * ``` javascript
         * client.on("mute-audio", function(evt) {
         *   var uid = evt.uid;
         *   console.log("mute audio:" + uid);
         *   //alert("mute audio:" + uid);
         * });
         *
         * ```
         */
        on(event: "mute-audio", callback: (evt: any) => void): void;
        /**
         * Occurs when the peer user unmutes the audio.
         * @example **Sample Code**
         * ``` javascript
         * client.on("unmute-audio", function (evt) {
         *   var uid = evt.uid;
         *   console.log("unmute audio:" + uid);
         * });
         *
         * ```
         */
        on(event: "unmute-audio", callback: (evt: any) => void): void;
        /**
         * Occurs when the peer user turns off the video.
         * @example **Sample Code**
         * ``` javascript
         * client.on("mute-video", function (evt) {
         *   var uid = evt.uid;
         *   console.log("mute video" + uid);
         *   //alert("mute video:" + uid);
         * })
         *
         * ```
         */
        on(event: "mute-video", callback: (evt: any) => void): void;
        /**
         * Occurs when the peer user turns on the video.
         * @example **Sample Code**
         * ``` javascript
         * client.on("unmute-video", function (evt) {
         *   var uid = evt.uid;
         *   console.log("unmute video:" + uid);
         * })
         *
         * ```
         */
        on(event: "unmute-video", callback: (evt: any) => void): void;
        /**
         * This callback notifies the peer user that he/she is banned from the channel. Only the banned users receive this callback.
         * @example **Sample Code**
         * ``` javascript
         * client.on("client-banned", function (evt) {
         *    var uid = evt.uid;
         *    var attr = evt.attr;
         *    console.log(" user banned:" + uid + ", bantype:" + attr);
         *    alert(" user banned:" + uid + ", bantype:" + attr);
         * });
         *
         * ```
         */
        on(event: "client-banned", callback: (evt: any) => void): void;
        /**
         * This callback notifies the application who is the active speaker in the channel.
         * @example **Sample Code**
         * ``` javascript
         * client.on("active-speaker", function(evt) {
         *      var uid = evt.uid;
         *      console.log("update active speaker: client " + uid);
         *   });
         *
         * ```
         */
        on(event: "active-speaker", callback: (evt: any) => void): void;
        /**
         * This callback notifies the application of all the speaking remote users and their volumes.
         *
         * It is disabled by default. You can enable this event by calling {@link enableAudioVolumeIndicator}.
         * If enabled, it reports the volumes every two seconds regardless of whether there are users speaking.
         *
         * The volume is an integer ranging from 0 to 100. Usually a user with volume above five will be counted as a speaking user.
         * @example **Sample Code**
         * ``` javascript
         * client.on("volume-indicator", function(evt){
         *     evt.attr.forEach(function(volume, index){
         *     console.log(`#{index} UID ${volume.uid} Level ${volume.level}`);
         *   });
         * });
         * ```
         */
        on(event: "volume-indicator", callback: (evt: any) => void): void;
        /**
         * Occurs when the live streaming starts.
         */
        on(event: "liveStreamingStarted", callback: (evt: any) => void): void;
        /**
         * Occurs when the live streaming fails.
         */
        on(event: "liveStreamingFailed", callback: (evt: any) => void): void;
        /**
         * Occurs when the live streaming stops.
         */
        on(event: "liveStreamingStopped", callback: (evt: any) => void): void;
        /**
         * Occurs when the live transcoding setting is updated.
         */
        on(event: "liveTranscodingUpdated", callback: (evt: any) => void): void;
        /**
         * Occurs when the injected online media stream's status is updated.
         */
        on(event: "streamInjectedStatus", callback: (evt: any) => void): void;
        /**
         * Occurs when the Token expires in 30 seconds.
         *
         * You should request a new Token from your server and call {@link Client.renewToken}.
         * @example **Sample Code**
         * ``` javascript
         * client.on("onTokenPrivilegeWillExpire", function(){
         *   //After requesting a new token
         *   client.renewToken(token);
         * });
         *
         * ```
         */
        on(event: "onTokenPrivilegeWillExpire", callback: (evt: any) => void): void;
        /**
         * Occurs when the Token expires.
         *
         * You should request a new Token from your server and call {@link Client.renewToken}.
         * @example **Sample Code**
         * ``` javascript
         * client.on("onTokenPrivilegeDidExpire", function(){
         *   //After requesting a new token
         *   client.renewToken(token);
         * });
         *
         * ```
         */
        on(event: "onTokenPrivilegeDidExpire", callback: (evt: any) => void): void;
        /**
         * Occurs when an error message is reported and requires error handling.
         * @example **Sample Code**
         * ``` javascript
         * client.on("error", function(err) {
         *     console.log("Got error msg:", err.reason);
         *   });
         *
         * ```
         *
         * For details, see [Error Codes and Warning Codes](../../../the_error_web).
         */
        on(event: "error", callback: (evt: any) => void): void;
        /**
         * Occurs when the network type changes.
         * @example **Sample Code**
         * ``` javascript
         * client.on("network-type-changed", function(evt) {
         *     console.log("Network Type Changed to", evt.networkType);
         *   });
         *
         * ```
         *
         * Note:
         *
         * Chrome 61+ is required for this function, and the compatibility is not guaranteed.
         * See [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API) for details.
         */
        on(event: "network-type-changed", callback: (evt: any) => void): void;
        /**
         * Occurs when an audio input device is added or removed.
         * @example **Sample Code**
         * ``` javascript
         * client.on("recording-device-changed", function(evt) {
         *     console.log("Recording Device Changed", evt.state, evt.device);
         *   });
         *
         * ```
         *
         */
        on(event: "recording-device-changed", callback: (evt: any) => void): void;
        /**
         * Occurs when an audio output device is added or removed.
         * @example **Sample Code**
         * ``` javascript
         * client.on("playout-device-changed", function(evt) {
         *     console.log("Playout Device Changed", evt.state, evt.device);
         *   });
         *
         * ```
         *
         * **Note:**
         *
         * Only supports Chrome 49+.
         */
        on(event: "playout-device-changed", callback: (evt: any) => void): void;
        /**
         * Occurs when a camera is added or removed.
         * @example **Sample Code**
         * ``` javascript
         * client.on("camera-changed", function(evt) {
         *     console.log("Camera Changed", evt.state, evt.device);
         *   });
         *
         * ```
         *
         */
        on(event: "camera-changed", callback: (evt: any) => void): void;
        /**
         * Occurs when the type of a video stream changes.
         *
         * It happens when a high-video stream changes to a low-video stream, or vice versa.
         *
         * The stream type (streamType):
         *
         * - 0: High-bitrate, high-resolution video stream.
         * - 1: Low-bitrate, low-resolution video stream.
         * @example **Sample Code**
         *
         * ``` javascript
         * client.on("stream-type-changed", function(evt) {
         *     console.log("Stream Type Change", evt.uid, evt.streamType);
         *   });
         *
         * ```
         *
         */
        on(event: "stream-type-changed", callback: (evt: any) => void): void;
        /**
         * Occurs when the network connection state changes.
         *
         * The connection between the SDK and Agora's edge server has the following states:
         *
         * - `DISCONNECTED`: The SDK is disconnected from Agora's edge server.
         *  - This is the initial state before [[Client.join]].
         *  - The SDK also enters this state after the app calls [[Client.leave]].
         * - `CONNECTING`: The SDK is connecting to Agora's edge server.
         * The SDK enters this state when calling [[Client.join]] or reconnecting to Agora's edge server automatically after the connection is lost.
         * - `CONNECTED`: The SDK is connected to Agora's edge server and joins a channel. You can now publish or subscribe to a stream in the channel.
         * If the connection is lost because, for example, the network is down or switched, the SDK triggers this callback and notifies the app that the state changes from `CONNECTED` to `CONNECTING`.
         * - `DISCONNECTING`: The SDK is disconnecting from Agora's edge server. The SDK enters this state when calling [[Client.leave]].
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * client.on("connection-state-change", function(evt) {
         *   console.log(evt.prevState, evt.curState);
         * })
         * ```
         */
        on(event: "connection-state-change", callback: (evt: {
            /**  The previous connection state. */
            prevState: string,
            /** The current connection state. */
            curState: string
        }) => void): void;
        /**
         * Occurs when the SDK starts republishing or re-subscribing to a stream.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * client.on("stream-reconnect-start", function(evt) {
         *   console.log(evt.uid);
         * })
         * ```
         */
        on(event: "stream-reconnect-start", callback: (evt: {
            /** The corresponding uid of the stream being republished or re-subscribed to. */
            uid: number | string
        }) => void): void;
        /**
         * Occurs when the SDK finishes republishing or re-subscribing to a stream.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * client.on('stream-reconnect-end', function(evt) {
         *   console.log(evt.uid, evt.success, evt.reason);
         * })
         * ```
         */
        on(event: "stream-reconnect-end", callback: (evt: {
            /** The corresponding uid of the stream being republished or re-subscribed to. */
            uid: number | string,
            /**
             * The result of republishing or re-subscribing to the stream.
             * - `true`: Success.
             * - `false`: Failure.
             */
            success: boolean,
            /**
             * - An empty string if `success` is `true`.
             * - The failure reason if `success` is `false`.
             */
            reason: string,
        }) => void): void;
        /**
         * Occurs when the user role switches in a live broadcast. For example, from a host to an audience or vice versa.
         *
         * @example **Sample Code**
         *
         * ```javascript
         * client.on('client-role-changed', function(evt) {
         *   console.log('client-role-changed', evt.role);
         * });
         * ```
         */
        on(event: "client-role-changed", callback: (evt:
                                                        /** @param role Role that the user switches to. */
                                                        { role: string }) => void): void;
        /**
         * Occurs when a remote user or host joins the channel.
         *
         * - Communication channel (rtc mode): This callback notifies the app that another user joins the channel.
         *   If other users are already in the channel, the SDK also reports to the app on the existing users.
         * - Live-broadcast channel (live mode): This callback notifies the app that the host joins the channel.
         * If other hosts are already in the channel, the SDK also reports to the app on the existing hosts. Agora recommends limiting the number of hosts to 17.
         *
         * @example **Sample Code**
         *
         * ```javascript
         * client.on('peer-online', function(evt) {
         *   console.log('peer-online', evt.uid);
         * });
         * ```
         *
         */
        on(event: "peer-online", callback: (evt:
                                                /** @param uid ID of the user or host who joins the channel.  */
                                                { uid: string }) => void): void;
        /**
         * Reports the network quality of the local user once every two seconds.
         *
         * This callback reports on the uplink and downlink network conditions of the local user.
         *
         * **Note:**
         *
         * This is an experimental feature and the network quality rating is for reference only.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * client.on('network-quality', function(stats) {
         *     console.log('downlinkNetworkQuality', stats.downlinkNetworkQuality);
         *     console.log('uplinkNetworkQuality', stats.uplinkNetworkQuality);
         * });
         * ```
         */
        on(event: "network-quality", callback:
            /** @param stats The local user's network quality, including the uplink and downlink quality, see [[NetworkQualityStats]] for details. */
            (stats: NetworkQualityStats) => void): void;
        /**
         * Occurs when the remote video stream falls back to an audio-only stream due to unreliable network conditions or switches back to the video after the network conditions improve.
         *
         * If you set `fallbackType` as 2 in [[setStreamFallbackOption]],
         * the SDK triggers this callback when the remote media stream falls back to audio only due to unreliable network conditions or switches back to the video after the network condition improves.
         *
         * **Note:**
         *
         * Once the remote media stream is switched to the low stream due to unreliable network conditions,
         * you can monitor the stream switch between a high stream and low stream in the `stream-type-changed` callback.
         */
        on(event: "stream-fallback", callback:
            (evt: {
                /** ID of the remote user sending the stream. */
                uid: string | number,
                /**
                 * Whether the remote media stream falls back to audio-only or switches back to the video:
                 * - 1: the remote media stream falls back to audio-only due to unreliable network conditions.
                 * - 0: the remote media stream switches back to the video stream after the network conditions improve.
                 */
                attr: number
            }) => void): void;
        /**
         * Occurs when a remote stream adds or removes a track.
         *
         * When a remote stream calls the [[addTrack]] or [[removeTrack]] method, the SDK triggers this callback.
         */
        on(event: "stream-updated", callback:
            (evt: {
                /**
                 * The stream that adds or removes a track:
                 * - `video`: boolean, marks whether the stream contains a video track.
                 * - `audio`: boolean, marks whether the stream contains an audio track.
                 */
                stream: Stream
            }) => void): void;
        /**
         * Reports exception events in the channel.
         *
         * Exceptions are not errors, but usually mean quality issues.
         *
         * This callback also reports recovery from an exception.
         *
         * Each exception event has a corresponding recovery event, see the table below for details:
         *
         * ![](https://web-cdn.agora.io/docs-files/1547180053430)
         *
         * **Note:**
         *
         * This callback supports only the Chrome browser.
         * @example **Sample Code**
         * ``` javascript
         * client.on("exception", function(evt) {
         *   console.log(evt.code, evt.msg, evt.uid);
         * })
         * ```
         */
        on(event: "exception", callback: (evt: {
            /** Event code. */
            code: number,
            /** Event message. */
            msg: string,
            /** The uid of the user who experiences the exception or recovery event. */
            uid: string
        }) => void): void;
        /**
         * Initializes a Client Object
         *
         * This method initializes the client object.
         * @example **Sample Code**
         * ``` javascript
         * client.init(appId, function() {
         *     console.log("client initialized");
         *     // Join a channel
         *     //……
         * }, function(err) {
         *     console.log("client init failed ", err);
         *     // Error handling
         * });
         * ```
         * @param appId Pass in the App ID for your project. ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
         *
         * To get your App ID, see [Get an App ID](../../../web_prepare?platform=Web#create-an-agora-account-and-get-an-app-id).
         * @param onSuccess The callback when the method succeeds.
         * @param onFailure The callback when the method fails.
         */
        init(
            appId: string,
            onSuccess?: () => void,
            onFailure?: (err: string) => void
        ): void;
        /**
         * Joins an AgoraRTC Channel
         *
         * This method joins an AgoraRTC channel.
         * @example **Sample Code**
         * ``` javascript
         * client.join(<token>, "1024", null, function(uid) {
         *     console.log("client" + uid + "joined channel");
         *     // Create a local stream
         *     //……
         * }, function(err) {
         *     console.error("client join failed ", err);
         *     // Error handling
         * });
         * ```
         * @param tokenOrKey
         * - Low security requirements: Pass `null` as the parameter value.
         * - High security requirements: Pass the string of the Token or Channel Key as the parameter value. See [Use Security Keys](../../../token) for details.
         * @param channel A string that provides a unique channel name for the Agora session. The length must be within 64 bytes. Supported character scopes:
         *
         *  - 26 lowercase English letters a-z
         *  - 26 uppercase English letters A-Z
         *  - 10 numbers 0-9
         *  - Space
         *  - "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","
         * @param uid The user ID, an integer or a string, ASCII characters only. Ensure this ID is unique.
         *            If you set the uid to `null`, the server assigns one and returns it in the `onSuccess` callback.
         *
         * **Note:**
         *
         * - All users in the same channel should have the same type (number or string) of `uid`.
         * - If you use a number as the user ID, it should be a 32-bit unsigned integer with a value ranging from 0 to (2<sup>32</sup>-1).
         * - If you use a string as the user ID, the maximum length is 255 characters.
         * @param onSuccess The callback when the method succeeds. The server returns the uid which represents the identity of the user.
         * @param onFailure The callback when the method fails.
         */
        join(
            tokenOrKey: string | null,
            channel: string,
            uid: number | string | null,
            onSuccess?: (uid: number | string) => void,
            onFailure?: (err: any) => void
        ): void;
        /**
         * Leaves an AgoraRTC Channel
         *
         * This method enables a user to leave a channel.
         * @example **Sample Code**
         * ``` javascript
         * client.leave(function() {
         *     console.log("client leaves channel");
         *     //……
         * }, function(err) {
         *     console.log("client leave failed ", err);
         *     //error handling
         * });
         * ```
         * @param onSuccess The callback when the method succeeds.
         * @param onFailure The callback when the method fails.
         */
        leave(onSuccess?: () => void, onFailure?: (err: any) => void): void;
        /**
         * Publishes a Local Stream
         *
         * This method publishes a local stream to the SD-RTN.
         *
         * **Note:**
         *
         * In a live broadcast, whoever calls this API is the host.
         * @example **Sample Code**
         * ``` javascript
         * client.publish(stream, function(err) {
         *     console.log(err);
         *     //……
         * })
         * ```
         * @param stream Stream object, which represents the local stream.
         * @param onFailure The callback when the method fails.
         */
        publish(stream: Stream, onFailure?: (err: any) => void): void;
        /**
         * Unpublishes the Local Stream
         *
         * This method unpublishes the local stream.
         * @example
         * **Sample Code**
         * ``` javascript
         * client.unpublish(stream, function(err) {
         *     console.log(err);
         *     //……
         * })
         *
         * ```
         * @param stream Stream object, which represents the local stream.
         * @param onFailure The callback when the method fails.
         */
        unpublish(stream: Stream, onFailure?: (err: any) => void): void;
        /**
         * Subscribes to a Remote Stream
         *
         * This method enables a user to subscribe to a remote stream.
         *
         * @param stream Stream object, which represents the remote stream.
         * @param options Sets whether to receive the video or audio data independently by the `video` and `audio` parameters.
         *
         * **Note:**
         *
         * - `video` and `audio` cannot be set as `false` at the same time. If you need to stop subscribing to the stream, call [[Client.unsubscribe]] instead.
         * - Safari does not support independent subscription. Set `options` as `null` for Safari, otherwise the`SAFARI_NOT_SUPPORTED_FOR_TRACK_SUBSCRIPTION` error occurs.
         * @param onFailure The callback when the method fails.
         *
         * @example
         * **Sample Code**
         * ```javascript
         * client.subscribe(stream, function(err) {
         *     console.error("stream subscribe failed", err);
         *     //……
         * });
         * ```
         * ### Advanced
         *
         * This method can be called multiple times for a single remote stream, and enables you to switch between receiving/not receiving the video or audio data flexibly.
         *
         * @example
         * **Sample Code**
         * ```javascript
         * // Initially, subscribe to the stream and receive only the video data
         * client.subscribe(stream, {video: true, audio: false});
         *
         * // After a while, switch to receiving only the audio data
         * client.subscribe(stream, {video: false, audio: true});
         * ```
         */
        subscribe(
            stream: Stream,
            options?: {
                /**
                 * Marks whether to receive the video data.
                 *  - `true`: (Default) Receives the video data.
                 *  - `false`: Not receives the video data.
                 */
                video?: boolean,
                /**
                 * Marks whether to receive the audio data.
                 *  - `true`: (Default) Receives the audio data.
                 *  - `false`: Not receives the audio data.
                 */
                audio?: boolean
            },
            onFailure?: (err: any) => void): void;
        /**
         * Unsubscribes from the Remote Stream
         *
         * This method enables the user to unsubscribe from the remote stream.
         * @example
         * **Sample Code**
         * ``` javascript
         * client.unsubscribe(stream, function(err) {
         *     console.log(err);
         *     //……
         * })
         *
         * ```
         * @param stream Stream object, which represents the remote stream.
         * @param onFailure The callback when the method fails.
         */
        unsubscribe(stream: Stream, onFailure?: (err: any) => void): void;
        /**
         * Sets the role of the user.
         *
         * This method is applicable only to the live mode.
         *
         * Sets the role of the user such as a host or an audience (default), before joining a channel.
         *
         * This method can be used to switch the user role after the user joins a channel.
         *
         * In live mode ([[mode]] is set as `live`):
         *
         * - Before joining the channel, you can call this method to set the role.
         *
         * - After joining the channel, you can call this method to switch the role:
         *
         *  - When you call [[publish]], the user role switches to `host`; when you call [[unpublish]], the user role switches to `audience`.
         *  - After calling [[publish]], if you call this method and set the user role as `audience`, [[unpublish]] is called automatically.
         *
         * **Note**
         *
         * In communication mode ([[mode]] set as `rtc`), this method does not take effect. All users are `host` by default.
         *
         * @param role User role in a live broadcast:
         *
         * - `"audience"`: Audience, the default role. An audience can only receive streams.
         * - `"host"`: Host. A host can both send and receive streams.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * client.setClientRole('host', function() {
         *   console.log("setHost success");
         * }, function(e) {
         *   console.log("setHost failed", e);
         * })
         * ```
         *
         *
         */
        setClientRole(role: "audience" | "host", callback?: (err: any) => void): void;
        /**
         * Enables Dual Stream
         *
         * This method enables the dual-stream mode on the publisher side.
         *
         * Dual streams are a hybrid of a high-video stream and a low-video stream:
         *
         * - High-video stream: high bitrate, high resolution
         * - Low-video stream: low bitrate, low resolution
         *
         * @example **Sample Code**
         * ``` javascript
         * client.enableDualStream(function() {
         *   console.log("Enable dual stream success!")
         * }, function(err) {
         *   console,log(err)
         * })
         * ```
         *
         * **Note:**
         *
         * This method does not apply to the following scenarios:
         *
         * -   The stream is created by defining the [[audioSource]] and [[videoSource]] properties.
         * -   Audio-only mode (audio: true, video: false)
         * -   Safari browser on iOS
         * -   Screen-sharing scenario
         * @param onSuccess The callback when the method succeeds.
         * @param onFailure The callback when the method fails.
         */
        enableDualStream(
            onSuccess?: () => void,
            onFailure?: (err: any) => void
        ): void;
        /**
         * Sets the Low-video Stream Parameter
         *
         * If you enabled the dual-stream mode by calling {@link Client.enableDualStream}, use this method to set the low-video stream profile.
         *
         * If you do not set the low-video stream profile, the SDK will assign default values based on your stream video profile.
         *
         * **Note:**
         * - As different web browsers have different restrictions on the video profile, the parameters you set may fail to take effect.
         * The Firefox browser has a fixed frame rate of 30 fps, therefore the frame rate settings do not work on the Firefox browser.
         * - Due to limitations of some devices and browsers, the resolution you set may fail to take effect and get adjusted by the browser.
         * In this case, billings will be calculated based on the actual resolution.
         * - Call {@link Client.join} before using this method.
         * - Screen sharing supports the high-video stream only.
         * @param param Sets the video profile of the low-video stream.
         */
        setLowStreamParameter(param: {
            /**
             * Width of the low-video stream frame. A positive integer, and the value range is [1,10000].
             *
             * The width and height parameters are bound together, and take effect only when both are set.Otherwise, the SDK assigns default values.
             */
            width?: number;
            /**
             * Height of the low-video stream frame. A positive integer, and the value range is [1,10000].
             *
             * The width and height parameters are bound together, and take effect only when both are set. Otherwise, the SDK assigns default values.
             */
            height?: number;
            /** Frame rate of the low-video stream frame in fps. A positive integer, and the value range is [1,10000]. */
            framerate?: number;
            /** Bitrate of the low-video stream frame in Kbps. A positive integer, and the value range is [1,10000000]. */
            bitrate?: number;
        }): void;
        /**
         * Sets the Remote Video-stream Type
         *
         * When a remote user sends dual streams, this method decides on which stream to receive on the subscriber side. If this method is not used, the subscriber receives the high-video stream.
         *
         * @example **Sample Code**
         * ``` javascript
         * switchStream = function (){
         *   if (highOrLow === 0) {
         *     highOrLow = 1
         *     console.log("Set to low");
         *   }
         *   else {
         *     highOrLow = 0
         *     console.log("Set to high");
         *   }
         *
         *   client.setRemoteVideoStreamType(stream, highOrLow);
         * }
         * ```
         *
         * [[include:setRemoteStreamType-note.md]]
         * @param stream The remote video stream object.
         * @param streamType Sets the remote video stream type. The following lists the video-stream types:
         * - 0: High-bitrate, high-resolution video stream.
         * - 1: Low-bitrate, low-resolution video stream.
         */
        setRemoteVideoStreamType(stream: Stream, streamType: 0 | 1): void;
        /**
         * Sets Stream Fallback Option
         *
         * Use this method to set stream fallback option on the receiver.
         *
         * Under poor network conditions, the SDK can choose to subscribe to the low-video stream or only the audio stream.
         *
         * **Note:**
         *
         * This method can only be used when the publisher has enabled the dual-stream mode by {@link enableDualStream}.
         * @param stream The remote stream object.
         * @param fallbackType The fallback option:
         * - 0: Disable the fallback.
         * - 1: (Default) Automatically subscribe to the low-video stream under poor network.
         * - 2: Under poor network, the SDK may subscribe to the low-video stream (of lower resolution and lower bitrate) first,
         *      but if the network still does not allow displaying the video, the SDK will receive audio only.
         * @example **Sample Code**
         * ```javascript
         * // The sender side, after publishing the high stream
         * client.enableDualStream();
         *
         * // The receiver side, set the fallback option as 2
         * client.setStreamFallbackOption(remoteStream, 2);
         * ```
         */
        setStreamFallbackOption(stream: Stream, fallbackType: 0 | 1 | 2): void;
        /**
         * Disables Dual Streams
         *
         * This method disables dual streams.
         * @example **Sample Code**
         * ``` javascript
         * client.disableDualStream(function() {
         *   console.log("Disable dual stream success!")
         * }, function(err) {
         *   console.log(err)
         * })
         * ```
         * @param onSuccess The callback when the method succeeds.
         * @param onFailure The callback when the method fails.
         */
        disableDualStream(
            onSuccess?: () => void,
            onFailure?: (err: any) => void
        ): void;
        /**
         * Enables Volume Indicator
         *
         * This method enables the SDK to report the active remote users who are speaking and their volume regularly.
         *
         * If this method is enabled, the SDK will return the volumes every two seconds, regardless of whether there are active speakers.
         *
         * **Note:**
         *
         * - If you have multiple web pages running the Web SDK, this function might not work.
         * @example **Sample Code**
         * ``` javascript
         * client.enableAudioVolumeIndicator(); // Triggers the "volume-indicator" callback event every two seconds.
         * client.on("volume-indicator", function(evt){
         *     evt.attr.forEach(function(volume, index){
         *             console.log(#{index} UID ${volume.uid} Level ${volume.level});
         *     });
         * });
         * ```
         */
        enableAudioVolumeIndicator(): void;
        /**
         * Configures the CDN Live Streaming
         *
         * **DEPRECATED**
         *
         * Agora recommends using the following methods instead:
         * - [[startLiveStreaming]]
         * - [[setLiveTranscoding]]
         * - [[stopLiveStreaming]]
         *
         * This method configures the CDN live streaming before joining a channel.
         *
         * **Note:**
         *
         * Call {@link configPublisher} before {@link Client.join}.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * client.configPublisher({
         *   width: 360,
         *   height: 640,
         *   framerate: 30,
         *   bitrate: 500,
         *   publishUrl: "rtmp://xxx/xxx/"
         * });
         * ```
         * @param width Width of the output data stream set for CDN Live, 360 is the default value. A positive integer, and the value range is [1,10000].
         * @param height Height of the output data stream set for CDN Live, 640 is the default value. A positive integer, and the value range is [1,10000].
         * @param framerate Frame rate of the output data stream set for CDN Live, 15 fps is the default value. A positive integer, and the value range is [1,10000].
         * @param bitrate Bitrate of the output data stream set for CDN Live, 500 kbps is the default value. A positive integer, and the value range is [1,10000000].
         * @param publisherUrl The push-stream address for the picture-in-picture layouts, `null` is the default value.
         *                     ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
         */
        configPublisher(width: number, height: number, framerate: number, bitrate: number, publisherUrl: string): void;
        /**
         * Starts a Live Stream
         *
         * This method starts a live stream.
         * @example **Sample Code**
         * ``` javascript
         * client.setLiveTranscoding(<coding>);
         * client.startLiveStreaming(<url>, true)
         * ```
         *
         * **Note:**
         *
         * Call {@link startLiveStreaming} after {@link createStream}. For details, see [Push Streams to the CDN](../../../push_stream_web).
         * @param url URL address for the live stream. ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
         * @param enableTranscoding Marks whether to enable live transcoding. If set as `true`, {@link setLiveTranscoding} must be called before this method.
         */
        startLiveStreaming(url: string, enableTranscoding?: boolean): void;
        /**
         * Sets Live Transcoding
         *
         * This method sets the video layout and audio for CDN live.
         *
         * **Note:**
         *
         * Call {@link setLiveTranscoding} after {@link createStream}. For details, see [Push Streams to the CDN](../../../push_stream_web).
         * @param coding Transcoding settings, see {@link LiveTranscoding} for details.
         */
        setLiveTranscoding(coding: LiveTranscoding): void;
        /**
         * Stops Live Streaming
         *
         * This method stops and deletes the live streaming.
         * @param url URL address of the live streaming. ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
         */
        stopLiveStreaming(url: string): void;
        /**
         * Injects an Online Media Stream to a Live Broadcast
         *
         * The `streamInjectedStatus` callback returns the inject status.If this method is called successfully, the server pulls the voice or video stream and injects it into a live channel.
         * This is applicable to scenarios where all of the audience members in the channel can watch a live show and interact with each other.
         * @param url URL address of the live streaming. ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
         * Valid protocols are RTMP, HLS, and FLV.
         * - Supported FLV audio codec type: AAC.
         * - Supported FLV video codec type: H.264 (AVC).
         * @param config Configuration of the inject stream, see {@link InjectStreamConfig} for details.
         */
        addInjectStreamUrl(url: string, config: InjectStreamConfig): void;
        /**
         * Removes the Injected Stream
         *
         * This method removes the HTTP/HTTPS URL address (added by [[addInjectStreamUrl]]) from the live broadcast.
         * @param url URL address of the live streaming. ASCII characters only, and the string length must be greater that 0 and less than 256 bytes.
         */
        removeInjectStreamUrl(url: string): void;
        /**
         * Deploys the Nginx Server
         *
         * Use this method to deploy the Nginx server.
         *
         * **Note:**
         *
         * - Ensure that you call this API before {@link Client.join}.
         * - Proxy services by different service providers may result in slow performance if you are using the Firefox browser.
         *   Therefore, Agora recommends using the same service provider for the proxy services. If you use different service providers, Agora recommends not using the Firefox browser.
         * @example `client.setProxyServer(proxyServer);`
         * @param proxyServer Your Nginx server domain name. ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
         */
        setProxyServer(proxyServer: ClientConfig["proxyServer"]): void;
        /**
         * Deploys the TURN Server
         *
         * Use this method to deploy the TURN server.
         *
         * **Note:**
         *
         * Ensure that you call this API before {@link Client.join}.
         * @example `client.setTurnServer(config);`
         * @param turnServer The TURN server settings.
         */
        setTurnServer(turnServer: ClientConfig["turnServer"]): void;
        /**
         * Enables Built-in Encryption
         *
         * This method enables the built-in encryption.
         *
         * **Note:**
         *
         * Ensure that you call this API before {@link Client.join}.
         * @example `client.setEncryptionSecret(password)`
         * @param password The encryption password. ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
         */
        setEncryptionSecret(password: string): void;
        /**
         * Sets the Encryption Mode
         *
         * This method sets the encryption mode.
         *
         * **Note:**
         *
         * Ensure that you call this API before {@link Client.join}.
         * @example `client.setEncryptionMode(encryptionMode);`
         * @param encryptionMode The encryption mode:
         *
         * - aes-128-xts: Sets the encryption mode as AES128XTS.
         * - aes-256-xts: Sets the encryption mode as AES256XTS.
         * - aes-128-ecb: Sets the encryption mode as AES128ECB.
         */
        setEncryptionMode(
            encryptionMode: "aes-128-xts" | "aes-256-xts" | "aes-128-ecb"
        ): void;
        /**
         * Renews the Token
         *
         * This method renews your token.
         *
         * Once the Token schema is enabled, the token expires after a certain period of time.
         * In case of the `onTokenPrivilegeWillExpire` or `onTokenPrivilegeDidExpire` callback events, the application should renew the Token by calling this method.
         * Not doing so will result in SDK disconnecting with the server.
         * @param token Specifies the renewed Token.
         */
        renewToken(
            token: string,
        ): void;
        /**
         * Renews the Channel Key
         *
         * This method renews your channel key.
         *
         * Once the Channel Key schema is enabled, the key expires after a certain period of time.
         * When the onFailure callback reports the error `DYNAMIC_KEY_TIMEOUT`, the application should renew the Channel Key by calling this method.
         * Not doing so will result in SDK disconnecting with the server.
         * @param key Specifies the renewed Channel Key.
         * @param onSuccess The callback when the method succeeds.
         * @param onFailure The callback when the method fails.
         */
        renewChannelKey(
            key: string,
            onSuccess?: () => void,
            onFailure?: (err: any) => void
        ): void;
        /**
         * Gets the Statistics of the System Network
         *
         * **DEPRECATED** from v2.5.1, use [[getTransportStats]] instead.
         *
         * This method gets the statistics of the browser's local network.
         *
         * Currently only the network type information is provided, see [[NetworkType]].
         *
         * **Note:**
         *
         * Chrome 61+ is required for this function, and the compatibility is not guaranteed.
         * See [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API) for details.
         *
         * @param callback The callback contains the statistics of the system network.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * client.getNetworkStats((stats) => {
         *     console.log(`Current network type: ${stats.NetworkType}`);
         * });
         * ```
         */
        getNetworkStats(callback: (stats: NetworkStats) => void): void;
        /**
         * Gets the Statistics of the System
         *
         * This method gets the statistics of the system.
         *
         * Currently only the battery level information is provided, see [[BatteryLevel]].
         *
         * **Note:**
         *
         * This feature is experimental, see [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API) for browser compatibility.
         *
         * @param callback The callback contains the statistics of the system.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * client.getSystemStats((stats) => {
         *     console.log(`Current battery level: ${stats.BatteryLevel}`);
         * });
         * ```
         */
        getSystemStats(callback: (stats: SystemStats) => void): void;
        /**
         * Enumerates Audio Input Devices
         *
         * This method enumerates the available audio input devices, such as microphones.
         *
         * If this method succeeds, the SDK returns a list of audio input devices in an array of [[MediaDeviceInfo]] objects.
         */
        getRecordingDevices(callback: (devices: MediaDeviceInfo) => void): void;
        /**
         * Enumerates Audio Output Devices
         *
         * This method enumerates the available audio output devices, such as speakers.
         *
         * If this method succeeds, the SDK returns a list of audio output devices in an array of [[MediaDeviceInfo]] objects.
         */
        getPlayoutDevices(callback: (devices: MediaDeviceInfo) => void): void;
        /**
         * Enumerates Video Input Devices
         *
         * This method enumerates the available video input devices, such as cameras.
         *
         * If this method succeeds, the SDK returns a list of video input devices in an array of [[MediaDeviceInfo]] objects.
         */
        getCameras(callback: (devices: MediaDeviceInfo) => void): void;
        /**
         * Retrieves the Audio Statistics of the Remote Stream
         *
         * This method retrieves the audio statistics of the remote stream, including audio codec type, packet loss rate, bitrate, and so on.
         *
         * **Note:**
         *
         * - The statistics are calculated after the `stream-subscribed` event, which may take at most 3 seconds.
         * - This method supports the Chrome browser only.
         *
         * @param callback The callback contains the statistics of the remote audio stream.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * client.getRemoteAudioStats((remoteAudioStatsMap) => {
         *     for(var uid in remoteAudioStatsMap){
         *          console.log(`Audio CodecType from ${uid}: ${remoteAudioStatsMap[uid].CodecType}`);
         *          console.log(`Audio End2EndDelay from ${uid}: ${remoteAudioStatsMap[uid].End2EndDelay}`);
         *          console.log(`Audio MuteState from ${uid}: ${remoteAudioStatsMap[uid].MuteState}`);
         *          console.log(`Audio PacketLossRate from ${uid}: ${remoteAudioStatsMap[uid].PacketLossRate}`);
         *          console.log(`Audio RecvBitrate from ${uid}: ${remoteAudioStatsMap[uid].RecvBitrate}`);
         *          console.log(`Audio RecvLevel from ${uid}: ${remoteAudioStatsMap[uid].RecvLevel}`);
         *          console.log(`Audio TotalFreezeTime from ${uid}: ${remoteAudioStatsMap[uid].TotalFreezeTime}`);
         *          console.log(`Audio TotalPlayDuration from ${uid}: ${remoteAudioStatsMap[uid].TotalPlayDuration}`);
         *          console.log(`Audio TransportDelay from ${uid}: ${remoteAudioStatsMap[uid].TransportDelay}`);
         *     }
         * });
         * ```
         */
        getRemoteAudioStats(callback: (stats: RemoteAudioStatsMap) => void): void;
        /**
         * Retrieves the Audio Statistics of the Local Stream
         *
         * This method retrieves the audio statistics of the published stream, including audio codec type, sampling rate, bitrate, and so on.
         *
         * **Note:**
         *
         * - Some of the statistics are calculated after the `stream-published` event, which may take at most 3 seconds.
         * - This method supports the Chrome browser only.
         *
         * @param callback The callback contains the statistics of the local audio stream.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * client.getLocalAudioStats((localAudioStats) => {
         *     for(var uid in localAudioStats){
         *          console.log(`Audio CodecType from ${uid}: ${localAudioStats[uid].CodecType}`);
         *          console.log(`Audio MuteState from ${uid}: ${localAudioStats[uid].MuteState}`);
         *          console.log(`Audio RecordingLevel from ${uid}: ${localAudioStats[uid].RecordingLevel}`);
         *          console.log(`Audio SamplingRate from ${uid}: ${localAudioStats[uid].SamplingRate}`);
         *          console.log(`Audio SendBitrate from ${uid}: ${localAudioStats[uid].SendBitrate}`);
         *          console.log(`Audio SendLevel from ${uid}: ${localAudioStats[uid].SendLevel}`);
         *     }
         * });
         * ```
         */
        getLocalAudioStats(callback: (stats: LocalAudioStatsMap) => void): void;
        /**
         * Retrieves the Video Statistics of the Remote Stream
         *
         * This method retrieves the video statistics of the remote stream, including packet loss rate, video bitrate, frame rate, and so on.
         *
         * **Note:**
         *
         * - The statistics are calculated after the `stream-subscribed` event, which may take at most 3 seconds.
         * - This method supports the Chrome browser only.
         *
         * @param callback The callback contains the statistics of the remote video stream.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * client.getRemoteVideoStats((remoteVideoStatsMap) => {
         *     for(var uid in remoteVideoStatsMap){
         *          console.log(`Video End2EndDelay from ${uid}: ${remoteVideoStatsMap[uid].End2EndDelay}`);
         *          console.log(`Video MuteState from ${uid}: ${remoteVideoStatsMap[uid].MuteState}`);
         *          console.log(`Video PacketLossRate from ${uid}: ${remoteVideoStatsMap[uid].PacketLossRate}`);
         *          console.log(`Video RecvBitrate from ${uid}: ${remoteVideoStatsMap[uid].RecvBitrate}`);
         *          console.log(`Video RecvResolutionHeight from ${uid}: ${remoteVideoStatsMap[uid].RecvResolutionHeight}`);
         *          console.log(`Video RecvResolutionWidth from ${uid}: ${remoteVideoStatsMap[uid].RecvResolutionWidth}`);
         *          console.log(`Video RenderFrameRate from ${uid}: ${remoteVideoStatsMap[uid].RenderFrameRate}`);
         *          console.log(`Video RenderResolutionHeight from ${uid}: ${remoteVideoStatsMap[uid].RenderResolutionHeight}`);
         *          console.log(`Video RenderResolutionWidth from ${uid}: ${remoteVideoStatsMap[uid].RenderResolutionWidth}`);
         *          console.log(`Video TotalFreezeTime from ${uid}: ${remoteVideoStatsMap[uid].TotalFreezeTime}`);
         *          console.log(`Video TotalPlayDuration from ${uid}: ${remoteVideoStatsMap[uid].TotalPlayDuration}`);
         *          console.log(`Video TransportDelay from ${uid}: ${remoteVideoStatsMap[uid].TransportDelay}`);
         *     }
         * });
         * ```
         *
         */
        getRemoteVideoStats(callback: (stats: RemoteVideoStatsMap) => void): void;
        /**
         * Retrieves the Video Statistics of the Local Stream
         *
         * This method retrieves the video statistics of the published stream, including video resolution, bitrate, frame rate, and so on.
         *
         * **Note:**
         *
         * - Some of the statistics are calculated after the `stream-published` event, which may take at most 3 seconds.
         * - This method supports the Chrome browser only.
         *
         * @param callback The callback contains the statistics of the local video stream.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * client.getLocalVideoStats((localVideoStats) => {
         *     for(var uid in localVideoStats){
         *          console.log(`Video CaptureFrameRate from ${uid}: ${localVideoStats[uid].CaptureFrameRate}`);
         *          console.log(`Video CaptureResolutionHeight from ${uid}: ${localVideoStats[uid].CaptureResolutionHeight}`);
         *          console.log(`Video CaptureResolutionWidth from ${uid}: ${localVideoStats[uid].CaptureResolutionWidth}`);
         *          console.log(`Video EncodeDelay from ${uid}: ${localVideoStats[uid].EncodeDelay}`);
         *          console.log(`Video MuteState from ${uid}: ${localVideoStats[uid].MuteState}`);
         *          console.log(`Video SendBitrate from ${uid}: ${localVideoStats[uid].SendBitrate}`);
         *          console.log(`Video SendFrameRate from ${uid}: ${localVideoStats[uid].SendFrameRate}`);
         *          console.log(`Video SendResolutionHeight from ${uid}: ${localVideoStats[uid].SendResolutionHeight}`);
         *          console.log(`Video SendResolutionWidth from ${uid}: ${localVideoStats[uid].SendResolutionWidth}`);
         *          console.log(`Video TargetSendBitrate from ${uid}: ${localVideoStats[uid].TargetSendBitrate}`);
         *          console.log(`Video TotalDuration from ${uid}: ${localVideoStats[uid].TotalDuration}`);
         *          console.log(`Video TotalFreezeTime from ${uid}: ${localVideoStats[uid].TotalFreezeTime}`);
         *     }
         * });
         * ```
         */
        getLocalVideoStats(callback: (stats: LocalVideoStatsMap) => void): void;
        /**
         * Gets the Statistics of the Transmission
         *
         * This method gets the statistics of the transmission quality to Agora service.
         *
         * **Note:**
         *
         * - Calculation of the statistics may take at most 3 seconds.
         * - This method supports the Chrome browser only.
         *
         * @param callback The callback contains the statistics of the transmission quality.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * client.getTransportStats((stats) => {
         *     console.log(`Current Transport RTT: ${stats.RTT}`);
         *     console.log(`Current Network Type: ${stats.networkType}`);
         *     console.log(`Current Transport OutgoingAvailableBandwidth: ${stats.OutgoingAvailableBandwidth}`);
         * });
         * ```
         */
        getTransportStats(callback: (stats: TransportStats) => void): void;
        /**
         * Gets the Statistics of the Session
         *
         * This method gets the statistics of the session connection.
         *
         * **Note:**
         *
         * - This method should be called after joining the channel, and it may take at most 3 seconds to retrieve the statistics.
         * - This method supports the Chrome browser only.
         *
         * @param callback The callback contains the statistics of the session connection.
         *
         * @example **Sample Code**
         *
         * ``` javascript
         * client.getSessionStats((stats) => {
         *     console.log(`Current Session Duration: ${stats.Duration}`);
         *     console.log(`Current Session UserCount: ${stats.UserCount}`);
         *     console.log(`Current Session SendBytes: ${stats.SendBytes}`);
         *     console.log(`Current Session RecvBytes: ${stats.RecvBytes}`);
         *     console.log(`Current Session SendBitrate: ${stats.SendBitrate}`);
         *     console.log(`Current Session RecvBitrate: ${stats.RecvBitrate}`);
         * });
         * ```
         */
        getSessionStats(callback: (stats: SessionStats) => void): void;
        /**
         * Gets the Connection State
         *
         * This method returns the state of the connection between the SDK and Agora's edge server.
         *
         * @returns
         * The connection state:
         *
         * - `DISCONNECTED`: The SDK is disconnected from Agora's edge server.
         *  - This is the initial state before [[Client.join]].
         *  - The SDK also enters this state after the app calls [[Client.leave]].
         * - `CONNECTING`: The SDK is connecting to Agora's edge server.
         * The SDK enters this state when calling [[Client.join]] or reconnecting to Agora's edge server automatically after the connection is lost.
         * - `CONNECTED`: The SDK is connected to Agora's edge server and joins a channel. You can now publish or subscribe to a stream in the channel.
         * - `DISCONNECTING`: The SDK is disconnecting from Agora's edge server. The SDK enters this state when calling [[Client.leave]].
         */
        getConnectionState(): string;
    }

    /**
     * The version of the Agora Web SDK.
     *
     * @example `AgoraRTC.VERSION`
     */
    const VERSION: string;
}
