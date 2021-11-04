import { RequestHandler } from 'express';

declare function errorOverlayMiddleware(): RequestHandler;
export = errorOverlayMiddleware;
