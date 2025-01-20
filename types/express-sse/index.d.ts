import { EventEmitter } from "events";
import { Request, Response } from "express";

export as namespace SSE;

export = SSE;

declare class SSE extends EventEmitter {
    constructor(initial?: unknown, options?: Partial<SSE.SSEOptions>);

    init(req: Request, res: Response): void;
    updateInit(data: unknown): void;
    dropInit(): void;
    send(data: unknown, event?: string, id?: string | number): void;
    serialize(data: unknown): void;
}

declare namespace SSE {
    interface SSEOptions {
        isSerialized: boolean;
        isCompressed: boolean;
        initialEvent: string;
    }
}
