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

            // $ExpectError
            anyObj = event.OldResourceProperties;
            // $ExpectError
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
        // $ExpectError
        PhysicalResourceId: num,
        // $ExpectError
        Data: str,
    };

    const validEmptyResponse: CdkCustomResourceResponse = {};
    return validEmptyResponse;
};

const onEventHandlerCustom: CdkCustomResourceHandler<{ foo: string }, { bar: string }> = async (event, context) => {
    str = event.ResourceProperties.foo;
    // $ExpectError
    str = event.ResourceProperties.invalidFoo;

    // $ExpectError
    const invalidResponseDataEmpty: CdkCustomResourceResponse<{ bar: string }> = {}
    const validResponseDataEmpty: CdkCustomResourceResponse<{ bar: string } | undefined> = {};

    const invalidResponse: CdkCustomResourceResponse<{ bar: string }> = {
        Data: {
            // $ExpectError
            bar: num,
        },
    };

    const validResponse: CdkCustomResourceResponse<{ bar: string }> = {
        Data: {
            bar: str,
        },
    };

    return validResponse;
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
        // $ExpectError
        otherProperties: anyObj,
    };

    const responseWaiting: CdkCustomResourceIsCompleteResponse = {
        IsComplete: false,
        Data: {
            stringKey: str,
        },
    };

    return responseComplete;
};
