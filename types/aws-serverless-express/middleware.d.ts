import { IncomingMessage } from 'http';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { RequestHandler } from 'express';

type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];  // tslint:disable-line:ban-types
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

declare module 'http' {
  interface IncomingMessage {
    apiGateway?: {
      event: Omit<APIGatewayProxyEvent, 'body'>;
      context: NonFunctionProperties<Context>;
    };
  }
}

export interface Options {
    reqPropKey?: string;
    deleteHeaders?: boolean;
}

export function eventContext(options?: Options): RequestHandler;

export {};
