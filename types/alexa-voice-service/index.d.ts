// Type definitions for alexa-voice-service 0.0
// Project: https://github.com/miguelmota/alexa-voice-service.js
// Definitions by: Dolan Miu <https://github.com/dolanmiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export enum EventTypes {
    RECORD_STOP, RECORD_START, ERROR, TOKEN_INVALID, LOG, LOGIN, LOGOUT, TOKEN_SET, REFRESH_TOKEN_SET
}

interface AVSParams {
    debug: boolean,
    clientId: string,
    clientSecret: string,
    deviceId: string,
    refreshToken: string,
}

export class Player {
    /*enum EventTypes {
        LOG, ERROR, PLAY, REPLAY, PAUSE, STOP, ENQUEUE, DEQUE
    }*/
}

export class AVS {
    constructor(params: AVSParams);
}
