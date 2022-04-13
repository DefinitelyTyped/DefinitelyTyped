import { Callback, Handler } from '../handler';

export type LexV2Handler = Handler<LexV2Event, LexV2Result>;
export type LexV2Callback = Callback<LexV2Result>;

// Lex V2
// https://docs.aws.amazon.com/lexv2/latest/dg/lambda.html
export interface LexV2Event {
    messageVersion: string;
    invocationSource: 'DialogCodeHook' | 'FulfillmentCodeHook';
    inputMode: 'DTMF' | 'Speech' | 'Text';
    responseContentType: string;
    sessionId: string;
    inputTranscript: string;
    bot: LexV2Bot;
    interpretations: LexV2Interpretation[];
    requestAttributes: { [key: string]: string };
    sessionState: LexV2SessionState;
}

export interface LexV2Bot {
    id: string;
    name: string;
    aliasId: string;
    aliasName: string;
    localeId: string;
    version: string;
}

export interface LexV2Interpretation {
    intent: LexV2Intent;
    nluConfidence?: number;
    sentimentResponse?: LexV2SentimentResponse;
}

export interface LexV2Intent {
    confirmationState: 'Confirmed' | 'Denied' | 'None';
    name: string;
    slots: { [name: string]: LexV2Slot };
    state: LexV2IntentState;
    kendraResponse?: any;
}

export type LexV2IntentState =
    | 'Failed'
    | 'Fulfilled'
    | 'FulfillmentInProgress'
    | 'InProgress'
    | 'ReadyForFulfillment'
    | 'Waiting';

export interface LexV2Slot {
    shape?: string;
    value: LexV2SlotValue;
}

export interface LexV2SlotValue {
    interpretedValue: string;
    originalValue: string;
    resolvedValues: string[];
}

export interface LexV2SentimentResponse {
    sentiment: string;
    sentimentScore: LexV2SentimentScore;
}

export interface LexV2SentimentScore {
    mixed: number;
    negative: number;
    neutral: number;
    positive: number;
}

export interface LexV2SessionState {
    activeContexts?: LexV2ActiveContext[];
    sessionAttributes?: { [key: string]: string };
    dialogAction?: LexV2DialogAction;
    intent: LexV2Intent;
    originatingRequestId: string;
}

export interface LexV2ActiveContext {
    name: string;
    contextAttributes: { [key: string]: string };
    timeToLive: {
        timeToLiveInSeconds: number;
        turnsToLive: number
    };
}

export interface LexV2DialogAction {
    slotToElicit?: string;
    type: 'Close' | 'ConfirmIntent' | 'Delegate' | 'ElicitIntent' | 'ElicitSlot';
}

export interface LexV2ResultDialogAction extends LexV2DialogAction {
    slotElicitationStyle?: 'Default' | 'SpellByLetter' | 'SpellByWord';
}

export interface LexV2Result {
    sessionState: {
        sessionAttributes?: { [key: string]: string };
        dialogAction: LexV2ResultDialogAction;
        intent?: {
            name?: string;
            state: LexV2IntentState;
            slots?: { [name: string]: LexV2Slot };
        };
    };
    messages?: LexV2Message[];
}

export type LexV2Message =
    | LexV2ContentMessage
    | LexV2ImageResponseCardMessage;

export interface LexV2ContentMessage {
    contentType: 'CustomPayload' | 'PlainText' | 'SSML';
    content: string;
}

export interface LexV2ImageResponseCardMessage {
    contentType: 'ImageResponseCard';
    imageResponseCard: LexV2ImageResponseCard;
}

export interface LexV2ImageResponseCard {
    title: string;
    subtitle?: string;
    imageUrl?: string;
    buttons?: LexV2ImageResponseCardButton[];
}

export interface LexV2ImageResponseCardButton {
    text: string;
    value: string;
}
