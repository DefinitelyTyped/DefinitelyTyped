// Type definitions for Alexa SDK for Node.js v1.0.3
// Project: https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs
// Definitions by: Pete Beegle <https://github.com/petebeegle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function handler(event: RequestBody, context: Context, callback?: Function): AlexaObject;
export function CreateStateHandler(state: string, obj: any): any;
export var StateString: string;

interface AlexaObject {
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

interface Handlers {
    [intent: string]: (this: Handler) => void;
}

interface Handler {
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
}

interface Context {
    callbackWaitsForEmptyEventLoop: boolean;
    logGroupName: string;
    logStreamName: string;
    functionName: string;
    memoryLimitInMB: string;
    functionVersion: string;
    invokeid: string;
    awsRequestId: string;
}

interface RequestBody {
    version: string;
    session: Session;
    request: LaunchRequest | IntentRequest | SessionEndedRequest;
}

interface Session {
    new: boolean;
    sessionId: string;
    attributes: any;
    application: SessionApplication;
    user: SessionUser;
}

interface SessionApplication {
    applicationId: string;
}

interface SessionUser {
    userId: string;
    accessToken: string;
}

interface LaunchRequest extends IRequest { }

interface IntentRequest extends IRequest {
    intent: Intent;
}

interface Intent {
    name: string;
    slots: any;
}

interface SessionEndedRequest extends IRequest {
    reason: string;
}

interface IRequest {
    type: "LaunchRequest" | "IntentRequest" | "SessionEndedRequest";
    requestId: string;
    timeStamp: string;
}

interface ResponseBody {
    version: string;
    sessionAttributes?: any;
    response: Response;
}

interface Response {
    outputSpeech?: OutputSpeech;
    card?: Card;
    reprompt?: Reprompt;
    shouldEndSession: boolean;
}

interface OutputSpeech {
    type: "PlainText" | "SSML";
    text?: string;
    ssml?: string;
}

interface Card {
    type: "Simple" | "Standard" | "LinkAccount";
    title?: string;
    content?: string;
    text?: string;
    image?: Image;
}

interface Image {
    smallImageUrl: string;
    largeImageUrl: string;
}

interface Reprompt {
    outputSpeech: OutputSpeech;
}


