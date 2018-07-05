// Type definitions for Datadog's nodejs metrics client node-dogstatsd
// Project: https://github.com/joybro/node-dogstatsd
// Definitions by: Chris Bobo <https://github.com/chrisbobo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "node-dogstatsd" {

  export interface StatsDOptions {
    global_tags?: string[];
  }

  export class StatsD {
    constructor(host: string, port?: number, socket?: string, options?: StatsDOptions);

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
