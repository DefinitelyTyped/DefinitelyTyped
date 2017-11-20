import {
    Accelerometer,
    Amplitude,
    Asset,
    AuthSession,
    Audio
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
Audio.Sound.create('uri', {
    volume: 0.5,
    rate: 0.6
}, null, true).then(result => {
    const sound = result.sound;
    const status = result.status;

    if (!status.isLoaded) {
        status.error;
    } else {
        status.didJustFinish;
        // etc.
    }

    sound.getStatusAsync().then(_status => {
        _status.isLoaded;
    });
});
