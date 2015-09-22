/// <reference path="XSockets.d.ts" />

var conn = new XSockets.WebSocket('ws://localhost:4502/Generic');

conn.on(XSockets.Events.open,function (clientInfo) {
    console.log('Open', clientInfo);
});

conn.on(XSockets.Events.onError, function (err) {
    console.log('Error', err);
});

conn.on(XSockets.Events.close, function () {
    console.log('Closed');
});

conn.publish('foo', {text:'Hello Real-Time World'});

conn.on('foo', function(data) {
    console.log('subscription to foo fired with data = ', data);
});

conn.unbind('foo');

conn.one('foo', function(data) {
    console.log('subscription to foo fired with data = ', data);
});

conn.many('foo',4, function(data) {
    console.log('subscription to foo fired with data = ', data);
});

conn.on('foo', function (data) {
    console.log('subscription to foo fired with data = ', data);
}, function (confirmation) {
    console.log('subscription confirmed',confirmation);
    conn.publish('foo', { text: 'Hello Real-Time World' });
});

conn.publish(XSockets.Events.storage.set, {
    Key: "yourKey",
    Value: {
        Name: "John Doe",
        Age: 40,
        Likes: ["Beer", "Food", "Coffe"]
    }
});

conn.publish(XSockets.Events.storage.remove, {Key: 'yourKey'});

conn.on(XSockets.Events.storage.getAll, function (data) {
    data.forEach(function (item) {
        console.log(item);
    });
});

conn.publish(XSockets.Events.storage.getAll, {});

conn.publish('set_MyProp',{value:'New Value'});

conn.on('get_MyProp',function(prop){console.log('Value Of MyProp',prop)});