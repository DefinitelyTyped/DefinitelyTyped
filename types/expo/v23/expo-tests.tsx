import * as React from 'react';

import {
    Accelerometer,
    Amplitude,
    Asset,
    AuthSession,
    Audio,
    AppLoading,
    BarCodeScanner,
    BlurViewProps,
    BlurView,
    Brightness,
    Camera,
    DocumentPicker,
    Facebook,
    FacebookAds,
    FileSystem,
	ImagePicker
} from 'expo';

Accelerometer.addListener((obj) => {
    obj.x;
    obj.y;
    obj.z;
});
Accelerometer.removeAllListeners();
Accelerometer.setUpdateInterval(1000);

Amplitude.initialize('key');
Amplitude.setUserId('userId');
Amplitude.setUserProperties({key: 1});
Amplitude.clearUserProperties();
Amplitude.logEvent('name');
Amplitude.logEventWithProperties('event', {key: 'value'});
Amplitude.setGroup('type', {key: 'value'});

const asset = Asset.fromModule(1);
asset.downloadAsync();
Asset.loadAsync(1);
Asset.loadAsync([1, 2, 3]);
const asset1 = new Asset({
    uri: 'uri',
    type: 'type',
    name: 'name',
    hash: 'hash',
    width: 122,
    height: 122
});

const url = AuthSession.getRedirectUrl();
AuthSession.dismiss();
AuthSession.startAsync({
    authUrl: 'url1',
    returnUrl: 'url2'
}).then(result => {
    switch (result.type) {
        case 'success':
            result.event;
            result.params;
            break;
        case 'error':
            result.errorCode;
            result.params;
            result.event;
            break;
        case 'dismissed':
        case 'cancel':
            result.type;
            break;
    }
});

Audio.setAudioModeAsync({
    shouldDuckAndroid: false,
    playsInSilentModeIOS: true,
    interruptionModeIOS: 2,
    interruptionModeAndroid: 1,
    allowsRecordingIOS: true
});
Audio.setIsEnabledAsync(true);
async () => {
    const result = await Audio.Sound.create('uri', {
        volume: 0.5,
        rate: 0.6
    }, null, true);

    const sound = result.sound;
    const status = result.status;

    if (!status.isLoaded) {
        status.error;
    } else {
        status.didJustFinish;
        // etc.
    }

    const _status = await sound.getStatusAsync();
    await sound.loadAsync('uri');
};

() => (
    <AppLoading
        startAsync={() => Promise.resolve()}
        onFinish={() => {}}
        onError={(error) => console.log(error)} />
);
() => (
    <AppLoading
        startAsync={null}
        onFinish={null}
        onError={null} />
);

const barcodeReadCallback = () => {};
() => (
    <BarCodeScanner
        type="front"
        torchMode="off"
        barCodeTypes={['s']}
        onBarCodeRead={barcodeReadCallback} />
);

() => (
    <BlurView
        tint="dark"
        intensity={2} />
);

async () => {
    await Brightness.setBrightnessAsync(.6);
    await Brightness.setSystemBrightnessAsync(.7);
    const br1 = await Brightness.getBrightnessAsync();
    const br2 = await Brightness.getSystemBrightnessAsync();
};

Camera.Constants.AutoFocus;
Camera.Constants.Type;
Camera.Constants.FlashMode;
Camera.Constants.WhiteBalance;
Camera.Constants.VideoQuality;
Camera.Constants.BarCodeType;
() => {
    return(<Camera ref={(component: any) => {
        if (component) {
            component.recordAsync();
        }
    }} />);
};

async () => {
    const result = await DocumentPicker.getDocumentAsync();

    if (result.type === 'success') {
        result.name;
        result.uri;
        result.size;
    }
};

async () => {
    const result = await Facebook.logInWithReadPermissionsAsync('appId');

    if (result.type === 'success') {
        result.expires;
        result.token;
    }
};

() => (
    <FacebookAds.BannerView
        type="large"
        placementId="str"
        onPress={() => {}}
        onError={() => {}} />
);

async () => {
    const info = await FileSystem.getInfoAsync('file');

    info.exists;
    info.isDirectory;

    if (info.exists) {
        info.md5;
        info.uri;
        info.size;
        info.modificationTime;
    }

    const string: string = await FileSystem.readAsStringAsync('file');
    await FileSystem.writeAsStringAsync('file', 'content');
    await FileSystem.deleteAsync('file');
    await FileSystem.moveAsync({ from: 'from', to: 'to'});
    await FileSystem.copyAsync({ from: 'from', to: 'to' });
    await FileSystem.makeDirectoryAsync('dir');
    const dirs: string[] = await FileSystem.readDirectoryAsync('dir');
    const result = await FileSystem.downloadAsync('from', 'to');

    result.headers;
    result.status;
    result.uri;
    result.md5;
};
