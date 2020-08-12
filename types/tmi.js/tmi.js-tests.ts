import * as tmi from "tmi.js";

const options: tmi.Options = {
    channels: ['#channel1', '#channel2'],
    connection: {
        maxReconnectAttempts: 2,
        maxReconnectInverval: 10,
        port: 100,
        reconnect: true,
        reconnectDecay: 20,
        reconnectInterval: 10,
        secure: true,
        timeout: 20
    },
    identity: {
        password: "oauth:xxxOAuthIDHerexxx",
        username: "yourusernamehere"
    },
    logger: {
        warn: (message) => { },
        error: (message) => { },
        info: (message) => { },
    },
    options: {
        clientId: "xxxapiidherexxx",
        debug: true
    }
};

const client: tmi.Client = tmi.Client(options);

client.connect().then(() => {
    client.on("subscription", (channel: string, username: string, methods: tmi.SubMethods, msg: string, userstate: tmi.SubUserstate) => {
        client.say(channel, `Thank you to ${userstate["display-name"]} for subscribing!`);
        client.ping();
        client.r9kbeta(channel);
        client.r9kbetaoff(channel);
        client.raw("xxxRawIRCHere");
        switch (client.readyState()) {
            case "CLOSED":
            case "CLOSING":
            case "CONNECTING":
            case "OPEN":
                break;
        }
        client.slow(channel, 5);
        client.slowoff(channel);
        client.subscribers(channel);
        client.subscribersoff(channel);
        client.timeout(channel, username, 600, "timeoutreason");
        client.ban(channel, username, "reason");
        client.unban(channel, username);
        client.host(channel, "tohost");
        client.unhost(channel);
        client.mod(channel, username);
        client.unmod(channel, username);
        client.whisper(username, "whisper");
        client.part(channel);
        switch (methods.plan) {
            case "1000":
            case "2000":
            case "3000":
            case "Prime":
                break;
        }
        const { badges, color, emotes, flags, id, login, message, mod, subscriber, turbo } = userstate;
        if (emotes) {
            emotes.test.forEach(element => { });
        }
        if (badges) {
            const { admin, turbo, subscriber, bits, broadcaster, global_mod, moderator, premium, staff, vip, partner, founder } = badges;
        }
        userstate["display-name"];
        userstate["emotes-raw"];
        userstate["badges-raw"];
        userstate["message-type"];
        userstate["msg-param-cumulative-months"];
        userstate["msg-param-should-share-streak"];
        userstate["msg-param-streak-months"];
        userstate["msg-param-sub-plan"];
        userstate["msg-param-sub-plan-name"];
        userstate["room-id"];
        userstate["system-msg"];
        userstate["tmi-sent-ts"];
        userstate["user-id"];
        userstate["user-type"];
    }).on("roomstate", (chnl: string, roomstate: tmi.RoomState) => {
        const { channel, r9k, rituals, slow } = roomstate;
        roomstate["broadcaster-lang"];
        roomstate["emote-only"];
        roomstate["followers-only"];
        roomstate["room-id"];
        roomstate["subs-only"];
    }).once("chat", (channel: string, userstate: tmi.ChatUserstate, message: string, self: boolean) => {
        const { badges, bits, color, emotes, flags, id, mod, subscriber, turbo, username } = userstate;
        userstate["badges-raw"];
        userstate["display-name"];
        userstate["emotes-raw"];
        userstate["message-type"];
        userstate["room-id"];
        userstate["tmi-sent-ts"];
        userstate["user-id"];
        userstate["user-type"];
    }).once("emotesets", (sets: string, emotes: tmi.EmoteObj) => {
        emotes.test[0].code;
        emotes.test[0].id;
    });
});
