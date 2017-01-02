// Type definitions for node-wit 4.2
// Project: https://github.com/wit-ai/node-wit#readme
// Definitions by: Julien Dufresne <https://github.com/julienduf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Promise from "bluebird";

export namespace log {

    declare class Logger {

        constructor(lvl: string);
    }

    declare const DEBUG = 'debug';
    declare const INFO = 'info';
    declare const WARN = 'warn';
    declare const ERROR = 'error';
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

    sessinId?: string;
    context?: WitContext;
    text?: string;
    entities?: WitEntity[];
}

export interface WitResponse {
    text?: string;
    qickReplies?: any;
}

export interface WitOption {

    accessToken?: string;
    actions?: any;
    logger?: log.Logger;
}

export interface MessageResponseEntity {

    confidence?: number;
    value?: string;
}

export interface MessageResponse {

    msg_id: string;
    _text: string;
    entities: MessageResponseEntity[];
}

export declare class Wit {

    constructor(option: WitOption);
    message(message: string, context: WitContext): Promise<MessageResponse>;
    converse(sessinId: string, message: string, context: WitContext, reset?: boolean): Promise<MessageResponse>;
    runActions(sessinId: string, message: string, context: WitContext, maxSteps?: number): Promise<WitContext>;
}
