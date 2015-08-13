// Type definitions for steam
// Project: https://github.com/seishun/node-steam
// Definitions by: Andrey Kurdyumov <https://github.com/kant2002>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="steam.d.ts" />

var bot = new Steam.SteamClient();
bot.logOn({
    accountName: 'username',
    password: 'password'
});
bot.on('loggedOn', function () { /* ... */ });
