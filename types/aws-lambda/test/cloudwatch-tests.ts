/// <reference types="node" />

import {
    CloudWatchAlarmHandler,
    CloudWatchLogsDecodedData,
    CloudWatchLogsHandler,
    CloudWatchLogsLogEvent,
    ScheduledHandler,
} from "aws-lambda";

import { gunzipSync } from "zlib";

const logsHandler: CloudWatchLogsHandler = async (event, context, callback) => {
    const data: CloudWatchLogsDecodedData = JSON.parse(
        gunzipSync(Buffer.from(event.awslogs.data, "base64")).toString(),
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
    strOrUndefined = logEvent.extractedFields!["example"];

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

const alarmHandler: CloudWatchAlarmHandler = async (event, context, callback) => {
    str = event.source;
    str = event.alarmArn;
    str = event.accountId;
    str = event.time;
    str = event.region;

    const alarmData = event.alarmData;
    str = alarmData.alarmName;

    const state = alarmData.state;
    str = state.value;
    str = state.reason;
    str = state.timestamp;
    strOrUndefined = state.reasonData;
    strOrUndefined = state.actionsSuppressedBy;
    strOrUndefined = state.actionsSuppressedReason;

    const previousState = alarmData.previousState;
    str = previousState.value;
    str = previousState.reason;
    str = previousState.timestamp;
    strOrUndefined = previousState.reasonData;
    strOrUndefined = previousState.actionsSuppressedBy;
    strOrUndefined = previousState.actionsSuppressedReason;

    const configuration = alarmData.configuration;
    strOrUndefined = configuration.description;

    if ("metrics" in configuration) {
        const metric = configuration.metrics[0];
        str = metric.id;
        bool = metric.returnData;

        if ("metricStat" in metric) {
            const metricStat = metric.metricStat;
            num = metricStat.period;
            str = metricStat.stat;
            strOrUndefined = metricStat.unit;
            str = metricStat.metric.namespace;
            str = metricStat.metric.name;
            if (metricStat.metric.dimensions) {
                str = metricStat.metric.dimensions[str];
            }
        } else {
            str = metric.expression;
            str = metric.label;
        }
    } else {
        str = configuration.alarmRule;
        strOrUndefined = configuration.actionsSuppressor;
        numOrUndefined = configuration.actionsSuppressorWaitPeriod;
        numOrUndefined = configuration.actionsSuppressorExtensionPeriod;
    }

    callback();
    callback(new Error());
};
