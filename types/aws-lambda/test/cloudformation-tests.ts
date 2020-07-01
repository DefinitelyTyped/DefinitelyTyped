import {
    CloudFormationCustomResourceFailedResponse,
    CloudFormationCustomResourceHandler,
    CloudFormationCustomResourceResponse, CloudFormationCustomResourceSuccessResponse,
} from "aws-lambda";

const handler: CloudFormationCustomResourceHandler = async (event, context, callback) => {
    switch (event.RequestType) {
        case 'Create':
            str = event.LogicalResourceId;
            str = event.RequestId;
            anyObj = event.ResourceProperties;
            str = event.ResourceProperties.ServiceToken;
            str = event.ResourceType;
            str = event.ResponseURL;
            str = event.ServiceToken;
            str = event.StackId;
            break;
        case 'Update':
            anyObj = event.OldResourceProperties;
            break;
        case 'Delete':
            str = event.PhysicalResourceId;
            break;
    }

    let response: CloudFormationCustomResourceResponse;
    response = {
        Data: {
            [str]: anyObj,
        },
        LogicalResourceId: str,
        PhysicalResourceId: str,
        Reason: strOrUndefined,
        RequestId: str,
        StackId: str,
        Status: "SUCCESS",
        NoEcho: boolOrUndefined,
    };

    let successResponse: CloudFormationCustomResourceSuccessResponse;
    let failedResponse: CloudFormationCustomResourceFailedResponse;
    successResponse = {
        LogicalResourceId: str,
        PhysicalResourceId: str,
        RequestId: str,
        StackId: str,
        Status: "SUCCESS",
    };
    successResponse = {
        Data: anyObj,
        LogicalResourceId: str,
        PhysicalResourceId: str,
        Reason: strOrUndefined,
        RequestId: str,
        StackId: str,
        Status: "SUCCESS",
        NoEcho: boolOrUndefined,
    };
    failedResponse = {
        Data: anyObj,
        LogicalResourceId: str,
        PhysicalResourceId: str,
        Reason: str,
        RequestId: str,
        StackId: str,
        Status: "FAILED",
    };
    response = successResponse;
    response = failedResponse;

    callback();
    callback(new Error());
};
