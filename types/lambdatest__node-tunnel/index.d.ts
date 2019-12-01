// Type definitions for @lambdatest/node-tunnel 1.0
// Project: https://github.com/LambdaTest/node-tunnel
// Definitions by: Andrew Morris <https://github.com/voltrevo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class lambdaTunnel {
    constructor();

    start(tunnelArguments: {
        user: string,
        key: string,
        port?: string,
        tunnelName?: string,
        dir?: string,
        verbose?: boolean;
        logFile?: string;
    }): Promise<number>;

    isRunning(): boolean;

    getTunnelName(): Promise<string>;

    stop(): Promise<void>;
}
