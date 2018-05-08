import { RequestHandler } from 'express';

export interface Options {
    reqPropKey?: string;
    deleteHeaders?: boolean;
}

export function eventContext(options?: Options): RequestHandler;
