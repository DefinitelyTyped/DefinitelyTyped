// Type definitions for Alexa SDK for Node.js 1.0
// Project: https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs
// Definitions by:  Pete Beegle <https://github.com/petebeegle>
//                  Huw <https://github.com/hoo29>
//                  pascalwhoop <https://github.com/pascalwhoop>
//                  Ben <https://github.com/blforce>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function handler<T>(event: RequestBody<T>, context: Context, callback?: (err: any, response: any) => void): AlexaObject<T>;
export function CreateStateHandler(state: string, obj: any): any;
export let StateString: string;

export type ConfirmationStatuses = "NONE" | "DENIED" | "CONFIRMED";
export type DialogStates = "STARTED" | "IN_PROGRESS" | "COMPLETED";

export interface AlexaObject<T> extends Handler<T> {
    _event: any;
    _context: any;
    _callback: any;
    state: any;
    appId: any;
    response: any;
    resources: any;
    dynamoDBTableName: any;
    saveBeforeResponse: boolean;
    registerHandlers: (...handlers: Array<Handlers<T>>) => any;
    execute: () => void;
}

export interface Handlers<T> {
    [intent: string]: (this: Handler<T>) => void;
}

export interface Handler<T> {
    on: any;
    emit(event: string, ...args: any[]): boolean;
    emitWithState: any;
    state: any;
    handler: any;
    event: RequestBody<T>;
    attributes: any;
    context: any;
    name: any;
    isOverriden: any;
    t: (token: string, ...args: any[]) => void;
}

export interface Context {
    callbackWaitsForEmptyEventLoop: boolean;
    logGroupName: string;
    logStreamName: string;
    functionName: string;
    memoryLimitInMB: string;
    functionVersion: string;
    invokeid: string;
    awsRequestId: string;
}

export interface RequestBody<T> {
    version: string;
    session: Session;
    request: T;
}

export interface Session {
    new: boolean;
    sessionId: string;
    attributes: any;
    application: SessionApplication;
    user: SessionUser;
}

export interface SessionApplication {
    applicationId: string;
}

export interface SessionUser {
    userId: string;
    accessToken?: string;
}

export interface LaunchRequest extends Request { }

export interface IntentRequest extends Request {
    dialogState?: DialogStates;
    intent?: Intent;
}

export interface SessionEndedRequest extends Request {
    reason?: string;
}

export interface Request {
    type: "LaunchRequest" | "IntentRequest" | "SessionEndedRequest";
    requestId: string;
    timestamp: string;
    locale?: string;
}

export interface ResolutionStatus {
    code: string;
}

export interface ResolutionValue {
    name: string;
    id: string;
}

export interface ResolutionValueContainer {
    value: ResolutionValue;
}

export interface Resolution {
    authority: string;
    status: ResolutionStatus;
    values: ResolutionValueContainer[];
}

export interface Resolutions {
    resolutionsPerAuthority: Resolution[];
}

export interface SlotValue {
    confirmationStatus?: ConfirmationStatuses;
    name: string;
    value?: any;
    resolutions?: Resolutions;
}

export interface Intent {
    confirmationStatus?: ConfirmationStatuses;
    name: string;
    slots: Record<string, SlotValue>;
}

export interface ResponseBody {
    version: string;
    sessionAttributes?: any;
    response: Response;
}

export interface Response {
    outputSpeech?: OutputSpeech;
    card?: Card;
    reprompt?: Reprompt;
    shouldEndSession: boolean;
}

export interface OutputSpeech {
    type: "PlainText" | "SSML";
    text?: string;
    ssml?: string;
}

export interface Card {
    type: "Simple" | "Standard" | "LinkAccount";
    title?: string;
    content?: string;
    text?: string;
    image?: Image;
}

export interface Image {
    smallImageUrl: string;
    largeImageUrl: string;
}

export interface Reprompt {
    outputSpeech: OutputSpeech;
}
