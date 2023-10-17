/// <reference types="node" />

import { Agent as HttpAgent, AgentOptions as HttpAgentOptions } from "http";

export = ForeverAgentModule;

interface ForeverAgentOptions extends HttpAgentOptions {
    minSockets?: number | undefined;
}

declare class ForeverAgent extends HttpAgent {
    constructor(options?: ForeverAgentOptions);

    static defaultMinSockets: number;
}

declare class ForeverAgentSSL extends ForeverAgent {
    constructor(options?: ForeverAgentOptions);
}

declare const ForeverAgentModule: typeof ForeverAgent & {
    SSL: typeof ForeverAgentSSL;
};
