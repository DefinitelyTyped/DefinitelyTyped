import Ari, { Channel } from 'ari-client';
import util = require('util');

// async/await version of the example published on project https://github.com/asterisk/node-ari-client.

export default async () => {
    try {
        const client = await Ari.connect('http://ari.js:8088', 'user', 'secret');

        // Use once to start the application
        client.on('StasisStart', async (event, incoming) => {
            // Handle DTMF events
            incoming.on('ChannelDtmfReceived', async (event, channel) => {
                const digit = event.digit;
                switch (digit) {
                    case '#':
                        await play(channel, 'sound:vm-goodbye');
                        await channel.hangup();
                        process.exit(0);
                        break;
                    case '*':
                        await play(channel, 'sound:tt-monkeys');
                        break;
                    default:
                        await play(channel, util.format('sound:digits/%s', digit));
                }
            });

            await incoming.answer();
            await play(incoming, 'sound:hello-world');
        });

        const play = (channel: Channel, sound: string) => {
            const playback = client.Playback();

            return new Promise((resolve, reject) => {
                playback.once('PlaybackFinished', (event, playback) => {
                    resolve(playback);
                });

                channel.play({ media: sound }, playback).catch(err => {
                    reject(err);
                });
            });
        };

        // can also use client.start(['app-name'...]) to start multiple applications
        client.start('example');
    } catch (err) {
        console.error(err);
    }
};
