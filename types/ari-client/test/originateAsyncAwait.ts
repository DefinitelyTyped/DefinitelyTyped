import Ari, { Channel } from 'ari-client';

// async/await version of the example published on project https://github.com/asterisk/node-ari-client.

export default async () => {
    try {
        const client = await Ari.connect('http://ari.js:8088', 'user', 'secret');
        const ENDPOINT = 'PJSIP/sipphone';

        // Use once to start the application to ensure this listener will only run
        // for the incoming channel
        client.once('StasisStart', async (event, incoming) => {
            await incoming.answer();
            originate(incoming);
        });

        const originate = async (incoming: Channel) => {
            incoming.once('StasisEnd', async (event, channel) => {
                await outgoing.hangup();
            });

            const outgoing = client.Channel();

            outgoing.once('ChannelDestroyed', async (event, channel) => {
                await incoming.hangup();
            });

            outgoing.once('StasisStart', async (event, outgoing) => {
                const bridge = client.Bridge();

                outgoing.once('StasisEnd', async (event, channel) => {
                    await bridge.destroy();
                });

                await outgoing.answer();
                const mixingBridge = await bridge.create({ type: 'mixing' });
                await mixingBridge.addChannel({ channel: [incoming.id, outgoing.id] });
            });

            const playback = client.Playback();
            await incoming.play({ media: 'sound:vm-dialout' }, playback);

            // Originate call from incoming channel to endpoint
            await outgoing.originate({
                endpoint: ENDPOINT,
                app: 'originate-example',
                appArgs: 'dialed',
            });
        };

        client.start('originate-example');
    } catch (err) {
        console.error(err);
    }
};
