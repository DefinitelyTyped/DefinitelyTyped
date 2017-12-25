import { RequestHandler } from 'express';
import Lasso from './lib/Lasso';

export interface MiddlewareOptions {
  lasso?: Lasso;
  sendOptions?: any;
}

export function serveStatic(options?: MiddlewareOptions): RequestHandler;
