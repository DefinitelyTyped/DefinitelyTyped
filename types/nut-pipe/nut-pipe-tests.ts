import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2, Callback, Context } from "aws-lambda";
import {
    AsyncHandler,
    buildPipeline,
    AsyncBasicMiddleware,
    AsyncBasicMiddlewareWithServices,
    AsyncLambdaMiddleware,
    AsyncBasicHandler,
    AsyncLambdaMiddlewareWithServices
} from "nut-pipe";

interface Person {
    firstName: string;
    lastName: string;
}

interface GreetingService {
    sayHello(firstName: string, lastName: string): string;
}

interface Service {
    greetingService: GreetingService;
}

const services: Service = {
    greetingService: {
        sayHello: (firstName: string, lastName: string) => {
            return `Hello ${firstName} ${lastName}`;
        }
    }
};

const createAPIGatewayProxyEventV2 = (body: string | unknown): APIGatewayProxyEventV2 => ({
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
    body: typeof body === 'string' ? body : JSON.stringify(body),
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

class ErrorResponse {
    constructor(public msg: string, public code: number) { }
}

const jsonResponse = (body: string | unknown, status = 200): APIGatewayProxyStructuredResultV2 =>
({
    body: typeof body === 'string' ? body : JSON.stringify(body),
    statusCode: status,
});

const jsonError = (msg: string, code: number) => jsonResponse(new ErrorResponse(msg, code), code);

const assert = (condition: boolean) => {
    if (!condition) {
        throw new Error();
    }
};

const basicMiddlewareTest = async () => {
    const basicMiddleware1: AsyncBasicMiddleware = (event: any, next: AsyncBasicHandler) => {
        return next(event);
    };

    const basicMiddleware2: AsyncBasicMiddleware = (event: any, next: AsyncBasicHandler) => {
        return next(event);
    };

    const basicMiddleware3: AsyncBasicMiddleware = (event, next) => {
        return next(event);
    };

    const basicMiddleware4: AsyncBasicMiddleware = async (event: any) => {
        return `Hello ${event.firstName} ${event.lastName}`;
    };

    const pipelineInvoker: AsyncHandler = buildPipeline([basicMiddleware1, basicMiddleware2, basicMiddleware3, basicMiddleware4]);

    const person = { firstName: "kenan", lastName: "hancer" };

    const response: string = await pipelineInvoker(person);

    const expectedResponse = `Hello ${person.firstName} ${person.lastName}`;

    assert(response === expectedResponse);
};

const basicMiddlewareWithServicesTest = async () => {
    const basicMiddleware1: AsyncBasicMiddlewareWithServices = async (event, services, next) => {
        return next(event);
    };

    const basicMiddleware2: AsyncBasicMiddlewareWithServices = async (event, services, next) => {
        return next(event);
    };

    const basicMiddleware3: AsyncBasicMiddleware = async (event, next) => {
        return next(event);
    };

    const basicMiddleware4: AsyncBasicMiddlewareWithServices = async (event, services) => {
        return services.greetingService.sayHello(event.firstName, event.lastName);
    };

    const pipelineInvoker: AsyncHandler = buildPipeline([basicMiddleware1, basicMiddleware2, basicMiddleware3, basicMiddleware4], services);

    const person = { firstName: "kenan", lastName: "hancer" };

    const response: string = await pipelineInvoker(person);

    const expectedResponse = `Hello ${person.firstName} ${person.lastName}`;

    assert(response === expectedResponse);
};

const basicMiddlewareWithStornglyTypedServicesTest = async () => {
    const basicMiddleware1: AsyncBasicMiddlewareWithServices<any, Service> = async (event, services, next) => {
        return next(event);
    };

    const basicMiddleware2: AsyncBasicMiddlewareWithServices<any, Service> = async (event, services, next) => {
        return next(event);
    };

    const basicMiddleware3: AsyncBasicMiddleware = async (event, next) => {
        return next(event);
    };

    const basicMiddleware4: AsyncBasicMiddlewareWithServices<any, Service> = async (event, services) => {
        return services.greetingService.sayHello(event.firstName, event.lastName);
    };

    const pipelineInvoker: AsyncHandler = buildPipeline([basicMiddleware1, basicMiddleware2, basicMiddleware3, basicMiddleware4], services);

    const person = { firstName: "kenan", lastName: "hancer" };

    const response: string = await pipelineInvoker(person);

    const expectedResponse = `Hello ${person.firstName} ${person.lastName}`;

    assert(response === expectedResponse);
};

const basicMiddlewareWithStornglyTypedEventAndServicesTest = async () => {
    const basicMiddleware1: AsyncBasicMiddlewareWithServices = async (event, services, next) => {
        return next(event);
    };

    const basicMiddleware2: AsyncBasicMiddlewareWithServices = async (event, services, next) => {
        return next(event);
    };

    const basicMiddleware3: AsyncBasicMiddleware = async (event, next) => {
        return next(event);
    };

    const basicMiddleware4: AsyncBasicMiddlewareWithServices<Person, Service> = async (event, services) => {
        return services.greetingService.sayHello(event.firstName, event.lastName);
    };

    const pipelineInvoker: AsyncHandler = buildPipeline([basicMiddleware1, basicMiddleware2, basicMiddleware3, basicMiddleware4], services);

    const person: Person = { firstName: "kenan", lastName: "hancer" };

    const response: string = await pipelineInvoker(person);

    const expectedResponse = `Hello ${person.firstName} ${person.lastName}`;

    assert(response === expectedResponse);
};

const AwsAsyncLambdaMiddlewareTest_v1 = async () => {
    const middleware1: AsyncLambdaMiddleware = (event, context, callback, next) => {
        return next(event, context);
    };

    const middleware2: AsyncLambdaMiddleware = (event, context, callback, next) => {
        return next(event, context);
    };

    const middleware3: AsyncLambdaMiddleware = (event, context, callback, next) => {
        return next(event, context);
    };

    const middleware4: AsyncLambdaMiddleware = async (event, context, callback, next) => {
        let parsedBody: Person;

        if (event.body) {
            try {
                parsedBody = event.body && JSON.parse(event.body);
            } catch {
                return jsonError('invalid body, expected JSON', 415);
            }

            const body = `Hello ${parsedBody.firstName} ${person.lastName}`;

            return jsonResponse(body);
        }

        return jsonError('invalid body, expected JSON', 415);
    };

    const lambdaFunc: AsyncHandler = buildPipeline([middleware1, middleware2, middleware3, middleware4]);

    const person: Person = { firstName: 'kenan', lastName: 'hancer' };

    const event: APIGatewayProxyEventV2 = createAPIGatewayProxyEventV2(person);

    const response = await lambdaFunc(event, createContext());

    const expectedResponse = `Hello ${person.firstName} ${person.lastName}`;

    assert(response === expectedResponse);
};

const AwsAsyncLambdaMiddlewareTest_v2 = async () => {
    const middleware1: AsyncLambdaMiddleware = (event, context, callback, next) => {
        return next(event, context);
    };

    const middleware2: AsyncLambdaMiddleware = (event, context, callback, next) => {
        return next(event, context);
    };

    const middleware3: AsyncLambdaMiddleware = (event, context, callback, next) => {
        return next(event, context);
    };

    const middleware4: AsyncLambdaMiddleware = async (event, context, callback, next) => {
        let parsedBody;

        if (event.body) {
            try {
                parsedBody = event.body && JSON.parse(event.body);
            } catch {
                return jsonError('invalid body, expected JSON', 415);
            }

            const result = await next(parsedBody, context);

            return jsonResponse(result);
        }

        return jsonError('invalid body, expected JSON', 415);
    };

    const lambdaFunction = (event: Person) => {
        return `Hello ${event.firstName} ${event.lastName}`;
    };

    const lambdaFunc: AsyncHandler = buildPipeline([middleware1, middleware2, middleware3, middleware4, lambdaFunction]);

    const person: Person = { firstName: 'kenan', lastName: 'hancer' };

    const event: APIGatewayProxyEventV2 = createAPIGatewayProxyEventV2(person);

    const response = await lambdaFunc(event, createContext());

    const expectedResponse = `Hello ${person.firstName} ${person.lastName}`;

    assert(response === expectedResponse);
};

const AwsAsyncLambdaMiddlewareWithServicesTest_v1 = async () => {
    const middleware1: AsyncLambdaMiddlewareWithServices = async (event, context, callback, services, next) => {
        const result = await next(event, context);

        return result;
    };

    const middleware2: AsyncLambdaMiddlewareWithServices = async (event, context, callback, services, next) => {
        const result = await next(event, context);

        return result;
    };

    const middleware3: AsyncLambdaMiddlewareWithServices = async (event, context, callback, services, next) => {
        const result = await next(event, context);

        return result;
    };

    const middleware4: AsyncLambdaMiddlewareWithServices = async (event, context, callback, services, next) => {
        let parsedBody: Person;

        if (event.body) {
            try {
                parsedBody = event.body && JSON.parse(event.body);
            } catch {
                return jsonError('invalid body, expected JSON', 415);
            }

            const body = services.greetingService.sayHello(parsedBody.firstName, parsedBody.lastName);

            return jsonResponse(body);
        }

        return jsonError('invalid body, expected JSON', 415);
    };

    const lambdaFunc: AsyncHandler = buildPipeline([middleware1, middleware2, middleware3, middleware4], services);

    const person: Person = { firstName: 'kenan', lastName: 'hancer' };

    const event: APIGatewayProxyEventV2 = createAPIGatewayProxyEventV2(person);

    const response = await lambdaFunc(event, createContext());

    const expectedResponse = `Hello ${person.firstName} ${person.lastName}`;

    assert(response === expectedResponse);
};

const AwsAsyncLambdaMiddlewareWithServicesTest_v2 = async () => {
    const middleware1: AsyncLambdaMiddlewareWithServices = async (event, context, callback, services, next) => {
        const result = await next(event, context);

        return result;
    };

    const middleware2: AsyncLambdaMiddlewareWithServices = async (event, context, callback, services, next) => {
        const result = await next(event, context);

        return result;
    };

    const middleware3: AsyncLambdaMiddlewareWithServices = async (event, context, callback, services, next) => {
        const result = await next(event, context);

        return result;
    };

    const middleware4: AsyncLambdaMiddlewareWithServices = async (event, context, callback, services, next) => {
        let parsedBody;

        if (event.body) {
            try {
                parsedBody = event.body && JSON.parse(event.body);
            } catch {
                return jsonError('invalid body, expected JSON', 415);
            }

            const result = await next(parsedBody, context);

            return jsonResponse(result);
        }

        return jsonError('invalid body, expected JSON', 415);
    };

    const lambdaFunction: AsyncLambdaMiddlewareWithServices<Person, Service> = async (event, context, callback, services) => {
        return services.greetingService.sayHello(event.firstName, event.lastName);
    };

    const lambdaFunc: AsyncHandler = buildPipeline([middleware1, middleware2, middleware3, middleware4, lambdaFunction], services);

    const person: Person = { firstName: 'kenan', lastName: 'hancer' };

    const event: APIGatewayProxyEventV2 = createAPIGatewayProxyEventV2(person);

    const response = await lambdaFunc(event, createContext());

    const expectedResponse = `Hello ${person.firstName} ${person.lastName}`;

    assert(response === expectedResponse);
};

const AwsNonAsyncLambdaMiddlewareTest = async () => {
    const middleware1: AsyncLambdaMiddleware = (event, context, callback, next) => {
        next(event, context, callback);
    };

    const middleware2: AsyncLambdaMiddleware = (event, context, callback, next) => {
        next(event, context, callback);
    };

    const middleware3: AsyncLambdaMiddleware = (event, context, callback, next) => {
        next(event, context, callback);
    };

    const middleware4: AsyncLambdaMiddleware = (event, context, callback, next) => {
        const result: APIGatewayProxyStructuredResultV2 = { statusCode: 200, body: event.body };

        let parsedBody;

        if (event.body) {
            try {
                parsedBody = event.body && JSON.parse(event.body);
            } catch (error) {
                callback(error);
                return;
            }

            const body = `Hello ${parsedBody.firstName} ${parsedBody.lastName}`;

            callback(null, jsonResponse(body));
        } else {
            callback(null, jsonError('invalid body, expected JSON', 415));
        }
    };

    const lambdaFunc: AsyncHandler = buildPipeline([middleware1, middleware2, middleware3, middleware4]);

    const person: Person = { firstName: 'kenan', lastName: 'hancer' };

    const event: APIGatewayProxyEventV2 = createAPIGatewayProxyEventV2(person);

    const callback: Callback = (error, result) => {
        const expectedResponse = `Hello ${person.firstName} ${person.lastName}`;

        assert(result === expectedResponse);
    };

    lambdaFunc(event, createContext(), callback);
};

basicMiddlewareTest();

basicMiddlewareWithServicesTest();

basicMiddlewareWithStornglyTypedServicesTest();

basicMiddlewareWithStornglyTypedEventAndServicesTest();

AwsAsyncLambdaMiddlewareTest_v1();

AwsAsyncLambdaMiddlewareTest_v2();

AwsAsyncLambdaMiddlewareWithServicesTest_v1();

AwsAsyncLambdaMiddlewareWithServicesTest_v2();

AwsNonAsyncLambdaMiddlewareTest();
