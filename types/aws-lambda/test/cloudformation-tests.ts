import {
    CloudFormationCustomResourceFailedResponse,
    CloudFormationCustomResourceHandler,
    CloudFormationCustomResourceResourcePropertiesCommon,
    CloudFormationCustomResourceResponse,
    CloudFormationCustomResourceSuccessResponse,
} from "aws-lambda";

interface CustomResourceProperties extends CloudFormationCustomResourceResourcePropertiesCommon {
    customSwitch: boolean;
}

interface CustomOldResourceProperties extends CloudFormationCustomResourceResourcePropertiesCommon {
    customNumber: number;
}

interface CustomData {
    customOutputString: string;
}

const defaultHandler: CloudFormationCustomResourceHandler = async (event, context, callback) => {
    switch (event.RequestType) {
        case "Create":
            str = event.LogicalResourceId;
            str = event.RequestId;
            anyObj = event.ResourceProperties;
            str = event.ResourceProperties.ServiceToken;
            str = event.ResourceType;
            str = event.ResponseURL;
            str = event.ServiceToken;
            str = event.StackId;
            break;
        case "Update":
            anyObj = event.OldResourceProperties;
            break;
        case "Delete":
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

const customHandler: CloudFormationCustomResourceHandler<CustomResourceProperties> = async (
    event,
    context,
    callback,
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
            str = event.ResponseURL;
            str = event.ServiceToken;
            str = event.StackId;
            break;
        case "Update":
            anyObj = event.OldResourceProperties;
            strOrUndefined = event.OldResourceProperties.ServiceTimeout;
            str = event.OldResourceProperties.ServiceToken;
            bool = event.OldResourceProperties.customSwitch;
            break;
        case "Delete":
            str = event.PhysicalResourceId;
            break;
    }

    let response: CloudFormationCustomResourceResponse<CustomData>;
    response = {
        Data: {
            customOutputString: str,
        },
        LogicalResourceId: str,
        PhysicalResourceId: str,
        Reason: strOrUndefined,
        RequestId: str,
        StackId: str,
        Status: "SUCCESS",
        NoEcho: boolOrUndefined,
    };

    let successResponse: CloudFormationCustomResourceSuccessResponse<CustomData>;
    let failedResponse: CloudFormationCustomResourceFailedResponse<CustomData>;
    successResponse = {
        LogicalResourceId: str,
        PhysicalResourceId: str,
        RequestId: str,
        StackId: str,
        Status: "SUCCESS",
    };
    successResponse = {
        Data: {
            customOutputString: str,
        },
        LogicalResourceId: str,
        PhysicalResourceId: str,
        Reason: strOrUndefined,
        RequestId: str,
        StackId: str,
        Status: "SUCCESS",
        NoEcho: boolOrUndefined,
    };
    failedResponse = {
        Data: {
            customOutputString: str,
        },
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

const customChangedHandler: CloudFormationCustomResourceHandler<CustomResourceProperties, CustomOldResourceProperties> =
    async (
        event,
        context,
        callback,
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
                str = event.ResponseURL;
                str = event.ServiceToken;
                str = event.StackId;
                break;
            case "Update":
                anyObj = event.OldResourceProperties;
                strOrUndefined = event.OldResourceProperties.ServiceTimeout;
                str = event.OldResourceProperties.ServiceToken;
                num = event.OldResourceProperties.customNumber;
                break;
            case "Delete":
                str = event.PhysicalResourceId;
                break;
        }

        let response: CloudFormationCustomResourceResponse<CustomData>;
        response = {
            Data: {
                customOutputString: str,
            },
            LogicalResourceId: str,
            PhysicalResourceId: str,
            Reason: strOrUndefined,
            RequestId: str,
            StackId: str,
            Status: "SUCCESS",
            NoEcho: boolOrUndefined,
        };

        let successResponse: CloudFormationCustomResourceSuccessResponse<CustomData>;
        let failedResponse: CloudFormationCustomResourceFailedResponse<CustomData>;
        successResponse = {
            LogicalResourceId: str,
            PhysicalResourceId: str,
            RequestId: str,
            StackId: str,
            Status: "SUCCESS",
        };
        successResponse = {
            Data: {
                customOutputString: str,
            },
            LogicalResourceId: str,
            PhysicalResourceId: str,
            Reason: strOrUndefined,
            RequestId: str,
            StackId: str,
            Status: "SUCCESS",
            NoEcho: boolOrUndefined,
        };
        failedResponse = {
            Data: {
                customOutputString: str,
            },
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
