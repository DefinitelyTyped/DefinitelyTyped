import PeerId = require('./index');

const peerId = new PeerId(Buffer.from('foo'), 'a', 'b');

const promise1 = PeerId.createFromJSON({
    id: 'foo',
    privKey: 'bar',
    pubKey: 'baz',
});

promise1.then(peerId => peerId.)
