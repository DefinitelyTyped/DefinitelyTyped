/// <reference types="node" />
import { EventEmitter } from "events";

declare namespace Agent {
    type AgentCallback = (
        req?: any,
        opts?: {
            secureEndpoint: boolean;
        },
    ) => void;

    interface AgentOptions {
        timeout?: number | undefined;
        host?: string | undefined;
        port?: number | undefined;
        [key: string]: any;
    }

    interface Agent extends EventEmitter {
        _promisifiedCallback: boolean;
        timeout: number | null;
        options?: AgentOptions | undefined;
        callback: AgentCallback;
        addRequest: (req?: any, opts?: any) => void;
        freeSocket: (socket: any, opts: any) => void;
    }
}

/**
 * Base `http.Agent` implementation.
 * No pooling/keep-alive is implemented by default.
 */
declare function Agent(opts?: Agent.AgentOptions): Agent.Agent;
declare function Agent(
    callback: Agent.AgentCallback,
    opts?: Agent.AgentOptions,
): Agent.Agent;

export = Agent;
