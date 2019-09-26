import * as axon from 'axon';
import { Socket as NetSocket } from 'net';

const PubEmitterSocket = axon.PubEmitterSocket;
const PubSocket = axon.PubSocket;
const RepSocket = axon.RepSocket;
const ReqSocket = axon.ReqSocket;
const Socket = axon.Socket;
const SubSocket = axon.SubSocket;

const pubSocket = new PubSocket();
const pubEmitterSocket = new PubEmitterSocket();
const repSocket = new RepSocket();
const reqSocket = new ReqSocket();
const netSocket = new NetSocket();
const socket = new Socket();
const subSocket = new SubSocket();

// $ExpectType PubSocket
pubSocket.send('anything');

// $ExpectType PubSocket
pubSocket.send('anything', {w: 100, h: 200});

// $ExpectType PubSocket
pubEmitterSocket.send('anything');

// $ExpectType PubSocket
pubEmitterSocket.send('anything', {w: 100, h: 200});

// $ExpectType Socket
pubEmitterSocket.bind(3000);

// $ExpectError
pubEmitterSocket.bind({a, b, c});

// $ExpectError
pubEmitterSocket.bind();

// $ExpectType Socket
pubEmitterSocket.connect(3000);

// $ExpectError
pubEmitterSocket.connect({a, b, c});

// $ExpectError
pubEmitterSocket.connect();

// $ExpectType (args: Buffer | Buffer[]) => void
repSocket.onmessage(netSocket);

// $ExpectError
repSocket.onmessage();

// $ExpectError
repSocket.onmessage('');

// $ExpectError
repSocket.onmessage(1);

// $ExpectError
repSocket.onmessage({});

// $ExpectType string
reqSocket.id();

// $ExpectType (args: Buffer | Buffer[]) => void
reqSocket.onmessage();

// $ExpectType void
reqSocket.send('anything');

// $ExpectType void
reqSocket.send('anything', {w: 100, h: 200});

// $ExpectType Socket
socket.set('name', 'aaa');

// $ExpectError
socket.set(1, 'aaa');

// $ExpectError
socket.set({}, 'aaa');

// $ExpectError
socket.set('name');

// $ExpectType any
socket.get('name');

// $ExpectError
socket.get(1);

// $ExpectError
socket.get({});

// $ExpectType Socket
socket.enable('name');

// $ExpectError
socket.enable(1);

// $ExpectError
socket.enable({});

// $ExpectType Socket
socket.disable('name');

// $ExpectError
socket.disable(1);

// $ExpectError
socket.disable({});

// $ExpectType boolean
socket.enabled('name');

// $ExpectError
socket.enabled(1);

// $ExpectError
socket.enabled({});

// $ExpectType boolean
socket.disabled('name');

// $ExpectError
socket.disabled(1);

// $ExpectError
socket.disabled({});

// $ExpectType boolean
subSocket.hasSubscriptions();

// $ExpectType boolean
subSocket.matches('name');

// $ExpectError
subSocket.matches(1);

// $ExpectError
subSocket.matches({});

// $ExpectType RegExp
subSocket.subscribe(/some regex/);

// $ExpectType RegExp
subSocket.subscribe('some string');

// $ExpectError
subSocket.subscribe(1);

// $ExpectError
subSocket.subscribe({});

// $ExpectError
subSocket.subscribe();

// $ExpectType void
subSocket.unsubscribe(/some regex/);

// $ExpectType void
subSocket.unsubscribe('some string');

// $ExpectError
subSocket.unsubscribe(1);

// $ExpectError
subSocket.unsubscribe({});

// $ExpectError
subSocket.unsubscribe();
