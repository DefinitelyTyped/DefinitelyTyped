import { EventEmitter } from "events";

// Emit the responses to these when they get sent down to us
export type UnilateralTags = "unilateralTags" | "log";

export interface ClientOptions {
    /**
     * Absolute path to the watchman binary.
     * If not provided, the Client locates the binary using the PATH specified
     * by the node child_process's default env.
     */
    watchmanBinaryPath?: string | undefined;
}

export interface Capabilities {
    optional: any[];
    required: any[];
}

export type doneCallback = (error?: Error | null, resp?: any) => any;

export class Client extends EventEmitter {
    constructor(options?: ClientOptions);
    sendNextCommand(): void;
    cancelCommands(why: string): void;
    connect(): void;
    command(args: any, done: doneCallback): void;
    capabilityCheck(
        caps: Capabilities,
        done: doneCallback,
    ): void;
    end(): void;
}
