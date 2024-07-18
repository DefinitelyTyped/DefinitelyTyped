import { Handler } from "../handler";
import {
    APIGatewayEventRequestContextIAMAuthorizer,
    APIGatewayEventRequestContextV2WithAuthorizer,
    APIGatewayProxyCallbackV2,
    APIGatewayProxyEventV2,
    APIGatewayProxyEventV2WithRequestContext,
    APIGatewayProxyResultV2,
} from "./api-gateway-proxy";

/**
 * Default Lambda Function URL event with no Authorizer
 */
export type LambdaFunctionURLEvent = APIGatewayProxyEventV2;

/**
 * Works with Lambda Function URL format which is currently the same as HTTP API integration Payload Format version 2.0
 * @see - https://docs.aws.amazon.com/lambda/latest/dg/urls-invocation.html#urls-payloads
 */
export type LambdaFunctionURLResult<T = never> = APIGatewayProxyResultV2<T>;

/**
 * Works with Lambda Function URL format which is currently the same as HTTP API integration Payload Format version 2.0
 * @see - https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
 */
export type LambdaFunctionURLCallback = APIGatewayProxyCallbackV2;

/**
 * Works with Lambda Function URL format which is currently the same as HTTP API integration Payload Format version 2.0
 * @see - https://docs.aws.amazon.com/lambda/latest/dg/urls-invocation.html#urls-payloads
 */
export type LambdaFunctionURLHandler<T = never> = Handler<LambdaFunctionURLEvent, LambdaFunctionURLResult<T>>;

export type LambdaFunctionURLEventWithIAMAuthorizer = APIGatewayProxyEventV2WithRequestContext<
    APIGatewayEventRequestContextV2WithAuthorizer<APIGatewayEventRequestContextIAMAuthorizer>
>;

/**
 * Works with Lambda Function URL format which is currently the same as HTTP API integration Payload Format version 2.0
 * @see - https://docs.aws.amazon.com/lambda/latest/dg/urls-invocation.html#urls-payloads
 */
export type LambdaFunctionURLHandlerWithIAMAuthorizer<T = never> = Handler<
    LambdaFunctionURLEventWithIAMAuthorizer,
    LambdaFunctionURLResult<T>
>;
