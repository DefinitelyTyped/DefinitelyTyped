// Type definitions for kurento-client 6.12
// Project: https://github.com/Kurento/kurento-client-js, https://www.kurento.org
// Definitions by: James Hill <https://github.com/jhdevuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace KurentoClient {
    interface Constructor {
        (ws_uri: string, options?: Options): Promise<ClientInstance>;
        getComplexType: (complex: 'IceCandidate') => (value: any) => any;
    }

    class ClientInstance {
        create(type: 'MediaPipeline'): Promise<MediaPipeline>;
        create(type: 'WebRtcEndpoint'): Promise<WebRtcEndpoint>;
        on(event: 'OnIceCandidate', callback: (event: IceCandidate) => void): void;
        on(event: 'Error', callback: (error: Error) => void): void;
        on(event: 'Recording' | 'Paused' | 'Stopped', callback: () => void): void;
        getMediaobjectById(objectId: string): Promise<any>;
        close(): void;
    }

    interface MediaObject {
        id: string;
        name: string;
        tags: object;
        addTag: (key: string, value: string, callback?: Callback<void>) => Promise<void>;
        getTag: (key: string, callback?: Callback<string>) => Promise<string>;
        getTags: (callback?: Callback<Tag[]>) => Promise<Tag[]>;
        removeTag: (key: string, callback?: Callback<void>) => Promise<void>;
        getChildren: (callback?: Callback<MediaObject[]>) => Promise<MediaObject[]>;
        getCreationTime: (callback?: Callback<number>) => Promise<number>;
        getMediaPipeline: (callback?: Callback<MediaPipeline>) => Promise<MediaPipeline>;
        getParent: (callback?: Callback<MediaObject>) => Promise<MediaObject>;
        getName: (callback?: Callback<string>) => Promise<string>;
        setName: (name: string, callback?: Callback<void>) => Promise<void>;
    }

    interface MediaElement {
        connect: (sink: MediaElement, callback?: Callback<void>) => Promise<void>;
        disconnect: (sink: MediaElement, callback?: Callback<void>) => Promise<void>;
        getSinkConnections: (callback?: Callback<ElementConnectionData[]>) => Promise<ElementConnectionData[]>;
        getSourceConnections: (callback?: Callback<ElementConnectionData[]>) => Promise<ElementConnectionData[]>;
    }

    interface MediaPipeline extends ClientInstance, MediaObject {
        getGstreamerDot: (callback?: Callback<string>) => Promise<string>;
        getLatencyStats: (callback?: Callback<boolean>) => Promise<boolean>;
        setLatencyStats: (callback?: Callback<string>) => Promise<string>;
    }

    interface WebRtcEndpoint extends ClientInstance, MediaObject, MediaElement {
        addIceCandidate: (candidate: RTCIceCandidate, callback?: Callback<void>) => Promise<void>;
        closeDataChannel: (channelId: number, callback?: Callback<void>) => Promise<void>;
        createDataChannel: (label?: string, ordered?: boolean, maxPacketLifeTime?: number, maxRetransmits?: number, protocol?: string, callback?: Callback<void>) => Promise<void>;
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
        getMediaState: (callback?: Callback<number>) => Promise<any>;
        setStunServerAddress: (server: string, callback?: Callback<void>) => Promise<void>;
        getStunServerAddress: (callback?: Callback<string>) => Promise<string>;
        setStunServerPort: (port: number, callback?: Callback<void>) => Promise<void>;
        getStunServerPort: (callback?: Callback<number>) => Promise<number>;
        setTurnUrl: (url: string, callback?: Callback<void>) => Promise<void>;
        getTurnUrl: (callback?: Callback<string>) => Promise<string>;
        processOffer: (offer: string, callback?: Callback<string>) => Promise<string>;
    }

    interface ElementConnectionData {
        source: WebRtcEndpoint;
        sink: WebRtcEndpoint;
        type: any;
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
}

declare const kurento: KurentoClient.Constructor;

export = kurento;
