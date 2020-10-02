import Ari, { Channel, Playback } from 'ari-client';
import util = require('util');

// TypeScript version of example published on project https://github.com/asterisk/node-ari-client.

// replace ari.js with your Asterisk instance
Ari.connect('http://ari.js:8088', 'user', 'secret', (err, client) => {
    // Use once to start the application
    client.once('StasisStart', (event, incoming) => {
        incoming.answer(err => {
            const playback = client.Playback();

            // Play demo greeting and register dtmf event listeners
            incoming.play({ media: 'sound:demo-congrats' }, playback, (err, playback) => {
                registerDtmfListeners(err, playback, incoming);
            });
        });
    });

    const registerDtmfListeners = (err: Error, playback: Playback, incoming: Channel) => {
        incoming.on('ChannelDtmfReceived', (event, channel) => {
            const digit = event.digit;

            switch (digit) {
                case '5':
                    playback.control({ operation: 'pause' }, err => {});
                    break;
                case '8':
                    playback.control({ operation: 'unpause' }, err => {});
                    break;
                case '4':
                    playback.control({ operation: 'reverse' }, err => {});
                    break;
                case '6':
                    playback.control({ operation: 'forward' }, err => {});
                    break;
                case '2':
                    playback.control({ operation: 'restart' }, err => {});
                    break;
                case '#':
                    playback.control({ operation: 'stop' }, err => {});
                    incoming.hangup(err => {
                        process.exit(0);
                    });
                    break;
                default:
                    console.error(util.format('Unknown DTMF %s', digit));
            }
        });
    };

    // can also use client.start(['app-name'...]) to start multiple applications
    client.start('playback-example');
});
