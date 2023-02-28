// Type definitions for node-turn 0.0
// Project: https://github.com/Atlantis-Software/node-turn#readme
// Definitions by: Johannes Garz <https://github.com/garzj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';

type TurnDebugLevel = 'OFF' | 'FATAL' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'TRACE' | 'ALL';

type TurnAuthMech = 'none' | 'short-term' | 'long-term';

interface TurnCredentials {
    [user: string]: string;
}

interface TurnProps {
    listeningPort: number;
    listeningIps: string[];
    relayIps: string[];
    externalIps: string | { [localIp: string]: string } | null;
    minPort: number;
    maxPort: number;
    authMech: TurnAuthMech;
    realm: string;
    maxAllocateLifetime: number;
    defaultAllocatetLifetime: number;
    debugLevel: TurnDebugLevel;

    log: (...args: any[]) => void;
    debug: (debugLevel: TurnDebugLevel, message: string) => void;
}

interface TurnOptions extends Partial<TurnProps> {
    credentials?: TurnCredentials;
}

interface TurnServer extends Readonly<TurnProps> {}

declare class TurnServer extends EventEmitter {
    constructor(options?: TurnOptions);

    start(): void;
    stop(): void;
    addUser(username: string, password: string): void;
    removeUser(username: string): void;

    readonly software: string;

    readonly staticCredentials: TurnCredentials;
}

declare namespace TurnServer {
    export { TurnOptions, TurnProps, TurnCredentials, TurnAuthMech, TurnDebugLevel };
}

export = TurnServer;
