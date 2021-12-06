import NodeMediaServer from 'node-media-server';

const nms = new NodeMediaServer({});

// $ExpectType any
nms.run();

// $ExpectError
nms.on();

// $ExpectError
nms.on('test');

// $ExpectType any
nms.on('test', () => {});

// $ExpectType any
nms.getSession('1');

// $ExpectType any
nms.stop();
