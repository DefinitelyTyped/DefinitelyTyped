// Type definitions for @feathersjs/express 1.1
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript
// TypeScript Version: 2.2

import { Application as FeathersApplication } from '@feathersjs/feathers';
import * as express from 'express';

export default function feathersExpress<T>(app: FeathersApplication<T>): express.Application & FeathersApplication<T>;

export function errorHandler(options?: any): express.ErrorRequestHandler;
export function notFound(): express.RequestHandler;
export const rest: {
    (): () => void;
    formatter: express.RequestHandler;
};

/*
 * Re-export of the express package. Can't be typed properly without just copying everything.
 **/
export const original: any;
