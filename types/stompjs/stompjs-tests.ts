import * as Stomp from 'stompjs';

let interval = Stomp.setInterval(1000, () => { });
Stomp.clearInterval(interval);

let client: Stomp.Client;

client = Stomp.client('url');
client = Stomp.client('url', Stomp.VERSIONS.supportedVersions());
client = Stomp.client('url', Stomp.VERSIONS.V1_0);
client = Stomp.client('url', Stomp.VERSIONS.V1_1);

client = Stomp.over(new WebSocket('url'));
client = Stomp.over(new WebSocket('url', Stomp.VERSIONS.supportedVersions()));
client = Stomp.over(new WebSocket('url', Stomp.VERSIONS.V1_0));
client = Stomp.over(new WebSocket('url', Stomp.VERSIONS.V1_1));

client = Stomp.overTCP('host', 0);

client = Stomp.overWS('url');

client.connected = false;
client.counter = 0;
client.heartbeat = { incoming: 20000, outgoing: 20000 };
client.maxWebSocketFrameSize = 16 * 1024;
client.subscriptions = { 'sub-0': {}, 'sub-1': () => { } };
client.ws = new WebSocket('url');

client.debug();

client.connect({ login: 'user', passcode: 'pass' }, () => { });
client.connect({ login: 'user', passcode: 'pass' }, () => { }, (error) => { });
client.connect({ login: 'user', passcode: 'pass' }, (frame) => { });
client.connect({ login: 'user', passcode: 'pass' }, (frame) => { }, (error) => { });
client.connect({ login: 'user', passcode: 'pass', host: 'host' }, () => { });
client.connect({ login: 'user', passcode: 'pass', host: 'host' }, (frame) => { });
client.connect({ login: 'user', passcode: 'pass', host: 'host' }, () => { }, (error) => { });
client.connect({ login: 'user', passcode: 'pass', host: 'host' }, (frame) => { }, (error) => { });

client.connect('user', 'pass', () => { });
client.connect('user', 'pass', () => { }, () => { });
client.connect('user', 'pass', () => { }, (error) => { });
client.connect('user', 'pass', () => { }, (error) => { }, 'host');
client.connect('user', 'pass', (frame) => { }, (error) => { });
client.connect('user', 'pass', (frame) => { }, (error) => { }, 'host');

client.connect({}, () => { });
client.connect({}, () => { }, () => { });
client.connect({}, () => { }, (error) => { });
client.connect({}, (frame) => { }, (error) => { });

client.disconnect(() => { });
client.disconnect(() => { }, {});

client.send('destination');
client.send('destination', {});
client.send('destination', {}, 'body');

client.subscribe('destination', (message) => { });
client.subscribe('destination', (message) => { }, {});

client.unsubscribe();

client.begin('transaction');

client.commit('transaction');

client.abort('transaction');

client.ack('messageID', 'subscription');
client.nack('messageID', 'subscription', {});

let message: Stomp.Message = {
    command: 'command',
    headers: {},
    body: 'body',

    ack({}) { },
    nack({}) { }
}

message.ack();
message.ack({});

message.nack();
message.nack({});

let frame: Stomp.Frame;

frame = new Stomp.Frame('command');
frame = new Stomp.Frame('command', {});
frame = new Stomp.Frame('command', {}, 'body');

frame.toString();

Stomp.Frame.sizeOfUTF8('abc');

Stomp.Frame.unmarshall(0);
Stomp.Frame.unmarshall('data');
Stomp.Frame.unmarshall({});
Stomp.Frame.unmarshall([{}, {}]);

Stomp.Frame.marshall('command');
Stomp.Frame.marshall('command', {});
Stomp.Frame.marshall('command', {}, 'body');
