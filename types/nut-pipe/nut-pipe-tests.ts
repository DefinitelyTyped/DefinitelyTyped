import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2, Context } from "aws-lambda";
import { AsyncLambdaHandler, AsyncHandler, buildPipeline, AsyncBasicMiddleware, AsyncBasicMiddlewareWithServices, AsyncLambdaMiddleware, AsyncBasicHandler } from "nut-pipe";

const test1 = async () => {
    const basicMiddleware1: AsyncBasicMiddleware = (context: any, next: AsyncBasicHandler) => {
        return next(context);
    };

    const basicMiddleware2: AsyncBasicMiddleware = (context: any, next: AsyncBasicHandler) => {
        return next(context);
    };

    const basicMiddleware3: AsyncBasicMiddleware = (context, next) => {
        return next(context);
    };

    const basicMiddleware4: AsyncBasicMiddleware = async (context) => {
        return `Hello ${context.firstName} ${context.lastName}`;
    };

    const pipelineInvoker: AsyncHandler = buildPipeline([basicMiddleware1, basicMiddleware2, basicMiddleware3, basicMiddleware4]);

    const person = { firstName: "kenan", lastName: "hancer" };

    const response: any = await pipelineInvoker(person);
};

const test2 = async () => {
    const basicMiddleware1: AsyncBasicMiddlewareWithServices = async (context, services, next) => {
        return next(context);
    };

    const basicMiddleware2: AsyncBasicMiddlewareWithServices = async (context, services, next) => {
        return next(context);
    };

    const basicMiddleware3: AsyncBasicMiddleware = async (context, next) => {
        return next(context);
    };

    const basicMiddleware4: AsyncBasicMiddlewareWithServices = async (context, services) => {
        return services.greetingService.sayHello(context.firstName, context.lastName);
    };

    const services = {
        greetingService: {
            sayHello: (firstName: string, lastName: string) => {
                return `Hello ${firstName} ${lastName}`;
            }
        }
    };

    const pipelineInvoker: AsyncHandler = buildPipeline([basicMiddleware1, basicMiddleware2, basicMiddleware3, basicMiddleware4], services);

    const person = { firstName: "kenan", lastName: "hancer" };

    const response = pipelineInvoker(person);
};

const createAPIGatewayProxyEventV2 = (body = ''): APIGatewayProxyEventV2 => ({
    version: '2.0',
    routeKey: '$default_route',
    rawPath: '/my/path',
    rawQueryString: '',
    headers: {},
    requestContext: {
        accountId: '1111111111',
        apiId: 'api-id',
        domainName: 'id.execute-api.eu-west-1.amazonaws.com',
        domainPrefix: 'id',
        http: {
            method: 'POST',
            path: '/my/path',
            protocol: 'HTTP/1.1',
            sourceIp: 'IP',
            userAgent: 'agent',
        },
        requestId: 'id',
        routeKey: '$default_route',
        stage: '$default',
        time: '22/Jun/2021:13:21:04 +0000',
        timeEpoch: 1181148333220,
    },
    body,
    isBase64Encoded: false,
});

const createContext = (): Context => ({
    callbackWaitsForEmptyEventLoop: true,
    functionName: 'abcabc',
    functionVersion: 'abcabab',
    invokedFunctionArn: 'abcabc',
    memoryLimitInMB: 'abcabc',
    awsRequestId: 'abcabc',
    logGroupName: 'abcabc',
    logStreamName: 'abcabc',
    getRemainingTimeInMillis: () => 0,
    done: (error?: Error, result?: any) => { },
    fail: (error: Error | string) => { },
    succeed: (messageOrObject: any) => { },
});

const test3 = async () => {
    interface Person {
        firstName: string;
        lastName: string;
    }

    const middleware1: AsyncLambdaMiddleware = async (event: APIGatewayProxyEventV2, context: Context, next: AsyncLambdaHandler) => {
        const result: APIGatewayProxyStructuredResultV2 = await next(event, context);

        return result;
    };

    const middleware2: AsyncLambdaMiddleware = async (event: APIGatewayProxyEventV2, context: Context, next: AsyncLambdaHandler) => {
        const result: APIGatewayProxyStructuredResultV2 = await next(event, context);

        return result;
    };

    const middleware3: AsyncLambdaMiddleware = async (event: APIGatewayProxyEventV2, context: Context, next: AsyncLambdaHandler) => {
        const result: APIGatewayProxyStructuredResultV2 = await next(event, context);

        return result;
    };

    const middleware4: AsyncLambdaMiddleware = async (event: APIGatewayProxyEventV2, context: Context, next: AsyncLambdaHandler) => {
        const result: APIGatewayProxyStructuredResultV2 = { statusCode: 200, body: event.body };

        return result;
    };

    const lambdaFunc: AsyncHandler = buildPipeline([middleware1, middleware2, middleware3, middleware4]);

    const person: Person = { firstName: 'kenan', lastName: 'hancer' };

    const body: string = JSON.stringify(person);

    const event: APIGatewayProxyEventV2 = createAPIGatewayProxyEventV2(body);

    const response: APIGatewayProxyStructuredResultV2 = await lambdaFunc(event, createContext());
};

test1();

test2();

test3();
