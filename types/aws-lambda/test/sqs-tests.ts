import { SQSEvent, SQSHandler } from "aws-lambda";

// TODO: Update test to read all event properties, like the user will.

const handler: SQSHandler = async (event, context, callback) => {
    str = event.Records[0].messageId;
    anyObj = event.Records[0].body;
    strOrUndefined = event.Records[0].messageAttributes.testAttr.stringValue;
    strOrUndefined = event.Records[0].messageAttributes.testAttr.binaryValue;
    str = event.Records[0].messageAttributes.testAttr.dataType;

    callback();
    callback(new Error());
};

// See https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-sqs
const event: SQSEvent = {
    Records: [
        {
            messageId: 'c80e8021-a70a-42c7-a470-796e1186f753',
            receiptHandle: 'AQEBJQ+/u6NsnT5t8Q/VbVxgdUl4TMKZ5FqhksRdIQvLBhwNvADoBxYSOVeCBXdnS9P+',
            body: '{"foo":"bar"}',
            attributes: {
                ApproximateReceiveCount: '3',
                SentTimestamp: '1529104986221',
                SenderId: '594035263019',
                ApproximateFirstReceiveTimestamp: '1529104986230',
            },
            messageAttributes: {
                testAttr: {
                    stringValue: '100',
                    binaryValue: 'base64Str',
                    stringListValues: [],
                    binaryListValues: [],
                    dataType: 'Number',
                },
            },
            md5OfBody: '9bb58f26192e4ba00f01e2e7b136bbd8',
            eventSource: 'aws:sqs',
            eventSourceARN: 'arn:aws:sqs:us-west-2:594035263019:NOTFIFOQUEUE',
            awsRegion: 'us-west-2',
        },
    ],
};
