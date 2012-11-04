/// <reference path="../Definitions/phonegap-2.2.d.ts" />

function test_accelerometer() {
    var watchID = null;
    var options = { frequency: 3000 };

    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

    if (watchID) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
    function onSuccess(acceleration: Acceleration) {
        var element = document.getElementById('accelerometer');
        element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                            'Acceleration Y: ' + acceleration.y + '<br />' +
                            'Acceleration Z: ' + acceleration.z + '<br />' +
                            'Timestamp: ' + acceleration.timestamp + '<br />';
    }
    function onError() {
        alert('onError!');
    }
}

function test_camera() {
    var pictureSource;
    var destinationType;
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
    }
    function onPhotoDataSuccess(imageData) {
        var smallImage = <HTMLImageElement>document.getElementById('smallImage');
        smallImage.style.display = 'block';
        smallImage.src = "data:image/jpeg;base64," + imageData;
    }
    function onPhotoURISuccess(imageURI) {
        var largeImage = <HTMLImageElement>document.getElementById('largeImage');
        largeImage.style.display = 'block';
        largeImage.src = imageURI;
    }
    function capturePhoto() {
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
            quality: 50,
            destinationType: destinationType.DATA_URL
        });
    }
    function capturePhotoEdit() {
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
            quality: 20, allowEdit: true,
            destinationType: destinationType.DATA_URL
        });
    }
    function getPhoto(source) {
        navigator.camera.getPicture(onPhotoURISuccess, onFail, {
            quality: 50,
            destinationType: destinationType.FILE_URI,
            sourceType: source
        });
    }
    function onFail(message) {
        alert('Failed because: ' + message);
    }

    var popover = new CameraPopoverOptions(300, 300, 100, 100, 1);
    var options = { quality: 50, destinationType: 1, sourceType: 1, popoverOptions: popover };

    navigator.camera.getPicture(onSuccess, onFail, options);

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}

function test_capture() {
    var capture = navigator.device.capture;
    function captureSuccess(mediaFiles) {
        var i, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            uploadFile(mediaFiles[i]);
        }
    }
    function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
    }
    function captureAudio() {
        navigator.device.capture.captureAudio(captureSuccess, captureError, { limit: 2 });
    }
    function uploadFile(mediaFile) {
        var ft = new FileTransfer(),
            path = mediaFile.fullPath,
            name = mediaFile.name;
        ft.upload(path,
            "http://my.domain.com/upload.php",
            function (result) {
                console.log('Upload success: ' + result.responseCode);
                console.log(result.bytesSent + ' bytes sent');
            },
            function (error) {
                console.log('Error uploading file ' + path + ': ' + error.code);
            },
            { fileName: name });
    }
    var options = { limit: 3, duration: 10 };
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
    var captureSuccess = function (mediaFiles) {
    var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
        }
    };
    var captureError = function (error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    navigator.device.capture.captureImage(captureSuccess, captureError, { limit: 2 });
    function captureSuccess(mediaFiles) {
        var i, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            uploadFile(mediaFiles[i]);
        }
    }
    function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
    }
    function captureImage() {
        navigator.device.capture.captureImage(captureSuccess, captureError, { limit: 2 });
    }
    function uploadFile(mediaFile) {
        var ft = new FileTransfer(),
            path = mediaFile.fullPath,
            name = mediaFile.name;

        ft.upload(path,
            "http://my.domain.com/upload.php",
            function (result) {
                console.log('Upload success: ' + result.responseCode);
                console.log(result.bytesSent + ' bytes sent');
            },
            function (error) {
                console.log('Error uploading file ' + path + ': ' + error.code);
            },
            { fileName: name });
    }
    function captureSuccess(mediaFiles) {
            var i, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            uploadFile(mediaFiles[i]);
        }
    }
    function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
    }
    function captureVideo() {
        navigator.device.capture.captureVideo(captureSuccess, captureError, { limit: 2 });
    }
    function uploadFile(mediaFile) {
        var ft = new FileTransfer(),
            path = mediaFile.fullPath,
            name = mediaFile.name;

        ft.upload(path,
            "http://my.domain.com/upload.php",
            function (result) {
                console.log('Upload success: ' + result.responseCode);
                console.log(result.bytesSent + ' bytes sent');
            },
            function (error) {
                console.log('Error uploading file ' + path + ': ' + error.code);
            },
            { fileName: name });
    }
}

function test_compass() {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        navigator.compass.getCurrentHeading(onSuccess, onError);
    }
    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    }
    function onError(compassError) {
        alert('Compass Error: ' + compassError.code);
    }
    var watchID = null;


    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        startWatch();
    }
    function startWatch() {
        var options = { frequency: 3000 };
        watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    }
    function stopWatch() {
        if (watchID) {
            navigator.compass.clearWatch(watchID);
            watchID = null;
        }
    }
    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    }
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    }

    function startWatch() {
        var options = { frequency: 3000 };
        watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    }
    function stopWatch() {
        if (watchID) {
            navigator.compass.clearWatch(watchID);
            watchID = null;
        }
    }
    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    }
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    }
}

function test_connection() {
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.NONE] = 'No network connection';
    alert('Connection type: ' + states[networkState]);
}

function test_contacts() {
    var myContact = navigator.contacts.create({ "displayName": "Test User" });
    myContact.note = "This contact has a note.";
    console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);

    function onDeviceReady() {
        var options = new ContactFindOptions();
        options.filter = "Bob";
        var fields = ["displayName", "name"];
        navigator.contacts.find(fields, onSuccess, onError, options);
    }
    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            console.log("Display Name = " + contacts[i].displayName);
        }
    }
    function onError(contactError) {
        alert('onError!');
    }

    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";
    var name = new ContactName();
    name.givenName = "Jane";
    name.familyName = "Doe";
    contact.name = name;
    contact.save(onSuccess, onError);

    var clone = contact.clone();
    clone.name.givenName = "John";
    console.log("Original contact name = " + contact.name.givenName);
    console.log("Cloned contact name = " + clone.name.givenName);
    contact.remove(onSuccess, onError);

    function onDeviceReady() {
        var contact = navigator.contacts.create();
        contact.displayName = "Plumber";
        contact.nickname = "Plumber";
        var name = new ContactName();
        name.givenName = "Jane";
        name.familyName = "Doe";
        contact.name = name;
        contact.save(onSuccess, onError);
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);
        contact.remove(onSuccess, onError);
    }

    var options = new ContactFindOptions();
    options.filter = "";
    var filter = ["displayName", "addresses"];
    navigator.contacts.find(filter, onSuccess, onError, options);

    for (var i = 0; i < contacts.length; i++) {
        for (var j = 0; j < contacts[i].addresses.length; j++) {
            alert("Pref: " + contacts[i].addresses[j].pref + "\n" +
                    "Type: " + contacts[i].addresses[j].type + "\n" +
                    "Formatted: " + contacts[i].addresses[j].formatted + "\n" +
                    "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                    "Locality: " + contacts[i].addresses[j].locality + "\n" +
                    "Region: " + contacts[i].addresses[j].region + "\n" +
                    "Postal Code: " + contacts[i].addresses[j].postalCode + "\n" +
                    "Country: " + contacts[i].addresses[j].country);
        }
    }

    var contact = navigator.contacts.create();
    var phoneNumbers = [];
    phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
    phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
    phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
    contact.phoneNumbers = phoneNumbers;
    contact.save();

    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    filter = ["displayName"];
    navigator.contacts.find(filter, onSuccess, onError, options);
}

function test_device() {
    element.innerHTML = 'Device Name: ' + device.name + '<br />' +
                        'Device Cordova: ' + device.cordova + '<br />' +
                        'Device Platform: ' + device.platform + '<br />' +
                        'Device UUID: ' + device.uuid + '<br />' +
                        'Device Version: ' + device.version + '<br />';
}

function test_file() {
    function onDeviceReady() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
    }
    function gotFS(fileSystem) {
        fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
    }
    function gotFileEntry(fileEntry) {
        fileEntry.file(gotFile, fail);
    }
    function gotFile(file) {
        readDataUrl(file);
        readAsText(file);
    }
    function readDataUrl(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("Read as data URL");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    }
    function readAsText(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("Read as text");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    }
    function fail(evt) {
        console.log(evt.target.error.code);
    }

    function onDeviceReady() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
    }
    function gotFS(fileSystem) {
        fileSystem.root.getFile("readme.txt", { create: true, exclusive: false }, gotFileEntry, fail);
    }
    function gotFileEntry(fileEntry) {
        fileEntry.createWriter(gotFileWriter, fail);
    }
    function gotFileWriter(writer) {
        writer.onwriteend = function (evt) {
            console.log("contents of file now 'some sample text'");
            writer.truncate(11);
            writer.onwriteend = function (evt) {
                console.log("contents of file now 'some sample'");
                writer.seek(4);
                writer.write(" different text");
                writer.onwriteend = function (evt) {
                    console.log("contents of file now 'some different text'");
                }
            };
        };
        writer.write("some sample text");
    }
    function fail(error) {
        console.log(error.code);
    }

    function onDeviceReady() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
    }
    function onFileSystemSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }
    function fail(evt) {
        console.log(evt.target.error.code);
    }
}