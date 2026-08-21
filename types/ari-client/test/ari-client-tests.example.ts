import Ari, { Channel } from "ari-client";
import util = require("util");

// TypeScript version of example published on project https://github.com/asterisk/node-ari-client.

// replace ari.js with your Asterisk instance
Ari.connect("http://ari.js:8088", "user", "secret", (err, client) => {
    if (err) {
        throw err; // program will crash if it fails to connect
    }

    // Listen to WebSocket events.
    client.on("WebSocketConnected", () => {
        console.log("WebSocket connected");
    });
    client.on("WebSocketReconnecting", err => {
        console.log("WebSocket reconnecting", err);
    });
    client.on("WebSocketMaxRetries", err => {
        console.log("WebSocket reconnection maximum retries reached", err);
    });

    // Listen to API loading error events.
    client.on("APILoadError", err => {
        console.log("An error occurred while loading API", err);
    });

    // Listen to WebSocket ping responses.
    client.on("pong", () => {
        console.log("WebSocket pong received");
    });

    // Use once to start the application
    client.on("StasisStart", (event, incoming) => {
        // Handle DTMF events
        incoming.on("ChannelDtmfReceived", (event, channel) => {
            const digit = event.digit;
            switch (digit) {
                case "#":
                    play(channel, "sound:vm-goodbye", err => {
                        channel.hangup(err => {
                            process.exit(0);
                        });
                    });
                    break;
                case "*":
                    play(channel, "sound:tt-monkeys");
                    break;
                default:
                    play(channel, util.format("sound:digits/%s", digit));
            }
        });

        incoming.answer(err => {
            play(incoming, "sound:hello-world");
        });
    });

    const play = (channel: Channel, sound: string, callback?: (param: any) => void) => {
        // Referencing client instance of channel.
        const playback = channel._client.Playback();

        playback.once("PlaybackFinished", (event, instance) => {
            if (callback) {
                callback(null);
            }
        });
        channel.play({ media: sound }, playback, (err, playback) => {});
    };

    // can also use client.start(['app-name'...]) to start multiple applications
    client.start("example");
});
