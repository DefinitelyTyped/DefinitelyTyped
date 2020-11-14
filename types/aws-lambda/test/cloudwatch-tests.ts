/// <reference types="node" />

import {
    CloudWatchLogsDecodedData,
    CloudWatchLogsHandler,
    CloudWatchLogsLogEvent,
    ScheduledHandler,
} from "aws-lambda";

import { gunzipSync } from "zlib";

const logsHandler: CloudWatchLogsHandler = async (event, context, callback) => {
    const data: CloudWatchLogsDecodedData = JSON.parse(
        gunzipSync(Buffer.from(event.awslogs.data, "base64")).toString()
    );

    str = data.owner;
    str = data.logGroup;
    str = data.logStream;
    str = data.subscriptionFilters[0];
    str = data.messageType;

    const logEvent: CloudWatchLogsLogEvent = data.logEvents[0];
    str = logEvent.id;
    num = logEvent.timestamp;
    str = logEvent.message;
    str = logEvent.extractedFields!['example'];

    callback();
    callback(new Error());
};

// Technically part of cloudwatch
const scheduledHandler: ScheduledHandler = async (event, context, callback) => {
    str = event.account;
    anyObj = event.detail;
    str = event.id;
    str = event.region;
    str = event.resources[0];
    str = event.source;
    str = event.time;

    callback();
    callback(new Error());
};

const scheduledHandlerWithDetails: ScheduledHandler<{ status: string }> = async (event, context, callback) => {
    const eventDetail: { status: string } = event.detail;
};
