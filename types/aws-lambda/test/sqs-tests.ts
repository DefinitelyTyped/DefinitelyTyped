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

const handlerWithResponse: SQSHandler = (event, context, callback) => {
    callback(
        null,
        {
            batchItemFailures: [
                {
                    itemIdentifier: event.Records[0].messageId
                }
            ]
        });
};

// See https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-sqs
const event: SQSEvent = {
    Records: [
        {
            messageId: 'c80e8021-a70a-42c7-a470-796e1186f753',
            receiptHandle: 'AQEBJQ+/u6NsnT5t8Q/VbVxgdUl4TMKZ5FqhksRdIQvLBhwNvADoBxYSOVeCBXdnS9P+',
            body: '{"foo":"bar"}',
            attributes: {
                AWSTraceHeader: 'Root=1-5e58e4c3-71b539e3d6bd4aa29600bf67;Sampled=1',
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
                testAttr2: {
                    stringValue: '100',
                    binaryValue: 'base64Str',
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

const fifoEvent: SQSEvent = {
    Records: [
        {
            messageId: "11d6ee51-4cc7-4302-9e22-7cd8afdaadf5",
            receiptHandle: "AQEBBX8nesZEXmkhsmZeyIE8iQAMig7qw...",
            body: "Test message.",
            attributes: {
                ApproximateReceiveCount: "1",
                SentTimestamp: "1573251510774",
                SequenceNumber: "18849496460467696128",
                MessageGroupId: "1",
                SenderId: "AIDAIO23YVJENQZJOL4VO",
                MessageDeduplicationId: "1",
                ApproximateFirstReceiveTimestamp: "1573251510774"
            },
            messageAttributes: {},
            md5OfBody: "e4e68fb7bd0e697a0ae8f1bb342846b3",
            eventSource: "aws:sqs",
            eventSourceARN: "arn:aws:sqs:us-east-2:123456789012:fifo.fifo",
            awsRegion: "us-east-2"
        }
    ]
};
