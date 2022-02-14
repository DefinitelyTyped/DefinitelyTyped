// Type definitions for aws-lambda-http-server 0.2
// Project: https://github.com/JamesKyburz/aws-lambda-http-server
// Definitions by: ElayGelbart <https://github.com/ElayGelbart>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { APIGatewayProxyEvent, Context, APIGatewayProxyCallback } from 'aws-lambda';

declare function awsLambdaHttpServer(
    event: APIGatewayProxyEvent,
    context: Context,
    callback: APIGatewayProxyCallback,
): APIGatewayProxyCallback;

export = awsLambdaHttpServer;
