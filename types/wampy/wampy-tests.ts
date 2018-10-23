import Wampy = require('wampy');
import {
    DataArgs,
    ErrorArgs,
    RPCResult,
    RPCOptions,
    RPCCallback,
    WampyOpStatus
} from 'wampy';
declare var console: { log(...args: any[]): void };

let ws = new Wampy('http://wamp.router.url', {realm: 'WAMPRealm'});

ws.options();

ws.options({
    reconnectInterval: 1000,
    maxRetries: 999,
    onConnect: () => console.log('Yahoo! We are online!'),
    onClose: () => console.log('See you next time!'),
    onError: () => console.log('Breakdown happened'),
    onReconnect: () => console.log('Reconnecting...'),
    onReconnectSuccess: () => console.log('Successfully reconnected!')
});

ws.connect();
ws.connect('/my-socket-path');
ws.connect('wss://socket.server.com:5000/ws');

let id: number = ws.getSessionId();

ws.disconnect();
ws.abort();

ws.subscribe('system.monitor.update', (args: DataArgs) =>
    {
        console.log('Received system.monitor.update event!');
    })
    .subscribe('client.message', function (args: DataArgs)
    {
        console.log('Received client.message event!');
    });

let f1 = () => console.log('Subscribe processing!');

ws.unsubscribe('subscribed.topic', f1);

ws.unsubscribe('chat.message.received');

ws.call('get.server.time', null, {
    onSuccess: (args: DataArgs) =>
    {
        console.log('RPC successfully called');
        console.log('Server time is ' + args.argsDict);
    },
    onError: (args: ErrorArgs) =>
    {
        console.log('RPC call failed with error ' + args.error);
    }
});

ws.publish('system.monitor.update');
ws.getOpStatus();

ws.publish('user.logged.in');
ws.publish('chat.message.received', 'user message');
ws.publish('chat.message.received', ['user message1', 'user message2']);
ws.publish('user.modified', {field1: 'field1', field2: true, field3: 123});
ws.publish('user.modified', {field1: 'field1', field2: true, field3: 123}, {
    onSuccess: () => console.log('User successfully modified')
});
ws.publish('user.modified', {field1: 'field1', field2: true, field3: 123}, {
    onSuccess: () => console.log('User successfully modified'),
    onError: (args: ErrorArgs) => console.log('User modification failed', args.error)
});
ws.publish('chat.message.received', ['Private message'], null, {eligible: 123456789});
ws.publish('user.logged.in', { argsList: [1,2,3], argsDict: {first: 1, second:2, third: 3}});

ws.call('server.time', null, (args: DataArgs) => console.log('Server time is ' + args.argsList[0]));
ws.call('server.time', null, (args: DataArgs) => console.log('Server time is ' + args.argsDict.serverTime));

ws.call('start.migration', null, {
    onSuccess: (args: DataArgs) => console.log('RPC successfully called'),
    onError: (args: ErrorArgs) => console.log('RPC call failed!', args.error)
});

ws.call('restore.backup', {backupFile: 'backup.zip'}, {
    onSuccess: (args: DataArgs) => console.log('Backup successfully restored'),
    onError: (args: ErrorArgs) => console.log('Restore failed!', args.error)
});

ws.call('start.migration', null, {
    onSuccess: (args: DataArgs) => console.log('RPC successfully called'),
    onError: (args: ErrorArgs) => console.log('RPC call failed!', args.error)
});

let status: WampyOpStatus = ws.getOpStatus();

ws.cancel(status.reqId);

let options: RPCOptions = { process: true };

let sqrt_f: RPCCallback = (args: DataArgs): RPCResult => {
    let result = args.argsList[0] * args.argsList[0];
    if (result === 0) {
        return;
    }

    return {
        options,
        argsList: [result],
        argsDict: { result }
    }
};

ws.register('sqrt.value', sqrt_f);

ws.register('sqrt.value', {
    rpc: sqrt_f,
    onSuccess: () => console.log('RPC successfully registered'),
    onError: (args: ErrorArgs) => console.log('RPC registration failed!', args.error)
});

ws.unregister('sqrt.value');

ws.unregister('sqrt.value', {
    onSuccess: () => console.log('RPC successfully unregistered'),
    onError: (args: ErrorArgs) => console.log('RPC unregistration failed!', args.error)
});
