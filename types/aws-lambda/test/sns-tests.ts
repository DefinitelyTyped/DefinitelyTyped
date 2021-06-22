import { SNSEventRecord, SNSHandler, SNSMessage, SNSMessageAttribute, SNSMessageAttributes } from "aws-lambda";

const handler: SNSHandler = async (event, context, callback) => {
    const record: SNSEventRecord = event.Records[num];

    str = record.EventSource;
    str = record.EventSubscriptionArn;
    str = record.EventVersion;
    const message: SNSMessage = record.Sns;

    str = message.SignatureVersion;
    str = message.Timestamp;
    str = message.Signature;
    str = message.SigningCertUrl;
    str = message.MessageId;
    str = message.Message;
    const attributes: SNSMessageAttributes = message.MessageAttributes;
    str = message.Type;
    str = message.UnsubscribeUrl;
    str = message.TopicArn;
    str = message.Subject;

    const attribute: SNSMessageAttribute = attributes[str];
    str = attribute.Type;
    str = attribute.Value;

    callback();
    callback(new Error());
};
