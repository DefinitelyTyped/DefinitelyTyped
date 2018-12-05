import { RequestHandler } from 'express';
import Lasso from '../lib/Lasso';

export function serveStatic(options?: { lasso?: Lasso; sendOptions?: any; }): RequestHandler;
