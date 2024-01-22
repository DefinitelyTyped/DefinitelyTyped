import gd = require("gamedig");

// direct usage from import
gd.GameDig.query(
    {
        type: "tf2",
        host: "127.0.0.1",
        port: 27015,
        maxAttempts: 1,
        socketTimeout: 2000,
        attemptTimeout: 10000,
        givenPortOnly: true,
        ipFamily: 0,
        debug: false,
        requestRules: true,
    },
    (error: any, state: gd.QueryResult) => {
        if (error) throw error;

        const { name, map, password, maxplayers, players, bots, connect, ping, queryPort, numplayers } = state;
    },
);

// usage from instance
const gamedig = new gd.GameDig();
gamedig.query(
    {
        type: "tf2",
        host: "127.0.0.1",
        port: 27015,
        maxRetries: 1,
        socketTimeout: 2000,
        attemptTimeout: 10000,
        givenPortOnly: true,
        portCache: true,
        ipFamily: 0,
        debug: false,
        requestRules: true,
        requestRulesRequired: true,
        requestPlayersRequired: true
    },
    (error: any, state: gd.QueryResult) => {
        if (error) throw error;

        const { name, map, password, maxplayers, players, bots, connect, ping, queryPort, numplayers } = state;
    },
);

// get the list of games
for(const game of gd.games) {
    const name = `${game.name} (${game.release_year})`;
}
