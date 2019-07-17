// Type definitions for apimocker 1.1
// Project: https://www.npmjs.com/package/apimocker
// Definitions by: Uchenna <https://github.com/uchilaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { RequestHandler } from 'express';
import { configOptions, ApiMocker } from './models';

export const middlewares: RequestHandler[];

export function createServer(options?: configOptions): ApiMocker;

export function setConfigFile(file: string): ApiMocker;

export function start(serverPort: string | number, callback?: () => void): ApiMocker;

export function stop(callback?: () => void): ApiMocker;
