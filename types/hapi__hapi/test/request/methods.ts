import { Request } from '@hapi/hapi';

declare const req: Request;
const act: boolean = req.active();
