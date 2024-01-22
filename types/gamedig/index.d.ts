declare namespace GameDig {
    class GameDig {
        constructor(runnerOpts?: { listenUdpPort?: number });
        query(options: GameDig.QueryOptions): Promise<GameDig.QueryResult>;
        query(options: GameDig.QueryOptions, callback: (error: Error, state: GameDig.QueryResult) => void): void;
    
        static query(options: GameDig.QueryOptions): Promise<GameDig.QueryResult>;
        static query(options: GameDig.QueryOptions, callback: (error: Error, state: GameDig.QueryResult) => void): void;
        static getInstance(): GameDig;
    }

    interface games {
        [key: string]: {
            name: string;
            release_year: number;
            options: {
                protocol: string;
                port?: number;
                query_port?: number;
                port_query?: number;
                port_query_offset?: number;
            },
            extra?: {
                doc_notes?: string;
            }
        };
    }

    interface protocols {
        [key: string]: object;
    }

    interface Player {
        name?: string;
        raw?: object;
        ping?: number;
        score?: number;
        team?: string;
        address?: string;
    }

    interface QueryOptions {
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
        // Valve
        requestRules?: boolean;
        requestRulesRequired?: boolean;
        requestPlayersRequired?: boolean;
        // Discord
        guildId?: string;
        // Nadeo
        login?: string;
        password?: string;
        // Teamspeak 3
        teamspeakQueryPort?: number;
        // Terraria
        token?: string;
    }

    interface QueryResult {
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
        raw?: object;
    }
}

export = GameDig;
