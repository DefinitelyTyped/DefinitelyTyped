export function connect(url: string, executor: Executor): Response;
export function connect(url: string, params: Params | null, executor: Executor): Response;

export interface Params {
    headers?: { [name: string]: string };
    tags?: { [name: string]: string };
}

export interface Response {
    url: string;
    status: number;
    headers: { [name: string]: string };
    body: string;
    error: string;
}

export interface Executor {
    (socket: Socket): void;
}

export abstract class Socket {
    protected __brand: never;
}
