import { Request } from 'hapi';

declare const req: Request;
const act: boolean = req.active();
