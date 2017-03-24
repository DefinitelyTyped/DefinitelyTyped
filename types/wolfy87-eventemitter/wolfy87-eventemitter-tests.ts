import EventEmitter = require("wolfy87-eventemitter");

var emitter = new EventEmitter();

var listener = function (value: any) {
    console.log("The event was raised.");
};

function testGetListeners() {
    var listeners: Function[] = emitter.getListeners("foo");
    var listenersSearchedByRegexp: {[key:string]: Function} = emitter.getListeners(/^foo/);
}

function testFlattenListeners() {
    var listeners: Function[] = emitter.flattenListeners([{listener: listener}]);
}

function testGetListenersAsObject() {
    emitter.getListenersAsObject("foo");
    emitter.getListenersAsObject(/^foo/);
}

function testAddListener() {
    var e = emitter
        .addListener("foo", listener)
        .addListener(/^foo/, listener);
}

function testOn() {
    var e = emitter
        .on("foo", listener)
        .on(/^foo/, listener);
}

function testAddOnceListener() {
    var e = emitter
        .addOnceListener("foo", listener)
        .addOnceListener(/^foo/, listener);
}

function testOnce() {
    var e = emitter
        .once("foo", listener)
        .once(/^foo/, listener);
}

function testDefineEvent() {
    var e = emitter.defineEvent("foo");
}

function testDefineEvents() {
    var e = emitter.defineEvents(["foo", "bar"]);
}

function testAddListeners() {
    var e = emitter
        .addListeners("foo", [listener])
        .addListeners({
            "foo": listener,
            "bar": [listener]
        });
}

function testRemoveListeners() {
    var e = emitter
        .removeListeners("foo", [listener])
        .removeListeners({
            "foo": listener,
            "bar": [listener]
        });
}

function testRemoveListener() {
    var e = emitter.removeListener("foo", listener);
}

function testManipulateListeners() {
    var e = emitter
        .manipulateListeners(true, "foo", [listener])
        .manipulateListeners(true, {
            "foo": listener
        });
}

function testRemoveEvent() {
    var e = emitter.removeEvent("foo").removeEvent();
}

function testEmitEvent() {
    var e = emitter.emitEvent("foo", ["arg1", "arg2"]).emitEvent("foo");
}

function testTrigger() {
    var e = emitter.trigger("foo", ["arg1", "arg2"]).trigger("foo");
}

function testEmit() {
    var e = emitter.emit("foo", ["arg1", "arg2"]).emit("foo");
}

function testSetOnceReturnValue() {
    var e = emitter.setOnceReturnValue(false);
}

function testNoConflict() {
    var NoConflictEventEmitter = EventEmitter.noConflict();
    var e = new NoConflictEventEmitter();
}
