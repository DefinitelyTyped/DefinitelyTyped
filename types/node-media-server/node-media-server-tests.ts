import NodeMediaServer = require('node-media-server');

const nms = new NodeMediaServer({});

// $ExpectType void
nms.run();

// @ts-expect-error
nms.on();

// @ts-expect-error
nms.on('test');

// $ExpectType void
nms.on('test', () => {});

// $ExpectType Map<string, unknown>
nms.getSession('1');

// $ExpectType void
nms.stop();

const dashTrueNMS = new NodeMediaServer({
    trans: {
        ffmpeg: '',
        tasks: [
            {
                app: 'test',
                dash: true
            }
        ]
    }
});

const dashStringNMS = new NodeMediaServer({
    trans: {
        ffmpeg: '',
        tasks: [
            {
                app: 'test',
                // @ts-expect-error
                dash: 'somestring'
            }
        ]
    }
});
