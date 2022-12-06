// Type definitions for ioredis-mock 8.2
// Project: https://github.com/stipsan/ioredis-mock#readme
// Definitions by: Lukas Elmer <https://github.com/lukaselmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.2

import ioredis = require('ioredis');


type Option = { data?: Record<string, unknown> } & ioredis.RedisOptions

export interface Constructor {
    new(port: number, host: string, options: Option): ioredis.Redis;
    new(path: string, options: Option): ioredis.Redis;
    new(port: number, options: Option): ioredis.Redis;
    new(port: number, host: string): ioredis.Redis;
    new(options: Option): ioredis.Redis;
    new(port: number): ioredis.Redis;
    new(path: string): ioredis.Redis;
    new(): ioredis.Redis;
}

export const redisMock: Constructor;
export {redisMock as default};
