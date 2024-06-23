import gamedig = require("gamedig");
import { GameDig } from "gamedig";

GameDig.getInstance();

// direct usage from import
gamedig.GameDig.query(
    {
        type: "teamfortress2",
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
        requestPlayersRequired: true,
        checkOldIDs: true,
        // checkAlias: true,
    },
    (error: any, state: gamedig.QueryResult) => {
        if (error) throw error;

        const { name, map, password, maxplayers, players, bots, connect, ping, queryPort, numplayers, version } = state;
    },
);

// usage from instance
const gd = new gamedig.GameDig();
gd.query(
    {
        type: "teamfortress2",
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
        requestPlayersRequired: true,
        checkOldIDs: true,
        // checkAlias: true,
    },
    (error: any, state: gamedig.QueryResult) => {
        if (error) throw error;

        const { name, map, password, maxplayers, players, bots, connect, ping, queryPort, numplayers, version } = state;
    },
);

// get the list of games
for (const type in gamedig.games) {
    const name = `${gamedig.games[type].name} (${gamedig.games[type].release_year})`;
}

// get the list of protocols
for (const type in gamedig.protocols) {
    const name = `protocol-${type}`;
}
