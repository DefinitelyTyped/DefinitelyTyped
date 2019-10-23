// Type definitions for alexa-voice-service 0.0
// Project: https://github.com/miguelmota/alexa-voice-service
// Definitions by: Dolan Miu <https://github.com/dolanmiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace AVS;
export = AVS;

declare namespace AVS {
    enum EventTypes {
        RECORD_STOP, RECORD_START, ERROR, TOKEN_INVALID, LOG, LOGIN, LOGOUT, TOKEN_SET, REFRESH_TOKEN_SET
    }

    interface AVSParams {
        debug: boolean;
        clientId: string;
        clientSecret: string;
        deviceId: string;
        refreshToken: string;
    }

    interface TokenResponse {
        token: string;
        refreshToken: string;
    }

    class Player {
        on(eventType: Player.EventTypes, callback?: () => void): void;
    }

    namespace Player {
        enum EventTypes {
            LOG, ERROR, PLAY, REPLAY, PAUSE, STOP, ENQUEUE, DEQUE
        }
    }
}

declare class AVS {
    player: AVS.Player;
    constructor(params: AVS.AVSParams);

    on(eventType: AVS.EventTypes, callback?: () => void): void;
    refreshToken(): Promise<AVS.TokenResponse>;
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
