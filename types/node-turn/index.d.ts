// Type definitions for node-turn 0.0
// Project: https://github.com/Atlantis-Software/node-turn#readme
// Definitions by: Johannes Garz <https://github.com/garzj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type TurnDebugLevel = 'OFF' | 'FATAL' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'TRACE' | 'ALL';

type TurnAuthMech = 'none' | 'short-term' | 'long-term';

interface TurnOptions {
    listeningPort?: number;
    listeningIps?: string[];
    relayIps?: string[];
    externalIps?: string | { [localIp: string]: string };
    minPort?: number;
    maxPort?: number;
    authMech?: TurnAuthMech;
    credentials?: { [user: string]: string };
    real?: string;
    debugLevel?: TurnDebugLevel;
    maxAllocateLifetime?: number;
    defaultAllocatetLifetime?: number;
    debug?: (debugLevel: TurnDebugLevel, message: string) => void;
}

declare class Turn {
    constructor(options?: TurnOptions);

    start(): void;
    stop(): void;
    addUser(username: string, password: string): void;
    removeUser(username: string): void;
}

export = Turn;
