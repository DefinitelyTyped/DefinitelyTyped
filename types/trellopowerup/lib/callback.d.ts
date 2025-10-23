import * as PowerUp from "./powerup";

export type CacheAction = "run" | "retain" | "release";
export type SerializeResult = (value: unknown, key?: string) => unknown | SerializeOutput;

export interface SerializeOutput {
    _callback: string;
}

export interface CacheOptions {
    action: CacheAction;
    options: unknown;
    callback: string;
}

export interface Cache {
    callback(t: PowerUp.Plugin, options: CacheOptions, serializeResult: SerializeResult): Promise<unknown>;
    serialize(fx: (t: PowerUp.Plugin, args: unknown) => unknown): SerializeOutput;
    reset(): void;
}
