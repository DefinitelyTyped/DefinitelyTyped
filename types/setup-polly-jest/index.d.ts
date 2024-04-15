import { Polly, PollyConfig } from "@pollyjs/core";

export interface Context {
    readonly polly: Polly;
}

export function setupPolly(config?: PollyConfig): Context;
