import { EventBridgeEvent } from "./eventbridge";

/**
 * Guard Duty events
 * https://docs.aws.amazon.com/guardduty/latest/ug/monitor-with-eventbridge-s3-malware-protection.html
 */

export interface GuardDutyScanResultNotificationEvent
    extends
        EventBridgeEvent<"GuardDuty Malware Protection Object Scan Result", GuardDutyScanResultNotificationEventDetail>
{
    source: "aws.guardduty";
}

export interface GuardDutyScanResultNotificationEventDetail {
    schemaVersion: "1.0";
    scanStatus: "COMPLETED" | "SKIPPED" | "FAILED";
    resourceType: "S3_OBJECT";
    s3ObjectDetails: {
        bucketName: string;
        objectKey: string;
        eTag: string;
        versionId: string;
        s3Throttled: boolean;
    };
    scanResultDetails: {
        scanResultStatus: "NO_THREATS_FOUND" | "THREATS_FOUND" | "UNSUPPORTED" | "ACCESS_DENIED" | "FAILED";
        threats: GuardDutyThreatDetail[] | null;
    };
}

export interface GuardDutyThreatDetail {
    name: string;
}

export type GuardDutyNotificationEvent = GuardDutyScanResultNotificationEvent;
