import Adapter from '@pollyjs/adapter';
import { Request } from '@pollyjs/core';

Adapter.name;
Adapter.type;

const adapter = new Adapter();

async function doReq(req: Request) {
  const result = await adapter.passthroughRequest(req);
  result.statusCode;
  result.headers;
  result.body;
}
