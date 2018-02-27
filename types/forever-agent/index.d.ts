// Type definitions for forever-agent 0.6
// Project: https://github.com/mikeal/forever-agent
// Definitions by: Dmitry Guketlev <https://github.com/yavanosta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Agent as HttpAgent, AgentOptions as HttpAgentOptions } from "http";

export = ForeverAgentModule;

interface ForeverAgentOptions extends HttpAgentOptions {
    minSockets?: number;
}

declare class ForeverAgent extends HttpAgent {
    constructor(options?: ForeverAgentOptions);

    static defaultMinSockets: number;
}

declare class ForeverAgentSSL extends ForeverAgent {
    constructor(options?: ForeverAgentOptions);
}

declare const ForeverAgentModule: typeof ForeverAgent & {
    SSL: typeof ForeverAgentSSL,
};
