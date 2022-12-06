// Type definitions for ioredis-mock 8.2
// Project: https://github.com/stipsan/ioredis-mock#readme
// Definitions by: Lukas Elmer <https://github.com/lukaselmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.2

import ioredis = require('ioredis');

export interface Constructor {
    new(option?: { data: Record<string, unknown> }): ioredis.Redis;
}

export const redisMock: Constructor;
export { redisMock as default };
