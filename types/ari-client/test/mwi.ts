import Ari from 'ari-client';
import util = require('util');

// TypeScript version of example published on project https://github.com/asterisk/node-ari-client.

/**
 *  This example shows how mailbox counts (new/old messages) can be updated
 *  based on live recordings being recorded or played back.
 *
 *  @namespace mwi-example
 *
 *  @copyright 2014, Digium, Inc.
 *  @license Apache License, Version 2.0
 *  @author Samuel Fortier-Galarneau <sgalarneau@digium.com>
 *  @example <caption>Dialplan</caption>
 *  exten => 7000,1,NoOp()
 *      same => n,Stasis(mwi-example)
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
     *  @memberof mwi-example
     *  @param {Error} err - error object if any, null otherwise
     *  @param {module:ari-client~Client} client - ARI client
     */
    (err, client) => {
        // Create new mailbox
        const mailbox = client.Mailbox('mwi-example');
        let messages = 0;

        client.on(
            'StasisStart',
            /**
             *  Setup event listeners for dtmf events, answer channel that entered
             *  Stasis and play greeting telling user to either leave a message or
             *  play the next available message.
             *
             *  @callback stasisStartCallback
             *  @memberof mwi-example
             *  @param {Object} event - the full event object
             *  @param {module:resources~Channel} channel -
             *    the channel that entered Stasis
             */
            (event, channel) => {
                channel.on(
                    'ChannelDtmfReceived',
                    /**
                     *  Handle dtmf events. 5 records a message and 6 plays the last
                     *  available message.
                     *
                     *  @callback channelDtmfReceivedCallback
                     *  @memberof mwi-example
                     *  @param {Object} event - the full event object
                     *  @param {module:resources~Channel} channel - the channel that
                     *    received the dtmf event
                     */
                    (event, channel) => {
                        const digit = event.digit;
                        switch (digit) {
                            case '5':
                                // Record message
                                const recording = client.LiveRecording();

                                recording.once(
                                    'RecordingFinished',
                                    /**
                                     *  Once the message has been recorded, play an announcement that
                                     *  the message has been saved and update the mailbox to show the
                                     *  new message count.
                                     *
                                     *  @callback recordingFinishedCallback
                                     *  @memberof mwi-example
                                     *  @param {Object} event - the full event object
                                     *  @param {module:resources~LiveRecording} newRecording -
                                     *    the recording object after creation
                                     */
                                    (event, newRecording) => {
                                        const playback = client.Playback();
                                        playback.once(
                                            'PlaybackFinished',
                                            /**
                                             *  Once the playback announcing that the message has been saved
                                             *  finishes, update the mailbox to show the new message count.
                                             *
                                             *  @callback messageSavedCallback
                                             *  @memberof mwi-example
                                             *  @param {Object} event - the full event object
                                             *  @param {module:resources~Playback} newPlayback -
                                             *    the playback object after it has been played
                                             */
                                            (event, newPlayback) => {
                                                // Update MWI
                                                messages += 1;
                                                const opts = {
                                                    oldMessages: 0,
                                                    newMessages: messages,
                                                };
                                                mailbox.update(opts, err => {});

                                                channel.hangup(err => {});
                                            },
                                        );

                                        channel.play({ media: 'sound:vm-msgsaved' }, playback, err => {});
                                    },
                                );

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
                                client.recordings.listStored(
                                    /**
                                     *  Iterate through the stored messages. If there are no more
                                     *  messages, play an announcement that there are no more
                                     *  messages. Otherwise, play the last available message, deconste
                                     *  it, and finally update the new message count for the mailbox.
                                     *
                                     *  @callback listStoredRecordingsCallback
                                     *  @memberof mwi-example
                                     *  @param {Error} err - error object if any, null otherwise
                                     *  @param {module:resources~StoredRecording[]} recordings -
                                     *    the array of stored recordings that currently exist
                                     */
                                    (err, recordings) => {
                                        const playback = client.Playback();
                                        const recording = recordings[recordings.length - 1];

                                        if (!recording) {
                                            channel.play({ media: 'sound:vm-nomore' }, playback, err => {});
                                        } else {
                                            playback.once(
                                                'PlaybackFinished',
                                                /**
                                                 *  Once the lastest message has been played, deconste it and
                                                 *  update the new message count for the mailbox.
                                                 *
                                                 *  @callback latestMessageCallback
                                                 *  @memberof mwi-example
                                                 *  @param {Object} event - the full event object
                                                 *  @param {module:resources~Playback} newPlayback -
                                                 *    the playback object after it has been played
                                                 */
                                                (event, newPlayback) => {
                                                    recording.deleteStored(
                                                        /**
                                                         *  Update the new message count for the mailbox and play
                                                         *  and announcement to tell user how to play the next
                                                         *  available message.
                                                         *
                                                         *  @callback deleteStoredRecordingCallback
                                                         *  @memberof mwi-example
                                                         *  @param {Error} err - error object if any, null otherwise
                                                         */
                                                        err => {
                                                            // Remove MWI
                                                            messages -= 1;
                                                            const opts = {
                                                                oldMessages: 0,
                                                                newMessages: messages,
                                                            };
                                                            mailbox.update(opts, err => {});

                                                            const playback = client.Playback();
                                                            channel.play(
                                                                { media: 'sound:vm-next' },
                                                                playback,
                                                                err => {},
                                                            );
                                                        },
                                                    );
                                                },
                                            );

                                            const opts = {
                                                media: util.format('recording:%s', recording.name),
                                            };

                                            // Play the latest message
                                            channel.play(opts, playback, err => {});
                                        }
                                    },
                                );
                                break;
                        }
                    },
                );

                channel.answer(
                    /**
                     *  Play greetings telling user how to leave a message or how to play
                     *  the next available message. This uses an event listener for the
                     *  first playback being finished so that the messages can be played
                     *  in sequence.
                     *
                     *  @callback answerChannelCallback
                     *  @memberof mwi-example
                     *  @param {Error} err - error object is any, null otherwise
                     */
                    err => {
                        let playback = client.Playback();

                        playback.once(
                            'PlaybackFinished',
                            /**
                             *  Once playback telling user how to leave a message has finished,
                             *  play message telling user how to play the next available message.
                             *
                             *  @callback leaveMessageCallback
                             *  @memberof mwi-example
                             *  @param {Error} err - error object if any, null otherwise
                             *  @param {module:resources~Playback} newPlayback -
                             *    the playback object once it has finished
                             */
                            (err, newPlayback) => {
                                playback = client.Playback();
                                channel.play({ media: 'sound:vm-next' }, playback, err => {});
                            },
                        );

                        channel.play({ media: 'sound:vm-leavemsg' }, playback, err => {});
                    },
                );
            },
        );

        // can also use client.start(['app-name'...]) to start multiple applications
        client.start('mwi-example');
    },
);
