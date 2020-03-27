import ioEmitter = require('socket.io-emitter');

const io1 = ioEmitter('localhost:6379');
const io2 = ioEmitter('localhost:6379', { key: 'my-key' });
const io3 = ioEmitter({ host: 'localhost', port: 6379 }, { key: 'my-key' });

io1.emit('broadcast', 'hello');

io2.to('game').emit('new-game', 'testing');

const nsp = io3.of('/admin');

nsp.emit('namespace', 'hello namespace');

nsp.to('notifications').emit('namespace', 'hello notifications in namespace');

io1.broadcast.json.volatile;
