// Type definitions for @pollyjs/utils 2.6
// Project: https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/utils
// Definitions by: feinoujc <https://github.com/feinoujc>
//                 Offir Golan <https://github.com/offirgolan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export enum MODES {
    RECORD = 'record',
    REPLAY = 'replay',
    PASSTHROUGH = 'passthrough',
    STOPPED = 'stopped',
}

export enum ACTIONS {
    RECORD = 'record',
    REPLAY = 'replay',
    INTERCEPT = 'intercept',
    PASSTHROUGH = 'passthrough',
}

export enum EXPIRY_STRATEGIES {
    RECORD = 'record',
    WARN = 'warn',
    ERROR = 'error',
}
