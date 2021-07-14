import RNGeniusScan = require('@thegrizzlylabs/react-native-genius-scan');

// Initialize instance with your licence key
RNGeniusScan.setLicenceKey('Your license key').then(() => {
    RNGeniusScan.scanWithConfiguration({
        source: 'camera',
    }).then(scan => {
        // scan is an object were you can found uri of the image(s) and pdf in the device
        console.log(scan);
    });
});
