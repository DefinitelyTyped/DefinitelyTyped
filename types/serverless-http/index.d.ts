// Type definitions for serverless-http 1.8
// Project: https://github.com/dougmoscrop/serverless-http
// Definitions by: Alexander Wong <https://github.com/awwong1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Context, Callback } from "aws-lambda";
import { Application as ExpressApplication } from "express";
import * as KoaApplication from "koa";
import { Server as ConnectApplication } from "connect";

declare namespace ServerlessHttp {
    type LambdaPartial = (event: any, context: Context, callback?: Callback) => void;
}

declare function serverlessHttp(
    app: (ExpressApplication | KoaApplication | ConnectApplication),
    opts?: any
): ServerlessHttp.LambdaPartial;

export default serverlessHttp;
