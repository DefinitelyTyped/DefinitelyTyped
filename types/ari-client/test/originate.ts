import Ari, { Channel } from 'ari-client';

// TypeScript version of example published on project https://github.com/asterisk/node-ari-client.

/**
 *  This example shows how a call can be originated from a channel entering a
 *  Stasis application to an endpoint. The endpoint channel will then enter the
 *  Stasis application and the 2 channels will be placed into a mixing bridge.
 *
 *  @namespace originate-example
 *
 *  @copyright 2014, Digium, Inc.
 *  @license Apache License, Version 2.0
 *  @author Samuel Fortier-Galarneau <sgalarneau@digium.com>
 *  @example <caption>Dialplan</caption>
 *  exten => 7000,1,NoOp()
 *      same => n,Stasis(originate-example)
 *      same => n,Hangup()
 */

const ENDPOINT = 'PJSIP/sipphone';

// replace ari.js with your Asterisk instance
Ari.connect(
    'http://ari.js:8088',
    'user',
    'secret',
    /**
     *  Setup event listeners and start application.
     *
     *  @callback connectCallback
     *  @memberof originate-example
     *  @param {Error} err - error object if any, null otherwise
     *  @param {module:ari-client~Client} client - ARI client
     */
    (err, client) => {
        // Use once to start the application to ensure this listener will only run
        // for the incoming channel
        client.once(
            'StasisStart',
            /**
             *  Once the incoming channel has entered Stasis, answer it and originate
             *  call to the endpoint (outgoing channel).
             *
             *  @callback incomingStasisStartCallback
             *  @memberof originate-example
             *  @param {Object} event - the full event object
             *  @param {module:resources~Channel} incoming -
             *    the incoming channel entering Stasis
             */
            (event, incoming) => {
                incoming.answer(err => {
                    originate(incoming);
                });
            },
        );

        /**
         *  Originate the outgoing channel
         *
         *  @function originate
         *  @memberof originate-example
         *  @param {module:resources~Channel} incoming - the incoming channel that
         *    will originate the call to the endpoint
         */
        const originate = (incoming: Channel) => {
            incoming.once(
                'StasisEnd',
                /**
                 *  If the incoming channel ends, hangup the outgoing channel.
                 *
                 *  @callback incomingStasisEndCallback
                 *  @memberof originate-example
                 *  @param {Object} event - the full event object
                 *  @param {module:resources~Channel} channel -
                 *    the incoming channel leaving Stasis
                 */
                (event, channel) => {
                    outgoing.hangup(err => {});
                },
            );

            const outgoing = client.Channel();

            outgoing.once(
                'ChannelDestroyed',
                /**
                 *  If the endpoint rejects the call, hangup the incoming channel.
                 *
                 *  @callback outgoingChannelDestroyedCallback
                 *  @memberof originate-example
                 *  @param {Object} event - the full event object
                 *  @param {module:resources~Channel} channel -
                 *    the channel that was destroyed
                 */
                (event, channel) => {
                    incoming.hangup(err => {});
                },
            );

            outgoing.once(
                'StasisStart',
                /**
                 *  When the outgoing channel enters Stasis, create a mixing bridge
                 *  and join the channels together.
                 *
                 *  @callback outgoingStasisStartCallback
                 *  @memberof originate-example
                 *  @param {Object} event - the full event object
                 *  @param {module:resources~Channel} outgoing -
                 *    the outgoing channel entering Stasis
                 */
                (event, outgoing) => {
                    const bridge = client.Bridge();

                    outgoing.once(
                        'StasisEnd',
                        /**
                         *  If the outgoing channel ends, clean up the bridge.
                         *
                         *  @callback outgoingStasisEndCallback
                         *  @memberof originate-example
                         *  @param {Object} event - the full event object
                         *  @param {module:resources~Channel} channel -
                         *    the outgoing channel leaving Stasis
                         */
                        (event, channel) => {
                            bridge.destroy(err => {});
                        },
                    );

                    outgoing.answer(
                        /**
                         *  Once the outgoing channel has been answered, create a mixing
                         *  bridge and add the incoming and outgoing channels to it.
                         *
                         *  @callback outgoingAnswerCallback
                         *  @memberof originate-example
                         *  @param {Error} err - error object if any, null otherwise
                         */
                        err => {
                            bridge.create(
                                { type: 'mixing' },
                                /**
                                 *  Once the mixing bridge has been created, join the incoming and
                                 *  outgoing channels to it.
                                 *
                                 *  @callback bridgeCreateCallback
                                 *  @memberof originate-example
                                 *  @param {Error} err - error object if any, null otherwise
                                 *  @param {module:resources~Bridge} bridge - the newly created
                                 *    mixing bridge
                                 */
                                (err, bridge) => {
                                    bridge.addChannel({ channel: [incoming.id, outgoing.id] }, err => {});
                                },
                            );
                        },
                    );
                },
            );

            const playback = client.Playback();
            incoming.play({ media: 'sound:vm-dialout' }, playback, err => {});

            // Originate call from incoming channel to endpoint
            outgoing.originate(
                { endpoint: ENDPOINT, app: 'originate-example', appArgs: 'dialed' },
                (err, channel) => {},
            );
        };

        // can also use client.start(['app-name'...]) to start multiple applications
        client.start('originate-example');
    },
);
