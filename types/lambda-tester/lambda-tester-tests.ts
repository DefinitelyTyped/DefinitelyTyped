/* tslint:disable:no-object-literal-type-assertion */

import {
    APIGatewayProxyEvent,
    APIGatewayProxyHandler,
    APIGatewayProxyResult,
    ClientContext,
    Context,
    Handler,
} from "aws-lambda";
import * as lambdaTester from "lambda-tester";

interface TResult {
    data: string;
}

const handler: Handler<any, TResult> = () => Promise.resolve({ data: "123" });
const handlerReject: Handler<any, TResult> = () => Promise.reject({ data: "123" });

const context: Context = {} as any;
const clientContext: ClientContext = {} as any;

interface TError {
    message: string;
}

function lambdaTesterInstance() {
    return lambdaTester(handler).event({ test: "123" });
}

function lambdaTesterInstanceReject() {
    return lambdaTester(handlerReject).event({ test: "123" });
}

lambdaTesterInstance()
    .context(context)
    .clientContext(clientContext)
    .xray()
    .identity("123", "123")
    .expectSucceed((result: TResult) => {
        const t: string = result.data;
    });

lambdaTesterInstance().expectFail((error: TError) => {
    const t: string = error.message;
});

lambdaTesterInstance().expectResolve((result: TResult) => {
    const t: string = result.data;
});

lambdaTesterInstanceReject().expectReject((error: TError) => {
    const t: string = error.message;
});

lambdaTesterInstance().expectResult((result: TResult) => {
    const t: string = result.data;
});

lambdaTesterInstanceReject().expectError((error: TError) => {
    const t: string = error.message;
});

const apiGateway: APIGatewayProxyHandler = (event, _context) => {};

const s3Lambda = lambdaTester(apiGateway).event({} as APIGatewayProxyEvent);

s3Lambda
    .context(context)
    .clientContext(clientContext)
    .xray()
    .identity("123", "123")
    .expectSucceed((result: APIGatewayProxyResult) => {});

s3Lambda.expectResolve((result: APIGatewayProxyResult) => {});

s3Lambda.expectReject((error: TError) => {
    const t: string = error.message;
});

s3Lambda.expectResult();
s3Lambda.expectResolve();
s3Lambda.expectReject();
s3Lambda.expectError();
s3Lambda.expectFail();
s3Lambda.expectSucceed();
