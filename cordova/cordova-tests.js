// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.
/// <reference path="cordova.d.ts"/>
// Apache Cordova core
//----------------------------------------------------------------------
console.log('cordova.version: ' + cordova.version + ', cordova.platformId: ' + cordova.platformId);
console.log(typeof window.cordova);
cordova.exec(null, null, "NativeClassName", "MethodName");
cordova.define('mymodule', function (req, exp, mod) {
    mod.exports = { dummy: function () { console.log("i'm a dummy"); } };
});
var myModule = cordova.require('mymodule');
myModule.dummy();
var argsCheck = cordova.require('cordova/argcheck');
argsCheck.checkArgs('ssA', 'cordova.exec', [function () { }, function () { }, 'window', 'openDatabase']);
var Application = (function () {
    function Application() {
    }
    Application.prototype.start = function () { console.log("Starting app"); };
    Application.prototype.pause = function () { console.log('app paused'); };
    return Application;
})();
document.addEventListener('deviceready', function () { app.start(); });
document.addEventListener('pause', function () { app.pause(); });
// Battery status plugin
//----------------------------------------------------------------------
window.addEventListener('batterystatus', function (ev) { console.log('Battery level is ' + ev.level); });
window.addEventListener('batterycritical', function () { alert('Battery is critical low!'); });
// Camera plugin
//----------------------------------------------------------------------
//navigator.ca
navigator.camera.getPicture(function (data) { alert('Got photo!'); }, function (message) { alert('Failed!: ' + message); }, {
    allowEdit: true,
    cameraDirection: Camera.Direction.BACK,
    destinationType: Camera.DestinationType.FILE_URI,
    encodingType: Camera.EncodingType.JPEG,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    quality: 80
});
// Contacts plugin
//----------------------------------------------------------------------
var contact = navigator.contacts.create({
    nickname: 'John Smith',
    displayName: 'John Smith',
    phoneNumbers: [{ pref: true, type: "work", value: "+185642556856" }]
});
navigator.contacts.find(["phoneNumbers"], function (contacts) { alert('Find ' + contacts.length + ' contacts'); }, function (error) { alert('Error: ' + error.message); }, new ContactFindOptions("+1", true));
navigator.contacts.pickContact(function (contact) { console.log(contact); }, function (err) { console.log(err.message); });
// Device API
//----------------------------------------------------------------------
console.log(JSON.stringify(device));
// DeviceMotion plugin
//----------------------------------------------------------------------
navigator.accelerometer.getCurrentAcceleration(function (acc) { console.log('X: ' + acc.x + 'Y: ' + acc.y + 'Z: ' + acc.z); }, function () { alert('Error!'); });
var acchandle = navigator.accelerometer.watchAcceleration(function (acc) { console.log('X: ' + acc.x + 'Y: ' + acc.y + 'Z: ' + acc.z); }, function () { alert('Error!'); }, { frequency: 10 });
navigator.accelerometer.clearWatch(acchandle);
// DeviceOrientation plugin
//----------------------------------------------------------------------
navigator.compass.getCurrentHeading(function (heading) { console.log('Got heading to ' + heading.magneticHeading); }, function (error) { alert('Error! ' + error.code); }, { frequency: 10 });
var accelhandle = navigator.compass.watchHeading(function (heading) { console.log('Got heading to ' + heading.magneticHeading); }, function (error) { alert('Error! ' + error.code); }, { frequency: 10 });
navigator.compass.clearWatch(accelhandle);
// Dialogs plugin
//----------------------------------------------------------------------
navigator.notification.alert('Alert!', function () { alert('You\'re alerted'); }, 'Alert', 'Ok');
navigator.notification.confirm('Are you ok?', function (choice) { alert('Your choice is ' + choice); });
// FileSystem plugin
//----------------------------------------------------------------------
function fsaccessor(fs) {
    console.log('FS root is: ' + fs.root.name);
    var fsreader = fs.root.createReader();
    fsreader.readEntries(function (entries) { console.log(fs.root.name + ' has ' + entries.length + ' child elements'); }, function (err) { alert('Error: ' + err.code); });
}
window.requestFileSystem(window.TEMPORARY, 1024 * 1024 * 5, fsaccessor, function (err) { alert('Error: ' + err.code); });
window.resolveLocalFileSystemURI(cordova.file.applicationDirectory, function (entry) {
    if (entry.isDirectory) {
        console.log('successfully resolved ' + entry.fullPath + 'directory');
        console.log(entry.toURL());
        console.log(entry.toInternalURL());
    }
    else {
        var fentry = entry;
        fentry.file(function (f) { console.log(f.slice(f.size - 10, f.size)); });
        fentry.createWriter(function (writer) {
            if (writer.readyState == FileWriter.INIT) {
                console.log('Init FileWriter');
                writer.write(new Blob(['sdfdsfsdf']));
                writer.onprogress = function (ev) {
                    console.log('Writing ' + ev.target);
                };
            }
        });
    }
}, function (error) { console.log(error.code); });
// FileTransfer plugin
//----------------------------------------------------------------------
var file = new FileTransfer();
file.onprogress = function (ev) {
    if (ev.lengthComputable) {
        console.log(ev.loaded + '/' + ev.total);
    }
};
file.download('http://some.server.com/download.php', 'cdvfile://localhost/persistent/path/to/downloads/', function (file) { console.log('File Downloaded to ' + file.fullPath); }, function (err) {
    console.error('Error ' + err.code);
    if (err.exception) {
        console.error('Failed with exception ' + err.exception);
    }
}, true, {
    headers: {
        "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
    }
});
file.upload('cdvfile://localhost/persistent/path/to/downloads/', 'http://some.server.com/download.php', function (result) { console.log('File uploaded. Bytes uploaded: ' + result.bytesSent); }, function (err) {
    console.error('Error ' + err.code);
    if (err.exception) {
        console.error('Failed with exception ' + err.exception);
    }
}, { headers: null, httpMethod: "PUT" }, true);
file.abort();
file.abort();
// InAppBrowser plugin
//----------------------------------------------------------------------
// signature of window.open() added by InAppBrowser plugin
// is similar to native window.open signature, so the compiler can's
// select proper overload, but we cast result to InAppBrowser manually.
var iab = window.open('google.com', '_self');
iab.addEventListener('loadstart', function (ev) { console.log('Start opening ' + ev.url); });
iab.show();
iab.executeScript({ code: "console.log('Injected script in action')" }, function () { console.log('Script is executed'); });
// Globalization plugin
//----------------------------------------------------------------------
navigator.globalization.dateToString(new Date(), function (date) { console.log(JSON.stringify(date)); }, function (error) { alert(error.message); }, { formatLength: "short", selector: "date" });
navigator.globalization.getDateNames(function (names) {
    names.value.forEach(function (name) { console.log(name); });
}, function (error) { alert(error.message); }, { item: "months", type: "wide" });
// Media and Media Capture
//----------------------------------------------------------------------
var media = new Media('', function () { console.log('Media opened'); }, function (err) { alert('Error: ' + err.code); });
media.play();
media.setVolume(10);
console.log('Supported audio modes are: ' + JSON.stringify(navigator.device.capture.supportedAudioModes));
navigator.device.capture.captureAudio(function (captures) { console.log(captures.length + ' captured'); }, function (err) { alert('Error ' + err.message); }, {
    limit: 3,
    duration: 10
});
// Push Notifications
//----------------------------------------------------------------------
var pushNotification = window.plugins.pushNotification;
pushNotification.register(function (regId) { console.log('Successfully registered'); }, function (err) { alert('Error!'); }, {
    channelName: "your_channel_name",
    ecb: "onNotification"
});
function onNotification(e) {
    navigator.notification.alert(e.text2, function () { }, e.text1);
}
window.plugins.pushNotification.unregister(function () { }, function () { });
// Network Plugin
//----------------------------------------------------------------------
console.log('Connection type is: ' + navigator.connectionSpeed);
var connType = navigator.connection.type;
if (connType == Connection.WIFI) {
    console.log('Congratulations, you\'re with fast Internet!');
}
document.addEventListener('offline', function () { alert('You\'re offline!'); });
// SplashScreen plugin
//----------------------------------------------------------------------
navigator.splashscreen.show();
navigator.splashscreen.hide();
// WebSQL plugin
//----------------------------------------------------------------------
var db = window.openDatabase('Test', '0.1', 'test', 1024 * 1024 * 5);
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE Sample IF NOT EXIST...');
    tx.executeSql('INSERT INTO Sample VALUES...');
}, function (err) {
    if (err.code = SqlError.SYNTAX_ERR) {
        alert('Error ' + err.message);
    }
}, function () { console.log('Transaction completed successfully'); });
// Vibration plugin
//----------------------------------------------------------------------
navigator.notification.vibrate(100);
navigator.notification.vibrateWithPattern([100, 200, 200, 150, 50], 3);
setTimeout(navigator.notification.cancelVibration, 1000);
// AppVersion plugin
//----------------------------------------------------------------------
cordova.getAppVersion.getAppName().then(function (appName) {
    var name = appName;
});
cordova.getAppVersion.getPackageName().then(function (packageName) {
    var name = packageName;
});
cordova.getAppVersion.getVersionCode().then(function (version) {
    var name = version;
});
cordova.getAppVersion.getVersionNumber().then(function (versionNum) {
    var name = versionNum;
});
