// Type definitions for kurento-client 6.12
// Project: https://github.com/Kurento/kurento-client-js, https://www.kurento.org
// Definitions by: James Hill <https://github.com/jhdevuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface KurentoClient {
    id: string;
    create: (type: 'MediaPipeline' | 'WebRtcEndpoint') => Promise<KurentoClient>;
    connect: (client: KurentoClient, callback: (error: Error) => void) => void;
    release: () => void;
    addIceCandidate: (candidate: RTCIceCandidate) => KurentoClient;
    processOffer: (sdpOffer: string) => Promise<string>;
    gatherCandidates: (callback: (error: Error) => void) => void;
    getMediaobjectById: (objectId: string) => Promise<KurentoClient>
    on: (event: 'OnIceCandidate', callback: (data: any) => void) => void;
}

declare module 'kurento-client' {
    interface Options {
        failAfter: number;
        enableTransactions: boolean;
        useImplicitTransactions: boolean;
        strict: boolean;
        request_timeout: number;
        response_timeout: number;
        duplicates_timeout: number;
        access_token: string;
        socket: any;
    }

    interface Kurento {
        (ws_uri: string, options?: Options): Promise<KurentoClient>;
        getComplexType: (complex: 'IceCandidate') => (value: any) => any;
    }

    const kurento: Kurento;

    export = kurento;
}
