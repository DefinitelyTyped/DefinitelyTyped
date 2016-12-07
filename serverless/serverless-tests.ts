const apigEventHandler: Serverless.Handler<Serverless.APIGatewayProxyRequestEvent, Serverless.APIGatewayProxyResponse> =
    (event: Serverless.APIGatewayProxyRequestEvent, context: Serverless.LambdaContext, callback: Serverless.Callback<Serverless.APIGatewayProxyResponse>) => {
    };

const snsEventHandler: Serverless.Handler<Serverless.SNSEvent, void> =
    (event: Serverless.SNSEvent, context: Serverless.LambdaContext, callback: Serverless.Callback<void>) => {
    };

const dynamodbEventHandler: Serverless.Handler<Serverless.DynamoDBEvent, void> =
    (event: Serverless.DynamoDBEvent, context: Serverless.LambdaContext, callback: Serverless.Callback<void>) => {
    };

const kinesisEventHandler: Serverless.Handler<Serverless.KinesisEvent, void> =
    (event: Serverless.KinesisEvent, context: Serverless.LambdaContext, callback: Serverless.Callback<void>) => {
    };

const cognitoEventHandler: Serverless.Handler<Serverless.CognitoEvent, void> =
    (event: Serverless.DynamoDBEvent, context: Serverless.LambdaContext, callback: Serverless.Callback<void>) => {
    };

const configEventHandler: Serverless.Handler<Serverless.ConfigEvent, void> =
    (event: Serverless.DynamoDBEvent, context: Serverless.LambdaContext, callback: Serverless.Callback<void>) => {
    };

let context: Serverless.LambdaContext = {
    awsRequestId: "awsRequestId",
    invokeId: "invokeId",
    functionName: "functionName",
    functionVersion: "functionVersion",
    isDefaultFunctionVersion: true,
    invokedFunctionArn: "invokeFunctionArn",
    logGroupName: "logGroupName",
    logStreamName: "logStreamName",
    memoryLimitInMB: 1024
};

let apigProxyRequestEvent: Serverless.APIGatewayProxyRequestEvent = {
    resource: "resource",
    path: "path",
    httpMethod: "httpMethod",
    headers: {
        "1": "header",
        "2": "header"
    },
    queryStringParameters: {
        "1": "param",
        "2": "param"
    },
    pathParameters: {
        "1": "param",
        "2": "param"
    },
    stageVariables: {
        "1": "variable",
        "2": "variable"
    },
    requestContext: {
        accountId: "accountId",
        resourceId: "resourceId",
        stage: "stage",
        requestId: "requestId",
        identity: {
            cognitoIdentityPoolId: "cognitoIdentityPoolId",
            accountId: "accountId",
            cognitoIdentityId: "cognitoIdentityId",
            caller: "caller",
            apiKey: "apiKey",
            sourceIp: "sourceIp",
            accessKey: "accessKey",
            cognitoAuthenticationType: "cognitoAuthenticationType",
            cognitoAuthenticationProvider: "cognitoAuthenticationProvider",
            userArn: "userArn",
            userAgent: "userAgent",
            user: "user"
        },
        resourcePath: "resourcePath",
        httpMethod: "httpMethod",
        apiId: "apiId"
    },
    body: "body",
    isBase64Encoded: true
};