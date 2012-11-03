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