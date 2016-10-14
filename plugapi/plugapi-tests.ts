/// <reference path="./plugapi.d.ts" />

import * as PlugAPI from "plugapi";

let yolo = new PlugAPI({
    email: "",
    password: ""
}, function (err,bot) {
    if (!err) {
        bot.connect("roomslug"); // The part after https://plug.dj 
        bot.on("roomJoin", function (room) {
            console.log("Joined " + room);
        });
    } else {
        console.log("Error initializing plugAPI: " + err);
    }
});