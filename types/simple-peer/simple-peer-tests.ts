import SimplePeer = require('simple-peer');

const peer = new SimplePeer();
peer.write(new Buffer('hey'));
peer.on('data', (chunk) => {
    console.log(`got a chunk: ${chunk}`);
});
