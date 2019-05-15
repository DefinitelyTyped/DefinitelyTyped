import { ErrorRequestHandler } from 'express';

declare function handler(options?: any): ErrorRequestHandler;

declare namespace handler {}

export = handler;
