import {
    FirehoseRecordMetadata,
    FirehoseRecordTransformationStatus,
    FirehoseTransformationHandler, FirehoseTransformationResult,
    KinesisStreamHandler,
    KinesisStreamRecord,
    KinesisStreamRecordPayload,
} from "aws-lambda";

const handler: KinesisStreamHandler = async (event, context, callback) => {
    let kinesisStreamRecord: KinesisStreamRecord;
    let kinesisStreamRecordPayload: KinesisStreamRecordPayload;

    kinesisStreamRecord = event.Records[num];

    str = kinesisStreamRecord.awsRegion;
    str = kinesisStreamRecord.eventID;
    str = kinesisStreamRecord.eventName;
    str = kinesisStreamRecord.eventSource;
    str = kinesisStreamRecord.eventSourceARN;
    str = kinesisStreamRecord.eventVersion;
    str = kinesisStreamRecord.invokeIdentityArn;
    kinesisStreamRecordPayload = kinesisStreamRecord.kinesis;

    num = kinesisStreamRecordPayload.approximateArrivalTimestamp;
    str = kinesisStreamRecordPayload.data;
    str = kinesisStreamRecordPayload.kinesisSchemaVersion;
    str = kinesisStreamRecordPayload.partitionKey;
    str = kinesisStreamRecordPayload.sequenceNumber;

    callback();
    callback(new Error());
};

const firehoseHandler: FirehoseTransformationHandler = async (event, context, callback) => {
    let firehoseRecordMetadata: FirehoseRecordMetadata | undefined;

    str = event.records[0].recordId;
    firehoseRecordMetadata = event.records[0].kinesisRecordMetadata;

    if (firehoseRecordMetadata) {
        numOrUndefined = firehoseRecordMetadata.approximateArrivalTimestamp;
    }

    const result: FirehoseTransformationResult = {
        records: [
            {
                recordId: event.records[0].recordId,
                result: 'Ok' as FirehoseRecordTransformationStatus,
                data: 'eyJmb28iOiJiYXIifQ==',
            },
        ],
    };

    callback(new Error());
    callback(null, result);
    return result;
};
