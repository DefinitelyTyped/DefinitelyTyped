// Type definitions for traceparent 1.0
// Project: https://github.com/elastic/node-traceparent
// Definitions by: Manuel Guilbault <https://github.com/manuel-guilbault>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface TraceParentSettings {
    transactionSampleRate: number;
}

declare class TraceParent {
    constructor(buffer: Buffer);

    static fromString(header: string): TraceParent;
    static startOrResume(parent: null | undefined | TraceParent | string, settings: TraceParentSettings): TraceParent;

    static readonly FLAGS: Readonly<{
        recorded: 0b00000001;
    }>;

    readonly recorded: boolean;
    readonly traceId: string;
    readonly id: string;
    readonly parentId: string | undefined;
    readonly flags: string;
    readonly version: string;

    child(): TraceParent;
    toString(): string;
    ensureParentId(): string;
}

export = TraceParent;
