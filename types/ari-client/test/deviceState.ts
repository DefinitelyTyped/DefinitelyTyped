import Ari from 'ari-client';
import util = require('util');

// TypeScript version of example published on project https://github.com/asterisk/node-ari-client.

/**
 *  This example shows how a custom device state can be updated based on whether
 *  or not a bridge is busy (at least 1 channel exists in the bridge).
 *
 *  @namespace device-state-example
 *
 *  @copyright 2014, Digium, Inc.
 *  @license Apache License, Version 2.0
 *  @author Samuel Fortier-Galarneau <sgalarneau@digium.com>
 *  @example <caption>Dialplan</caption>
 *  exten => 7000,hint,Stasis:device-state-example
 *  exten => 7000,1,NoOp()
 *      same => n,Stasis(device-state-example)
 *      same => n,Hangup()
 */

const BRIDGE_STATE = 'device-state-example';

// replace ari.js with your Asterisk instance
Ari.connect(
    'http://ari.js:8088',
    'user',
    'secret',
    /**
     *  Setup event listeners and start application.
     *
     *  @callback connectCallback
     *  @memberof device-state-example
     *  @param {Error} err - error object if any, null otherwise
     *  @param {module:ari-client~Client} client - ARI client
     */
    (err, client) => {
        const bridge = client.Bridge();
        // Keep track of bridge state at the application level so we don't have to
        // make extra calls to ARI
        let currentBridgeState = 'NOT_INUSE';

        bridge.create(
            { type: 'mixing' },
            /**
             *  Set device state to not in use since this bridge is newly created.
             *
             *  @callback bridgeCreateCallback
             *  @memberof device-state-example
             *  @param {Error} err - error object if any, null otherwise
             *  @param {module:resources~Bridge} instance - the created bridge
             */
            (err, instance) => {
                // Mark this bridge as available
                const opts = {
                    deviceName: util.format('Stasis:%s', BRIDGE_STATE),
                    deviceState: 'NOT_INUSE',
                };
                client.deviceStates.update(opts, err => {});
            },
        );

        client.on(
            'ChannelEnteredBridge',
            /**
             *  If at least 1 channel exists in bridge and current device state not
             *  set to BUSY, set the device state to BUSY.
             *
             *  @callback channelEnteredBridgeCallback
             *  @memberof device-state-example
             *  @param {Error} err - error object if any, null otherwise
             *  @param {Object} objects - object of resources (bridge and channel)
             */
            (event, objects) => {
                if (objects.bridge.channels.length > 0 && currentBridgeState !== 'BUSY') {
                    // Mark this bridge as busy
                    const opts = {
                        deviceName: util.format('Stasis:%s', BRIDGE_STATE),
                        deviceState: 'BUSY',
                    };
                    client.deviceStates.update(opts, err => {});
                    currentBridgeState = 'BUSY';
                }
            },
        );

        client.on(
            'ChannelLeftBridge',
            /**
             *  If no channels remain in the bridge, set device state to not in use.
             *
             *  @callback channelLeftBridgeCallback
             *  @memberof device-state-example
             *  @param {Error} err - error object if any, null otherwise
             *  @param {Object} objects - object of resources (bridge and channel)
             */
            (event, objects) => {
                if (objects.bridge.channels.length === 0 && currentBridgeState !== 'NOT_INUSE') {
                    // Mark this bridge as available
                    const opts = {
                        deviceName: util.format('Stasis:%s', BRIDGE_STATE),
                        deviceState: 'NOT_INUSE',
                    };
                    client.deviceStates.update(opts, err => {});
                    currentBridgeState = 'NOT_INUSE';
                }
            },
        );

        client.on(
            'StasisStart',
            /**
             *  Answer incoming channel and add it to the bridge.
             *
             *  @callback stasisStartCallback
             *  @memberof device-state-example
             *  @param {Error} err - error object if any, null otherwise
             *  @param {module:resources~Channel} incoming -
             *    channel that has entered Stasis
             */
            (event, incoming) => {
                incoming.answer(err => {
                    bridge.addChannel({ channel: incoming.id }, err => {});
                });
            },
        );

        // can also use client.start(['app-name'...]) to start multiple applications
        client.start('device-state-example');
    },
);
