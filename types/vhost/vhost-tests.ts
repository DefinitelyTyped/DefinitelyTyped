import vhost, { Request } from 'vhost';
import { Response, NextFunction } from 'express';

// $ExpectType Handler
vhost('hostname', (_req: Request, _res: Response, _next: NextFunction) => {
    // check if vhost property exists on _req
    if (!_req.vhost) throw new Error('missing vhost property in request argument');
});
