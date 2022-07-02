import Ari, { Channel, Bridge, ChannelLeftBridge } from 'ari-client';

// TypeScript version of example published on project https://github.com/asterisk/node-ari-client.

Ari.connect(
    'http://ari.js:8088',
    'user',
    'secret',

    (err, client) => {
        // use once to start the application
        client.on('StasisStart', (event, incoming) => {
            incoming.answer(err => {
                getOrCreateBridge(incoming);
            });
        });

        const getOrCreateBridge = (channel: Channel) => {
            client.bridges.list((err: Error, bridges: Bridge[]) => {
                let bridge = bridges.filter((candidate: Bridge) => {
                    return candidate['bridge_type'] === 'holding';
                })[0];

                if (!bridge) {
                    bridge = client.Bridge();
                    bridge.create({ type: 'holding' }, (err: Error, bridge: Bridge) => {
                        bridge.on('ChannelLeftBridge', (event, instances) => {
                            cleanupBridge(event, instances, bridge);
                        });
                        joinHoldingBridgeAndPlayMoh(bridge, channel);
                    });
                } else {
                    // Add incoming channel to existing holding bridge and play
                    // music on hold
                    joinHoldingBridgeAndPlayMoh(bridge, channel);
                }
            });
        };

        const cleanupBridge = (event: ChannelLeftBridge, instances: ChannelLeftBridge, bridge: Bridge) => {
            const holdingBridge = instances.bridge;
            if (holdingBridge.channels.length === 0 && holdingBridge.id === bridge.id) {
                bridge.destroy(err => {});
            }
        };

        const joinHoldingBridgeAndPlayMoh = (bridge: Bridge, channel: Channel) => {
            bridge.addChannel({ channel: channel.id }, err => {
                channel.startMoh(err => {});
            });
        };

        // can also use client.start(['app-name'...]) to start multiple applications
        client.start('bridge-example');
    },
);
