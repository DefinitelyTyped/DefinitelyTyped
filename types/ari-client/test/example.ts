import Ari, { Channel } from 'ari-client';
import util = require('util');

// TypeScript version of example published on project https://github.com/asterisk/node-ari-client.

/**
 *  This example shows how channel dtmf events can be used to playback sounds on
 *  a channel and to hangup the channel.
 *
 *  @namespace example
 *
 *  @copyright 2014, Digium, Inc.
 *  @license Apache License, Version 2.0
 *  @author Samuel Fortier-Galarneau <sgalarneau@digium.com>
 *  @example <caption>Dialplan</caption>
 *  exten => 7000,1,NoOp()
 *      same => n,Stasis(example)
 *      same => n,Hangup()
 */

// replace ari.js with your Asterisk instance
Ari.connect(
    'http://ari.js:8088',
    'user',
    'secret',
    /**
     *  Setup event listeners and start application.
     *
     *  @callback connectCallback
     *  @memberof example
     *  @param {Error} err - error object if any, null otherwise
     *  @param {module:ari-client~Client} client - ARI client
     */
    (err, client) => {
        if (err) {
            throw err; // program will crash if it fails to connect
        }

        // Use once to start the application
        client.on(
            'StasisStart',
            /**
             *  Setup event listeners for dtmf events, answer channel that entered
             *  Stasis and play hello world greeting to the channel.
             *
             *  @callback stasisStartCallback
             *  @memberof example
             *  @param {Object} event - the full event object
             *  @param {module:resources~Channel} incoming -
             *    the channel that entered Stasis
             */
            (event, incoming) => {
                // Handle DTMF events
                incoming.on(
                    'ChannelDtmfReceived',
                    /**
                     *  Handle the dtmf event appropriately. # will hangup the channel,
                     *  * will play a sound on the channel, and all digits will be played
                     *  back on the channel.
                     *
                     *  @callback channelDtmfReceivedCallack
                     *  @memberof example
                     *  @param {Object} event - the full event object
                     *  @param {module:resources~Channel} channel - the channel that
                     *    received the dtmf event
                     */
                    (event, channel) => {
                        const digit = event.digit;
                        switch (digit) {
                            case '#':
                                play(channel, 'sound:vm-goodbye', err => {
                                    channel.hangup(err => {
                                        process.exit(0);
                                    });
                                });
                                break;
                            case '*':
                                play(channel, 'sound:tt-monkeys');
                                break;
                            default:
                                play(channel, util.format('sound:digits/%s', digit));
                        }
                    },
                );

                incoming.answer(err => {
                    play(incoming, 'sound:hello-world');
                });
            },
        );

        /**
         *  Initiate a playback on the given channel.
         *
         *  @function play
         *  @memberof example
         *  @param {module:resources~Channel} channel - the channel to send the
         *    playback to
         *  @param {string} sound - the string identifier of the sound to play
         *  @param {Function} callback - callback invoked once playback is finished
         */
        const play = (channel: Channel, sound: string, callback?: (param: any) => void) => {
            const playback = client.Playback();
            playback.once('PlaybackFinished', (event, instance) => {
                if (callback) {
                    callback(null);
                }
            });
            channel.play({ media: sound }, playback, (err, playback) => {});
        };

        // can also use client.start(['app-name'...]) to start multiple applications
        client.start('example');
    },
);
