import Wampy = require('wampy');
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

ws.subscribe('system.monitor.update', (args: any[], kwargs: any) =>
    {
        console.log('Received system.monitor.update event!');
    })
    .subscribe('client.message', function (args: any[], kwargs: any)
    {
        console.log('Received client.message event!');
    });

let f1 = () => console.log('Subscribe processing!');

ws.unsubscribe('subscribed.topic', f1);

ws.unsubscribe('chat.message.received');

ws.call('get.server.time', null, {
    onSuccess: (args: any[], kwargs: any) =>
    {
        console.log('RPC successfully called');
        console.log('Server time is ' + kwargs);
    },
    onError: (err: string, details: any, args: any[], kwargs: any) =>
    {
        console.log('RPC call failed with error ' + err);
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
    onError: (err: string, details: any) => console.log('User modification failed', err)
});
ws.publish('chat.message.received', ['Private message'], null, {eligible: 123456789});

ws.call('server.time', null, (args: any[], kwargs: any) => console.log('Server time is ' + args[0]));

ws.call('start.migration', null, {
    onSuccess: (args: any[], kwargs: any) => console.log('RPC successfully called'),
    onError: (err: string, details: any, args: any[], kwargs: any) => console.log('RPC call failed!', err)
});

ws.call('restore.backup', {backupFile: 'backup.zip'}, {
    onSuccess: (args: any[], kwargs: any) => console.log('Backup successfully restored'),
    onError: (err: string, details: any, args: any[], kwargs: any) => console.log('Restore failed!', err)
});

ws.call('start.migration', null, {
    onSuccess: (args: any[], kwargs: any) => console.log('RPC successfully called'),
    onError: (err: string, details: any, args: any[], kwargs: any) => console.log('RPC call failed!', err)
});

let status = ws.getOpStatus();

ws.cancel(status.reqId);

let sqrt_f = (args: any[], kwargs: any, options: any) => [{}, kwargs * kwargs];

ws.register('sqrt.value', sqrt_f);

ws.register('sqrt.value', {
    rpc: sqrt_f,
    onSuccess: (args: any[], kwargs: any) => console.log('RPC successfully registered'),
    onError: (err: string, details: any) => console.log('RPC registration failed!', err)
});

ws.unregister('sqrt.value');

ws.unregister('sqrt.value', {
    onSuccess: (data: any) => console.log('RPC successfully unregistered'),
    onError: (err: string, details: any) => console.log('RPC unregistration failed!', err)
});
