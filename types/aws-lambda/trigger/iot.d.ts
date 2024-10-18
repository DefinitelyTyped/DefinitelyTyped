import { Handler } from "../handler";

export type IoTHandler = Handler<IoTEvent, void>;

// IoT
// https://docs.aws.amazon.com/lambda/latest/dg/services-iot.html
// IoT payload is not restriced to JSON, but JSON is highly recommended. Types as string, number or array are possible to use.

export type IoTEvent<T = never> = string | number | T;

// PreProvisioningHook
// https://docs.aws.amazon.com/iot/latest/developerguide/pre-provisioning-hook.html
// When using AWS IoT fleet provisioning, you can set up a Lambda function to validate parameters passed from the device before allowing the device to be provisioned.
export type IoTPreProvisioningHookHandler = Handler<IoTPreProvisioningHookEvent, IoTPreProvisioningHookResult>;

export interface IoTPreProvisioningHookEvent {
    claimCertificateId: string;
    certificateId: string;
    certificatePem: string;
    templateArn: string;
    clientId: string;
    parameters: Record<string, string>;
}

export interface IoTPreProvisioningHookResult {
    allowProvisioning: boolean;
    parameterOverrides: Record<string, string>;
}
