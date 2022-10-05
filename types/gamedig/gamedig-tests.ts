import Gamedig = require('gamedig');
import GameResolver = require('gamedig/lib/GameResolver');

// direct usage from import
Gamedig.query(
    {
        type: 'tf2',
        host: '127.0.0.1',
        port: 27015,
        maxAttempts: 1,
        socketTimeout: 2000,
        attemptTimeout: 10000,
        givenPortOnly: true,
        debug: false,
        requestRules: true,
    },
    (error, state) => {
        if (error) throw error;

        const { name, map, password, maxplayers, players, bots, connect, ping } = state;
    },
);

// usage from instance
const gamedig = new Gamedig();
gamedig.query(
    {
        type: 'tf2',
        host: '127.0.0.1',
        port: 27015,
        maxAttempts: 1,
        socketTimeout: 2000,
        attemptTimeout: 10000,
        givenPortOnly: true,
        debug: false,
        requestRules: true,
    },
    (error, state) => {
        if (error) throw error;

        const { name, map, password, maxplayers, players, bots, connect, ping } = state;
    },
);

const gameResolver = new GameResolver();

const gamesByKey: Map<
    Gamedig.Type,
    {
        keys: string[];
        pretty: string;
        options: {
            protocol: string;
            port?: number;
            port_query_offset?: number;
            port_query?: number;
        };
        extra: {
            doc_notes?: string;
        };
    }
> = gameResolver.gamesByKey;
const games: [
    {
        keys: string[];
        pretty: string;
        options: {
            protocol: string;
            port?: number;
            port_query_offset?: number;
            port_query?: number;
        };
        extra: {
            doc_notes?: string;
        };
    },
] = gameResolver.games;
gameResolver.lookup('tf2');
gameResolver.printReadme();
