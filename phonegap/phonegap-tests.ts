

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
    var options = <CameraOptions>{ quality: 50, destinationType: 1, sourceType: 1, popoverOptions: popover };

    navigator.camera.getPicture(onSuccess, onFail, options);

    function onSuccess(imageData) {
        var image = <HTMLImageElement>document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
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
    function captureSuccess2(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
        }
    };
    function captureError2(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    navigator.device.capture.captureImage(captureSuccess2, captureError2, { limit: 2 });
    function captureImage() {
        navigator.device.capture.captureImage(captureSuccess2, captureError2, { limit: 2 });
    }
    function captureVideo() {
        navigator.device.capture.captureVideo(captureSuccess2, captureError2, { limit: 2 });
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
}

function test_compass2() {
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
}
function test_compass3() {
    var watchID = null;
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
        navigator.contacts.find(["displayName", "name"], onSuccess, onError, options);
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
}
function test_contacts2() {
    
    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            console.log("Display Name = " + contacts[i].displayName);
        }
    }
    function onError(contactError) {
        alert('onError!');
    }
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
    var contacts: Contact[] = [];

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
    var element = document.getElementById('deviceProperties');
    element.innerHTML = 'Device Name: ' + device.name + '<br />' +
                        'Device Cordova: ' + device.cordova + '<br />' +
                        'Device Platform: ' + device.platform + '<br />' +
                        'Device UUID: ' + device.uuid + '<br />' +
                            'Device Model: ' + device.model + '<br />' +
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
            console.log((<any>evt.target).result);
        };
        reader.readAsDataURL(file);
    }
    function readAsText(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("Read as text");
            console.log((<any>evt.target).result);
        };
        reader.readAsText(file);
    }
    function fail(evt) {
        console.log(evt.target.error.code);
    }
}
function test_file2() {
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
}
function test_file3() {
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

    var onSetMetadataWin = function () {
        console.log("success setting metadata")
    }
    var onSetMetadataFail = function () {
        console.log("error setting metadata")
    }
    var onGetFileWin = function (parent) {
        var data = {};
        var metadataKey: any;
        var metadataValue: any;
        data[metadataKey] = metadataValue;
        parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
    }
    var onGetFileFail = function () {
        console.log("error getting file")
    }
    var onFSWin = function (fileSystem) {
        var filePath = '';
        fileSystem.root.getFile(filePath, { create: true, exclusive: false }, onGetFileWin, onGetFileFail);
    }
    var onFSFail = function (evt) {
        console.log(evt.target.error.code);
    }
    var localFileSystem:any;
    window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);

    var success: any;
    var entry: FileEntry;
    var parent = (<any>document.getElementById('parent')).value,
        parentName = parent.substring(parent.lastIndexOf('/') + 1),
        parentEntry = new DirectoryEntry(parentName, parent);
    entry.moveTo(parentEntry, "newFile.txt", success, fail);
    entry.remove(success, fail);
    entry.getParent(success, fail);
    entry.createWriter(success, fail);
    entry.file(success, fail);
    entry.getMetadata(success, fail);
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1 });

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    var uri = encodeURI("http://some.server.com/upload.php");
    var fileURI = "";
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";
    var params:any = {};
    params.headers = { 'headerParam': 'headerValue' };
    options.params = params;
    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);
}

function test_geolocation() {
    var onSuccess = function (position) {
        alert('Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude + '\n' +
            'Altitude: ' + position.coords.altitude + '\n' +
            'Accuracy: ' + position.coords.accuracy + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
            'Heading: ' + position.coords.heading + '\n' +
            'Speed: ' + position.coords.speed + '\n' +
            'Timestamp: ' + position.timestamp + '\n');
    };
    function onError(error: GeolocationError) {
        alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
function test_geolocation2() {
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
                            'Longitude: ' + position.coords.longitude + '<br />' +
                            '<hr />' + element.innerHTML;
    }
    function onError(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    }
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });

    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });
    navigator.geolocation.clearWatch(watchID);
}

function test_globalization() {
    navigator.globalization.getPreferredLanguage(
        function (language) { alert('language: ' + language.value + '\n'); },
        function () { alert('Error getting language\n'); }
    );
    navigator.globalization.getLocaleName(
         function (locale) { alert('locale: ' + locale.value + '\n'); },
         function () { alert('Error getting locale\n'); }
    );
    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date:' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {
            alert('month:' + date.month +
                ' day:' + date.day +
                ' year:' + date.year + '\n');
        },
        function () { alert('Error getting date\n'); },
        { selector: 'date' }
    );
    navigator.globalization.getDatePattern(
        function (date) { alert('pattern: ' + date.pattern + '\n'); },
        function () { alert('Error getting pattern\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) { alert('dst: ' + date.dst + '\n'); },
        function () { alert('Error getting names\n'); }
    );
    navigator.globalization.getFirstDayOfWeek(
        function (day) { alert('day: ' + day.value + '\n'); },
        function () { alert('Error getting day\n'); }
    );
    navigator.globalization.numberToString(
        3.1415926,
        function (number) { alert('number: ' + number.value + '\n'); },
        function () { alert('Error getting number\n'); },
        { type: 'decimal' }
    );
    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) { alert('number: ' + number.value + '\n'); },
        function () { alert('Error getting number\n'); },
        { type: 'decimal' }
    );
    navigator.globalization.getNumberPattern(
        function (pattern) {
            alert('pattern: ' + pattern.pattern + '\n' +
                'symbol: ' + pattern.symbol + '\n' +
                'fraction: ' + pattern.fraction + '\n' +
                'rounding: ' + pattern.rounding + '\n' +
                'positive: ' + pattern.positive + '\n' +
                'negative: ' + pattern.negative + '\n' +
                'decimal: ' + pattern.decimal + '\n' +
                'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); },
        { type: 'decimal' }
    );
    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern: ' + pattern.pattern + '\n' +
                'code: ' + pattern.code + '\n' +
                'fraction: ' + pattern.fraction + '\n' +
                'rounding: ' + pattern.rounding + '\n' +
                'decimal: ' + pattern.decimal + '\n' +
                'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); }
    );
}

function test_inAppBrowser() {
    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function () { alert(event); });
    ref.removeEventListener('loadstart', null);
    ref.close();
}

function test_media() {
    var src = '';
    var my_media = new Media(src, () => { }, () => { });
    var mediaTimer = setInterval(function () {
        my_media.getCurrentPosition(
            function (position) {
                if (position > -1) {
                    console.log((position) + " sec");
                }
            },
            function (e) {
                console.log("Error getting pos=" + e);
            }
            );
    }, 1000);

    var counter = 0;
    var timerDur = setInterval(function () {
        counter = counter + 100;
        if (counter > 2000) {
            clearInterval(timerDur);
        }
        var dur = my_media.getDuration();
        if (dur > 0) {
            clearInterval(timerDur);
            document.getElementById('audio_duration').innerHTML = (dur) + " sec";
        }
    }, 100);

    function playAudio(url) {
        var my_media = new Media(url,
            function () {
                console.log("playAudio():Audio Success");
            },
            function (err) {
                console.log("playAudio():Audio Error: " + err);
            });
        my_media.play();
        setTimeout(function () {
            my_media.pause();
        }, 10000);
    }
}
function test_media2() {
    function playAudio(url) {
        var my_media = new Media(url,
            function () {
                console.log("playAudio():Audio Success");
            },
            function (err) {
                console.log("playAudio():Audio Error: " + err);
            });
        my_media.play();
    }

    var onSuccess: any;
    var onError: any;

    var my_media = new Media(src, onSuccess, onError);
    my_media.play();
    my_media.stop();
    my_media.release();
    setTimeout(function () {
        my_media.seekTo(10000);
    }, 5000);
    my_media.stopRecord();

    var src = "myrecording.mp3";
    var mediaRec = new Media(src,
        function () {
            console.log("recordAudio():Audio Success");
        },
        function (err) {
            console.log("recordAudio():Audio Error: " + err.code);
        }
    );
    mediaRec.startRecord();
}

var onConfirm: any;

function test_notification() {
    function alertDismissed() { }
    navigator.notification.alert(
        'You are the winner!',
        alertDismissed,
        'Game Over',
        'Done'
    );
    navigator.notification.confirm(
        'You are the winner!',
        onConfirm,
        'Game Over',
        'Restart,Exit'
    );
	navigator.notification.confirm(
        'You are the winner!',
        onConfirm,
        'Game Over',
        ['Restart','Exit']
    );
    navigator.notification.beep(2);
    navigator.notification.vibrate(2500);
}

function test_splashscreen() {
    navigator.splashscreen.show();
    navigator.splashscreen.hide();
}

function test_storage() {
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);
    function populateDB(tx: SQLTransaction) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }
    function errorCB(err) {
        alert("Error processing SQL: " + err);
    }
    function successCB() {
        alert("success!");
    }
    db.changeVersion("1.0", "1.1");

    function queryDB(tx) {
        tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
    }
    function querySuccess(tx, resultSet) {
        console.log("Returned rows = " + resultSet.rows.length);
        if (!resultSet.rowsAffected) {
            console.log('No rows affected!');
            return false;
        }
        console.log("Last inserted row ID = " + resultSet.insertId);
    }
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(queryDB, errorCB);

    function querySuccessSet(tx, results) {
        var len = results.rows.length;
        console.log("DEMO table: " + len + " rows found.");
        for (var i = 0; i < len; i++) {
            console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
        }
    }

    var storage = window.localStorage;
    var keyName = window.localStorage.key(0);
    window.localStorage.setItem("key", "value");
    var value = window.localStorage.getItem("key");
    window.localStorage.removeItem("key");
    window.localStorage.clear();
}
