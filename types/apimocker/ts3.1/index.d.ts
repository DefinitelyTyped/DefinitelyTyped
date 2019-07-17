import { RequestHandler } from 'express';
import { configOptions, ApiMocker } from '../models';

export const middlewares: RequestHandler[];

export function createServer(options?: configOptions): ApiMocker;

export function setConfigFile(file: string): ApiMocker;

export function start(serverPort: string | number, callback?: () => void): ApiMocker;

export function stop(callback?: () => void): ApiMocker;
