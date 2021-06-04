import { Request, Response } from 'express';
declare const runMiddleware: (req: Request, res: Response, fn: any) => Promise<unknown>;
export default runMiddleware;
