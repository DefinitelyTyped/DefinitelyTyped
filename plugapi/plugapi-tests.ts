import PlugAPI = require("plugapi");

new PlugAPI({
    email: "",
    password: ""
}, function (err, bot) {
    if (!err) {
        const ROOM = "roomslug";
        bot.connect(ROOM); // The part after https://plug.dj 

        bot.on(PlugAPI.events.ROOM_JOIN, function (room) {
            console.log("Joined " + room);
        });

        bot.on("chat", function (data) {
            if (data.type == "emote") {
                console.log(data.from + data.message);
            } else {
                console.log(data.from + "> " + data.message);
            }
        });

        bot.on("error", function () {
            bot.connect(ROOM);
        });

        bot.deleteAllChat = false;
        bot.multiLine = true;
        bot.multiLineLimit = 5;
    } else {
        console.log("Error initializing plugAPI: " + err);
    }
});
