import { APIGatewayProxyHandlerV2, APIGatewayProxyHandlerV2WithIAMAuthorizer } from "./api-gateway-proxy";

/**
 * Works with Lambda Function URL format which is currently the same as HTTP API integration Payload Format version 2.0
 * @see - https://docs.aws.amazon.com/lambda/latest/dg/urls-invocation.html#urls-payloads
 */
export type LambdaFunctionURLHandler<T = never> = APIGatewayProxyHandlerV2<T>

/**
 * Works with Lambda Function URL format which is currently the same as HTTP API integration Payload Format version 2.0
 * @see - https://docs.aws.amazon.com/lambda/latest/dg/urls-invocation.html#urls-payloads
 */
export type LambdaFunctionURLHandlerWithIAMAuthorizer<T = never> = APIGatewayProxyHandlerV2WithIAMAuthorizer<T>;
