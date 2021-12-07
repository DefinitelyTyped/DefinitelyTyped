import NodeMediaServer = require('node-media-server');

const nms = new NodeMediaServer({});

// $ExpectType void
nms.run();

// $ExpectError
nms.on();

// $ExpectError
nms.on('test');

// $ExpectType void
nms.on('test', () => {});

// $ExpectType Map<string, unknown>
nms.getSession('1');

// $ExpectType void
nms.stop();
