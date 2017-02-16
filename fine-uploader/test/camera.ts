/// <reference path="../index.d.ts" />

function cameraTest() {
    const cameraButton = new HTMLButtonElement();

    const cameraOptions: qq.CameraOptions = {
        button: cameraButton,
        ios: false
    }

    const config: qq.BasicOptions = {
        camera: cameraOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}
