import Ari from 'ari-client';
import util = require('util');

// TypeScript version of example published on project https://github.com/asterisk/node-ari-client.

// replace ari.js with your Asterisk instance
Ari.connect('http://ari.js:8088', 'user', 'secret', (err, client) => {
    // Create new mailbox
    const mailbox = client.Mailbox('mwi-example');
    let messages = 0;

    client.on(
        'StasisStart',

        (event, channel) => {
            channel.on('ChannelDtmfReceived', (event, channel) => {
                const digit = event.digit;
                switch (digit) {
                    case '5':
                        // Record message
                        const recording = client.LiveRecording();

                        recording.once('RecordingFinished', (event, newRecording) => {
                            const playback = client.Playback();
                            playback.once('PlaybackFinished', (event, newPlayback) => {
                                // Update MWI
                                messages += 1;
                                const opts = {
                                    oldMessages: 0,
                                    newMessages: messages,
                                };
                                mailbox.update(opts, err => {});

                                channel.hangup(err => {});
                            });

                            channel.play({ media: 'sound:vm-msgsaved' }, playback, err => {});
                        });

                        const opts = {
                            name: channel.id, // name parameter is required. See channels.json fixture file.
                            format: 'wav',
                            maxSilenceSeconds: 2,
                            beep: true,
                        };

                        // Record a message
                        channel.record(opts, recording, err => {});
                        break;
                    case '6':
                        // Playback last message
                        client.recordings.listStored((err, recordings) => {
                            const playback = client.Playback();
                            const recording = recordings[recordings.length - 1];

                            if (!recording) {
                                channel.play({ media: 'sound:vm-nomore' }, playback, err => {});
                            } else {
                                playback.once('PlaybackFinished', (event, newPlayback) => {
                                    recording.deleteStored(err => {
                                        // Remove MWI
                                        messages -= 1;
                                        const opts = {
                                            oldMessages: 0,
                                            newMessages: messages,
                                        };
                                        mailbox.update(opts, err => {});

                                        const playback = client.Playback();
                                        channel.play({ media: 'sound:vm-next' }, playback, err => {});
                                    });
                                });

                                const opts = {
                                    media: util.format('recording:%s', recording.name),
                                };

                                // Play the latest message
                                channel.play(opts, playback, err => {});
                            }
                        });
                        break;
                }
            });

            channel.answer(err => {
                let playback = client.Playback();

                playback.once('PlaybackFinished', (err, newPlayback) => {
                    playback = client.Playback();
                    channel.play({ media: 'sound:vm-next' }, playback, err => {});
                });

                channel.play({ media: 'sound:vm-leavemsg' }, playback, err => {});
            });
        },
    );

    // can also use client.start(['app-name'...]) to start multiple applications
    client.start('mwi-example');
});
