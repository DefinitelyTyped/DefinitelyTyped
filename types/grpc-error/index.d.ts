declare class GRPCError extends Error {
    constructor(value: string | object);
    constructor(message: string, value: number | object);
    constructor(message: string, code: number, metadata: object);

    code: number;
    metadata: object;
}

export = GRPCError;
