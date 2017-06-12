import * as tmi from 'tmi.js';

let client = new tmi.client(); // returns a client

/* API */
client.api({url: ""}, (error, response, body) => {});
client.getChannels();
client.getOptions();
client.getUsername();
client.isMod("channel", "username");
client.readyState();

/* Events */
client.on("action", (channel, userstate, message, self) => {}); // passes items to callback
client.on("ban", (channel, username, reason) => {}); // passes items to callback
client.on("chat", (channel, userstate, message, self) => {}); // passes items to callback
client.on("cheer", (channel, userstate, message) => {}); // passes items to callback
client.on("clearchat", (channel) => {}); // passes items to callback
client.on("connected", (address, port) => {}); // passes items to callback
client.on("connecting", (address, port) => {}); // passes items to callback
client.on("disconnected", (reason) => {}); // passes items to callback
client.on("emoteonly", (channel, enabled) => {}); // passes items to callback
client.on("emotesets", (sets, obj) => {}); // passes items to callback
client.on("followersonly", (channel, enabled, length) => {}); // passes items to callback
client.on("hosted", (channel, userstate, message, self) => {}); // passes items to callback
client.on("hosting", (channel, target, viewers) => {}); // passes items to callback
client.on("join", (channel, username, self) => {}); // passes items to callback
client.on("logon", () => {}); // passes items to callback
client.on("message", (channel, userstate, message, self) => {}); // passes items to callback
client.on("mod", (channel, username) => {}); // passes items to callback
client.on("mods", (channel, mods) => {}); // passes items to callback
client.on("notice", (channel, msgid, message) => {}); // passes items to callback
client.on("part", (channel, username, self) => {}); // passes items to callback
client.on("ping", () => {}); // passes items to callback
client.on("pong", () => {}); // passes items to callback
client.on("r9kbeta", (channel, enabled) => {}); // passes items to callback
client.on("reconnect", () => {}); // passes items to callback
client.on("resub", (channel, userstate, months, message) => {}); // passes items to callback
client.on("roomstate", (channel, state) => {}); // passes items to callback
client.on("serverchange", (channel) => {}); // passes items to callback
client.on("slowmode", (channel, enabled, length) => {}); // passes items to callback
client.on("subscribers", (channel, enabled) => {}); // passes items to callback
client.on("subscription", (channel, username, method, message) => {}); // passes items to callback
client.on("timeout", (channel, username, reason, duration) => {}); // passes items to callback
client.on("unhost", (channel, viewers) => {}); // passes items to callback
client.on("unmod", (channel, username) => {}); // passes items to callback
client.on("whisper", (from, userstate, message, self) => {}); // passes items to callback

/* Actions */
let channel = "", 
    message = "", 
    username = "", 
    reason = "", 
    color = "",
    target = "",
    seconds = 0;

client.action(channel, message); // returns a promise
client.ban(channel, username, reason); // returns a promise
client.clear(channel); // returns a promise
client.color(color); // returns a promise
client.commercial(channel, seconds); // returns a promise
client.connect(); // returns a promise
client.disconnect(); // returns a promise
client.emoteonly(channel); // returns a promise
client.emoteonlyoff(channel); // returns a promise
client.followersonly(channel, length); // returns a promise
client.followersonlyoff(channel); // returns a promise
client.host(channel, target); // returns a promise
client.join(channel); // returns a promise
client.mod(channel, username); // returns a promise
client.mods(channel); // returns a promise
client.part(channel); // returns a promise
client.ping(); // returns a promise
client.r9kbeta(channel); // returns a promise
client.r9kbetaoff(channel); // returns a promise
client.raw(message); // returns a promise
client.say(channel, message); // returns a promise
client.slow(channel, length); // returns a promise
client.slowoff(channel); // returns a promise
client.subscribers(channel); // returns a promise
client.subscribersoff(channel); // returns a promise
client.timeout(channel, username, length, reason); // returns a promise
client.unban(channel, username); // returns a promise
client.unhost(channel); // returns a promise
client.unmod(channel, username); // returns a promise
client.whisper(username, message); // returns a promise
