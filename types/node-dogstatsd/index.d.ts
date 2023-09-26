/// <reference types="node" />

declare module "node-dogstatsd" {
    import * as dgram from "dgram";

    export interface StatsDOptions {
        global_tags?: string[] | undefined;
    }

    export interface StatsDClient {
        timing(stat: string, time: number, sample_rate?: number, tags?: string[]): void;

        increment(stat: string, sample_rate?: number, tags?: string[]): void;
        incrementBy(stat: string, value: number, tags?: string[]): void;

        decrement(stat: string, sample_rate?: number, tags?: string[]): void;
        decrementBy(stat: string, value: number, tags?: string[]): void;

        gauge(stat: string, value: number, sample_rate?: number, tags?: string[]): void;

        histogram(stat: string, time: number, sample_rate?: number, tags?: string[]): void;
    }

    export class StatsD implements StatsDClient {
        public socket: dgram.Socket;

        constructor(host: string, port?: number, socket?: dgram.Socket, options?: StatsDOptions);

        timing(stat: string, time: number, sample_rate?: number, tags?: string[]): void;

        increment(stat: string, sample_rate?: number, tags?: string[]): void;
        incrementBy(stat: string, value: number, tags?: string[]): void;

        decrement(stat: string, sample_rate?: number, tags?: string[]): void;
        decrementBy(stat: string, value: number, tags?: string[]): void;

        gauge(stat: string, value: number, sample_rate?: number, tags?: string[]): void;

        histogram(stat: string, time: number, sample_rate?: number, tags?: string[]): void;

        close(): void;
    }
}
