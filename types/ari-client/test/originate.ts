import Ari, { Channel, Containers } from 'ari-client';

// TypeScript version of example published on project https://github.com/asterisk/node-ari-client.

const ENDPOINT = 'PJSIP/sipphone';

// replace ari.js with your Asterisk instance
Ari.connect('http://ari.js:8088', 'user', 'secret', (err, client) => {
    // Use once to start the application to ensure this listener will only run
    // for the incoming channel
    client.once('StasisStart', (event, incoming) => {
        incoming.answer(err => {
            originate(incoming);
        });
    });

    const originate = (incoming: Channel) => {
        incoming.once('StasisEnd', (event, channel) => {
            outgoing.hangup(err => {});
        });

        const outgoing = client.Channel();

        outgoing.once('ChannelDestroyed', (event, channel) => {
            incoming.hangup(err => {});
        });

        outgoing.once('StasisStart', (event, outgoing) => {
            const bridge = client.Bridge();

            outgoing.once('StasisEnd', (event, channel) => {
                bridge.destroy(err => {});
            });

            outgoing.answer(err => {
                bridge.create({ type: 'mixing' }, (err, bridge) => {
                    bridge.addChannel({ channel: [incoming.id, outgoing.id] }, err => {});
                });
            });
        });

        const playback = client.Playback();
        incoming.play({ media: 'sound:vm-dialout' }, playback, err => {});

        // Originate call from incoming channel to endpoint
        const variables: Containers = { 'CALLERID(name)': 'Alice', name: 'test' };
        outgoing.originate(
            { endpoint: ENDPOINT, app: 'originate-example', appArgs: 'dialed', variables },
            (err, channel) => {},
        );
    };

    // can also use client.start(['app-name'...]) to start multiple applications
    client.start('originate-example');
});
