import { i18n } from "../i18next";
import { ResponseBuilder } from "./responseBuilder";
export let StateString: string;

export type ConfirmationStatuses = "NONE" | "DENIED" | "CONFIRMED";
export type DialogStates = "STARTED" | "IN_PROGRESS" | "COMPLETED";

export interface CardImage {
    smallImageUrl: string;
    largeImageUrl: string;
}
export interface Image {
    smallImageUrl: string;
    largeImageUrl: string;
    contentDescription: string;
    sources: Array<{ url: string, widthPixels: number, heightPixels: number, size: string }>;
}
export type TextField = {
    text: string,
    type: string
};
export type TextContent = {
    primaryText: TextField,
    secondaryText: TextField,
    tertiaryText: TextField,
}
export type ListItem = { image: Image; token: string; textContent: TextContent; };
export type Template = {
    title: string;
    token: string;
    backgroundImage: Image;
    backButton: string;
    type: string;
    image: Image;
    listItems: ListItem[];
};

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
    i18n: i18n,
    locale: any,
    event: RequestBody<T>;
    attributes: any;
    context: any;
    callback: Function;
    name: any;
    isOverriden: any;
    t: (token: string, ...args: any[]) => void;
    response: ResponseBuilder;
}
export enum PLAYER_ACTIVITY {
    IDLE = 'IDLE',
    PAUSED = 'PAUSED',
    PLAYING = 'PLAYING',
    BUFFER_UNDERRUN = 'BUFFER_UNDERRUN',
    FINISHED = 'FINISHED',
    STOPPED = 'STOPPED'
}
export interface Context {
    System: System
    AudioPlayer: AudioPlayer
}
export interface System {
    apiAccessToken: string;
    apiEndpoint: string;
    application: any;
    device: any;
    user: any;
}
export interface AudioPlayer {
    token: string;
    offsetInMilliseconds: number;
    playerActivity: PLAYER_ACTIVITY;
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
    /**
     * @deprecated
     */
    permissions: any;
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
    directives?: any;
    shouldEndSession?: boolean;
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

export interface Reprompt {
    outputSpeech: OutputSpeech;
}