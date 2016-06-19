/// <reference path="wampy.d.ts" />
/// <reference path="../node/node.d.ts" />

import Wampy from 'wampy';

var ws = new Wampy('http://wamp.router.url', {realm: 'WAMPRealm'});

ws.options();

ws.options({
    reconnectInterval: 1000,
    maxRetries: 999,
    onConnect: function () { console.log('Yahoo! We are online!'); },
    onClose: function () { console.log('See you next time!'); },
    onError: function () { console.log('Breakdown happened'); },
    onReconnect: function () { console.log('Reconnecting...'); },
    onReconnectSuccess: function () { console.log('Successfully reconnected!'); }
});

ws.connect();
ws.connect('/my-socket-path');
ws.connect('wss://socket.server.com:5000/ws');
var id: number = ws.getSessionId();
ws.disconnect();
ws.abort();

ws.subscribe('system.monitor.update', function (data) {
        console.log('Received system.monitor.update event!');
    })
    .subscribe('client.message', function (data) {
        console.log('Received client.message event!');
    });

var f1 = function () { console.log('Subscribe processing!'); };
ws.unsubscribe('subscribed.topic', f1);

ws.unsubscribe('chat.message.received');

ws.call('get.server.time', null, {
    onSuccess: function (stime) {
        console.log('RPC successfully called');
        console.log('Server time is ' + stime);
    },
    onError: function (err) {
        console.log('RPC call failed with error ' + err);
    }
});

ws.publish('system.monitor.update');
ws.getOpStatus();

ws.publish('user.logged.in');
ws.publish('chat.message.received', 'user message');
ws.publish('chat.message.received', ['user message1', 'user message2']);
ws.publish('user.modified', { field1: 'field1', field2: true, field3: 123 });
ws.publish('user.modified', { field1: 'field1', field2: true, field3: 123 }, {
  onSuccess: function () { console.log('User successfully modified'); }
});
ws.publish('user.modified', { field1: 'field1', field2: true, field3: 123 }, {
  onSuccess: function () { console.log('User successfully modified'); },
  onError: function (err) { console.log('User modification failed', err); }
});
ws.publish('chat.message.received', ['Private message'], null, { eligible: 123456789 });

ws.call('server.time', null, function (data) { console.log('Server time is ' + data[0]); });

ws.call('start.migration', null, {
    onSuccess: function (data) {
        console.log('RPC successfully called');
    },
    onError: function (err) {
        console.log('RPC call failed!',err);
    }
});

ws.call('restore.backup', { backupFile: 'backup.zip' }, {
    onSuccess: function (data) {
        console.log('Backup successfully restored');
    },
    onError: function (err) {
        console.log('Restore failed!',err);
    }
});

ws.call('start.migration', null, {
    onSuccess: function (data) {
        console.log('RPC successfully called');
    },
    onError: function (err) {
        console.log('RPC call failed!',err);
    }
});
var status = ws.getOpStatus();

ws.cancel(status.reqId);

var sqrt_f = function (x: number, y: any) { return [{}, x*x]; };

ws.register('sqrt.value', sqrt_f);

ws.register('sqrt.value', {
    rpc: sqrt_f,
    onSuccess: function (data) {
        console.log('RPC successfully registered');
    },
    onError: function (err) {
        console.log('RPC registration failed!',err);
    }
});

ws.unregister('sqrt.value');

ws.unregister('sqrt.value', {
    onSuccess: function (data) {
        console.log('RPC successfully unregistered');
    },
    onError: function (err) {
        console.log('RPC unregistration failed!',err);
    }
});
