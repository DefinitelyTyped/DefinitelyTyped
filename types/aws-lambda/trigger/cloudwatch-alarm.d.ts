import { Handler } from "../handler";

export type CloudWatchAlarmHandler = Handler<CloudWatchAlarmEvent, void>;

export interface CloudWatchAlarmEvent {
    source: string;
    alarmArn: string;
    accountId: string;
    time: string;
    region: string;
    alarmData: CloudWatchAlarmData;
}

export interface CloudWatchAlarmState {
    value: string;
    reason: string;
    timestamp: string;
    reasonData?: string;
    actionsSuppressedBy?: string;
    actionsSuppressedReason?: string;
}

export interface CloudWatchMetric {
    namespace: string;
    name: string;
    dimensions?: Record<string, string>;
}

export interface CloudWatchMetricStat {
    metric: CloudWatchMetric;
    period: number;
    stat: string;
    unit?: string;
}

export interface CloudWatchAlarmMetric {
    id: string;
    metricStat: CloudWatchMetricStat;
    returnData: boolean;
}

export interface CloudWatchAlarmExpression {
    id: string;
    expression: string;
    label: string;
    returnData: boolean;
}

export type CloudWatchAlarmMetricDataQuery = CloudWatchAlarmMetric | CloudWatchAlarmExpression;

export interface CloudWatchAlarmConfiguration {
    metrics: CloudWatchAlarmMetricDataQuery[];
    description?: string;
}

export interface CloudWatchAlarmCompositeConfiguration {
    alarmRule: string;
    description?: string;
    actionsSuppressor?: string;
    actionsSuppressorWaitPeriod?: number;
    actionsSuppressorExtensionPeriod?: number;
}

export interface CloudWatchAlarmData {
    alarmName: string;
    state: CloudWatchAlarmState;
    previousState: CloudWatchAlarmState;
    configuration: CloudWatchAlarmConfiguration | CloudWatchAlarmCompositeConfiguration;
}
