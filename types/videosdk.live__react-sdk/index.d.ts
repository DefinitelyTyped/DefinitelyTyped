// Type definitions for @videosdk.live/react-sdk 0.1
// Project: https://docs.videosdk.live/docs/realtime-communication/sdk-reference/react-sdk/setup
// Definitions by: Rajan Surani <https://github.com/rajansurani>
//                 Ahmed Bhesaniya <https://github.com/ahmedbhesaniya97>
//                 Zujo Now <https://github.com/zujonow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Meeting, Participant, Stream, Connection } from 'videosdk.live__js-sdk';

/**
 * @param children - Render child component.
 * ---
 * @param config - This is meeting configuration object, whiich contains `meetingId`, `name` of the participant, `webcamEnabled`, `micEnabled` and many more.
 * ---
 * @param config.meetingId -
 * - Unique Id of the meeting where that participant will be joining.
 *
 * - It will be in the format of xxx-yyy-zzz and will be generated using the [VideoSDK's Room API](https://docs.videosdk.live/api-reference/realtime-communication/create-room).
 * ---
 * @param config.name - Name of the participant who will be joining the meeting, this name will be displayed to other participants in the same meeting.
 * ---
 * @param config.micEnabled - Whether mic of the participant will be on while joining the meeting. If it is set to false, then mic of that participant will be disabled by default,
 *  but can be enabled or disabled later.
 * ---
 * @param config.webcamEnabled - Whether webcam of the participant will be on while joining the meeting. If it is set to false, then webcam of that participant will
 * be disabled by default, but can be enabled or disabled later.
 * ---
 * @param config.participantId - You can specify your custom participantId here.
 * ---
 * @param config.multiStream - Sets wheather to send multi resoultion streams while publishing video. Please refere thi link for more understanding
 *  [What is multiStream ?](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track#what-is-multistream)
 * ---
 * @param config.maxResolution - You can specify your custom participantId here.
 * ---
 * @param config.mode -
 *
 * - There are 2 types of modes:
 *
 * - **CONFERENCE**: Both audio and video streams will be produced and consumed in this mode.
 *
 * - **VIEWER**: Audio and video streams will not be produced or consumed in this mode.
 *
 * - defaultValue : **CONFERENCE**
 *
 * ---
 *
 * @param config.customCameraVideoTrack - Set the initial custom video track using different encoding parameters, camera facing mode, and optimization mode.
 * ---
 * @param config.customMicrophoneAudioTrack - Set the initial custom audio track using different encoding parameters and optimization mode.
 * ---
 * @param token -
 * - You can generate a token in two ways:
 *
 * 1. **Temporary Token** : You can visit [Dashboard's API Key section](https://app.videosdk.live/api-keys) and generate the temporary token from there.
 * 2. **Server** : You can setup JWT in backend and make an API call to get the token from your server.
 * ---
 * @param joinWithoutUserInteraction -
 * - This is a boolean flag, when set to true, allows a participant to join a meeting directly without explicitly calling the join() function.
 *
 * - This is an OPTIONAL parameter. By default, it is set to false meaning, user has to manually call the join().
 *
 */
export function MeetingProvider({
    children,
    config,
    token,
    joinWithoutUserInteraction,
    reinitialiseMeetingOnConfigChange: _reinitialiseMeetingOnConfigChange,
    deviceInfo,
}: {
    children: any;
    config: {
        meetingId: string;
        autoConsume?: boolean;
        preferredProtocol?: 'UDP_ONLY' | 'UDP_OVER_TCP';
        participantId?: string | undefined;
        name: string;
        micEnabled: boolean;
        webcamEnabled: boolean;
        maxResolution?: 'hd' | 'sd';
        customCameraVideoTrack?: MediaStream | undefined;
        customMicrophoneAudioTrack?: MediaStream | undefined;
        multiStream?: boolean;
        mode?: 'CONFERENCE' | 'VIEWER';
    };
    token: string;
    joinWithoutUserInteraction?: boolean;
    reinitialiseMeetingOnConfigChange?: boolean;
    deviceInfo?: object;
}): any;

/**
 * @param children - Render child component.
 * ---
 * @param onParticipantJoined - This event callback is trigger when a new participant joins the meeting.
 * ---
 * @param onParticipantLeft - This event callback is trigger when a participant leaves the meeting.
 * ---
 * @param onSpeakerChanged -
 * - This event will be emitted when a active speaker changed.
 * - If you want to know which participant is actively speaking, then this event will be used.
 * - If no participant is actively speaking, then this event will pass null as en event callback parameter.
 * ---
 * @param onPresenterChanged -
 * - This event will be emitted when any participant starts or stops screen sharing.
 * - It will pass participantId as an event callback parameter.
 * - If a participant stops screensharing, then this event will pass null as en event callback parameter.
 * ---
 * @param onEntryRequested -
 * - This event will be triggered when a new participant who is trying to join the meeting, is having permission ask_join in token.
 * - This event will only be triggered to the participants in the meeting, who is having the permission allow_join in token.
 * - This event will pass following parameters as an event parameters, participantId and name of the new participant who is trying to join the meeting, allow() and deny() to take required actions.
 * ---
 * @param onEntryResponded -
 * - This event will be triggered when the join() request is responded.
 * - This event will be triggered to the participants in the meeting, who is having the permission allow_join in token.
 * - This event will be also triggered to the participant who requested to join the meeting.
 * ---
 * @param onMeetingJoined - This event callback is trigger when a local participant joins the meeting.
 * ---
 * @param onMeetingLeft - This event callback is trigger when local participant leaves the meeting.
 * ---
 * @param onRecordingStateChanged - This event will be emitted when the meeting's recording status changed.
 * ---
 * @param onLivestreamStateChanged - This event will be emitted when the meeting's livestream status changed.
 * ---
 * @param onHlsStateChanged - This event will be emitted when the meeting's HLS(Http Livestreaming) status changed.
 * ---
 * @param onWebcamRequested -
 * - This event will be triggered to the participant B when any other participant A requests to enable webcam of participant B.
 * - On accepting the request, webcam of participant B will be enabled.
 * ---
 * @param onMicRequested -
 * - This event will be triggered to the participant B when any other participant A requests to enable mic of participant B.
 * - On accepting the request, mic of participant B will be enabled.
 * ---
 * @param onError -
 * - This event will be triggered when any error occured.
 * - It will pass code and message, as an event callback parameter.
 * - To see all available error codes from SDK. [Meeting Error Codes](https://docs.videosdk.live/react/api/sdk-reference/error-codes)
 * ---
 * @param onMeetingStateChanged -
 * - This event will be triggered when state of meeting changes.
 * - It will pass state as an event callback parameter which will indicate current state of the meeting.
 * - All available states are `CONNECTING`, `CONNECTED`, `FAILED`, `DISCONNECTED`, `CLOSING`, `CLOSED`.
 * ---
 * @param onParticipantModeChanged -
 * - This event will be triggered when mode gets chanded.
 * - It will pass mode, as an event callback parameter.
 *      - **CONFERENCE** : Both audio and video streams will be produced and consumed in this mode.
 *      - **VIEWER** : Audio and video streams will not be produced or consumed in this mode.
 */

export function MeetingConsumer({
    children,
    onParticipantJoined,
    onParticipantLeft,
    onSpeakerChanged,
    onPresenterChanged,
    onMainParticipantChanged,
    onEntryRequested,
    onEntryResponded,
    onRecordingStarted,
    onRecordingStopped,
    onChatMessage,
    onMeetingJoined,
    onMeetingLeft,
    onLiveStreamStarted,
    onLiveStreamStopped,
    onVideoStateChanged,
    onVideoSeeked,
    onWebcamRequested,
    onMicRequested,
    onPinStateChanged,
    onConnectionOpen,
    onConnetionClose,
    onSwitchMeeting,
    onError,
    onHlsStarted,
    onHlsStopped,
    onHlsStateChanged,
    onRecordingStateChanged,
    onLivestreamStateChanged,
    onMeetingStateChanged,
    onParticipantModeChanged,
}: {
    children: any;
    onParticipantJoined?: () => void;
    onParticipantLeft?: () => void;
    onSpeakerChanged?: () => void;
    onPresenterChanged?: () => void;
    onMainParticipantChanged?: () => void;
    onEntryRequested?: () => void;
    onEntryResponded?: () => void;
    onRecordingStarted?: () => void;
    onRecordingStopped?: () => void;
    onChatMessage?: () => void;
    onMeetingJoined?: () => void;
    onMeetingLeft?: () => void;
    onLiveStreamStarted?: () => void;
    onLiveStreamStopped?: () => void;
    onVideoStateChanged?: () => void;
    onVideoSeeked?: () => void;
    onWebcamRequested?: () => void;
    onMicRequested?: () => void;
    onPinStateChanged?: () => void;
    onConnectionOpen?: () => void;
    onConnetionClose?: () => void;
    onSwitchMeeting?: () => void;
    onError?: () => void;
    onHlsStarted?: () => void;
    onHlsStopped?: () => void;
    onHlsStateChanged?: () => void;
    onRecordingStateChanged?: () => void;
    onLivestreamStateChanged?: () => void;
    onMeetingStateChanged?: () => void;
    onParticipantModeChanged?: () => void;
}): any;

/**
 *
 * @param participantId - Id of the participant.
 * ---
 * @param onStreamEnabled - It's a callback which gets triggered whenever a participant's video, audio or screen share stream is enabled.
 *
 * **Code Example :**
 * ```js
 * function onStreamEnabled(stream) {
 *   console.log("onStreamEnabled", stream);
 * }
 * const { displayName } = useParticipant(participantId,{
 *   onStreamEnabled
 * });
 * ```
 * ---
 * @param onStreamEnabled - It's a callback which gets triggered whenever a participant's video, audio or screen share stream is disabled.
 *
 * **Code Example :**
 *  ```js
 * function onStreamEnabled(stream) {
 *   console.log("onStreamEnabled", stream);
 * }
 * const { displayName } = useParticipant(participantId,{
 *   onStreamEnabled
 * });
 * ```
 * ---
 * @param onMediaStatusChanged - It's a callback which gets triggered whenever a participant's video or audio is disabled or enabled.
 *
 * **Code Example :**
 * ```js
 * function onMediaStatusChanged(stream) {
 *   const { kind, newStatus} = data;
 *   console.log("onMediaStatusChanged", kind, newStatus);
 * }
 * const { displayName } = useParticipant(participantId,{
 *     onMediaStatusChanged
 * });
 * ```
 * ---
 * @param onVideoQualityChanged -
 * - It's a callback which gets triggered whenever a participant's video quality changes.
 * - currentQuality and prevQuality can have values `HIGH` | `MEDIUM` | `LOW`.
 *
 * **Code Example :**
 * ```js
 * function onVideoQualityChanged(stream) {
 *    const { currentQuality, prevQuality } = data;
 *    console.log("onVideoQualityChanged", currentQuality, prevQuality );
 * }
 * const { displayName } = useParticipant(participantId,{
 *   onVideoQualityChanged
 * });
 * ```
 * ---
 * @returns This will return particular participant properties and method. You can refer this [API Reference](https://docs.videosdk.live/react/api/sdk-reference/use-participant/introduction)
 */
export function useParticipant(
    participantId: string,
    {
        onStreamEnabled,
        onStreamDisabled,
        onMediaStatusChanged,
        onVideoQualityChanged,
    }?: {
        onStreamDisabled?: (stream: Stream) => void;
        onStreamEnabled?: (stream: Stream) => void;
        onMediaStatusChanged?: ({
            kind,
            peerId,
            newStatus,
        }: {
            kind: 'audio' | 'video';
            peerId: string;
            newStatus: boolean;
        }) => void;
        onVideoQualityChanged?: ({
            peerId,
            prevQuality,
            currentQuality,
        }: {
            peerId: string;
            prevQuality: 'low' | 'med' | 'high';
            currentQuality: 'low' | 'med' | 'high';
        }) => void;
    },
): {
    displayName: string;
    participant: Participant;
    webcamStream: Stream;
    micStream: Stream;
    screenShareStream: Stream;
    screenShareAudioStream: Stream;
    webcamOn: boolean;
    micOn: boolean;
    screenShareOn: boolean;
    isLocal: boolean;
    isActiveSpeaker: boolean;
    isMainParticipant: boolean;
    pinState: any;
    mode: 'CONFERENCE' | 'VIEWER';
    consumeMicStreams: () => void;
    consumeWebcamStreams: () => void;
    stopConsumingMicStreams: () => void;
    stopConsumingWebcamStreams: () => void;
    setQuality: (quality: 'low' | 'med' | 'high') => void;
    setViewPort: (width: number, height: number) => void;
    enableMic: () => void;
    disableMic: () => void;
    enableWebcam: () => void;
    disableWebcam: () => void;
    remove: () => void;
    pin: (data: 'SHARE_AND_CAM' | 'CAM' | 'SHARE') => void;
    unpin: (data: 'SHARE_AND_CAM' | 'CAM' | 'SHARE') => void;
    switchTo: ({ meetingId, payload, token }: { meetingId: string; payload: string; token: string }) => Promise<void>;
    getAudioStats: () => Promise<
        Array<{
            bitrate: number;
            rtt: number;
            network: string;
            codec: string;
            jitter: number;
            limitation: any;
            totalPackets: number;
            packetsLost: number;
            concealmentEvents: number;
            insertedSamplesForDecelaration: number;
            removedSamplesForAccelaration: number;
            size: any;
        }>
    >;
    getVideoStats: () => Promise<
        Array<{
            bitrate: number;
            rtt: number;
            network: string;
            codec: string;
            jitter: number;
            limitation: any;
            totalPackets: number;
            packetsLost: number;
            concealmentEvents: number;
            insertedSamplesForDecelaration: number;
            removedSamplesForAccelaration: number;
            size: any;
            currentSpatialLayer: number;
            currentTemporalLayer: number;
            preferredSpatialLayer: number;
            preferredTemporalLayer: number;
        }>
    >;
    getShareStats: () => Promise<
        Array<{
            bitrate: number;
            rtt: number;
            network: string;
            codec: string;
            jitter: number;
            limitation: any;
            totalPackets: number;
            packetsLost: number;
            concealmentEvents: number;
            insertedSamplesForDecelaration: number;
            removedSamplesForAccelaration: number;
            size: any;
            currentSpatialLayer: number;
            currentTemporalLayer: number;
            preferredSpatialLayer: number;
            preferredTemporalLayer: number;
        }>
    >;
};

/**
 * @param onParticipantJoined - This event callback is trigger when a new participant joins the meeting.
 * ---
 * @param onParticipantLeft - This event callback is trigger when a participant leaves the meeting.
 * ---
 * @param onSpeakerChanged -
 * - This event will be emitted when a active speaker changed.
 * - If you want to know which participant is actively speaking, then this event will be used.
 * - If no participant is actively speaking, then this event will pass null as en event callback parameter.
 * ---
 * @param onPresenterChanged -
 * - This event will be emitted when any participant starts or stops screen sharing.
 * - It will pass participantId as an event callback parameter.
 * - If a participant stops screensharing, then this event will pass null as en event callback parameter.
 * ---
 * @param onEntryRequested -
 * - This event will be triggered when a new participant who is trying to join the meeting, is having permission ask_join in token.
 * - This event will only be triggered to the participants in the meeting, who is having the permission allow_join in token.
 * - This event will pass following parameters as an event parameters, participantId and name of the new participant who is trying to join the meeting, allow() and deny() to take required actions.
 * ---
 * @param onEntryResponded -
 * - This event will be triggered when the join() request is responded.
 * - This event will be triggered to the participants in the meeting, who is having the permission allow_join in token.
 * - This event will be also triggered to the participant who requested to join the meeting.
 * ---
 * @param onMeetingJoined - This event callback is trigger when a local participant joins the meeting.
 * ---
 * @param onMeetingLeft - This event callback is trigger when local participant leaves the meeting.
 * ---
 * @param onRecordingStateChanged - This event will be emitted when the meeting's recording status changed.
 * ---
 * @param onLivestreamStateChanged - This event will be emitted when the meeting's livestream status changed.
 * ---
 * @param onHlsStateChanged - This event will be emitted when the meeting's HLS(Http Livestreaming) status changed.
 * ---
 * @param onWebcamRequested -
 * - This event will be triggered to the participant B when any other participant A requests to enable webcam of participant B.
 * - On accepting the request, webcam of participant B will be enabled.
 * ---
 * @param onMicRequested -
 * - This event will be triggered to the participant B when any other participant A requests to enable mic of participant B.
 * - On accepting the request, mic of participant B will be enabled.
 * ---
 * @param onError -
 * - This event will be triggered when any error occured.
 * - It will pass code and message, as an event callback parameter.
 * - To see all available error codes from SDK. [Meeting Error Codes](https://docs.videosdk.live/react/api/sdk-reference/error-codes)
 * ---
 * @param onMeetingStateChanged -
 * - This event will be triggered when state of meeting changes.
 * - It will pass state as an event callback parameter which will indicate current state of the meeting.
 * - All available states are `CONNECTING`, `CONNECTED`, `FAILED`, `DISCONNECTED`, `CLOSING`, `CLOSED`.
 * ---
 * @param onParticipantModeChanged -
 * - This event will be triggered when mode gets chanded.
 * - It will pass mode, as an event callback parameter.
 *      - **CONFERENCE** : Both audio and video streams will be produced and consumed in this mode.
 *      - **VIEWER** : Audio and video streams will not be produced or consumed in this mode.
 * ---
 * @returns This will return Meeting properties and method. You can refer this [API Reference](https://docs.videosdk.live/react/api/sdk-reference/use-meeting/introduction)
 *
 */

export function useMeeting({
    onParticipantJoined,
    onParticipantLeft,
    onSpeakerChanged,
    onPresenterChanged,
    onMainParticipantChanged,
    onEntryRequested,
    onEntryResponded,
    onRecordingStarted,
    onRecordingStopped,
    onChatMessage,
    onMeetingJoined,
    onMeetingLeft,
    onLiveStreamStarted,
    onLiveStreamStopped,
    onVideoStateChanged,
    onVideoSeeked,
    onWebcamRequested,
    onMicRequested,
    onPinStateChanged,
    onConnectionOpen,
    onConnetionClose,
    onSwitchMeeting,
    onError,
    onHlsStarted,
    onHlsStopped,
    onHlsStateChanged,
    onRecordingStateChanged,
    onLivestreamStateChanged,
    onMeetingStateChanged,
    onParticipantModeChanged,
}?: {
    onParticipantJoined?: (participant: Participant) => void;
    onParticipantLeft?: (participant: Participant) => void;
    onSpeakerChanged?: (activeSpeakerId: string | null) => void;
    onPresenterChanged?: (presenterId: string | null) => void;
    onMainParticipantChanged?: (participant: Participant) => void;
    onEntryRequested?: ({
        participantId,
        name,
        allow,
        deny,
    }: {
        participantId: string;
        name: string;
        allow: () => void;
        deny: () => void;
    }) => void;
    onEntryResponded?: ({ participantId, decision }: { participantId: string; decision: string }) => void;
    onRecordingStarted?: () => void;
    onRecordingStopped?: () => void;
    onChatMessage?: (data: { message: string; senderId: string; timestamp: string; senderName: string }) => void;
    onMeetingJoined?: () => void;
    onMeetingLeft?: () => void;
    onLiveStreamStarted?: () => void;
    onLiveStreamStopped?: () => void;
    onVideoStateChanged?: () => void;
    onVideoSeeked?: () => void;
    onWebcamRequested?: ({
        participantId,
        accept,
        reject,
    }: {
        participantId: string;
        accept: () => void;
        reject: () => void;
    }) => void;
    onMicRequested?: ({
        participantId,
        accept,
        reject,
    }: {
        participantId: string;
        accept: () => void;
        reject: () => void;
    }) => void;
    onPinStateChanged?: ({
        participantId,
        state,
        pinnedBy,
    }: {
        participantId: string;
        state: { share: boolean; cam: boolean };
        pinnedBy: string;
    }) => void;
    onConnectionOpen?: () => void;
    onConnetionClose?: () => void;
    onSwitchMeeting?: () => void;
    onError?: ({ code, message }: { code: string; message: string }) => void;
    onHlsStarted?: ({ downstreamUrl }: { downstreamUrl: string }) => void;
    onHlsStopped?: () => void;
    onHlsStateChanged?: ({
        status,
        downstreamUrl,
        playbackHlsUrl,
        livestreamUrl,
    }: {
        status: 'HLS_STARTING' | 'HLS_STARTED' | 'HLS_PLAYABLE' | 'HLS_STOPPING' | 'HLS_STOPPING';
        downstreamUrl: string;
        playbackHlsUrl: string;
        livestreamUrl: string;
    }) => void;
    onRecordingStateChanged?: ({
        status,
    }: {
        status: 'RECORDING_STARTING' | 'RECORDING_STARTED' | 'RECORDING_STOPPING' | 'RECORDING_STOPPING';
    }) => void;
    onLivestreamStateChanged?: {
        status: 'LIVESTREAM_STARTING' | 'LIVESTREAM_STARTED' | 'LIVESTREAM_STOPPING' | 'LIVESTREAM_STOPPING';
    };
    onMeetingStateChanged?: ({
        state,
    }: {
        state: 'CONNECTING' | 'CONNECTED' | 'FAILED' | 'DISCONNECTED' | 'CLOSING' | 'CLOSED';
    }) => void;
    onParticipantModeChanged?: ({
        participantId,
        mode,
    }: {
        participantId: string;
        mode: 'CONFERENCE' | 'VIEWER';
    }) => void;
}): {
    meetingId: string;
    meeting: Meeting;
    localParticipant: Participant;
    activeSpeakerId: string;
    participants: Map<string, Participant>;
    pinnedParticipants: Map<
        string,
        {
            cam: boolean;
            share: boolean;
        }
    >;
    presenterId: string;
    localMicOn: boolean;
    localWebcamOn: boolean;
    isRecording: boolean;
    recordingState: string;
    livestreamState: string;
    hlsState: string;
    hlsUrls: {
        downstreamUrl: string;
        playbackHlsUrl: string;
        livestreamUrl: string;
    };
    localScreenShareOn: boolean;
    connections: Map<string, Connection>;
    join: () => void;
    leave: () => void;
    end: () => void;
    unmuteMic: (customAudioTrack?: MediaStream | undefined) => void;
    muteMic: () => void;
    toggleMic: (customAudioTrack?: MediaStream | undefined) => void;
    enableWebcam: (customVideoTrack?: MediaStream | undefined) => void;
    disableWebcam: () => void;
    toggleWebcam: (customVideoTrack?: MediaStream | undefined) => void;
    enableScreenShare: (customScreenShareTrack?: MediaStream | undefined) => void;
    disableScreenShare: () => void;
    toggleScreenShare: (customScreenShareTrack?: MediaStream | undefined) => void;
    startRecording: (
        webhookUrl?: string,
        awsDirPath?: string,
        config?: {
            layout: {
                type: 'GRID' | 'SPOTLIGHT' | 'SIDEBAR';
                priority: 'SPEAKER' | 'PIN';
                gridSize: number;
            };
            orientation: 'landscape' | 'portrait';
            theme: 'DEFAULT' | 'DARK' | 'LIGHT';
            quality: 'low' | 'med' | 'high';
            mode: 'video-and-audio' | 'audio';
        },
    ) => void;
    stopRecording: () => void;
    startLiveStream: (
        outputs: Array<{
            url: string;
            streamKey: string;
        }>,
        config?: {
            layout: {
                type: 'GRID' | 'SPOTLIGHT' | 'SIDEBAR';
                priority: 'SPEAKER' | 'PIN';
                gridSize: number;
            };
            theme: 'DEFAULT' | 'DARK' | 'LIGHT';
        },
    ) => void;
    stopLiveStream: () => void;
    startHls: (config?: {
        layout: {
            type: 'GRID' | 'SPOTLIGHT' | 'SIDEBAR';
            priority: 'SPEAKER' | 'PIN';
            gridSize: number;
        };
        orientation: 'landscape' | 'portrait';
        theme: 'DEFAULT' | 'DARK' | 'LIGHT';
        quality: 'low' | 'med' | 'high';
        mode: 'video-and-audio' | 'audio';
    }) => void;
    stopHls: () => void;
    getMics: () => Promise<
        Array<{
            deviceId: string;
            label: string;
        }>
    >;
    void: any;
    getWebcams: () => Promise<
        Array<{
            deviceId: string;
            label: string;
            facingMode: 'environment' | 'front';
        }>
    >;
    changeMic: (object: string | MediaStream) => void;
    changeWebcam: (object: string | MediaStream) => void;
    startVideo: ({ link }: { link: string }) => void;
    stopVideo: () => void;
    pauseVideo: ({ currentTime }: { currentTime: number }) => void;
    resumeVideo: () => void;
    seekVideo: ({ currentTime }: { currentTime: number }) => void;
    connectTo: ({ meetingId, payload }: { meetingId: string; payload: string }) => void;
};

/**
 *
 * @param topic - Represents the topic for which you are publishing and getting a message.
 * ---
 * @param onMessageReceived - This will triggered when a new message is published for the subscribed topic with the message object.
 * ---
 * @param onOldMessagesReceived - This will triggered once when you subscribe to the topic and will receive all the old messages present for that topic as an array of message object.
 * ---
 * @returns This will return `message` properties and `publish()` method. You can refer this [API Reference](https://docs.videosdk.live/react/api/sdk-reference/use-pubsub#returns)
 * ---
 * **usePubSub example**
 * ```js
 *  var topic = 'CHAT';
 *
 *  function onMessageReceived(message) {
 *    console.log('New Message:', message);
 *  }
 *
 *  function onOldMessagesReceived(messages) {
 *    console.log('Old Messages:', messages);
 *  }
 *
 *  const {publish, messages} = usePubSub(topic, {
 *    onMessageReceived,
 *    onOldMessagesReceived,
 *  });
 * ```
 */
export function usePubSub(
    topic: string,
    {
        onMessageReceived,
        onOldMessagesReceived,
    }?: {
        onMessageReceived?: (message: {
            id: string;
            message: string;
            senderId: string;
            senderName: string;
            timestamp: string;
            topic: string;
        }) => void;
        onOldMessagesReceived?: (
            messages: Array<{
                id: string;
                message: string;
                senderId: string;
                senderName: string;
                timestamp: string;
                topic: string;
            }>,
        ) => void;
    },
): {
    publish: (
        message: string,
        {
            persist: boolean,
        }: {
            persist: any;
        },
    ) => void;
    messages: Array<{
        id: string;
        message: string;
        senderId: string;
        senderName: string;
        timestamp: string;
        topic: string;
    }>;
};

/**
 * @param microphoneId - It will be the id of the mic from which the audio should be captured.
 * ---
 * @param encoderConfig - This will accept the voice profile you want to capture. You can checkout all value [here](https://docs.videosdk.live/react/api/sdk-reference/custom-tracks#parameters-1)
 *
 * #### Example : `speech_standard`, `high_quality`, `music_standard`,
 * ---
 * @param noiseConfig - You can provide different noise configuration
 * ---
 * @param noiseConfig.noiseSuppression - It is used to improve the quality of audio by removing background noise that can interfere with the clarity of speech.
 * ---
 * @param noiseConfig.echoCancellation - It is used to remove unwanted echoes from voice.
 * ---
 * @param noiseConfig.autoGainControl - It is used to maintain a consistent level of loudness or amplitude in a voice.
 * ---
 *
 * **Code Example**
 * ```js
 * import { createMicrophoneAudioTrack } from "@videosdk.live/react-sdk";
 *
 * let customTrack = await createMicrophoneAudioTrack({
 *  microphoneId : 'mic-id' // OPTIONAL
 *  encoderConfig: "speech_standard", // `high_quality` | `music_standard`,  Default : `speech_standard`
 *  noiseConfig: {
 *    noiseSuppression: true,
 *    echoCancellation: true,
 *    autoGainControl: true,
 *  },
 * });
 * ```
 */

export function createMicrophoneAudioTrack({
    noiseConfig,
    encoderConfig,
    microphoneId,
}: {
    noiseConfig?:
        | {
              echoCancellation: boolean;
              autoGainControl: boolean;
              noiseSuppression: boolean;
          }
        | undefined;
    encoderConfig?:
        | 'speech_low_quality'
        | 'speech_standard'
        | 'music_standard'
        | 'standard_stereo'
        | 'high_quality'
        | 'high_quality_stereo'
        | undefined;
    microphoneId?: string | undefined;
}): Promise<MediaStream>;

/**
 * @param cameraId - It will be the id of the camera from which the video should be captured.
 * ---
 * @param encoderConfig - This will accept the resolution (height x width) of video you want to capture.
 * You can checkout all value [here](https://docs.videosdk.live/react/api/sdk-reference/custom-tracks#parameters)
 *
 * #### Example : `h360p_w640p`, `h720p_w1280p`, `h1080p_w1440p`
 * ---
 * @param facingMode - For Mobile browser It will specifiy whether to use front or back camera for the video track.
 *
 * #### Values : `front`, `environment`
 * ---
 * @param optimizationMode - It will specifiy the optimization mode for the video track being generated.
 *
 * #### Values : `motion`, `text`, `detail`
 *
 * ---
 * @param multiStream - It will specifiy if the stream should send multiple resolution layers or single resolution layer.
 * Please refere thi link for more understanding [What is multiStream ?](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track#what-is-multistream)
 * ---
 *
 * **Code Example**
 * ```js
 * import { createCameraVideoTrack } from "@videosdk.live/react-sdk";
 *
 *  let customTrack = await createCameraVideoTrack({
 *    cameraId:"camera-id" // OPTIONAL
 *    optimizationMode: "motion", // "text" | "detail",  Default : "motion"
 *    encoderConfig: "h480p_w640p", // "h540p_w960p" | "h720p_w1280p" ... // Default : "h360p_w640p"
 *    facingMode: "environment", // "front",  Default : "environment"
 *    multiStream:true // false,  Default : true
 *  });
 * ```
 */
export function createCameraVideoTrack({
    cameraId,
    encoderConfig,
    facingMode,
    optimizationMode,
    multiStream,
}: {
    cameraId?: string | undefined;
    encoderConfig?:
        | 'h90p_w160p'
        | 'h180p_w320p'
        | 'h216p_w384p'
        | 'h360p_w640p'
        | 'h540p_w960p'
        | 'h720p_w1280p'
        | 'h1080p_w1920p'
        | 'h1440p_w2560p'
        | 'h2160p_w3840p'
        | 'h120p_w160p'
        | 'h180p_w240p'
        | 'h240p_w320p'
        | 'h360p_w480p'
        | 'h480p_w640p'
        | 'h540p_w720p'
        | 'h720p_w960p'
        | 'h1080p_w1440p'
        | 'h1440p_w1920p'
        | undefined;
    facingMode?: 'user' | 'environment' | undefined;
    optimizationMode?: 'text' | 'motion' | 'detail' | undefined;
    multiStream?: boolean;
}): Promise<MediaStream>;

/**
 * @param encoderConfig - This will accept the  height & FPS of video you want to capture.
 * You can checkout all value [here](https://docs.videosdk.live/react/api/sdk-reference/custom-tracks#parameters)
 *
 * #### Example : `h360p_30fps`, `h720p_5fps`, `h720p_15fps`, `h1080p_15fps`, `h1080p_30fps`
 * ---
 * @param optimizationMode - It will specifiy the optimization mode for the video track being generated.
 *
 * #### Values : `motion`, `text`, `detail`
 * ---
 * @param withAudio - It will specifiy to use screen share with audio or not
 *
 * #### Values : `enable`, `disable`
 * ---
 *
 * **Code Example**
 * ```js
 * import { createScreenShareVideoTrack } from "@videosdk.live/react-sdk";
 *
 *  let customTrack = await createCameraVideoTrack({
 *    optimizationMode: "motion", // "text" | "detail",  Default : "motion"
 *    encoderConfig: "h720p_15fps", //  `h360p_30fps` | `h1080p_30fps` // Default : `h720p_15fps`
 *    withAudio:'enable' // `disable`,  Default : `disable`
 *  });
 * ```
 */
export function createScreenShareVideoTrack({
    encoderConfig,
    optimizationMode,
    withAudio,
}: {
    encoderConfig?: 'h360p_30fps' | 'h720p_5fps' | 'h720p_15fps' | 'h1080p_15fps' | 'h1080p_30fps' | undefined;
    optimizationMode?: 'text' | 'motion' | 'detail' | undefined;
    withAudio?: 'enable' | 'disable';
}): Promise<MediaStream>;

export const Constants: {
    errors: {
        INVALID_API_KEY: number;
        INVALID_TOKEN: number;
        INVALID_MEETING_ID: number;
        INVALID_PARTICIPANT_ID: number;
        DUPLICATE_PARTICIPANT: number;
        ACCOUNT_DEACTIVATED: number;
        ACCOUNT_DISCONTINUED: number;
        INVALID_PERMISSIONS: number;
        MAX_PARTCIPANT_REACHED: number;
        MAX_SPEAKER_REACHED: number;
        START_RECORDING_FAILED: number;
        STOP_RECORDING_FAILED: number;
        START_LIVESTREAM_FAILED: number;
        STOP_LIVESTREAM_FAILED: number;
        INVALID_LIVESTREAM_CONFIG: number;
        START_HLS_FAILED: number;
        STOP_HLS_FAILED: number;
        RECORDING_FAILED: number;
        LIVESTREAM_FAILED: number;
        HLS_FAILED: number;
        ERROR_GET_VIDEO_MEDIA: number;
        ERROR_GET_AUDIO_MEDIA: number;
        ERROR_GET_DISPLAY_MEDIA: number;
        ERROR_GET_VIDEO_MEDIA_PERMISSION_DENIED: number;
        ERROR_GET_AUDIO_MEDIA_PERMISSION_DENIED: number;
        ERROR_GET_DISPLAY_MEDIA_PERMISSION_DENIED: number;
    };
    recordingEvents: {
        RECORDING_STARTING: string;
        RECORDING_STARTED: string;
        RECORDING_STOPPING: string;
        RECORDING_STOPPED: string;
    };
    livestreamEvents: {
        LIVESTREAM_STARTING: string;
        LIVESTREAM_STARTED: string;
        LIVESTREAM_STOPPING: string;
        LIVESTREAM_STOPPED: string;
    };
    hlsEvents: {
        HLS_STARTING: string;
        HLS_STARTED: string;
        HLS_STOPPING: string;
        HLS_STOPPED: string;
    };
    modes: {
        CONFERENCE: string;
        VIEWER: string;
    };
};
