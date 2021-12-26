import Ari from 'ari-client';
import util = require('util');

// async/await version of the example published on project https://github.com/asterisk/node-ari-client.

export default async () => {
    const BRIDGE_STATE = 'device-state-example';

    try {
        const client = await Ari.connect('http://ari.js:8088', 'user', 'secret');

        const bridge = client.Bridge();
        // Keep track of bridge state at the application level so we don't have to
        // make extra calls to ARI
        let currentBridgeState = 'NOT_INUSE';

        const instance = await bridge.create({ type: 'mixing' });

        // Mark this bridge as available
        const opts = {
            deviceName: util.format('Stasis:%s', BRIDGE_STATE),
            deviceState: 'NOT_INUSE',
        };
        await client.deviceStates.update(opts);

        client.on('ChannelEnteredBridge', async (event, objects) => {
            if (objects.bridge.channels.length > 0 && currentBridgeState !== 'BUSY') {
                // Mark this bridge as busy
                const opts = {
                    deviceName: util.format('Stasis:%s', BRIDGE_STATE),
                    deviceState: 'BUSY',
                };
                try {
                    await client.deviceStates.update(opts);
                    currentBridgeState = 'BUSY';
                } catch (err) {
                    console.error(err);
                }
            }
        });

        client.on('ChannelLeftBridge', async (event, objects) => {
            if (objects.bridge.channels.length === 0 && currentBridgeState !== 'NOT_INUSE') {
                // Mark this bridge as available
                const opts = {
                    deviceName: util.format('Stasis:%s', BRIDGE_STATE),
                    deviceState: 'NOT_INUSE',
                };
                try {
                    await client.deviceStates.update(opts);
                    currentBridgeState = 'NOT_INUSE';
                } catch (err) {
                    console.error(err);
                }
            }
        });

        client.on('StasisStart', async (event, incoming) => {
            try {
                await incoming.answer();
                await bridge.addChannel({ channel: incoming.id });
            } catch (err) {
                console.error(err);
            }
        });

        // can also use client.start(['app-name'...]) to start multiple applications
        client.start('device-state-example');
    } catch (err) {
        console.error(err);
    }
};
