// Example for CommonJS/AMD
/*
import eventemitter2 = require("eventemitter2");
var EventEmitter2 = eventemitter2.EventEmitter2;

class Child extends eventemitter2.EventEmitter2 {
}
*/

// This class definition doesn't work in CommonJS/AMD.
class Child extends EventEmitter2 {
}

var server = new EventEmitter2();

function testConfiguration() {
    var foo = new EventEmitter2({
        wildcard: true,
        delimiter: '::',
        newListener: false,
        maxListeners: 20,
        verboseMemoryLeak: true
    });
    var bar = new EventEmitter2({});
    var bazz = new EventEmitter2();
}

function testAddListener() {
    server.addListener('data', function (value1: any, value2: any, value3: any) {
        console.log('The event was raised!');
    });

    server.addListener('data', function (value: any) {
        console.log('The event was raised!');
    });
}

function testOn() {
    server.on('data', function (value1: any, value2: any, value3: any) {
        console.log('The event was raised!');
    });

    server.on('data', function (value: any) {
        console.log('The event was raised!');
    });
}

function testOnAny() {
    server.onAny(function (value: any) {
        console.log('All events trigger this.');
    });
}

function testOffAny() {
    server.offAny(function (value: any) {
        console.log('The event was raised!');
    });
}

function testOnce() {
    server.once('get', function (value: any) {
        console.log('Ah, we have our first value!');
    });
}

function testMany() {
    server.many('get', 4, function (value: any) {
        console.log('This event will be listened to exactly four times.');
    });
}

function testRemoveListener() {
    var callback = function (value: any) {
        console.log('someone connected!');
    };
    server.on('get', callback);
    server.removeListener('get', callback);
}

function testRemoveAllListeners() {
    server.removeAllListeners(["test::event", "another::test::event"]);
    server.removeAllListeners("test");
    server.removeAllListeners();
}

function testSetMaxListeners() {
    server.setMaxListeners(40);
}

function testListeners() {
    console.log(server.listeners('get'));
}

function testListenersAny() {
    console.log(server.listenersAny()[0]);
}

function testEmit() {
    server.emit('foo.bazz');
    server.emit(['foo', 'bar']);
}
