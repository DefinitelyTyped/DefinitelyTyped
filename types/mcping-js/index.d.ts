// Type definitions for mcping-js 1.5
// Project: https://github.com/Cryptkeeper/mcping-js
// Definitions by: Inrix <https://github.com/Inrixia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 3.8
export interface PingResponse {
    version: {
        name: string;
        protocol: number;
    };

    players: {
        max: number;
        online: number;
        sample?: Array<{
            name: string;
            id: string;
        }>;
    };

    description: {
        text: string;
    };

    favicon: string;
}

export class MinecraftServer {
    constructor(host: string, port?: number);
    ping(
        timeout: number,
        protocolVersion: number | undefined,
        callback: (err?: Error, res?: PingResponse) => void,
    ): void;
}
