import vhost from 'vhost';
import { Request, Response, NextFunction } from 'express';

vhost('hostname', (_req: Request, _res: Response, _next: NextFunction) => {
});
