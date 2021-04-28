import * as JMuxer from 'jmuxer';

const video: Uint8Array = new Uint8Array([1, 2, 3, 4, 5]);

const jmuxer = new JMuxer({
    node: 'player',
    mode: 'video',
    debug: true
});

jmuxer.feed({
    video
});
jmuxer.destroy();
