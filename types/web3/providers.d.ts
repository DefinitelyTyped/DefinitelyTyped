interface JsonRPCRequest {
    jsonrpc: string;
    method: string;
    params: any[];
    id: number;
}

interface JsonRPCResponse {
    jsonrpc: string;
    id: number;
    result?: any;
    error?: string;
}

interface Callback<ResultType> {
  (error: Error): void;
  (error: null, val: ResultType): void;
}

export class Provider {
  send(payload: JsonRPCRequest, callback: Callback<JsonRPCResponse>): any;
}

export class WebsocketProvider extends Provider {
    responseCallbacks: object;
    notificationCallbacks: [() => any];
    connection: {
        onclose(e: any): void;
        onmessage(e: any): void;
        onerror(e?: any): void;
    };
    addDefaultEvents: () => void;
    on(type: string, callback: () => any): void;
    removeListener(type: string, callback: () => any): void;
    removeAllListeners(type: string): void;
    reset(): void;
}
export class HttpProvider extends Provider {
    responseCallbacks: undefined;
    notificationCallbacks: undefined;
    connection: undefined;
    addDefaultEvents: undefined;
    on(type: string, callback: () => any): undefined;
    removeListener(type: string, callback: () => any): undefined;
    removeAllListeners(type: string): undefined;
    reset(): undefined;
}
export class IpcProvider extends Provider {
    responseCallbacks: undefined;
    notificationCallbacks: undefined;
    connection: undefined;
    addDefaultEvents: undefined;
    on(type: string, callback: () => any): undefined;
    removeListener(type: string, callback: () => any): undefined;
    removeAllListeners(type: string): undefined;
    reset(): undefined;
}

export default interface Providers {
    WebsocketProvider: new (
        host: string,
        timeout?: number
    ) => WebsocketProvider;
    HttpProvider: new (host: string, timeout?: number) => HttpProvider;
    IpcProvider: new (path: string, net: any) => IpcProvider;
}
