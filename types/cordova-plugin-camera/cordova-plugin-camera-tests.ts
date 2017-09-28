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
