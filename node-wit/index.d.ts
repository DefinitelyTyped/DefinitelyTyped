// Type definitions for node-wit 4.2
// Project: https://github.com/wit-ai/node-wit#readme
// Definitions by: Julien Dufresne <https://github.com/julienduf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="bluebird" />

import * as Promise from "bluebird";


export namespace log {

    class Logger {

        constructor(lvl: string);
    }

    const DEBUG = 'debug';
    const INFO = 'info';
    const WARN = 'warn';
    const ERROR = 'error';
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
    qickReplies?: Object;
}

export interface WitOption {

    accessToken?: string;
    actions?: Object;
    logger?: log.Logger;
}

export interface MessageResponseEntity {

    confidence?: number;
    value?: string;
}

export interface MessageResponse {

    msg_id: string;
    _text: string;
    entities: Array<MessageResponseEntity>;
}

export declare class Wit {

    constructor(option: WitOption);
    message(message: string, context: WitContext): Promise<MessageResponse>;
    converse(sessinId: string, message: string, context: WitContext, reset?: boolean): Promise<MessageResponse>;
    runActions(sessinId: string, message: string, context: WitContext, maxSteps?: number): Promise<WitContext>;
}