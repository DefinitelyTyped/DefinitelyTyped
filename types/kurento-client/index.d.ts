// Type definitions for kurento-client 6.14
// Project: https://github.com/Kurento/kurento-client-js, https://www.kurento.org
// Definitions by: James Hill <https://github.com/jhukdev>
//                Michel Albers <https://github.com/michelalbers>
//                Joe Flateau <https://github.com/joeflateau>
//                Yuichiro Tsuchiya <https://github.com/whitphx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

declare namespace kurento {
    interface Constructor {
        (ws_uri: string, options?: Options): Promise<ClientInstance>;
        getComplexType: (complex: 'IceCandidate') => (value: any) => any;
        getSingleton(ws_uri: string, options?: Options): Promise<ClientInstance>;
        register: (module: string | ReturnType<NodeRequire>) => void;
        on: undefined;
    }

    interface ElementConnectionData {
        source: MediaElement;
        sink: MediaElement;
        type: MediaType;
        sourceDescription: string;
        sinkDescription: string;
    }

    interface Error {
        description: string;
        errorCode: number;
        type: string;
    }

    interface Tag {
        key: string;
        value: string;
    }

    interface BaseEvent<T extends string> {
        type: T;
        source: MediaObject['id'];
        tags: Tag[];
        timestamp: string;
        timestampMillis: string;
    }
    type Event<T extends string, E extends {} = {}> = BaseEvent<T> & E;

    interface IceConnection {
        streamId: string;
        componentId: number;
        state: any;
    }

    interface IceCandidate {
        candidate: string;
        sdpMid: string;
        sdpMLineIndex: number;
    }

    type Callback<T> = (error: Error, result: T) => void;

    // Ref: https://github.com/Kurento/kurento-client-elements-js/blob/master/lib/complexTypes/MediaProfileSpecType.js
    type MediaProfileSpecType =
        | 'WEBM'
        | 'MKV'
        | 'MP4'
        | 'WEBM_VIDEO_ONLY'
        | 'WEBM_AUDIO_ONLY'
        | 'MKV_VIDEO_ONLY'
        | 'MKV_AUDIO_ONLY'
        | 'MP4_VIDEO_ONLY'
        | 'MP4_AUDIO_ONLY'
        | 'JPEG_VIDEO_ONLY'
        | 'KURENTO_SPLIT_RECORDER';

    interface RecorderEndpointOptions {
        uri: string;
        mediaProfile?: MediaProfileSpecType;
        stopOnEndOfStream?: boolean;
    }

    interface Options {
        failAfter?: number;
        enableTransactions?: boolean;
        useImplicitTransactions?: boolean;
        strict?: boolean;
        request_timeout?: number;
        response_timeout?: number;
        duplicates_timeout?: number;
        access_token?: string;
        socket?: any;
    }

    interface ClientInstance {
        create(type: 'MediaPipeline'): Promise<MediaPipeline>;
        create(type: 'WebRtcEndpoint', options?: { useDataChannels?: boolean }): Promise<WebRtcEndpoint>;
        create(type: 'RecorderEndpoint', options: RecorderEndpointOptions): Promise<RecorderEndpoint>;
        create(
            type: 'PlayerEndpoint',
            options?: {
                networkCache?: number;
                uri: string;
                useEncodedMedia?: boolean;
            },
        ): Promise<PlayerEndpoint>;
        create(type: string, options?: Record<string, unknown>): Promise<MediaElement>;
        // tslint:disable-next-line
        getMediaobjectById<T extends MediaObject = MediaObject>(objectId: string): Promise<T>;
        getServerManager: (callback?: Callback<ServerManager>) => Promise<ServerManager>;
        close(): void;
    }

    interface ServerManager {
        getCpuCount: (callback?: Callback<number[]>) => Promise<number[]>;
        getKmd: (moduleName: string, callback?: Callback<string>) => Promise<string>;
        getUsedCpu: (interval: number, callback?: Callback<number>) => Promise<number>;
        getUsedMemory: (callback?: Callback<number>) => Promise<number>;
        getChildren: (callback?: Callback<MediaObject>) => Promise<MediaObject>;
        getName: (callback?: Callback<string>) => Promise<string>;
        getPipelines(callback?: Callback<MediaPipeline[]>): Promise<MediaPipeline[]>;
        on(
            event: 'ObjectCreated',
            callback: (event: Event<'ObjectCreated', { object: string }>) => void,
        ): ServerManager; // `object` is actually string while the doc says it's `MediaObject` (https://doc-kurento.readthedocs.io/en/stable/_static/client-jsdoc/module-core.html#event:ObjectCreated).
        on(
            event: 'ObjectDestroyed',
            callback: (event: Event<'ObjectDestroyed', { objectId: string }>) => void,
        ): ServerManager;
    }
    type MediaServer = ServerManager; // For backward compatibility

    interface MediaObject {
        id: string;
        name: string;
        tags: object;
        addTag: (key: string, value: string, callback?: Callback<void>) => Promise<void>;
        getTag: (key: string, callback?: Callback<string>) => Promise<string>;
        getTags: (callback?: Callback<Tag[]>) => Promise<Tag[]>;
        getSendTagsInEvents: (callback?: Callback<boolean>) => Promise<boolean>;
        removeTag: (key: string, callback?: Callback<void>) => Promise<void>;
        getChildren: (callback?: Callback<MediaObject[]>) => Promise<MediaObject[]>;
        getCreationTime: (callback?: Callback<number>) => Promise<number>;
        getMediaPipeline: (callback?: Callback<MediaPipeline>) => Promise<MediaPipeline>;
        getParent: (callback?: Callback<MediaObject>) => Promise<MediaObject>;
        getName: (callback?: Callback<string>) => Promise<string>;
        setName: (name: string, callback?: Callback<void>) => Promise<void>;
        release: (callback?: Callback<void>) => Promise<void>;
    }

    interface MediaElement extends MediaObject {
        connect(sink: MediaElement, callback?: Callback<void>): Promise<void>;
        connect(sink: MediaElement, mediaType: MediaType, callback?: Callback<void>): Promise<void>;
        connect(
            sink: MediaElement,
            mediaType: MediaType,
            sourceMediaDescription: string,
            callback?: Callback<void>,
        ): Promise<void>;
        connect(
            sink: MediaElement,
            mediaType: MediaType,
            sourceMediaDescription: string,
            sinkMediaDescriptionopt: string,
            callback?: Callback<void>,
        ): Promise<void>;
        disconnect(sink: MediaElement, callback?: Callback<void>): Promise<void>;
        disconnect(sink: MediaElement, mediaType: MediaType, callback?: Callback<void>): Promise<void>;
        disconnect(
            sink: MediaElement,
            mediaType: MediaType,
            sourceMediaDescription: string,
            callback?: Callback<void>,
        ): Promise<void>;
        disconnect(
            sink: MediaElement,
            mediaType: MediaType,
            sourceMediaDescription: string,
            sinkMediaDescriptionopt: string,
            callback?: Callback<void>,
        ): Promise<void>;
        getSinkConnections(callback?: Callback<ElementConnectionData[]>): Promise<ElementConnectionData[]>;
        getSinkConnections(
            mediaType: MediaType,
            callback?: Callback<ElementConnectionData[]>,
        ): Promise<ElementConnectionData[]>;
        getSinkConnections(
            mediaType: MediaType,
            description: string,
            callback?: Callback<ElementConnectionData[]>,
        ): Promise<ElementConnectionData[]>;
        getSourceConnections(callback?: Callback<ElementConnectionData[]>): Promise<ElementConnectionData[]>;
        getSourceConnections(
            mediaType: MediaType,
            callback?: Callback<ElementConnectionData[]>,
        ): Promise<ElementConnectionData[]>;
        getSourceConnections(
            mediaType: MediaType,
            description: string,
            callback?: Callback<ElementConnectionData[]>,
        ): Promise<ElementConnectionData[]>;

        isMediaFlowingIn(
            mediaType: MediaType,
            sinkMediaDescription?: string,
            callbackopt?: Callback<boolean>,
        ): Promise<boolean>;
        isMediaFlowingOut(
            mediaType: MediaType,
            sinkMediaDescription?: string,
            callbackopt?: Callback<boolean>,
        ): Promise<boolean>;

        on(
            eventName: 'ElementConnected',
            callback: (
                event: Event<
                    'ElementConnected',
                    {
                        sink: MediaElement;
                        mediaType: MediaType;
                        sourceMediaDescription: string;
                        sinkMediaDescription: string;
                    }
                >,
            ) => void,
        ): MediaElement;
        on(
            eventName: 'ElementDisconnected',
            callback: (
                event: Event<
                    'ElementDisconnected',
                    {
                        sink: MediaElement;
                        mediaType: MediaType;
                        sourceMediaDescription: string;
                        sinkMediaDescription: string;
                    }
                >,
            ) => void,
        ): MediaElement;
        on(
            eventName: 'MediaFlowInStateChange',
            callback: (
                event: Event<
                    'MediaFlowInStateChange',
                    { state: MediaFlowState; mediaType: MediaType; padName: string }
                >,
            ) => void,
        ): MediaElement;
        on(
            eventName: 'MediaFlowOutStateChange',
            callback: (
                event: Event<
                    'MediaFlowOutStateChange',
                    { state: MediaFlowState; mediaType: MediaType; padName: string }
                >,
            ) => void,
        ): MediaElement;
        on(
            eventName: 'MediaTranscodingStateChange',
            callback: (
                event: Event<
                    'MediaTranscodingStateChange',
                    { state: MediaTranscodingState; binName: string; mediaType: MediaType }
                >,
            ) => void,
        ): MediaElement;
    }

    interface MediaPipeline extends ClientInstance, MediaObject {
        getGstreamerDot: (callback?: Callback<string>) => Promise<string>;
        getLatencyStats: (callback?: Callback<boolean>) => Promise<boolean>;
        setLatencyStats: (callback?: Callback<string>) => Promise<string>;
    }

    // interface Endpoint extends MediaElement {}
    type Endpoint = MediaElement;

    interface UriEndpoint extends Endpoint {
        pause(callback?: Callback<UriEndpointState>): Promise<UriEndpointState>;
        stop(callback?: Callback<UriEndpointState>): Promise<UriEndpointState>;
        getState(callback?: Callback<UriEndpointState>): Promise<UriEndpointState>;
        getUri(callback?: Callback<string>): Promise<string>;

        on(
            eventName: 'UriEndpointStateChanged',
            callback: (event: Event<'UriEndpointStateChanged', { state: UriEndpointState }>) => void,
        ): UriEndpoint;

        // Inherited from MediaElement
        on(
            eventName: 'ElementConnected',
            callback: (
                event: Event<
                    'ElementConnected',
                    {
                        sink: MediaElement;
                        mediaType: MediaType;
                        sourceMediaDescription: string;
                        sinkMediaDescription: string;
                    }
                >,
            ) => void,
        ): UriEndpoint;
        on(
            eventName: 'ElementDisconnected',
            callback: (
                event: Event<
                    'ElementDisconnected',
                    {
                        sink: MediaElement;
                        mediaType: MediaType;
                        sourceMediaDescription: string;
                        sinkMediaDescription: string;
                    }
                >,
            ) => void,
        ): UriEndpoint;
        on(
            eventName: 'MediaFlowInStateChange',
            callback: (
                event: Event<
                    'MediaFlowInStateChange',
                    { state: MediaFlowState; mediaType: MediaType; padName: string }
                >,
            ) => void,
        ): UriEndpoint;
        on(
            eventName: 'MediaFlowOutStateChange',
            callback: (
                event: Event<
                    'MediaFlowOutStateChange',
                    { state: MediaFlowState; mediaType: MediaType; padName: string }
                >,
            ) => void,
        ): UriEndpoint;
        on(
            eventName: 'MediaTranscodingStateChange',
            callback: (
                event: Event<
                    'MediaTranscodingStateChange',
                    { state: MediaTranscodingState; binName: string; mediaType: MediaType }
                >,
            ) => void,
        ): UriEndpoint;
    }

    interface RecorderEndpoint extends UriEndpoint {
        stopOnEndOfStream: boolean;
        uri: string;
        record: (callback?: Callback<void>) => Promise<void>;
        stopAndWait: (callback?: Callback<void>) => Promise<void>;
        getMaxOutputBitrate: (callback?: Callback<number>) => Promise<number>;
        getMinOutputBitrate: (callback?: Callback<number>) => Promise<number>;
        setMaxOutputBitrate: (bitrate: number, callback?: Callback<number>) => Promise<number>;
        setMinOutputBitrate: (bitrate: number, callback?: Callback<number>) => Promise<number>;
        on(eventName: 'Recording', callback: (event: Event<'Recording'>) => void): RecorderEndpoint;
        on(eventName: 'Paused', callback: (event: Event<'Paused'>) => void): RecorderEndpoint;
        on(eventName: 'Stopped', callback: (event: Event<'Stopped'>) => void): RecorderEndpoint;

        // Inherited from UriEndpoint
        on(
            eventName: 'UriEndpointStateChanged',
            callback: (event: Event<'UriEndpointStateChanged', { state: UriEndpointState }>) => void,
        ): RecorderEndpoint;

        // Inherited from MediaElement
        on(
            eventName: 'ElementConnected',
            callback: (
                event: Event<
                    'ElementConnected',
                    {
                        sink: MediaElement;
                        mediaType: MediaType;
                        sourceMediaDescription: string;
                        sinkMediaDescription: string;
                    }
                >,
            ) => void,
        ): RecorderEndpoint;
        on(
            eventName: 'ElementDisconnected',
            callback: (
                event: Event<
                    'ElementDisconnected',
                    {
                        sink: MediaElement;
                        mediaType: MediaType;
                        sourceMediaDescription: string;
                        sinkMediaDescription: string;
                    }
                >,
            ) => void,
        ): RecorderEndpoint;
        on(
            eventName: 'MediaFlowInStateChange',
            callback: (
                event: Event<
                    'MediaFlowInStateChange',
                    { state: MediaFlowState; mediaType: MediaType; padName: string }
                >,
            ) => void,
        ): RecorderEndpoint;
        on(
            eventName: 'MediaFlowOutStateChange',
            callback: (
                event: Event<
                    'MediaFlowOutStateChange',
                    { state: MediaFlowState; mediaType: MediaType; padName: string }
                >,
            ) => void,
        ): RecorderEndpoint;
        on(
            eventName: 'MediaTranscodingStateChange',
            callback: (
                event: Event<
                    'MediaTranscodingStateChange',
                    { state: MediaTranscodingState; binName: string; mediaType: MediaType }
                >,
            ) => void,
        ): RecorderEndpoint;
    }

    interface PlayerEndpoint extends UriEndpoint {
        mediaPipeline: MediaPipeline;
        networkCache?: number;
        uri: string;
        useEncodedMedia?: boolean;

        play(callback?: (error: Error) => void): Promise<void>;

        on(eventName: 'EndOfStream', callback: (event: Event<'EndOfStream'>) => void): PlayerEndpoint;

        // Inherited from UriEndpoint
        on(
            eventName: 'UriEndpointStateChanged',
            callback: (event: Event<'UriEndpointStateChanged', { state: UriEndpointState }>) => void,
        ): PlayerEndpoint;

        // Inherited from MediaElement
        on(
            eventName: 'ElementConnected',
            callback: (
                event: Event<
                    'ElementConnected',
                    {
                        sink: MediaElement;
                        mediaType: MediaType;
                        sourceMediaDescription: string;
                        sinkMediaDescription: string;
                    }
                >,
            ) => void,
        ): PlayerEndpoint;
        on(
            eventName: 'ElementDisconnected',
            callback: (
                event: Event<
                    'ElementDisconnected',
                    {
                        sink: MediaElement;
                        mediaType: MediaType;
                        sourceMediaDescription: string;
                        sinkMediaDescription: string;
                    }
                >,
            ) => void,
        ): PlayerEndpoint;
        on(
            eventName: 'MediaFlowInStateChange',
            callback: (
                event: Event<
                    'MediaFlowInStateChange',
                    { state: MediaFlowState; mediaType: MediaType; padName: string }
                >,
            ) => void,
        ): PlayerEndpoint;
        on(
            eventName: 'MediaFlowOutStateChange',
            callback: (
                event: Event<
                    'MediaFlowOutStateChange',
                    { state: MediaFlowState; mediaType: MediaType; padName: string }
                >,
            ) => void,
        ): PlayerEndpoint;
        on(
            eventName: 'MediaTranscodingStateChange',
            callback: (
                event: Event<
                    'MediaTranscodingStateChange',
                    { state: MediaTranscodingState; binName: string; mediaType: MediaType }
                >,
            ) => void,
        ): PlayerEndpoint;
    }

    // interface SessionEndpoint extends Endpoint {}
    type SessionEndpoint = Endpoint;
    // interface SdpEndpoint extends SessionEndpoint {}
    type SdpEndpoint = SessionEndpoint;

    interface BaseRtpEndpoint extends SdpEndpoint {
        getConnectionState(callback?: Callback<ConnectionState>): Promise<ConnectionState>;
        getMediaState(callback?: Callback<MediaState>): Promise<MediaState>;

        on(
            eventName: 'ConnectionStateChanged',
            callback: (
                event: Event<'ConnectionStateChanged', { oldState: ConnectionState; newState: ConnectionState }>,
            ) => void,
        ): BaseRtpEndpoint;
        on(
            eventName: 'MediaStateChanged',
            callback: (event: Event<'MediaStateChanged', { oldState: MediaState; newState: MediaState }>) => void,
        ): BaseRtpEndpoint;

        // Inherited from MediaElement
        on(
            eventName: 'ElementConnected',
            callback: (
                event: Event<
                    'ElementConnected',
                    {
                        sink: MediaElement;
                        mediaType: MediaType;
                        sourceMediaDescription: string;
                        sinkMediaDescription: string;
                    }
                >,
            ) => void,
        ): BaseRtpEndpoint;
        on(
            eventName: 'ElementDisconnected',
            callback: (
                event: Event<
                    'ElementDisconnected',
                    {
                        sink: MediaElement;
                        mediaType: MediaType;
                        sourceMediaDescription: string;
                        sinkMediaDescription: string;
                    }
                >,
            ) => void,
        ): BaseRtpEndpoint;
        on(
            eventName: 'MediaFlowInStateChange',
            callback: (
                event: Event<
                    'MediaFlowInStateChange',
                    { state: MediaFlowState; mediaType: MediaType; padName: string }
                >,
            ) => void,
        ): BaseRtpEndpoint;
        on(
            eventName: 'MediaFlowOutStateChange',
            callback: (
                event: Event<
                    'MediaFlowOutStateChange',
                    { state: MediaFlowState; mediaType: MediaType; padName: string }
                >,
            ) => void,
        ): BaseRtpEndpoint;
        on(
            eventName: 'MediaTranscodingStateChange',
            callback: (
                event: Event<
                    'MediaTranscodingStateChange',
                    { state: MediaTranscodingState; binName: string; mediaType: MediaType }
                >,
            ) => void,
        ): BaseRtpEndpoint;
    }

    interface WebRtcEndpoint extends BaseRtpEndpoint {
        addIceCandidate: (candidate: RTCIceCandidate, callback?: Callback<void>) => Promise<void>;
        closeDataChannel: (channelId: number, callback?: Callback<void>) => Promise<void>;
        createDataChannel: (
            label?: string,
            ordered?: boolean,
            maxPacketLifeTime?: number,
            maxRetransmits?: number,
            protocol?: string,
            callback?: Callback<void>,
        ) => Promise<void>;
        gatherCandidates: (callback?: Callback<void>) => Promise<void>;
        getConnectionState: (callback?: Callback<any>) => Promise<any>;
        getICECandidatePairs: (callback?: Callback<any>) => Promise<any>;
        getIceConnectionState: (callback?: Callback<IceConnection>) => Promise<IceConnection>;
        setMaxAudioRecvBandwidth: (value: number, callback?: Callback<void>) => Promise<void>;
        getMaxAudioRecvBandwidth: (callback?: Callback<number>) => Promise<number>;
        setMinVideoRecvBandwidth: (value: number, callback?: Callback<void>) => Promise<void>;
        getMinVideoRecvBandwidth: (callback?: Callback<number>) => Promise<number>;
        setMaxVideoRecvBandwidth: (value: number, callback?: Callback<void>) => Promise<void>;
        getMaxVideoRecvBandwidth: (callback?: Callback<number>) => Promise<number>;
        setMinVideoSendBandwidth: (value: number, callback?: Callback<void>) => Promise<void>;
        getMinVideoSendBandwidth: (callback?: Callback<number>) => Promise<number>;
        setMaxVideoSendBandwidth: (value: number, callback?: Callback<void>) => Promise<void>;
        getMaxVideoSendBandwidth: (callback?: Callback<number>) => Promise<number>;
        setMinOutputBitrate: (value: number, callback?: Callback<void>) => Promise<void>;
        getMinOutputBitrate: (callback?: Callback<number>) => Promise<number>;
        setMaxOutputBitrate: (value: number, callback?: Callback<void>) => Promise<void>;
        getMaxOutputBitrate: (callback?: Callback<number>) => Promise<number>;
        setStunServerAddress: (server: string, callback?: Callback<void>) => Promise<void>;
        getStunServerAddress: (callback?: Callback<string>) => Promise<string>;
        setStunServerPort: (port: number, callback?: Callback<void>) => Promise<void>;
        getStunServerPort: (callback?: Callback<number>) => Promise<number>;
        setTurnUrl: (url: string, callback?: Callback<void>) => Promise<void>;
        getTurnUrl: (callback?: Callback<string>) => Promise<string>;
        processOffer: (offer: string, callback?: Callback<string>) => Promise<string>;

        on(
            event: 'DataChannelClose',
            callback: (event: Event<'DataChannelClose', { channelId: number }>) => void,
        ): WebRtcEndpoint;
        on(
            event: 'DataChannelOpen',
            callback: (event: Event<'DataChannelOpen', { channelId: number }>) => void,
        ): WebRtcEndpoint;
        on(
            event: 'IceCandidateFound',
            callback: (event: Event<'IceCandidateFound', { candidate: IceCandidate }>) => void,
        ): WebRtcEndpoint;
        on(
            event: 'IceComponentStateChange',
            callback: (
                event: Event<
                    'IceComponentStateChange',
                    { streamId: number; componentId: number; state: IceComponentState }
                >,
            ) => void,
        ): WebRtcEndpoint;
        on(event: 'IceGatheringDone', callback: (event: Event<'IceGatheringDone'>) => void): WebRtcEndpoint;
        on(
            event: 'NewCandidatePairSelected',
            callback: (event: Event<'NewCandidatePairSelected', { candidatePair: IceCandidatePair }>) => void,
        ): WebRtcEndpoint;

        // Deprecated. See https://doc-kurento.readthedocs.io/en/stable/_static/client-jsdoc/module-elements.html#event:OnIceCandidate
        on(
            event: 'OnIceCandidate',
            callback: (
                event: Event<
                    'OnIceCandidate',
                    {
                        candidate: IceCandidate;
                    }
                >,
            ) => void,
        ): WebRtcEndpoint;

        // Inherited from BaseRtpEndpoint
        on(
            eventName: 'ConnectionStateChanged',
            callback: (
                event: Event<'ConnectionStateChanged', { oldState: ConnectionState; newState: ConnectionState }>,
            ) => void,
        ): WebRtcEndpoint;
        on(
            eventName: 'MediaStateChanged',
            callback: (event: Event<'MediaStateChanged', { oldState: MediaState; newState: MediaState }>) => void,
        ): WebRtcEndpoint;

        // Inherited from MediaElement
        on(
            eventName: 'ElementConnected',
            callback: (
                event: Event<
                    'ElementConnected',
                    {
                        sink: MediaElement;
                        mediaType: MediaType;
                        sourceMediaDescription: string;
                        sinkMediaDescription: string;
                    }
                >,
            ) => void,
        ): WebRtcEndpoint;
        on(
            eventName: 'ElementDisconnected',
            callback: (
                event: Event<
                    'ElementDisconnected',
                    {
                        sink: MediaElement;
                        mediaType: MediaType;
                        sourceMediaDescription: string;
                        sinkMediaDescription: string;
                    }
                >,
            ) => void,
        ): WebRtcEndpoint;
        on(
            eventName: 'MediaFlowInStateChange',
            callback: (
                event: Event<
                    'MediaFlowInStateChange',
                    { state: MediaFlowState; mediaType: MediaType; padName: string }
                >,
            ) => void,
        ): WebRtcEndpoint;
        on(
            eventName: 'MediaFlowOutStateChange',
            callback: (
                event: Event<
                    'MediaFlowOutStateChange',
                    { state: MediaFlowState; mediaType: MediaType; padName: string }
                >,
            ) => void,
        ): WebRtcEndpoint;
        on(
            eventName: 'MediaTranscodingStateChange',
            callback: (
                event: Event<
                    'MediaTranscodingStateChange',
                    { state: MediaTranscodingState; binName: string; mediaType: MediaType }
                >,
            ) => void,
        ): WebRtcEndpoint;
    }

    // Ref: https://github.com/Kurento/kurento-client-core-js/tree/master/lib/complexTypes
    type ConnectionState = 'DISCONNECTED' | 'CONNECTED';
    type MediaState = 'DISCONNECTED' | 'CONNECTED';
    type UriEndpointState = 'STOP' | 'START' | 'PAUSE';
    type MediaType = 'AUDIO' | 'DATA' | 'VIDEO';
    type MediaFlowState = 'FLOWING' | 'NOT_FLOWING';
    type MediaTranscodingState = 'TRANSCODING' | 'NOT_TRANSCODING';

    // Ref: https://github.com/Kurento/kurento-client-elements-js/tree/master/lib/complexTypes
    type IceComponentState = 'DISCONNECTED' | 'GATHERING' | 'CONNECTING' | 'CONNECTED' | 'READY' | 'FAILED';
    interface IceCandidatePair {
        streamID: string;
        componentID: number;
        localCandidate: string;
        remoteCandidate: string;
    }
}

declare const kurento: kurento.Constructor;

export = kurento;
