// Type definitions for kurento-client 6.12
// Project: https://github.com/Kurento/kurento-client-js, https://www.kurento.org
// Definitions by: James Hill <https://github.com/jhdevuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface IOptions {
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

type CreateTypes = 'MediaPipeline' | 'WebRtcEndpoint';
type EventTypes = 'OnIceCandidate';
type ComplexTypes = 'IceCandidate'

export declare class KurentoClient {
    create: (type: CreateTypes) => KurentoClient;
    addIceCandidate: (candidate: RTCIceCandidate) => KurentoClient;
    processOffer: (sdpOffer: string) => Promise<string>;
    gatherCandidates: (callback: (error: Error) => void) => void;
    getMediaobjectById: (objectId: string) => Promise<KurentoClient>
    on: (event: EventTypes, callback: (data: any) => void) => void;
}

declare const client: (ws_uri: string, options: IOptions) => Promise<KurentoClient>;
declare const getComplexType: (complex: ComplexTypes) => (value: any) => any;

export default client;

export {
    getComplexType
}
