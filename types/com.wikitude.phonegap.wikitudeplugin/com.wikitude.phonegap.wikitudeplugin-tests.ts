const startupConfiguration: any = { camera_position: 'back' };

// Some code samples from the wikitude ionic starter
WikitudePlugin.loadARchitectWorld(
    success => {
        console.log('ARchitect World loaded successfully.');
    },
    fail => {
        console.log('Failed to load ARchitect World!');
    },
    'www/assets/07_3dModels_6_3dModelAtGeoLocation/index.html',
    ['geo'],
    <JSON> startupConfiguration
);

WikitudePlugin.setOnUrlInvokeCallback(url => {
    if (url.indexOf('captureScreen') > -1) {
        WikitudePlugin.captureScreen(
            absoluteFilePath => {
                WikitudePlugin.callJavaScript(
                    `World.testFunction('Screenshot saved at: ${absoluteFilePath}');`
                );
            },
            errorMessage => {
                console.log(errorMessage);
            },
            true,
            null
        );
    } else {
        alert(url + 'not handled');
    }
});
