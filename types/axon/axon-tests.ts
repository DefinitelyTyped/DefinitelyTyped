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

// @ts-expect-error
pubEmitterSocket.bind({a, b, c});

// @ts-expect-error
pubEmitterSocket.bind();

// $ExpectType Socket
pubEmitterSocket.connect(3000);

// @ts-expect-error
pubEmitterSocket.connect({a, b, c});

// @ts-expect-error
pubEmitterSocket.connect();

// $ExpectType (args: Buffer | Buffer[]) => void
repSocket.onmessage(netSocket);

// @ts-expect-error
repSocket.onmessage();

// @ts-expect-error
repSocket.onmessage('');

// @ts-expect-error
repSocket.onmessage(1);

// @ts-expect-error
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

// @ts-expect-error
socket.set(1, 'aaa');

// @ts-expect-error
socket.set({}, 'aaa');

// @ts-expect-error
socket.set('name');

// $ExpectType any
socket.get('name');

// @ts-expect-error
socket.get(1);

// @ts-expect-error
socket.get({});

// $ExpectType Socket
socket.enable('name');

// @ts-expect-error
socket.enable(1);

// @ts-expect-error
socket.enable({});

// $ExpectType Socket
socket.disable('name');

// @ts-expect-error
socket.disable(1);

// @ts-expect-error
socket.disable({});

// $ExpectType boolean
socket.enabled('name');

// @ts-expect-error
socket.enabled(1);

// @ts-expect-error
socket.enabled({});

// $ExpectType boolean
socket.disabled('name');

// @ts-expect-error
socket.disabled(1);

// @ts-expect-error
socket.disabled({});

// $ExpectType boolean
subSocket.hasSubscriptions();

// $ExpectType boolean
subSocket.matches('name');

// @ts-expect-error
subSocket.matches(1);

// @ts-expect-error
subSocket.matches({});

// $ExpectType RegExp
subSocket.subscribe(/some regex/);

// $ExpectType RegExp
subSocket.subscribe('some string');

// @ts-expect-error
subSocket.subscribe(1);

// @ts-expect-error
subSocket.subscribe({});

// @ts-expect-error
subSocket.subscribe();

// $ExpectType void
subSocket.unsubscribe(/some regex/);

// $ExpectType void
subSocket.unsubscribe('some string');

// @ts-expect-error
subSocket.unsubscribe(1);

// @ts-expect-error
subSocket.unsubscribe({});

// @ts-expect-error
subSocket.unsubscribe();
