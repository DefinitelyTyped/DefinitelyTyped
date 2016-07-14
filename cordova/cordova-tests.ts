// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

// Apache Cordova core
//----------------------------------------------------------------------

/// <reference path="../cordova-plugin-vibration/index.d.ts"/>
/// <reference path="../cordova-plugin-websql/index.d.ts"/>

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

// Battery status plugin
//----------------------------------------------------------------------
window.addEventListener('batterystatus',
    (ev: BatteryStatusEvent) => { console.log('Battery level is ' + ev.level); });

window.addEventListener('batterycritical',
    () => { alert('Battery is critical low!'); });

// Camera plugin
//----------------------------------------------------------------------

navigator.camera.getPicture(
    (data: string) => { alert('Got photo!'); },
    (message: string)=> { alert('Failed!: ' + message); },
    {
        allowEdit: true,
        cameraDirection: Camera.Direction.BACK,
        destinationType: Camera.DestinationType.FILE_URI,
        encodingType: Camera.EncodingType.JPEG,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        quality: 80
    });

// Contacts plugin
//----------------------------------------------------------------------

var contact: Contact = navigator.contacts.create({
    nickname: 'John Smith',
    displayName: 'John Smith',
    phoneNumbers: [{ pref: true, type: "work", value: "+185642556856" }]
});

navigator.contacts.find(["phoneNumbers"],
    (contacts: Contact[])=> { alert('Find ' + contacts.length + ' contacts'); },
    (error: ContactError) => { alert('Error: ' + error.message); },
    new ContactFindOptions("+1", true)
);

navigator.contacts.pickContact(
    (contact: Contact)=> { console.log(contact); },
    (err: ContactError)=> { console.log(err.message); }
);

// Device API
//----------------------------------------------------------------------

console.log(JSON.stringify(device));

// DeviceMotion plugin
//----------------------------------------------------------------------

navigator.accelerometer.getCurrentAcceleration(
    (acc: Acceleration) => { console.log('X: ' + acc.x + 'Y: ' + acc.y + 'Z: ' + acc.z); },
    () => { alert('Error!'); });

var acchandle: WatchHandle = navigator.accelerometer.watchAcceleration(
    (acc: Acceleration)=> { console.log('X: ' + acc.x + 'Y: ' + acc.y + 'Z: ' + acc.z); },
    () => { alert('Error!'); },
    { frequency: 10 });

navigator.accelerometer.clearWatch(acchandle);

// DeviceOrientation plugin
//----------------------------------------------------------------------

navigator.compass.getCurrentHeading(
    (heading: CompassHeading)=> { console.log('Got heading to ' + heading.magneticHeading); },
    (error: CompassError)=> { alert('Error! ' + error.code); },
    { frequency: 10 });

var accelhandle = navigator.compass.watchHeading(
    (heading: CompassHeading) => { console.log('Got heading to ' + heading.magneticHeading); },
    (error: CompassError) => { alert('Error! ' + error.code); },
    { frequency: 10 });

navigator.compass.clearWatch(accelhandle);

// Dialogs plugin
//----------------------------------------------------------------------

navigator.notification.alert('Alert!', () => { alert('You\'re alerted'); }, 'Alert', 'Ok');
navigator.notification.confirm('Are you ok?', (choice: number) => { alert('Your choice is ' + choice); });

// FileSystem plugin
//----------------------------------------------------------------------

function fsaccessor(fs: FileSystem) {
    console.log('FS root is: ' + fs.root.name);
    var fsreader: DirectoryReader = fs.root.createReader();
    fsreader.readEntries(
        (entries: Entry[]) => { console.log(fs.root.name + ' has ' + entries.length + ' child elements'); },
        (err: FileError)=> { alert('Error: ' + err.code); });
}



//----------------------------------------------------------------------
// FileSystem plugin
//
//cordova states that the enums for requestFileSystem live on LocalFileSystem
//
window.requestFileSystem(
    LocalFileSystem.TEMPORARY,
    1024 * 1024 * 5,
    fsaccessor,
    (err: FileError) => { alert('Error: ' + err.code); }
);
window.requestFileSystem(
    LocalFileSystem.PERSISTENT,
    1024 * 1024 * 5,
    fsaccessor,
    (err: FileError) => { alert('Error: ' + err.code); }
);
// FileSystem plugin
//----------------------------------------------------------------------

window.resolveLocalFileSystemURI(cordova.file.applicationDirectory,
    (entry: Entry)=> {
        if (entry.isDirectory) {
            console.log('successfully resolved ' + entry.fullPath + 'directory');
            console.log(entry.toURL());
            console.log(entry.toInternalURL());
        } else {
            var fentry = <FileEntry>entry;
            fentry.file((f: File) => { console.log(f.slice(f.size - 10, f.size)); });
            fentry.createWriter((writer: FileWriter)=> {
                if (writer.readyState == FileWriter.INIT) {
                    console.log('Init FileWriter');
                    writer.write(new Blob(['sdfdsfsdf']));
                    writer.onprogress = function(ev: ProgressEvent) {
                        console.log('Writing ' + ev.target);
                    };
                }
            });
        }
    },
    (error: FileError) => { console.log(error.code); }
);

// FileTransfer plugin
//----------------------------------------------------------------------



