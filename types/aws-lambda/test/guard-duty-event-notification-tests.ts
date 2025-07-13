import { GuardDutyScanResultNotificationEvent } from "aws-lambda";

const guardDutyScanResultNotificationEvent: GuardDutyScanResultNotificationEvent = {
    version: "0",
    id: "a1bd61a9-8f5b-bd90-d03f-d02c44de7978",
    "detail-type": "GuardDuty Malware Protection Object Scan Result",
    source: "aws.guardduty",
    account: "123456789012",
    time: "2024-10-29T20:40:58Z",
    region: "ca-central-1",
    resources: [
        "arn:aws:guardduty:ca-central-1:123456789012:malware-protection-plan/24c96cfb217c338fc3df",
    ],
    detail: {
        schemaVersion: "1.0",
        scanStatus: "COMPLETED",
        resourceType: "S3_OBJECT",
        s3ObjectDetails: {
            bucketName: "bucketName",
            objectKey: "objectKey",
            eTag: "6ee985bd6f65dc90bb7896a94fe9adb0",
            versionId: "NpeIP.i5R7OBO0bChPbGTmSsym5UohWS",
            s3Throttled: false,
        },
        scanResultDetails: {
            scanResultStatus: "THREATS_FOUND",
            threats: [
                {
                    name: "foobar",
                },
            ],
        },
    },
};
