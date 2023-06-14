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
    proposedNextState: {
        dialogAction: LexV2DialogAction;
        intent: LexV2Intent;
    };
    requestAttributes?: Record<string, string>;
    sessionState: LexV2SessionState;
    transcriptions: LexV2Transcription[];
}

export interface LexV2Bot {
    id: string;
    name: string;
    aliasId: string;
    aliasName: string;
    localeId: string;
    version: string; // 'DRAFT' | `${number}`
}

export interface LexV2Interpretation {
    intent: LexV2Intent;
    nluConfidence?: number;
    sentimentResponse?: LexV2SentimentResponse;
}

export interface LexV2Intent {
    confirmationState: 'Confirmed' | 'Denied' | 'None';
    name: string;
    slots: LexV2Slots;
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
    sessionAttributes?: Record<string, string>;
    dialogAction?: LexV2DialogAction;
    intent: LexV2Intent;
    originatingRequestId: string;
}

export interface LexV2ActiveContext {
    name: string;
    contextAttributes: Record<string, string>;
    timeToLive: {
        timeToLiveInSeconds: number;
        turnsToLive: number;
    };
}

export type LevV2DialogActionWithoutSlot =
    | { type: 'Close' }
    | { type: 'ConfirmIntent' }
    | { type: 'Delegate' }
    | { type: 'ElicitIntent' };

export type LexV2DialogAction =
    | (LevV2DialogActionWithoutSlot & { slotToElicit?: never })
    | { type: 'ElicitSlot'; slotToElicit: string };

export type LexV2ResultDialogAction =
    | (LevV2DialogActionWithoutSlot & { slotToElicit?: never })
    | { type: 'ElicitSlot'; slotToElicit: string; slotElicitationStyle: 'Default' | 'SpellByLetter' | 'SpellByWord' };

export interface LexV2Result {
    sessionState: {
        sessionAttributes?: Record<string, string>;
        dialogAction: LexV2ResultDialogAction;
        intent?: {
            name?: string;
            state: LexV2IntentState;
            slots?: LexV2Slots;
        };
    };
    messages?: LexV2Message[];
}

export type LexV2Message = LexV2ContentMessage | LexV2ImageResponseCardMessage;

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

export type LexV2Slot = LexV2ScalarSlotValue | LexV2ListSlotValue;
export type LexV2Slots = Record<string, LexV2Slot | null>;

export interface LexV2ScalarSlotValue {
    shape: 'Scalar';
    value: LexV2SlotValue;
}

export interface LexV2ListSlotValue {
    shape: 'List';
    value: LexV2SlotValue;
    values: LexV2ScalarSlotValue[];
}

export interface LexV2SlotValue {
    interpretedValue?: string;
    originalValue: string;
    resolvedValues: string[];
}

export interface LexV2Transcription {
    transcription: string;
    transcriptionConfidence: number;
    resolvedContext: {
        intent: string;
    };
    resolvedSlots: LexV2Slots;
}
