// Type definitions for opentok-react-native v0.12
// Project: https://github.com/opentok/opentok-react-native
// Definitions by: Evan Jacobs <https://github.com/probablyup>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactChildren } from "react";
import { ViewProps, StyleProp } from "react-native";

type ArchiveEvent = {
    archiveId: string;
    name: string;
    sessionId: string;
};

type ConnectionEvent = {
    connectionId: string;
    creationTime: string;
    data: string;
};

type ErrorEvent = {
    code: string;
    message: string;
};

type StreamEvent = {
    streamId: string;
    name: string;
    /**
     * This will be removed after v0.11.0 because it's exposed via the connection object
     */
    connectionId: string;
    connection: {
        connectionId: string;
        creationTime: string;
        data: string;
    };
    hasAudio: boolean;
    hasVideo: boolean;
    sessionId: string;
    creationTime: string;
    height: number;
    width: number;
    videoType: "camera" | "screen";
};

type Signal = {
    type: string;
    data: string;
    to: string;
};

type StreamPropertyChangedEvent = {
    stream: StreamEvent;
    oldValue: string;
    newValue: string;
    changedProperty: string;
};

interface OTSessionProps {
    /**
     * TokBox API Key
     */
    apiKey: string;
    /**
     * TokBox Session ID
     */
    sessionId: string;
    /**
     * TokBox token
     */
    token: string;
    options?: {
        /**
         * default is false
         */
        connectionEventsSuppressed?: boolean;
        /**
         * Android only
         */
        androidZOrder?: "mediaOverlay" | "onTop";
        /**
         * Android only
         */
        androidOnTop?: "publisher" | "subscriber";
        /**
         * Android only - default is false
         */
        useTextureViews?: boolean;
        /**
         * Android only - default is false
         */
        isCamera2Capable?: boolean;
    };
    signal?: Object;
    eventHandlers?: {
        /**
         * Sent when an archive recording of a session starts. If you connect to a session in which recording is already in progress, this message is sent when you connect.
         */
        archiveStarted?: (event: ArchiveEvent) => void;
        /**
         * Sent when an archive recording of a session stops.
         */
        archiveStopped?: (id: string) => void;
        /**
         *  Sent when another client connects to the session. The connection object represents the client’s connection.
         */
        connectionCreated?: (event: ConnectionEvent) => void;
        /**
         * Sent when another client disconnects from the session. The connection object represents the connection that the client had to the session.
         */
        connectionDestroyed?: (event: ConnectionEvent) => void;
        /**
         * Sent if the attempt to connect to the session fails or if the connection to the session drops due to an error after a successful connection.
         */
        error?: (event: ErrorEvent) => void;
        /**
         * Sent if there is an error with the communication between the native session instance and the JS component.
         */
        otrnError?: (event: ErrorEvent) => void;
        sessionConnected?: () => void;
        sessionDisconnected?: () => void;
        sessionReconnected?: () => void;
        /**
         * Sent when the local client has lost its connection to an OpenTok session and is trying to reconnect. This results from a loss in network connectivity. If the client can reconnect to the session, the sessionReconnected message is sent. Otherwise, if the client cannot reconnect, the sessionDisconnected message is sent.
         */
        sessionReconnecting?: () => void;
        signal?: (event: Signal) => void;
        streamCreated?: (event: StreamEvent) => void;
        streamDestroyed?: (event: StreamEvent) => void;
        /**
         * Sent when a stream has started or stopped publishing audio or video or if the video dimensions of the stream have changed.
         */
        streamPropertyChanged?: (event: StreamPropertyChangedEvent) => void;
    };
    style: StyleProp;
    children: ReactChildren;
}

interface OTPublisherProps extends ViewProps {
    eventHandlers?: {
        /**
         * The audio level, from 0 to 1.0. Adjust this value logarithmically for use in adjusting a user interface element, such as a volume meter. Use a moving average to smooth the data.
         */
        audioLevel?: (level: number) => void;
        /**
         * Sent if the publisher encounters an error. After this message is sent, the publisher can be considered fully detached from a session and may be released.
         */
        error?: (error: ErrorEvent) => void;
        /**
         * Sent if there is an error with the communication between the native publisher instance and the JS component.
         */
        otrError?: (error: ErrorEvent) => void;
        /**
         * Sent when the publisher starts streaming.
         */
        streamCreated?: (event: StreamEvent) => void;
        /**
         * Sent when the publisher stops streaming.
         */
        streamDestroyed?: (event: StreamEvent) => void;
    };
    /**
     * The properties prop is used for initial set up of the Publisher and making changes to it will update the Publisher. For convenience the OTPublisher watches for changes on a few keys of the properties object and makes the necessary changes. Currently these are:

|Publisher Property|Action|
|--|:--|
|cameraPosition | Calls OT.changeCameraPosition() to toggle the camera |
| publishAudio | Calls OT.publishAudio() to toggle audio on and off |
| publishVideo | Calls OT.publishVideo() to toggle video on and off |

Please keep in mind that OT is not the same as OT in the JS SDK, the OT in this library refers to the iOS and Android OTSessionManager class.
     */
    properties?: {
        /**
       The desired bitrate for the published audio, in bits per second. The supported range of values is 6,000 - 510,000. (Invalid values are ignored.) Set this value to enable high-quality audio (or to reduce bandwidth usage with lower-quality audio). The following are recommended settings:

      8,000 - 12,000 for narrowband (NB) speech

      16,000 - 20,000 for wideband (WB) speech

      28,000 - 40,000 for full-band (FB) speech

      48,000 - 64,000 for full-band (FB) music

      64,000 - 128,000 for full-band (FB) stereo music

      The default value is 40,000.
       */
        audioBitrate?: number;
        audioFallbackEnabled?: boolean;
        /**
      If this property is set to false, the audio subsystem will not be initialized for the publisher, and setting the publishAudio property will have no effect. If your application does not require the use of audio, it is recommended to set this property rather than use the publishAudio property, which only temporarily disables the audio track.
      */
        audioTrack?: boolean;
        /**
      The preferred camera position. When setting this property, if the change is possible, the publisher will use the camera with the specified position.
      */
        cameraPosition?: "front" | "back";
        /**
      The desired frame rate, in frames per second, of the video. The published stream will use the closest value supported on the publishing client. The frame rate can differ slightly from the value you set, depending on the device of the client. And the video will only use the desired frame rate if the client configuration supports it.
      */
        frameRate?: 30 | 15 | 7 | 1;
        /**
      A string that will be associated with this publisher’s stream. This string is displayed at the bottom of publisher videos and at the bottom of subscriber videos associated with the published stream. If you do not specify a value, the name is set to the device name.
      */
        name?: string;
        publishAudio?: boolean;
        publishVideo?: boolean;
        /**
      The desired resolution of the video. The format of the string is "widthxheight", where the width and height are represented in pixels. The published video will only use the desired resolution if the client configuration supports it. Some devices and clients do not support each of these resolution settings.
      */
        resolution?: "1280x720" | "640x480" | "352x288";
        /**
      If this property is set to false, the video subsystem will not be initialized for the publisher, and setting the publishVideo property will have no effect. If your application does not require the use of video, it is recommended to set this property rather than use the publishVideo property, which only temporarily disables the video track.
      */
        videoTrack?: boolean;
        /**
         * To publish a screen-sharing stream, set this property to "screen". If you do not specify a value, this will default to "camera".
         */
        videoSource?: "camera" | "screen";
    };
    sessionId?: string;
}

type AudioNetworkStats = {
    audioPacketsLost: number;
    audioBytesReceived: number;
    audioPacketsReceived: number;
};

type VideoNetworkStats = {
    videoPacketsLost: number;
    videoBytesReceived: number;
    videoPacketsReceived: number;
};

interface OTSubscriberProps extends ViewProps {
    /**
     * Event handlers passed into the native subscriber instance
     */
    eventHandlers?: {
        audioLevel: (level: number) => void;
        audioNetworkStats: (stats: AudioNetworkStats) => void;
        connected: () => void;
        disconnected: () => void;
        error: (error: ErrorEvent) => void;
        otrnError: (error: ErrorEvent) => void;
        /**
         * Sent when a frame of video has been decoded. Although the subscriber will connect in a relatively short time, video can take more time to synchronize. This message is sent after the connected message is sent.
         */
        videoDataReceived: () => void;

        /**
         * This message is sent when the subscriber stops receiving video.
         */
        videoDisabled: (reason: string) => void;

        /**
         * This message is sent when the OpenTok Media Router determines that the stream quality has degraded and the video will be disabled if the quality degrades further. If the quality degrades further, the subscriber disables the video and the videoDisabled message is sent. If the stream quality improves, the videoDisableWarningLifted message is sent.
         */
        videoDisableWarning: () => void;

        /**
         * This message is sent when the subscriber’s video stream starts (when there previously was no video) or resumes (after video was disabled).
         */
        videoDisableWarningLifted: (reason: string) => void;

        /**
         * This message is sent when the subscriber’s video stream starts (when there previously was no video) or resumes (after video was disabled).
         */
        videoEnabled: (reason: string) => void;

        videoNetworkStats: (stats: VideoNetworkStats) => void;
    };
    /**
     * Properties passed into the native subscriber instance
     */
    properties?: {
        subscribeToAudio?: boolean;
        subscribeToVideo?: boolean;
    };
    /**
     * OpenTok Session Id. This is auto populated by wrapping OTSubscriber with OTSession
     */
    sessionId?: string;
    /**
     * OpenTok Subscriber streamId. This is auto populated inside the OTSubscriber component when streamCreated event is fired from the native instance
     */
    streamId?: string;
    /**
     * Used to update individual subscriber instance properties
     */
    streamProperties?: {};
    /**
     * If set to true, the subscriber can subscribe to it's own publisher stream (default: false)
     */
    subscribeToSelf?: boolean;
}

export class OTSession extends Component<OTSessionProps, any> {}
export class OTPublisher extends Component<OTPublisherProps, any> {}
export class OTSubscriber extends Component<OTSubscriberProps, any> {}
