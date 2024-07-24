import {
    CdkCustomResourceHandler,
    CdkCustomResourceIsCompleteHandler,
    CdkCustomResourceIsCompleteResponse,
    CdkCustomResourceResponse,
    CloudFormationCustomResourceResourcePropertiesCommon,
} from "aws-lambda";

interface CustomResourceProperties extends CloudFormationCustomResourceResourcePropertiesCommon {
    customSwitch: boolean;
}

interface CustomOnEventData {
    customOutputString: string;
}

interface CustomIsCompleteData {
    completedWithoutWarnings: boolean;
}

const defaultOnEventHandler: CdkCustomResourceHandler = async (event, context) => {
    switch (event.RequestType) {
        case "Create":
            str = event.LogicalResourceId;
            str = event.RequestId;
            anyObj = event.ResourceProperties;
            strOrUndefined = event.ResourceProperties.ServiceTimeout;
            str = event.ResourceProperties.ServiceToken;
            str = event.ResourceType;
            str = event.ServiceToken;
            // Should have custom comment to not use:
            str = event.ResponseURL;
            str = event.StackId;

            // @ts-expect-error
            anyObj = event.OldResourceProperties;
            // @ts-expect-error
            str = event.PhysicalResourceId;
            break;
        case "Update":
            anyObj = event.OldResourceProperties;
            str = event.PhysicalResourceId;
            break;
        case "Delete":
            str = event.PhysicalResourceId;
            break;
    }

    const response: CdkCustomResourceResponse = {
        PhysicalResourceId: str,
        Data: {
            stringKey: str,
        },
        otherProperties: anyObj,
    };

    const invalidResponse: CdkCustomResourceResponse = {
        // @ts-expect-error
        PhysicalResourceId: num,
        // @ts-expect-error
        Data: str,
    };

    const validEmptyResponse: CdkCustomResourceResponse = {};
    return validEmptyResponse;
};

const defaultIsCompleteHandler: CdkCustomResourceIsCompleteHandler = async (event, context) => {
    switch (event.RequestType) {
        case "Create":
            str = event.LogicalResourceId;
            str = event.RequestId;
            anyObj = event.ResourceProperties;
            strOrUndefined = event.ResourceProperties.ServiceTimeout;
            str = event.ResourceProperties.ServiceToken;
            str = event.ResourceType;
            // Should have custom comment to not use:
            str = event.ResponseURL;
            str = event.ServiceToken;
            str = event.StackId;
            break;
        case "Update":
            anyObj = event.OldResourceProperties;
            str = event.PhysicalResourceId;
            break;
        case "Delete":
            str = event.PhysicalResourceId;
            break;
    }

    const responseComplete: CdkCustomResourceIsCompleteResponse = {
        IsComplete: true,
        Data: {
            stringKey: str,
        },
        // @ts-expect-error
        otherProperties: anyObj,
    };

    const responseWaiting: CdkCustomResourceIsCompleteResponse = {
        IsComplete: false,
        // @ts-expect-error
        Data: {
            stringKey: str,
        },
    };

    return responseComplete;
};

const customOnEventHandler: CdkCustomResourceHandler<CustomResourceProperties, CustomOnEventData> = async (
    event,
    context,
) => {
    switch (event.RequestType) {
        case "Create":
            str = event.LogicalResourceId;
            str = event.RequestId;
            anyObj = event.ResourceProperties;
            strOrUndefined = event.ResourceProperties.ServiceTimeout;
            str = event.ResourceProperties.ServiceToken;
            bool = event.ResourceProperties.customSwitch;
            str = event.ResourceType;
            // Should have custom comment to not use:
            str = event.ResponseURL;
            str = event.ServiceToken;
            str = event.StackId;

            // @ts-expect-error
            anyObj = event.OldResourceProperties;
            // @ts-expect-error
            str = event.PhysicalResourceId;
            break;
        case "Update":
            anyObj = event.OldResourceProperties;
            str = event.PhysicalResourceId;
            break;
        case "Delete":
            str = event.PhysicalResourceId;
            break;
    }

    const response: CdkCustomResourceResponse<CustomOnEventData> = {
        PhysicalResourceId: str,
        Data: {
            customOutputString: str,
        },
        otherProperties: anyObj,
    };

    const invalidResponse: CdkCustomResourceResponse<CustomOnEventData> = {
        // @ts-expect-error
        PhysicalResourceId: num,
        // @ts-expect-error
        Data: str,
    };

    const validEmptyResponse: CdkCustomResourceResponse<CustomOnEventData> = {};
    return validEmptyResponse;
};

const customIsCompleteHandler: CdkCustomResourceIsCompleteHandler<CustomResourceProperties, CustomIsCompleteData> =
    async (event, context) => {
        switch (event.RequestType) {
            case "Create":
                str = event.LogicalResourceId;
                str = event.RequestId;
                anyObj = event.ResourceProperties;
                strOrUndefined = event.ResourceProperties.ServiceTimeout;
                str = event.ResourceProperties.ServiceToken;
                bool = event.ResourceProperties.customSwitch;
                str = event.ResourceType;
                // Should have custom comment to not use:
                str = event.ResponseURL;
                str = event.ServiceToken;
                str = event.StackId;
                break;
            case "Update":
                anyObj = event.OldResourceProperties;
                str = event.PhysicalResourceId;
                break;
            case "Delete":
                str = event.PhysicalResourceId;
                break;
        }

        const responseComplete: CdkCustomResourceIsCompleteResponse<CustomIsCompleteData> = {
            IsComplete: true,
            Data: {
                completedWithoutWarnings: true,
            },
            // @ts-expect-error
            otherProperties: anyObj,
        };

        const responseWaiting: CdkCustomResourceIsCompleteResponse<CustomIsCompleteData> = {
            IsComplete: false,
            // @ts-expect-error
            Data: {
                stringKey: str,
            },
        };

        return responseComplete;
    };
