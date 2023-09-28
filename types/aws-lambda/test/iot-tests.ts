import {
    IoTEvent,
    IoTHandler,
    IoTPreProvisioningHookEvent,
    IoTPreProvisioningHookHandler,
    IoTPreProvisioningHookResult,
} from "aws-lambda";

const handler: IoTHandler = async (event, context, callback) => {};

// See https://docs.aws.amazon.com/lambda/latest/dg/services-iot.html

const eventObject: IoTEvent<{ [key: string]: string }> = {
    row: "10",
    pos: "23",
    moisture: "75",
};

const eventString: IoTEvent = "AWS Lambda IoT Event";

const eventNumber: IoTEvent = 100;

const eventArray: IoTEvent<any[]> = [eventObject, eventString, eventNumber];

// PreProvisioningHook
// https://docs.aws.amazon.com/iot/latest/developerguide/pre-provisioning-hook.html

const preProvisioningHookEvent: IoTPreProvisioningHookEvent = {
    claimCertificateId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    certificateId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    certificatePem: "-----BEGIN CERTIFICATE-----\nXXXXXXXXXXXXXXXXXXXXX\n-----END CERTIFICATE-----\n",
    templateArn: "arn:aws:iot:region:11111111111:provisioningtemplate/PreProvisioningHookIotTemplate",
    clientId: "test-13534135",
    parameters: {
        key: "value",
    },
};

const preProvisioningHookResult: IoTPreProvisioningHookResult = {
    allowProvisioning: true,
    parameterOverrides: {
        key: "new value",
    },
};
const preProvisioningHookHandler: IoTPreProvisioningHookHandler = async (event, context, callback) => {
    return preProvisioningHookResult;
};
