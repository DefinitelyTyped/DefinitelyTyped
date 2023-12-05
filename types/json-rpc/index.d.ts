export interface JSONRPCRequest {
    jsonrpc: "2.0";
    method: string;
    params?: unknown[] | Record<string, unknown>;
    id?: string | number | null;
}

export type JSONRPCResponse<T = unknown, E= unknown> = JSONRPCSuccessResponse<T> | JSONRPCErrorResponse<E>
export interface JSONRPCSuccessResponse<T = unknown> {
    jsonrpc: "2.0";
    result: T;
    id: string | number | null;
}
export interface JSONRPCErrorResponse<T = unknown> {
    jsonrpc: "2.0";
    error: JSONRPCError<T>;
    id: string | number | null;
}

export interface JSONRPCError<T = unknown> {
    code: number;
    message: string;
    data?: T;
}
