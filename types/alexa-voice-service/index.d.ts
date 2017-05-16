// Type definitions for alexa-voice-service 0.0
// Project: https://github.com/miguelmota/alexa-voice-service.js
// Definitions by: Dolan Miu <https://github.com/dolanmiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export enum EventTypes {
    RECORD_STOP, RECORD_START, ERROR, TOKEN_INVALID, LOG, LOGIN, LOGOUT, TOKEN_SET, REFRESH_TOKEN_SET
}

export interface AVSParams {
    debug: boolean;
    clientId: string;
    clientSecret: string;
    deviceId: string;
    refreshToken: string;
}

export interface TokenResponse {
    token: string;
    refreshToken: string;
}

export class Player {
    /*enum EventTypes {
        LOG, ERROR, PLAY, REPLAY, PAUSE, STOP, ENQUEUE, DEQUE
    }*/
    on(eventType: EventTypes, callback?: () => void): void;
}

export class AVS {
    player: Player;
    constructor(params: AVSParams);

    on(eventType: EventTypes, callback?: () => void): void;
    refreshToken(): Promise<TokenResponse>;
    requestMic(): Promise<any>;
    startRecording(): Promise<void>;
    stopRecording(): Promise<DataView | undefined>;
    sendAudio(dataView: DataView): Promise<{
        xhr: any, response: {
            httpVersion: string,
            statusCode: string,
            statusMessage: string,
            method: string,
            url: string,
            headers: string,
            body: string,
            boundary: string,
            multipart: string
        }
    }>;
}
