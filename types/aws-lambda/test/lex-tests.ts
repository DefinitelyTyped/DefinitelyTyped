import {
    LexDialogAction,
    LexDialogActionBase,
    LexDialogActionClose,
    LexDialogActionConfirmIntent,
    LexDialogActionDelegate,
    LexDialogActionElicitIntent,
    LexDialogActionElicitSlot,
    LexEvent,
    LexGenericAttachment,
    LexHandler,
    LexResult,
} from "aws-lambda";

// TODO: Update test to read all event properties, and write all result
//       properties, like the user will.

const handler: LexHandler = async (event, context, callback) => {
    lexEvent = event;

    let result: LexResult;
    result = {
        dialogAction: lexDialogAction,
    };
    result = {
        sessionAttributes: {
            attrib1: 'Value One',
        },
        dialogAction: {
            type: 'Close',
            fulfillmentState: 'Failed',
        },
    };

    callback(new Error());
    callback(null, result);
    return result;
};

declare let lexEvent: LexEvent;
lexEvent = {
    currentIntent: {
        name: 'intent-name',
        slots: {
            slot1: null,
            slot2: 'value2',
        },
        slotDetails: {
            slot1: {
                resolutions: [{ value: 'value1' }],
                originalValue: 'originalValue',
            },
        },
        confirmationStatus: 'None',
    },
    bot: {
        name: 'bot name',
        alias: 'bot alias',
        version: 'bot version',
    },
    userId: 'User ID specified in the POST request to Amazon Lex.',
    inputTranscript: 'Text used to process the request',
    invocationSource: 'FulfillmentCodeHook',
    outputDialogMode: 'Text',
    messageVersion: '1.0',
    sessionAttributes: {
        key1: 'value1',
        key2: 'value2',
    },
    requestAttributes: {
        key1: 'value1',
        key2: 'value2',
    },
};

declare let lexDialogAction: LexDialogAction;
declare let lexDialogActionBase: LexDialogActionBase;
declare let lexDialogActionClose: LexDialogActionClose;
declare let lexDialogActionConfirmIntent: LexDialogActionConfirmIntent;
declare let lexDialogActionDelegate: LexDialogActionDelegate;
declare let lexDialogActionElicitIntent: LexDialogActionElicitIntent;
declare let lexDialogActionElicitSlot: LexDialogActionElicitSlot;
declare let lexGenericAttachment: LexGenericAttachment;

str = lexGenericAttachment.title;
str = lexGenericAttachment.subTitle;
str = lexGenericAttachment.imageUrl;
str = lexGenericAttachment.attachmentLinkUrl;
str = lexGenericAttachment.buttons[0].text;
str = lexGenericAttachment.buttons[0].value;

lexDialogAction.type === 'Close';
lexDialogAction.type === 'ConfirmIntent';
lexDialogAction.type === 'Delegate';
lexDialogAction.type === 'ElicitIntent';
lexDialogAction.type === 'ElicitSlot';

lexDialogActionBase.message!.contentType === 'CustomPayload';
lexDialogActionBase.message!.contentType === 'PlainText';
lexDialogActionBase.message!.contentType === 'SSML';
str = lexDialogActionBase.message!.content;
num = lexDialogActionBase.responseCard!.version;
lexDialogActionBase.responseCard!.contentType === 'application/vnd.amazonaws.card.generic';
// $ExpectType LexGenericAttachment
lexDialogActionBase.responseCard!.genericAttachments[0];

lexDialogActionClose.type === 'Close';
lexDialogActionClose.fulfillmentState === 'Failed';
lexDialogActionClose.fulfillmentState === 'Fulfilled';

lexDialogActionConfirmIntent.type === 'ConfirmIntent';
str = lexDialogActionConfirmIntent.intentName;
strOrNull = lexDialogActionConfirmIntent.slots['example'];

lexDialogActionDelegate.type === 'Delegate';
strOrNull = lexDialogActionDelegate.slots['example'];

lexDialogActionElicitIntent.type === 'ElicitIntent';
lexDialogActionElicitSlot.type === 'ElicitSlot';
strOrNull = lexDialogActionElicitSlot.slots['example'];
str = lexDialogActionElicitSlot.slotToElicit;
str = lexDialogActionElicitSlot.intentName;
