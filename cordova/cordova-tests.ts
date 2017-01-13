// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

// Apache Cordova core
//----------------------------------------------------------------------

console.log('cordova.version: ' + cordova.version + ', cordova.platformId: ' + cordova.platformId);

console.log(typeof window.cordova);

cordova.exec(null, null, "NativeClassName", "MethodName");

cordova.define('mymodule', (req, exp, mod)=> {
    mod.exports = { dummy: () => { console.log("i'm a dummy"); }};
});

var myModule = cordova.require('mymodule');
myModule.dummy();

var argsCheck: ArgsCheck = <ArgsCheck>cordova.require('cordova/argcheck');
argsCheck.checkArgs('ssA', 'cordova.exec', [() => { }, () => { }, 'window', 'openDatabase']);

class Application {
    start() { console.log("Starting app"); }
    pause() { console.log('app paused'); }
}

declare var app: Application;

document.addEventListener('deviceready', () => { app.start(); });
document.addEventListener('pause', ()=> { app.pause(); });




