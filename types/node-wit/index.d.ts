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
    value?: string | undefined;
    expressions?: string[] | undefined;
}

export interface WitEntity {
    id?: string | undefined;
    values?: WitEntityValue[] | undefined;
}

export interface WitContext {
    state?: string[] | undefined;
    reference_time?: string | undefined;
    timezone?: string | undefined;
    entities?: WitEntity[] | undefined;
    location?: string | undefined;
}

export interface WitRequest {
    sessionId?: string | undefined;
    context?: WitContext | undefined;
    text?: string | undefined;
    entities?: WitEntity[] | undefined;
}

export interface WitResponse {
    text?: string | undefined;
    quickReplies?: any;
}

export interface WitOption {
    accessToken: string;
    actions?: any;
    logger?: log.Logger | undefined;
}

export interface MessageResponseEntity {
    confidence?: number | undefined;
    value?: string | undefined;
    type?: string | undefined;
}

export interface WitIntent {
    id: string;
    name: string;
    confidence: number;
}

export interface MessageResponse {
    text: string;
    intents: WitIntent[];
    entities: any;
    traits: any;
}

export class Wit {
    constructor(option: WitOption);
    message(message: string, context: WitContext): Promise<MessageResponse>;
    converse(sessionId: string, message: string, context: WitContext, reset?: boolean): Promise<MessageResponse>;
    runActions(sessionId: string, message: string, context: WitContext, maxSteps?: number): Promise<WitContext>;
}
