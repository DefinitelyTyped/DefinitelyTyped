import Ari, { Channel, Playback } from 'ari-client';
import util = require('util');

// TypeScript version of example published on project https://github.com/asterisk/node-ari-client.

/**
 *  This example shows how a playback can be controlled on a channel using
 *  channel dtmf events.
 *
 *  @namespace playback-example
 *
 *  @copyright 2014, Digium, Inc.
 *  @license Apache License, Version 2.0
 *  @author Samuel Fortier-Galarneau <sgalarneau@digium.com>
 *  @example <caption>Dialplan</caption>
 *  exten => 7000,1,NoOp()
 *      same => n,Stasis(playback-example)
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
     *  @memberof playback-example
     *  @param {Error} err - error object if any, null otherwise
     *  @param {module:ari-client~Client} client - ARI client
     */
    (err, client) => {
        // Use once to start the application
        client.once(
            'StasisStart',
            /**
             *  Once the incoming channel has entered Stasis, answer it, play demo
             *  sound and register dtmf event listeners to control the playback.
             *
             *  @callback stasisStartCallback
             *  @memberof playback-example
             *  @param {Object} event - the full event object
             *  @param {module:resources~Channel} incoming - the channel entering
             *    Stasis
             */
            (event, incoming) => {
                incoming.answer(
                    /**
                     *  Once the incoming channel has been answered, play demo sound and
                     *  register dtmf event listeners to control the playback.
                     *
                     *  @callback channelAnswerCallback
                     *  @memberof playback-example
                     *  @param {Error} err - error object if any, null otherwise
                     */
                    err => {
                        const playback = client.Playback();

                        // Play demo greeting and register dtmf event listeners
                        incoming.play({ media: 'sound:demo-congrats' }, playback, function (err, playback) {
                            registerDtmfListeners(err, playback, incoming);
                        });
                    },
                );
            },
        );

        /**
         *  Register playback dtmf events to control playback.
         *
         *  @function registerDtmfListeners
         *  @memberof playback-example
         *  @param {Error} err - error object if any, null otherwise
         *  @param {module:resources~Playback} playback - the playback object to
         *    control
         *  @param {module:resources~Channel} incoming - the incoming channel
         *    responsible for playing and controlling the playback sound
         */
        const registerDtmfListeners = (err: Error, playback: Playback, incoming: Channel) => {
            incoming.on(
                'ChannelDtmfReceived',
                /**
                 *  Handle DTMF events to control playback. 5 pauses the playback, 8
                 *  unpauses the playback, 4 moves the playback backwards, 6 moves the
                 *  playback forwards, 2 restarts the playback, and # stops the playback
                 *  and hangups the channel.
                 *
                 *  @callback channelDtmfReceivedCallback
                 *  @memberof playback-example
                 *  @param {Object} event - the full event object
                 *  @param {module:resources~Channel} channel - the channel on which
                 *    the dtmf event occured
                 */
                (event, channel) => {
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
                },
            );
        };

        // can also use client.start(['app-name'...]) to start multiple applications
        client.start('playback-example');
    },
);
