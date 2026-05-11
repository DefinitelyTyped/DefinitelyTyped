import Steam = require("steam");

var bot = new Steam.SteamClient();
bot.logOn({
    accountName: "username",
    password: "password",
});
bot.on("loggedOn", function() {/* ... */});
