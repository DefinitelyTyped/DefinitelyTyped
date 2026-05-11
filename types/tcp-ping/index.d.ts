export interface Options {
    address?: string | undefined;
    port?: number | undefined;
    attempts?: number | undefined;
    timeout?: number | undefined;
}

export interface Results {
    seq: number;
    time: number | undefined;
    err?: Error | undefined;
}

export interface Result {
    address: string;
    port: number;
    attempts: number;
    avg: number;
    max: number;
    min: number;
    results: Results[];
}

export function ping(options: Options, callback: (error: Error, result: Result) => void): void;
export function probe(address: string, port: number, callback: (error: Error, result: boolean) => void): void;
