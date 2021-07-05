import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { RequestHandler } from 'express';
import 'http';
import 'node:http';

export interface APIGateway {
    event: Omit<APIGatewayProxyEvent, 'body'>;
    context: NonFunctionProperties<Context>;
}

declare module 'http' {
    export interface IncomingMessage {
        apiGateway?: APIGateway;
    }
}

declare module 'node:http' {
    export interface IncomingMessage {
        apiGateway?: APIGateway;
    }
}

export type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];  // tslint:disable-line:ban-types
export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

export interface Options {
    reqPropKey?: string | undefined;
    deleteHeaders?: boolean | undefined;
}

export function eventContext(options?: Options): RequestHandler;
