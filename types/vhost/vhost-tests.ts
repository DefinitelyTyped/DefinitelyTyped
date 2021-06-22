import vhost from 'vhost';
import { Request, Response, NextFunction } from 'express';

// $ExpectType Handler
vhost('hostname', (_req: Request, _res: Response, _next: NextFunction) => {});
