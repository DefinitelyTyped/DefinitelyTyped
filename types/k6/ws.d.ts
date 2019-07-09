export function connect(url: string, executor: Executor): Response;
export function connect(url: string, params: Params | null, executor: Executor): Response;

// Parameters
export interface Params {
    headers?: { [name: string]: string };
    tags?: { [name: string]: string };
}
export interface Executor {
    (socket: Socket): void;
}

// Response
export interface Response {
    url: string;
    status: number;
    headers: { [name: string]: string };
    body: string;
    error: string;
}

// Socket
export abstract class Socket {
    protected __brand: never;
    close(code?: number): void;
    on<ET extends EventType>(event: ET, handler: EventHandler<ET>): void;
    ping(): void;
    send(data: string): void;
    setInterval(handler: TimerHandler, interval: number): void;
    setTimeout(handler: TimerHandler, delay: number): void;
}
export type EventType = 'close' | 'error' | 'message' | 'open' | 'ping' | 'pong';
export type EventHandler<ET extends EventType> = ET extends 'close'
    ? (code: number) => void
    : ET extends 'error'
    ? (error: WebSocketError) => void
    : ET extends 'message'
    ? (message: string) => void
    : ET extends 'open'
    ? () => void
    : ET extends 'ping'
    ? () => void
    : ET extends 'pong'
    ? () => void
    : never;
export interface TimerHandler {
    (): void;
}

// Error
export abstract class WebSocketError {
    protected __brand: never;
    error(): string;
}
