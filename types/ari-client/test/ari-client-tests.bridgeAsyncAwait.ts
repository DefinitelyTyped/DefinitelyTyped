import Ari, { Channel, Bridge } from 'ari-client';

// async/await version of the example published on project https://github.com/asterisk/node-ari-client.

export default async () => {
    try {
        const client = await Ari.connect('http://ari.js:8088', 'user', 'secret');

        client.on('StasisStart', async (event, incoming) => {
            await incoming.answer();
            const bridge = await getOrCreateBridge();
            await joinHoldingBridgeAndPlayMoh(bridge, incoming);
        });

        const getOrCreateBridge = async () => {
            const bridges = await client.bridges.list();
            let bridge = bridges.filter(candidate => {
                return candidate['bridge_type'] === 'holding';
            })[0];

            if (!bridge) {
                bridge = client.Bridge();
                return bridge.create({ type: 'holding' });
            } else {
                // Add incoming channel to existing holding bridge and play
                // music on hold
                return bridge;
            }
        };

        const joinHoldingBridgeAndPlayMoh = async (bridge: Bridge, channel: Channel) => {
            bridge.on('ChannelLeftBridge', async (event, instances) => {
                const holdingBridge = instances.bridge;
                if (holdingBridge.channels.length === 0 && holdingBridge.id === bridge.id) {
                    try {
                        await bridge.destroy();
                    } catch (err) {
                        console.error(err);
                    }
                }
            });
            await bridge.addChannel({ channel: channel.id });
            await channel.startMoh();
        };

        client.start('bridge-example');
    } catch (err) {
        console.error(err);
    }
};
