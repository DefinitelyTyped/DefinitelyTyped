export class GameDig {
    constructor(runnerOpts?: { listenUdpPort?: number });
    query(options: QueryOptions): Promise<QueryResult>;
    query(options: QueryOptions, callback: (error: Error, state: QueryResult) => void): void;

    static query(options: QueryOptions): Promise<QueryResult>;
    static query(options: QueryOptions, callback: (error: Error, state: QueryResult) => void): void;
    static getInstance(): GameDig;
}

export interface games {
    [key: string]: {
        name: string;
        release_year: number;
        options: {
            protocol: string;
            port?: number;
            port_query?: number;
            port_query_offset?: number | number[];
        };
        extra?: {
            doc_notes?: string;
            old_id?: string;
            // alias?: string;
        };
    };
}

export interface protocols {
    [key: string]: object;
}

export interface Player {
    name?: string;
    raw?: object;
    ping?: number;
    score?: number;
    team?: string;
    address?: string;
}

export interface QueryOptions {
    type: string;
    host: string;
    address?: string;
    port?: number;
    maxRetries?: number;
    socketTimeout?: number;
    attemptTimeout?: number;
    givenPortOnly?: boolean;
    ipFamily?: 0 | 4 | 6;
    debug?: boolean;
    portCache?: boolean;
    stripColors?: boolean;
    noBreadthOrder?: boolean;
    checkOldIDs?: boolean;
    // checkAlias?: boolean;
    // Valve
    requestRules?: boolean;
    requestRulesRequired?: boolean;
    requestPlayersRequired?: boolean;
    // Discord
    guildId?: string;
    // Nadeo
    login?: string;
    // Nadeo / Palworld
    password?: string;
    // Teamspeak 3
    teamspeakQueryPort?: number;
    // Terraria
    token?: string;
    // Palworld
    username?: string;
}

export interface QueryResult {
    name: string;
    map: string;
    password: boolean;
    numplayers: number;
    maxplayers: number;
    players: Player[];
    bots: Player[];
    connect: string;
    ping: number;
    queryPort: number;
    version: string;
    raw?: object;
}

export const games: games;
export const protocols: protocols;
