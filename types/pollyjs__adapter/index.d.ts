// Type definitions for @pollyjs/adapter 4.3.0
// Project: https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter
// Definitions by: feinoujc <https://github.com/feinoujc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Headers, Request } from '@pollyjs/core';

export default class Adapter {
    static readonly id: string;
    static readonly type: string;
    readonly options: { [key: string]: any };
    connect(): void;
    disconnect(): void;
    passthroughRequest(
        pollyRequest: Request,
    ): Promise<{
        statusCode: number;
        headers: Headers;
        body: string;
    }>;
}
