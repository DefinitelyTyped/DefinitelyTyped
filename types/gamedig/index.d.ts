declare class Gamedig {
    constructor(runnerOpts?: { listenUdpPort?: number | undefined });
    query(options: Gamedig.QueryOptions): Promise<Gamedig.QueryResult>;
    query(options: Gamedig.QueryOptions, callback: (error: Error, state: Gamedig.QueryResult) => void): void;

    static query(options: Gamedig.QueryOptions): Promise<Gamedig.QueryResult>;
    static query(options: Gamedig.QueryOptions, callback: (error: Error, state: Gamedig.QueryResult) => void): void;
    static getInstance(): Gamedig;
}
declare namespace Gamedig {
    type Type = string;

    interface Player {
        name?: string | undefined;
        ping?: number | undefined;
        score?: number | undefined;
        team?: string | undefined;
        address?: string | undefined;
        raw?: object | undefined;
    }

    interface QueryOptions {
        type: Type;
        host: string;
        port?: number | undefined;
        maxAttempts?: number | undefined;
        socketTimeout?: number | undefined;
        attemptTimeout?: number | undefined;
        givenPortOnly?: boolean | undefined;
        ipFamily?: 0 | 4 | 6 | undefined;
        debug?: boolean | undefined;
        requestRules?: boolean | undefined;
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
        raw?: object | undefined;
    }
}
export = Gamedig;
