import { Callback, Handler } from "../handler";

export type LexHandler = Handler<LexEvent, LexResult>;
export type LexCallback = Callback<LexResult>;

export interface LexEventSlots {
    [name: string]: string | undefined | null;
}

export interface LexEventSessionAttributes {
    [key: string]: string | undefined;
}

export interface LexEventRequestAttributes {
    [key: string]: string | undefined;
}

// Lex
// https://docs.aws.amazon.com/lambda/latest/dg/invoking-lambda-function.html#supported-event-source-lex
export interface LexEvent {
    currentIntent: {
        name: string;
        slots: LexEventSlots;
        slotDetails: LexSlotDetails;
        confirmationStatus: 'None' | 'Confirmed' | 'Denied';
    };
    bot: {
        name: string;
        alias: string;
        version: string;
    };
    userId: string;
    inputTranscript: string;
    invocationSource: 'DialogCodeHook' | 'FulfillmentCodeHook';
    outputDialogMode: 'Text' | 'Voice';
    messageVersion: '1.0';
    sessionAttributes: LexEventSessionAttributes;
    requestAttributes: LexEventRequestAttributes | null;
}

export interface LexSlotResolution {
    value: string;
}

export interface LexSlotDetail {
    // "at least 1 but no more than 5 items"
    resolutions: [LexSlotResolution, LexSlotResolution?, LexSlotResolution?, LexSlotResolution?, LexSlotResolution?];
    originalValue: string;
}

export interface LexSlotDetails {
    [name: string]: LexSlotDetail;
}

export interface LexGenericAttachment {
    title: string;
    subTitle: string;
    imageUrl: string;
    attachmentLinkUrl: string;
    buttons: Array<{
        text: string;
        value: string;
    }>;
}

export interface LexDialogActionBase {
    type: 'Close' | 'ElicitIntent' | 'ElicitSlot' | 'ConfirmIntent';
    message?: {
        contentType: 'PlainText' | 'SSML' | 'CustomPayload';
        content: string;
    } | undefined;
    responseCard?: {
        version: number;
        contentType: 'application/vnd.amazonaws.card.generic';
        genericAttachments: LexGenericAttachment[];
    } | undefined;
}

export interface LexDialogActionClose extends LexDialogActionBase {
    type: 'Close';
    fulfillmentState: 'Fulfilled' | 'Failed';
}

export interface LexDialogActionElicitIntent extends LexDialogActionBase {
    type: 'ElicitIntent';
}

export interface LexDialogActionElicitSlot extends LexDialogActionBase {
    type: 'ElicitSlot';
    intentName: string;
    slots: { [name: string]: string | null };
    slotToElicit: string;
}

export interface LexDialogActionConfirmIntent extends LexDialogActionBase {
    type: 'ConfirmIntent';
    intentName: string;
    slots: { [name: string]: string | null };
}

export interface LexDialogActionDelegate {
    type: 'Delegate';
    slots: { [name: string]: string | null };
}

export type LexDialogAction =
    | LexDialogActionClose
    | LexDialogActionElicitIntent
    | LexDialogActionElicitSlot
    | LexDialogActionConfirmIntent
    | LexDialogActionDelegate;

export interface LexResult {
    sessionAttributes?: { [key: string]: string } | undefined;
    dialogAction: LexDialogAction;
}
