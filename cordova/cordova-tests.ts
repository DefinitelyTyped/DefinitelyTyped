// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license. 

/// <reference path="cordova.d.ts"/>

// Apache Cordova core
//----------------------------------------------------------------------

console.log('cordova.version: ' + cordova.version + ', cordova.platformId: ' + cordova.platformId);

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

window.requestFileSystem(
    window.TEMPORARY,
    1024 * 1024 * 5,
    fsaccessor,
    (err: FileError) => { alert('Error: ' + err.code); }
);

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

var file = new FileTransfer();

file.onprogress = (ev: ProgressEvent) => {
    if (ev.lengthComputable) {
        console.log(ev.loaded + '/' + ev.total);
    }
};

file.download('http://some.server.com/download.php',
    'cdvfile://localhost/persistent/path/to/downloads/',
    (file: FileEntry)=> { console.log('File Downloaded to ' + file.fullPath); },
    (err: FileTransferError) => {
        console.error('Error ' + err.code);
        if (err.exception) {
            console.error('Failed with exception ' + err.exception);
        }
    },
    { headers: null },
    true);

file.abort();


// InAppBrowser plugin
//----------------------------------------------------------------------

// signature of window.open() added by InAppBrowser plugin 
// is similar to native window.open signature, so the compiler can's
// select proper overload, but we cast result to InAppBrowser manually.
var iab = <InAppBrowser>window.open('google.com', '_self');
iab.addEventListener('loadstart', (ev: InAppBrowserEvent) => { console.log('Start opening ' + ev.url); });
iab.show();
iab.executeScript(
    { code: "console.log('Injected script in action')" },
    ()=> { console.log('Script is executed'); }
);

// Globalization plugin
//----------------------------------------------------------------------

navigator.globalization.dateToString(new Date(),
    (date) => { console.log(JSON.stringify(date)); },
    (error) => { alert(error.message); },
    { formatLength: "short", selector: "date" });

navigator.globalization.getDateNames(
    (names) => {
        names.value.forEach((name) => { console.log(name); });
    },
    (error) => { alert(error.message); },
    { item: "months", type: "wide" });

// Media and Media Capture
//----------------------------------------------------------------------

var media = new Media('',
    () => { console.log('Media opened'); },
    (err: MediaError) => { alert('Error: ' + err.code); });
media.play();
media.setVolume(10);

console.log('Supported audio modes are: ' + JSON.stringify(navigator.device.capture.supportedAudioModes));

navigator.device.capture.captureAudio(
    (captures: MediaFile[])=> { console.log(captures.length + ' captured'); },
    (err: CaptureError)=> { alert('Error ' + err.message); },
    {
        limit: 3,
        duration: 10
    });

// Push Notifications
//----------------------------------------------------------------------

var pushNotification = window.plugins.pushNotification;
pushNotification.register(
    (regId: string) => { console.log('Successfully registered'); },
    (err: any) => { alert('Error!'); },
    {
        channelName: "your_channel_name",
        ecb: "onNotification"
    });

function onNotification(e: any) {
    navigator.notification.alert(e.text2, () => { }, e.text1);
}

window.plugins.pushNotification.unregister(() => { }, () => { });

// Network Plugin
//----------------------------------------------------------------------

console.log('Connection type is: ' + navigator.connectionSpeed);

var connType = navigator.connection.type;
if (connType == Connection.WIFI) {
    console.log('Congratulations, you\'re with fast Internet!');
}

document.addEventListener('offline', () => { alert('You\'re offline!'); });

// SplashScreen plugin
//----------------------------------------------------------------------

navigator.splashscreen.show();
navigator.splashscreen.hide();


// WebSQL plugin
//----------------------------------------------------------------------

var db = window.openDatabase('Test', '0.1', 'test', 1024 * 1024 * 5);
db.transaction(
    (tx: SqlTransaction) => {
        tx.executeSql('CREATE TABLE Sample IF NOT EXIST...');
        tx.executeSql('INSERT INTO Sample VALUES...');
    },
    (err: SqlError) => {
        if (err.code = SqlError.SYNTAX_ERR) {
            alert('Error ' + err.message);
        }
    },
    () => { console.log('Transaction completed successfully'); }
);

// Vibration plugin
//----------------------------------------------------------------------
navigator.notification.vibrate(100);
navigator.notification.vibrateWithPattern([100, 200, 200, 150, 50], 3);
setTimeout(navigator.notification.cancelVibration, 1000);