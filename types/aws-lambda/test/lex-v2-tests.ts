import {
    LexV2Event,
    LexV2Result,
    LexV2Handler,
    LexV2Interpretation,
    LexV2Bot,
    LexV2Intent,
    LexV2Slot,
    LexV2SlotValue,
    LexV2SentimentResponse,
    LexV2SentimentScore,
    LexV2SessionState,
    LexV2ActiveContext,
    LexV2DialogAction,
} from 'aws-lambda';

const handler: LexV2Handler = async (event, context, callback) => {
    str = event.messageVersion;
    str = event.invocationSource;
    str = event.inputMode;
    str = event.responseContentType;
    str = event.sessionId;
    str = event.inputTranscript;
    let bot: LexV2Bot;
    bot = event.bot;
    str = bot.id;
    str = bot.name;
    str = bot.aliasId;
    str = bot.aliasName;
    str = bot.localeId;
    str = bot.version;
    let interpretation: LexV2Interpretation;
    interpretation = event.interpretations[0];
    let intent: LexV2Intent;
    intent = interpretation.intent;
    str = intent.confirmationState;
    str = intent.name;
    let slot: LexV2Slot;
    slot = intent.slots[str]!;
    strOrUndefined = slot.shape;
    let slotValue: LexV2SlotValue;
    slotValue = slot.value;
    strOrUndefined = slotValue.interpretedValue;
    str = slotValue.originalValue;
    str = slotValue.resolvedValues[0];
    str = intent.state;
    numOrUndefined = interpretation.nluConfidence;
    let sentimentResponse: LexV2SentimentResponse | undefined;
    sentimentResponse = interpretation.sentimentResponse;
    str = sentimentResponse!.sentiment;
    let sentimentScore: LexV2SentimentScore;
    sentimentScore = sentimentResponse!.sentimentScore;
    num = sentimentScore.mixed;
    num = sentimentScore.negative;
    num = sentimentScore.neutral;
    num = sentimentScore.positive;
    if (event.requestAttributes) {
        str = event.requestAttributes[str];
    }
    let sessionState: LexV2SessionState;
    sessionState = event.sessionState;
    let activeContext: LexV2ActiveContext | undefined;
    activeContext = sessionState.activeContexts?.[0];
    str = activeContext!.name;
    str = activeContext!.contextAttributes[str];
    num = activeContext!.timeToLive.timeToLiveInSeconds;
    num = activeContext!.timeToLive.turnsToLive;
    strOrUndefined = sessionState.sessionAttributes?.[str];
    let dialogAction: LexV2DialogAction | undefined;
    dialogAction = sessionState.dialogAction;
    strOrUndefined = dialogAction!.slotToElicit;
    str = dialogAction!.type;
    intent = sessionState.intent;
    str = sessionState.originatingRequestId;

    let result: LexV2Result;
    result = {
        sessionState: {
            dialogAction: {
                type: 'Close',
            },
            intent: {
                state: 'Fulfilled',
                name: 'MyIntent',
                slots: {
                    str: slot
                }
            },
        },
        messages: [
            {
                contentType: 'PlainText',
                content: 'Hello!'
            }
        ]
    };
    result.messages = [
        {
            contentType: 'ImageResponseCard',
            imageResponseCard: {
                title: 'title',
                subtitle: 'subtitle',
                imageUrl: 'url',
                buttons: [
                    {
                        text: 'text',
                        value: 'value'
                    }
                ]
            }
        }
    ];
    result.sessionState.sessionAttributes = {
        key: 'value'
    };

    callback(new Error());
    callback(null, result);
    return result;
};

const event1: LexV2Event = {
    sessionId: "111111111111111",
    inputTranscript: "7",
    interpretations: [
        {
            intent: {
                slots: {
                    Slot1: null,
                    Slot2: null,
                    Slot3: {
                        shape: "Scalar",
                        value: {
                            originalValue: "7",
                            resolvedValues: [
                                "7"
                            ],
                            interpretedValue: "7"
                        }
                    }
                },
                confirmationState: "None",
                name: "IntentName",
                state: "InProgress"
            },
            nluConfidence: 1
        },
        {
            intent: {
                slots: {},
                confirmationState: "None",
                name: "FallbackIntent",
                state: "InProgress"
            }
        }
    ],
    proposedNextState: {
        intent: {
            slots: {
                Slot1: null,
                Slot2: null,
                Slot3: {
                    shape: "Scalar",
                    value: {
                        originalValue: "7",
                        resolvedValues: [
                            "7"
                        ],
                        interpretedValue: "7"
                    }
                }
            },
            confirmationState: "None",
            name: "IntentName",
            state: "InProgress"
        },
        dialogAction: {
            slotToElicit: "Slot1",
            type: "ElicitSlot"
        }
    },
    responseContentType: "text/plain; charset=utf-8",
    invocationSource: "DialogCodeHook",
    messageVersion: "1.0",
    transcriptions: [
        {
            resolvedSlots: {
                Slot3: {
                    shape: "Scalar",
                    value: {
                        originalValue: "7",
                        resolvedValues: [
                            "7"
                        ]
                    }
                }
            },
            resolvedContext: {
                intent: "IntentName"
            },
            transcription: "7",
            transcriptionConfidence: 1
        }
    ],
    sessionState: {
        sessionAttributes: {
            attribute1: "1"
        },
        activeContexts: [],
        intent: {
            slots: {
                Slot1: null,
                Slot2: null,
                Slot3: {
                    shape: "Scalar",
                    value: {
                        originalValue: "7",
                        resolvedValues: [
                            "7"
                        ],
                        interpretedValue: "7"
                    }
                }
            },
            confirmationState: "None",
            name: "IntentName",
            state: "InProgress"
        },
        originatingRequestId: "11111111-1111-1111-1111-111111111111"
    },
    inputMode: "Text",
    bot: {
        aliasName: "string",
        aliasId: "string",
        name: "string",
        version: "DRAFT",
        localeId: "en_US",
        id: "string"
    }
};
