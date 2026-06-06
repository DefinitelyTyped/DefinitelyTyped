import Sharder = require("eris-sharder");

const Bot = new Sharder.Master("bot_token", "path/to/main/file.ts", {
    stats: true,
    name: "Eris-Sharder",
    clientOptions: {
        messageLimit: 0,
    },
});

// $ExpectType boolean
Bot.isMaster();

// $ExpectType undefined
Bot.startStats();
