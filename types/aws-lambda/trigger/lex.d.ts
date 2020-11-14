import { Callback, Handler } from "../handler";

export type LexHandler = Handler<LexEvent, LexResult>;
export type LexCallback = Callback<LexResult>;

// Lex
// https://docs.aws.amazon.com/lambda/latest/dg/invoking-lambda-function.html#supported-event-source-lex
export interface LexEvent {
    currentIntent: {
        name: string;
        slots: { [name: string]: string | null };
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
    sessionAttributes: { [key: string]: string };
    requestAttributes: { [key: string]: string } | null;
}

export interface LexSlotResolution {
    value: string;
}

export interface LexSlotDetails {
    [name: string]: {
        // The following line only works in TypeScript Version: 3.0, The array should have at least 1 and no more than 5 items
        // resolutions: [LexSlotResolution, LexSlotResolution?, LexSlotResolution?, LexSlotResolution?, LexSlotResolution?];
        resolutions: LexSlotResolution[];
        originalValue: string;
    };
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
    };
    responseCard?: {
        version: number;
        contentType: 'application/vnd.amazonaws.card.generic';
        genericAttachments: LexGenericAttachment[];
    };
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
    sessionAttributes?: { [key: string]: string };
    dialogAction: LexDialogAction;
}
