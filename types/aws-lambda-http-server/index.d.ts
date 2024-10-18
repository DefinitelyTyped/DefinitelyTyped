import { APIGatewayProxyCallback, APIGatewayProxyEvent, Context } from "aws-lambda";

declare function awsLambdaHttpServer(
    event: APIGatewayProxyEvent,
    context: Context,
    callback: APIGatewayProxyCallback,
): APIGatewayProxyCallback;

export = awsLambdaHttpServer;
