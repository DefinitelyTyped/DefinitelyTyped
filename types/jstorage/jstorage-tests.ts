/// <reference types="jquery" />


// Test set first overload
var storedValue = $.jStorage.set("testObj", { foo: 'bar' });
console.assert(storedValue.foo === "bar");

// Test set second overload
$.jStorage.set("testNum", 42, { TTL: 65535 });
var readValue = $.jStorage.get<number>("testNum");
console.assert(readValue + 5 === 47);

// Test deleteKey
if ($.jStorage.deleteKey("testObj") === true) {
    console.log('deleted');
}

// Test setTTL/getTTL
$.jStorage.setTTL("testNum", 100);
console.assert($.jStorage.getTTL("testNum") === 100);

// Test flush
console.assert($.jStorage.flush() === true);

// Test storageObj
var storeObj = $.jStorage.storageObj();
console.assert(storeObj["testNum"] !== null);

// Test index
var keys = $.jStorage.index();
console.assert(keys.length > 0);

// Test storageSize
var size = $.jStorage.storageSize();
console.assert(size > 0);

// Test currentBackend
var currentBackend = $.jStorage.currentBackend();
console.assert(currentBackend != null && typeof currentBackend.getItem !== "undefined");

// Test storageAvailable
var isStorageAvailable = $.jStorage.storageAvailable();
console.assert(isStorageAvailable === true);

// Test listenKeyChange
$.jStorage.listenKeyChange("testNum", (key, value) => {
    console.assert(key.length > 0);
    console.assert(value != null);
} );

$.jStorage.listenKeyChange<number>("testNum", (key, value) => {
    console.assert(key === "testNum");
    console.assert(value + 10 > 0);
} );

// Test stopListening
$.jStorage.stopListening("testNum");
$.jStorage.stopListening("testNum", () => { console.assert(); } );

// Test subscribe
$.jStorage.subscribe("ESPN", (channel, value) => {
    console.assert(channel !== "ABC");
    console.assert(value !== null);
} );

$.jStorage.subscribe<Date>("ESPN", (channel, value) => {
    console.assert(channel === "ESPN");
    console.assert(value.getDate() > Date.now());
} );

// Test publish
$.jStorage.publish("ESPN", { date: new Date(2013, 4, 26, 7), game: "Miami Heat" });

// Test reinit
$.jStorage.reInit();
