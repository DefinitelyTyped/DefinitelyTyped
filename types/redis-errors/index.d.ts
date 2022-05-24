// Type definitions for redis-errors 1.2
// Project: https://github.com/NodeRedis/redis-errors#readme
// Definitions by: James Garbutt <https://github.com/43081j>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class RedisError extends Error {
}

export class ParserError extends RedisError {
    buffer: string;
    offset: number;

    constructor(message: string, buffer: string, offset: number);
}

export class ReplyError extends RedisError {
    command?: string | undefined;
    args?: any[] | undefined;
    code?: string | undefined;

    constructor(message: string);
}

export class AbortError extends RedisError {
    command?: string | undefined;
    args?: any[] | undefined;
}

export class InterruptError extends RedisError {
    command?: string | undefined;
    args?: any[] | undefined;
    origin: Error;
}
