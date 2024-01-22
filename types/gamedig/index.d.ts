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
        [key: string]: any;
    }

    type Type = string;

    interface Player {
        name?: string;
        ping?: number;
        score?: number;
        team?: string;
        address?: string;
        raw?: object;
    }

    interface QueryOptions {
        type: Type;
        host: string;
        port?: number;
        address?: string;
        maxRetries?: number;
        socketTimeout?: number;
        attemptTimeout?: number;
        givenPortOnly?: boolean;
        portCache?: boolean;
        stripColors?: boolean;
        noBreadthOrder?: boolean;
        ipFamily?: 0 | 4 | 6;
        debug?: boolean;
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
        maxplayers: number;
        players: Player[];
        bots: Player[];
        connect: string;
        ping: number;
        raw?: object;
        queryPort: number;
        numplayers: number;
    }
}

export = GameDig;
