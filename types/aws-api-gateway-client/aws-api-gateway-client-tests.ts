import apiClientFactory, { ApiGatewayClient } from 'aws-api-gateway-client';

const client = apiClientFactory.newClient({
    invokeUrl: 'APIGATEWAY_BASE_URL'
});
