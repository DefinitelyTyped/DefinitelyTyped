import {
    CdkCustomResourceHandler,
    CdkCustomResourceIsCompleteHandler,
    CdkCustomResourceIsCompleteResponse,
    CdkCustomResourceResponse,
} from 'aws-lambda';

const onEventHandler: CdkCustomResourceHandler = async (event, context) => {
    switch (event.RequestType) {
        case 'Create':
            str = event.LogicalResourceId;
            str = event.RequestId;
            anyObj = event.ResourceProperties;
            str = event.ResourceProperties.ServiceToken;
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
        case 'Update':
            anyObj = event.OldResourceProperties;
            str = event.PhysicalResourceId;
            break;
        case 'Delete':
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
        Data: str
    };

    const validEmptyResponse: CdkCustomResourceResponse = {};
    return validEmptyResponse;
};

const onIsCompleteHandler: CdkCustomResourceIsCompleteHandler = async (event, context) => {
    switch (event.RequestType) {
        case 'Create':
            str = event.LogicalResourceId;
            str = event.RequestId;
            anyObj = event.ResourceProperties;
            str = event.ResourceProperties.ServiceToken;
            str = event.ResourceType;
            // Should have custom comment to not use:
            str = event.ResponseURL;
            str = event.ServiceToken;
            str = event.StackId;
            break;
        case 'Update':
            anyObj = event.OldResourceProperties;
            str = event.PhysicalResourceId;
            break;
        case 'Delete':
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
