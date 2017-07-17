// Type definitions for node-wit 4.2
// Project: https://github.com/wit-ai/node-wit#readme
// Definitions by: Julien Dufresne <https://github.com/julienduf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace log {
    class Logger {
        constructor(level: string);
    }

    const DEBUG: string;
    const INFO: string;
    const WARN: string;
    const ERROR: string;
}

export interface WitEntityValue {
    value?: string;
    expressions?: string[];
}

export interface WitEntity {
    id?: string;
    values?: WitEntityValue[];
}

export interface WitContext {
    state?: string[];
    reference_time?: string;
    timezone?: string;
    entities?: WitEntity[];
    location?: string;
}

export interface WitRequest {
    sessionId?: string;
    context?: WitContext;
    text?: string;
    entities?: WitEntity[];
}

export interface WitResponse {
    text?: string;
    quickReplies?: any;
}

export interface WitOption {
    accessToken: string;
    actions?: any;
    logger?: log.Logger;
}

export interface MessageResponseEntity {
    confidence?: number;
    value?: string;
    type?: string;
}

export interface MessageResponse {
    msg_id: string;
    _text: string;
    entities: any;
}

export class Wit {
    constructor(option: WitOption);
    message(message: string, context: WitContext): Promise<MessageResponse>;
    converse(sessionId: string, message: string, context: WitContext, reset?: boolean): Promise<MessageResponse>;
    runActions(sessionId: string, message: string, context: WitContext, maxSteps?: number): Promise<WitContext>;
}
