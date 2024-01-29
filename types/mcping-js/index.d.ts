// TypeScript Version: 3.8
export interface PingResponse {
    version: {
        name: string;
        protocol: number;
    };

    players: {
        max: number;
        online: number;
        sample?:
            | Array<{
                name: string;
                id: string;
            }>
            | undefined;
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
