/// <reference types="node" />

import { Socket } from "node:dgram";
import { Transform } from "node:stream";
type HRTime = [number, number];
interface LynxOptions {
    socket?: Socket;
    on_error?: (e: Error) => void;
    scope?: string;
}

interface Timer {
    stat: string;
    sample_rate: number;
    start_time: HRTime;
    stop(): void;
}

interface Stats {
    [stat: string]: string;
}

declare class Lynx extends Transform {
    constructor(host?: string, port?: number, options?: LynxOptions);

    createTimer(stat: string, sample_rate?: number): Timer;
    increment(stats: string | string[], sample_rate?: number): void;
    decrement(stats: string | string[], sample_rate?: number): void;
    count(stats: string | string[], delta: number, sample_rate?: number): void;
    timing(stat: string, duration: number, sample_rate?: number): void;
    set(stat: string, value: number, sample_rate?: number): void;
    gauge(stat: string, value: number, sample_rate?: number): void;
    send(stats: Stats, sample_rate?: number): void;
    close(): void;
}

export = Lynx;
