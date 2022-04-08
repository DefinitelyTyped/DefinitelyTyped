import Adapter from '@pollyjs/adapter';
import { Request } from '@pollyjs/core';

Adapter.id;
Adapter.type;

const adapter = new Adapter();

adapter.options;

async function doReq(req: Request) {
    const result = await adapter.passthroughRequest(req);
    result.statusCode;
    result.headers;
    result.body;
}
