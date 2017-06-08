// Type definitions for Alexa SDK for Node.js 1.0
// Project: https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs
// Definitions by:  Pete Beegle <https://github.com/petebeegle>
//                  Huw <https://github.com/hoo29>
//                  pascalwhoop <https://github.com/pascalwhoop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function handler(event: RequestBody, context: Context, callback?: (err: any, response: any) => void ): AlexaObject;
export function CreateStateHandler(state: string, obj: any): any;
export let StateString: string;

export type ConfirmationStatuses = "NONE" | "DENIED" | "CONFIRMED";
export type DialogStates = "STARTED" | "IN_PROGRESS" | "COMPLETED";

export interface AlexaObject extends Handler {
    _event: any;
    _context: any;
    _callback: any;
    state: any;
    appId: any;
    response: any;
    dynamoDBTableName: any;
    saveBeforeResponse: boolean;
    registerHandlers: (...handlers: Handlers[]) => any;
    execute: () => void;
}

export interface Handlers {
    [intent: string]: (this: Handler) => void;
}

export interface Handler {
    on: any;
    emit(event: string, ...args: any[]): boolean;
    emitWithState: any;
    state: any;
    handler: any;
    event: RequestBody;
    attributes: any;
    context: any;
    name: any;
    isOverriden: any;
    t: (token: string) => void;
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

export interface RequestBody {
    version: string;
    session: Session;
    request: LaunchRequest | IntentRequest | SessionEndedRequest;
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
    accessToken: string;
}

export interface LaunchRequest extends Request { }

export interface IntentRequest extends Request {
    dialogState: DialogStates;
    intent: Intent;
}

export interface SlotValue {
    confirmationStatus: ConfirmationStatuses;
    name: string;
    value?: any;
}

export interface Intent {
    confirmationStatus: ConfirmationStatuses;
    name: string;
    slots: Record<string, SlotValue>;
}

export interface SessionEndedRequest extends Request {
    reason: string;
}

export interface Request {
    type: "LaunchRequest" | "IntentRequest" | "SessionEndedRequest";
    requestId: string;
    timeStamp: string;
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
