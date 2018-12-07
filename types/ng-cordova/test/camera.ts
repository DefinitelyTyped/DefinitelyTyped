namespace ngCordova {
    function cameraTest($cordovaCamera: ICameraService) {
        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };

        $cordovaCamera.getPicture(options).then((imageData) => {
            console.log(imageData.trim());
        }).finally(() => {
            $cordovaCamera.cleanup()
                .then(() => {
                    console.log('cleaned up.');
                });
        });
    };
}
