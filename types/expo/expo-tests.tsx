import * as React from 'react';
import { Text } from 'react-native';

import {
    Accelerometer,
    AdMobAppEvent,
    AdMobBanner,
    AdMobInterstitial,
    AdMobRewarded,
    Amplitude,
    AppLoading,
    Asset,
    Audio,
    AuthSession,
    BarCodeScanner,
    BlurView,
    Brightness,
    Calendar,
    Camera,
    CameraObject,
    Constants,
    Contacts,
    DocumentPicker,
    EdgeInsets,
    EdgePadding,
    EventUserLocation,
    Facebook,
    FacebookAds,
    FaceDetector,
    FileSystem,
    Haptic,
    ImageManipulator,
    ImagePicker,
    IntentLauncherAndroid,
    KeepAwake,
    KmlMapEvent,
    LinearGradient,
    Linking,
    Location,
    Localization,
    MailComposer,
    MapEvent,
    MapStyleElement,
    MapView,
    MediaLibrary,
    Permissions,
    PublisherBanner,
    Region,
    registerRootComponent,
    ScreenOrientation,
    SecureStore,
    SplashScreen,
    Svg,
    Updates,
    WebBrowser
} from 'expo';

const reverseGeocode: Promise<Location.GeocodeData[]> = Location.reverseGeocodeAsync({
    latitude: 0,
    longitude: 0
});

Location.watchPositionAsync({
    accuracy: Location.Accuracy.BestForNavigation,
    timeInterval: 10000,
    distanceInterval: 0,
    timeout: 10000
}, (data) => {
    data.coords;
    data.timestamp;
});

Accelerometer.addListener((obj) => {
    obj.x;
    obj.y;
    obj.z;
});
Accelerometer.removeAllListeners();
Accelerometer.setUpdateInterval(1000);

() => (
    <AdMobBanner
        bannerSize="leaderboard"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        testDeviceID="EMULATOR"
        didFailToReceiveAdWithError={(error: string) => console.log(error)}
        style={{ flex: 1 }}
    />
);

() => (
    <PublisherBanner
        bannerSize="leaderboard"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        testDeviceID="EMULATOR"
        didFailToReceiveAdWithError={(error: string) => console.log(error)}
        onAdMobDispatchAppEvent={(event: AdMobAppEvent) => console.log(event)}
        style={{ flex: 1 }}
    />
);

AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
AdMobInterstitial.setTestDeviceID('EMULATOR');
async () => {
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
};

AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
AdMobRewarded.setTestDeviceID('EMULATOR');
async () => {
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
};

Amplitude.initialize('key');
Amplitude.setUserId('userId');
Amplitude.setUserProperties({key: 1});
Amplitude.clearUserProperties();
Amplitude.logEvent('name');
Amplitude.logEventWithProperties('event', {key: 'value'});
Amplitude.setGroup('type', ['value']);

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
AuthSession.startAsync({
    authUrl: 'url1',
    returnUrl: undefined
});

Audio.setAudioModeAsync({
    shouldDuckAndroid: false,
    playsInSilentModeIOS: true,
    interruptionModeIOS: 2,
    interruptionModeAndroid: 1,
    allowsRecordingIOS: true,
});
Audio.setIsEnabledAsync(true);

Audio.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS === 0;
Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX === 1;
Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS === 2;

Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX === 1;
Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS === 2;

Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT === 0;
Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP === 1;
Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4 === 2;
Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_NB === 3;
Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB === 4;
Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADIF === 5;
Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADTS === 6;
Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_RTP_AVP === 7;
Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG2TS === 8;
Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_WEBM === 9;

Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT === 0;
Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB === 1;
Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB === 2;
Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC === 3;
Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_HE_AAC === 4;
Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC_ELD === 5;
Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_VORBIS === 6;

Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM === 'lpcm';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_AC3 === 'ac-3';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_60958AC3 === 'cac3';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLEIMA4 === 'ima4';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC === 'aac ';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4CELP === 'celp';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4HVXC === 'hvxc';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4TWINVQ === 'twvq';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE3 === 'MAC3';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE6 === 'MAC6';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_ULAW === 'ulaw';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_ALAW === 'alaw';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN === 'QDMC';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN2 === 'QDM2';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_QUALCOMM === 'Qclp';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER1 === '.mp1';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER2 === '.mp2';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER3 === '.mp3';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLELOSSLESS === 'alac';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE === 'aach';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_LD === 'aacl';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD === 'aace';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_SBR === 'aacf';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_V2 === 'aacg';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE_V2 === 'aacp';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_SPATIAL === 'aacs';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR === 'samr';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR_WB === 'sawb';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_AUDIBLE === 'AUDB';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_ILBC === 'ilbc';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_DVIINTELIMA === 0x6d730011;
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MICROSOFTGSM === 0x6d730031;
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_AES3 === 'aes3';
Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_ENHANCEDAC3 === 'ec-3';

Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN === 0;
Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_LOW === 0x20;
Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MEDIUM === 0x40;
Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH === 0x60;
Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX === 0x7f;

Audio.RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_CONSTANT === 0;
Audio.RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_LONG_TERM_AVERAGE === 1;
Audio.RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE_CONSTRAINED === 2;
Audio.RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE === 3;

Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY;
Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY;
async () => {
    const result = await Audio.Sound.createAsync({uri: 'uri'}, {
        volume: 0.55,
        rate: 16.5
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
    await sound.loadAsync({uri: 'uri'});
};

() => (
    <AppLoading
        startAsync={() => Promise.resolve()}
        onFinish={() => {}}
        onError={(error) => console.log(error)} />
);
() => (
    <AppLoading />
);

const barcodeReadCallback = () => {};
() => (
    <BarCodeScanner
        type="front"
        torchMode="off"
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.aztec]}
        onBarCodeScanned={barcodeReadCallback} />
);

() => (
    <BlurView
        tint="dark"
        intensity={2} />
);

async () => {
    await Brightness.setBrightnessAsync(0.65);
    await Brightness.setSystemBrightnessAsync(0.75);
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
async (camera: CameraObject) => {
    const picture = await camera.takePictureAsync({
        quality: 0.5,
        base64: true,
        exif: true
    });

    picture.uri;
    picture.width;
    picture.height;
    picture.exif;
    picture.base64;

    camera.takePictureAsync({
        quality: 1,
        onPictureSaved: pic => {
            pic.uri;
            pic.width;
            pic.height;
            pic.exif;
            pic.base64;
        }
    });
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
    const { type, expires, token } = await Facebook.logInWithReadPermissionsAsync("appId");
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

async () => {
    // Video test
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });

    if (!result.cancelled) {
        result.uri;
        result.width;
        result.height;
        result.duration;
        result.type;
    }
};

async () => {
    // Image test
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true,
        aspect: [4, 3],
        quality: 1,
        exif: true,
    });

    if (!result.cancelled) {
        result.uri;
        result.width;
        result.height;
        result.exif;
        result.base64;
        result.type;
    }
};

async () => {
    const result = await ImageManipulator.manipulateAsync('url', [
        { rotate: 90 },
        { resize: { width: 300 } },
        { resize: { height: 300 } },
        { resize: { height: 300, width: 300 } },
        { crop: { originX: 0, originY: 0, height: 300, width: 300 } }
    ], {
        compress: 0.75
    });

    result.height;
    result.uri;
    result.width;
};

async () => {
    const result = await ImageManipulator.manipulateAsync('url', [
        { rotate: 360 },
        { resize: { width: 300 } },
        { resize: { height: 300 } },
        { resize: { height: 300, width: 300 } },
    ], {
        compress: 0.75
    });

    result.height;
    result.uri;
    result.width;
};

FaceDetector.Constants.Mode.fast;
FaceDetector.Constants.Mode.accurate;
FaceDetector.Constants.Landmarks.all;
FaceDetector.Constants.Landmarks.none;
FaceDetector.Constants.Classifications.all;
FaceDetector.Constants.Classifications.none;
async () => {
    const result = await FaceDetector.detectFaces('url', {
        mode: FaceDetector.Constants.Mode.fast,
        detectLandmarks: FaceDetector.Constants.Landmarks.all,
        runClassifications: FaceDetector.Constants.Classifications.none
    });

    result.faces[0];
};

async () => {
    function isBoolean(x: boolean) {
    }
    function isString(x: string) {
    }
    // Two examples of members inherited from react-native Linking
    // to prove that inheritence is working.
    Linking.addEventListener('url', (e) => {
        e.url === '';
    });
    isBoolean(await Linking.canOpenURL('expo://'));

    // Extensions added by expo.

    isString(Linking.makeUrl('path'));
    isString(Linking.makeUrl('path', { q: 2, u: 'ery', }));

    const {
        path,
        queryParams,
    } = Linking.parse('');
    isString(path);
    isString(queryParams['x'] || '');

    const {
        path: path2,
        queryParams: queryParams2,
    } = await Linking.parseInitialURLAsync();
    isString(path2);
    isString(queryParams2['y'] || '');
};

// #region securestore
async () => {
    await SecureStore.setItemAsync('some-key', 'some-val', {
        keychainService: "some-service",
        keychainAccessible: SecureStore.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,
    });
    const result = await SecureStore.getItemAsync('some-key', { keychainService: "some-service" });
    if (result != null) {
        result.slice() === 'some-val';
    }
    await SecureStore.deleteItemAsync('some-key', { keychainService: "some-service" });
};

const allSecureStoreKeychainAccessibleValues: number[] = [
    SecureStore.WHEN_UNLOCKED,
    SecureStore.AFTER_FIRST_UNLOCK,
    SecureStore.ALWAYS,
    SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    SecureStore.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,
    SecureStore.AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY,
    SecureStore.ALWAYS_THIS_DEVICE_ONLY,
];
// #endregion

() => (
    <Svg width={100} height={50}>
        <Svg.Rect
            x={25}
            y={5}
            width={150}
            height={50}
            fill='rgb(0,0,255)'
            strokeWidth={3}
            stroke='rgb(0,0,0)'
            transform="translate(0, 0)"
        />
        <Svg.Circle
            cx={50}
            cy={50}
            r={50}
            fill="pink"
            transform="translate(0, 0)"
        />
        <Svg.Ellipse
            cx={55}
            cy={55}
            rx={50}
            ry={30}
            stroke="purple"
            strokeWidth={2}
            fill="yellow"
            transform="translate(0, 0)"
        />
        <Svg.Line
            x1={0}
            y1={0}
            x2={100}
            y2={100}
            stroke="red"
            strokeWidth={2}
            transform="translate(0, 0)"
        />
        <Svg.Polygon
            points="40,5 70,80 25,95"
            fill="lime"
            stroke="purple"
            strokeWidth={1}
            transform="translate(0, 0)"
        />
        <Svg.Polyline
            points="10,10 20,12 30,20 40,60 60,70 95,90"
            fill="none"
            stroke="black"
            strokeWidth={3}
            transform="translate(0, 0)"
        />
        <Svg.Text
            fill="none"
            stroke="purple"
            fontSize={20}
            fontWeight="bold"
            x={100}
            y={20}
            textAnchor="middle"
            transform="translate(0, 0)"
        >
            STROKED TEXT
        </Svg.Text>
        <Svg.Defs>
            <Svg.Path
                id="path"
                d=""
            />
        </Svg.Defs>
        <Svg.G transform="translate(0, 0)" y={20}>
            <Svg.Text fill="blue" transform={{ translateX: 0, translateY: 0 }}>
                <Svg.TextPath href="#path" startOffset="-10%">
                    We go up and down,
                    <Svg.TSpan fill="red" dy="5,5,5">then up again</Svg.TSpan>
                </Svg.TextPath>
            </Svg.Text>
            <Svg.Path
                d=""
                fill="none"
                stroke="red"
                strokeWidth={1}
            />
        </Svg.G>
        <Svg.Use href="#shape" transform="translate(0, 0)" x="20" y="0" />
        <Svg.Use href="#shape" transform={{ translateX: 0, translateY: 0 }} x="20" y="0" width="20" height="20"/>
        <Svg.Symbol id="symbol" viewBox="0 0 150 110" width="100" height="50">
            <Svg.Circle cx="50" cy="50" r="40" strokeWidth="8" stroke="red" fill="red"/>
            <Svg.Circle cx="90" cy="60" r="40" strokeWidth="8" stroke="green" fill="white"/>
        </Svg.Symbol>
        <Svg.Defs>
            <Svg.ClipPath id="clip">
                <Svg.Circle cx="50%" cy="50%" r="40%"/>
            </Svg.ClipPath>
            <Svg.RadialGradient id="grad" cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%" gradientUnits="userSpaceOnUse">
                <Svg.Stop
                    offset="0%"
                    stopColor="#ff0"
                    stopOpacity="1"
                />
            </Svg.RadialGradient>
            <Svg.LinearGradient id="grad" x1="0" y1="0" x2="170" y2="0">
                <Svg.Stop offset="1" stopColor="red" stopOpacity="1" />
            </Svg.LinearGradient>
        </Svg.Defs>
    </Svg>
);

() => (
    <Svg width={100} height={50} preserveAspectRatio="none" />
);

IntentLauncherAndroid.ACTION_ACCESSIBILITY_SETTINGS === 'android.settings.ACCESSIBILITY_SETTINGS';
IntentLauncherAndroid.ACTION_APP_NOTIFICATION_REDACTION === 'android.settings.ACTION_APP_NOTIFICATION_REDACTION';
IntentLauncherAndroid.ACTION_CONDITION_PROVIDER_SETTINGS === 'android.settings.ACTION_CONDITION_PROVIDER_SETTINGS';
IntentLauncherAndroid.ACTION_NOTIFICATION_LISTENER_SETTINGS === 'android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS';
IntentLauncherAndroid.ACTION_PRINT_SETTINGS === 'android.settings.ACTION_PRINT_SETTINGS';
IntentLauncherAndroid.ACTION_ADD_ACCOUNT_SETTINGS === 'android.settings.ADD_ACCOUNT_SETTINGS';
IntentLauncherAndroid.ACTION_AIRPLANE_MODE_SETTINGS === 'android.settings.AIRPLANE_MODE_SETTINGS';
IntentLauncherAndroid.ACTION_APN_SETTINGS === 'android.settings.APN_SETTINGS';
IntentLauncherAndroid.ACTION_APPLICATION_DETAILS_SETTINGS === 'android.settings.APPLICATION_DETAILS_SETTINGS';
IntentLauncherAndroid.ACTION_APPLICATION_DEVELOPMENT_SETTINGS === 'android.settings.APPLICATION_DEVELOPMENT_SETTINGS';
IntentLauncherAndroid.ACTION_APPLICATION_SETTINGS === 'android.settings.APPLICATION_SETTINGS';
IntentLauncherAndroid.ACTION_APP_NOTIFICATION_SETTINGS === 'android.settings.APP_NOTIFICATION_SETTINGS';
IntentLauncherAndroid.ACTION_APP_OPS_SETTINGS === 'android.settings.APP_OPS_SETTINGS';
IntentLauncherAndroid.ACTION_BATTERY_SAVER_SETTINGS === 'android.settings.BATTERY_SAVER_SETTINGS';
IntentLauncherAndroid.ACTION_BLUETOOTH_SETTINGS === 'android.settings.BLUETOOTH_SETTINGS';
IntentLauncherAndroid.ACTION_CAPTIONING_SETTINGS === 'android.settings.CAPTIONING_SETTINGS';
IntentLauncherAndroid.ACTION_CAST_SETTINGS === 'android.settings.CAST_SETTINGS';
IntentLauncherAndroid.ACTION_DATA_ROAMING_SETTINGS === 'android.settings.DATA_ROAMING_SETTINGS';
IntentLauncherAndroid.ACTION_DATE_SETTINGS === 'android.settings.DATE_SETTINGS';
IntentLauncherAndroid.ACTION_DEVICE_INFO_SETTINGS === 'android.settings.DEVICE_INFO_SETTINGS';
IntentLauncherAndroid.ACTION_DEVICE_NAME === 'android.settings.DEVICE_NAME';
IntentLauncherAndroid.ACTION_DISPLAY_SETTINGS === 'android.settings.DISPLAY_SETTINGS';
IntentLauncherAndroid.ACTION_DREAM_SETTINGS === 'android.settings.DREAM_SETTINGS';
IntentLauncherAndroid.ACTION_HARD_KEYBOARD_SETTINGS === 'android.settings.HARD_KEYBOARD_SETTINGS';
IntentLauncherAndroid.ACTION_HOME_SETTINGS === 'android.settings.HOME_SETTINGS';
IntentLauncherAndroid.ACTION_IGNORE_BACKGROUND_DATA_RESTRICTIONS_SETTINGS === 'android.settings.IGNORE_BACKGROUND_DATA_RESTRICTIONS_SETTINGS';
IntentLauncherAndroid.ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS === 'android.settings.IGNORE_BATTERY_OPTIMIZATION_SETTINGS';
IntentLauncherAndroid.ACTION_INPUT_METHOD_SETTINGS === 'android.settings.INPUT_METHOD_SETTINGS';
IntentLauncherAndroid.ACTION_INPUT_METHOD_SUBTYPE_SETTINGS === 'android.settings.INPUT_METHOD_SUBTYPE_SETTINGS';
IntentLauncherAndroid.ACTION_INTERNAL_STORAGE_SETTINGS === 'android.settings.INTERNAL_STORAGE_SETTINGS';
IntentLauncherAndroid.ACTION_LOCALE_SETTINGS === 'android.settings.LOCALE_SETTINGS';
IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS === 'android.settings.LOCATION_SOURCE_SETTINGS';
IntentLauncherAndroid.ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS === 'android.settings.MANAGE_ALL_APPLICATIONS_SETTINGS';
IntentLauncherAndroid.ACTION_MANAGE_APPLICATIONS_SETTINGS === 'android.settings.MANAGE_APPLICATIONS_SETTINGS';
IntentLauncherAndroid.ACTION_MANAGE_DEFAULT_APPS_SETTINGS === 'android.settings.MANAGE_DEFAULT_APPS_SETTINGS';
IntentLauncherAndroid.ACTION_MEMORY_CARD_SETTINGS === 'android.settings.MEMORY_CARD_SETTINGS';
IntentLauncherAndroid.ACTION_MONITORING_CERT_INFO === 'android.settings.MONITORING_CERT_INFO';
IntentLauncherAndroid.ACTION_NETWORK_OPERATOR_SETTINGS === 'android.settings.NETWORK_OPERATOR_SETTINGS';
IntentLauncherAndroid.ACTION_NFCSHARING_SETTINGS === 'android.settings.NFCSHARING_SETTINGS';
IntentLauncherAndroid.ACTION_NFC_PAYMENT_SETTINGS === 'android.settings.NFC_PAYMENT_SETTINGS';
IntentLauncherAndroid.ACTION_NFC_SETTINGS === 'android.settings.NFC_SETTINGS';
IntentLauncherAndroid.ACTION_NIGHT_DISPLAY_SETTINGS === 'android.settings.NIGHT_DISPLAY_SETTINGS';
IntentLauncherAndroid.ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS === 'android.settings.NOTIFICATION_POLICY_ACCESS_SETTINGS';
IntentLauncherAndroid.ACTION_NOTIFICATION_SETTINGS === 'android.settings.NOTIFICATION_SETTINGS';
IntentLauncherAndroid.ACTION_PAIRING_SETTINGS === 'android.settings.PAIRING_SETTINGS';
IntentLauncherAndroid.ACTION_PRIVACY_SETTINGS === 'android.settings.PRIVACY_SETTINGS';
IntentLauncherAndroid.ACTION_QUICK_LAUNCH_SETTINGS === 'android.settings.QUICK_LAUNCH_SETTINGS';
IntentLauncherAndroid.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS === 'android.settings.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS';
IntentLauncherAndroid.ACTION_SECURITY_SETTINGS === 'android.settings.SECURITY_SETTINGS';
IntentLauncherAndroid.ACTION_SETTINGS === 'android.settings.SETTINGS';
IntentLauncherAndroid.ACTION_SHOW_ADMIN_SUPPORT_DETAILS === 'android.settings.SHOW_ADMIN_SUPPORT_DETAILS';
IntentLauncherAndroid.ACTION_SHOW_INPUT_METHOD_PICKER === 'android.settings.SHOW_INPUT_METHOD_PICKER';
IntentLauncherAndroid.ACTION_SHOW_REGULATORY_INFO === 'android.settings.SHOW_REGULATORY_INFO';
IntentLauncherAndroid.ACTION_SHOW_REMOTE_BUGREPORT_DIALOG === 'android.settings.SHOW_REMOTE_BUGREPORT_DIALOG';
IntentLauncherAndroid.ACTION_SOUND_SETTINGS === 'android.settings.SOUND_SETTINGS';
IntentLauncherAndroid.ACTION_STORAGE_MANAGER_SETTINGS === 'android.settings.STORAGE_MANAGER_SETTINGS';
IntentLauncherAndroid.ACTION_SYNC_SETTINGS === 'android.settings.SYNC_SETTINGS';
IntentLauncherAndroid.ACTION_SYSTEM_UPDATE_SETTINGS === 'android.settings.SYSTEM_UPDATE_SETTINGS';
IntentLauncherAndroid.ACTION_TETHER_PROVISIONING_UI === 'android.settings.TETHER_PROVISIONING_UI';
IntentLauncherAndroid.ACTION_TRUSTED_CREDENTIALS_USER === 'android.settings.TRUSTED_CREDENTIALS_USER';
IntentLauncherAndroid.ACTION_USAGE_ACCESS_SETTINGS === 'android.settings.USAGE_ACCESS_SETTINGS';
IntentLauncherAndroid.ACTION_USER_DICTIONARY_INSERT === 'android.settings.USER_DICTIONARY_INSERT';
IntentLauncherAndroid.ACTION_USER_DICTIONARY_SETTINGS === 'android.settings.USER_DICTIONARY_SETTINGS';
IntentLauncherAndroid.ACTION_USER_SETTINGS === 'android.settings.USER_SETTINGS';
IntentLauncherAndroid.ACTION_VOICE_CONTROL_AIRPLANE_MODE === 'android.settings.VOICE_CONTROL_AIRPLANE_MODE';
IntentLauncherAndroid.ACTION_VOICE_CONTROL_BATTERY_SAVER_MODE === 'android.settings.VOICE_CONTROL_BATTERY_SAVER_MODE';
IntentLauncherAndroid.ACTION_VOICE_CONTROL_DO_NOT_DISTURB_MODE === 'android.settings.VOICE_CONTROL_DO_NOT_DISTURB_MODE';
IntentLauncherAndroid.ACTION_VOICE_INPUT_SETTINGS === 'android.settings.VOICE_INPUT_SETTINGS';
IntentLauncherAndroid.ACTION_VPN_SETTINGS === 'android.settings.VPN_SETTINGS';
IntentLauncherAndroid.ACTION_VR_LISTENER_SETTINGS === 'android.settings.VR_LISTENER_SETTINGS';
IntentLauncherAndroid.ACTION_WEBVIEW_SETTINGS === 'android.settings.WEBVIEW_SETTINGS';
IntentLauncherAndroid.ACTION_WIFI_IP_SETTINGS === 'android.settings.WIFI_IP_SETTINGS';
IntentLauncherAndroid.ACTION_WIFI_SETTINGS === 'android.settings.WIFI_SETTINGS';
IntentLauncherAndroid.ACTION_WIRELESS_SETTINGS === 'android.settings.WIRELESS_SETTINGS';
IntentLauncherAndroid.ACTION_ZEN_MODE_AUTOMATION_SETTINGS === 'android.settings.ZEN_MODE_AUTOMATION_SETTINGS';
IntentLauncherAndroid.ACTION_ZEN_MODE_EVENT_RULE_SETTINGS === 'android.settings.ZEN_MODE_EVENT_RULE_SETTINGS';
IntentLauncherAndroid.ACTION_ZEN_MODE_EXTERNAL_RULE_SETTINGS === 'android.settings.ZEN_MODE_EXTERNAL_RULE_SETTINGS';
IntentLauncherAndroid.ACTION_ZEN_MODE_PRIORITY_SETTINGS === 'android.settings.ZEN_MODE_PRIORITY_SETTINGS';
IntentLauncherAndroid.ACTION_ZEN_MODE_SCHEDULE_RULE_SETTINGS === 'android.settings.ZEN_MODE_SCHEDULE_RULE_SETTINGS';
IntentLauncherAndroid.ACTION_ZEN_MODE_SETTINGS === 'android.settings.ZEN_MODE_SETTINGS';

KeepAwake.activate();
KeepAwake.deactivate();

() => (
    <LinearGradient
        colors={['#fff']}
        start={[1, 1]} />
);

() => (
    <LinearGradient
        colors={['#fff']}
        style={{ flex: 1 }} />
);

Permissions.CAMERA === 'camera';
Permissions.CAMERA_ROLL === 'cameraRoll';
Permissions.AUDIO_RECORDING === 'audioRecording';
Permissions.CONTACTS === 'contacts';
Permissions.NOTIFICATIONS === 'notifications';
Permissions.SYSTEM_BRIGHTNESS === 'systemBrightness';
Permissions.USER_FACING_NOTIFICATIONS === 'userFacingNotifications';
Permissions.REMINDERS === 'reminders';
async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CONTACTS);

    result.status === 'granted';
    result.status === 'denied';
    result.status === 'undetermined';

    result.expires === 'never';
};

ScreenOrientation.Orientation.ALL;
ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

class __TestEntry__ extends React.Component {
    render() {
        return(
            <Text>test</Text>
        );
    }
}
registerRootComponent(__TestEntry__);

Calendar.EntityTypes.EVENT === 'event';
Calendar.EntityTypes.REMINDER === 'reminder';

Calendar.CalendarType.LOCAL === 'local';
Calendar.CalendarType.CALDAV === 'caldav';
Calendar.CalendarType.EXCHANGE === 'exchange';
Calendar.CalendarType.SUBSCRIBED === 'subscribed';
Calendar.CalendarType.BIRTHDAYS === 'birthdays';

async () => {
    const result = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    result.length;

    const calendar = result[0];
    calendar.id === '';
    calendar.title === '';
    calendar.sourceId === '';
    calendar.type === Calendar.CalendarType.BIRTHDAYS;
    calendar.color === '';
    calendar.entityType === Calendar.EntityTypes.EVENT;
    calendar.allowsModifications === true;
    calendar.allowedAvailabilities === [''];
    calendar.isPrimary === true;
    calendar.name === '';
    calendar.ownerAccount === '';
    calendar.timeZone === '';
    calendar.allowedReminders === [''];
    calendar.allowedAttendeeTypes === [''];
    calendar.isVisible === false;
    calendar.isSynced === false;
    calendar.accessLevel === Calendar.CalendarAccessLevel.CONTRIBUTOR;

    if (calendar.source) {
        calendar.source.id === '';
        calendar.source.type === '';
        calendar.source.name === '';
        calendar.source.isLocalAccount === false;
    }

    const id1 =  await Calendar.createCalendarAsync({
        accessLevel: Calendar.CalendarAccessLevel.EDITOR
    });

    id1 === '';

    const id2 = await Calendar.updateCalendarAsync('1234', {
        isVisible: false
    });

    id2 === '';

    const id3 = await Calendar.updateCalendarAsync('1234', null);

    await Calendar.deleteCalendarAsync('1234');

    const events = await Calendar.getEventsAsync(
        ['123', '124'],
        new Date(),
        new Date()
    );

    const event1 = events[0];

    event1.accessLevel === Calendar.EventAccessLevel.CONFIDENTIAL;
    event1.alarms === [];
    event1.allDay === true;
    event1.availability === Calendar.Availability.FREE;
    event1.calendarId === '';
    event1.creationDate === '';
    event1.endDate === '';
    event1.endTimeZone === '';
    event1.guestsCanInviteOthers === true;
    event1.guestsCanModify === true;
    event1.guestsCanSeeGuests === false;
    event1.id === '';
    event1.instanceId === '';
    event1.isDetached === false;

    const event2 = await Calendar.getEventAsync('123', {
        futureEvents: true
    });

    const eventId1 = await Calendar.createEventAsync('123');

    const eventId2 = await Calendar.updateEventAsync('1234');

    await Calendar.deleteEventAsync('1234');

    const attendees = await Calendar.getAttendeesForEventAsync('123');

    const aId1 = await Calendar.createAttendeeAsync('123');

    const aId2 = await Calendar.updateAttendeeAsync('123');

    await Calendar.deleteAttendeeAsync('123');

    const reminders = await Calendar.getRemindersAsync(['123']);

    const reminder = await Calendar.getReminderAsync('123');

    const remId1 = await Calendar.createReminderAsync('123');

    const remId2 = await Calendar.updateReminderAsync('123');

    await Calendar.deleteReminderAsync('123');

    const sources = await Calendar.getSourcesAsync();

    const source = await Calendar.getSourceAsync('123');

    Calendar.openEventInCalendar('123');
};

async () => {
    const result = await MailComposer.composeAsync({
        subject: 'sss'
    });

    result.status === 'saved';
};

// #region MapView
const initialRegion: Region = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0,
  longitudeDelta: 0,
};

const edgePadding: EdgePadding = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const edgeInsets: EdgeInsets = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const mapStyleElements: MapStyleElement[] = [{
  featureType: 'featureType',
  elementType: 'elementType',
  stylers: [{}, {}],
}];

const mapEventCallback = (event: MapEvent) => console.log(event);
const regionCallback = (region: Region) =>  console.log(region);
const kmlCallback = (kml: KmlMapEvent) =>  console.log(kml);
const userLocationCallback = (event: EventUserLocation) =>  console.log(event);

() => (
    <MapView
        provider="google"
        customMapStyle={mapStyleElements}
        customMapStyleString="some-string"
        showsUserLocation={true}
        userLocationAnnotationTitle="title"
        showsMyLocationButton={true}
        followsUserLocation={true}
        showsPointsOfInterest={true}
        showsCompass={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        rotateEnabled={true}
        cacheEnabled={true}
        loadingEnabled={true}
        loadingBackgroundColor="#000"
        loadingIndicatorColor="#000"
        scrollEnabled={true}
        pitchEnabled={true}
        toolbarEnabled={true}
        moveOnMarkerPress={true}
        showsScale={true}
        showsBuildings={true}
        showsTraffic={true}
        showsIndoors={true}
        showsIndoorLevelPicker={true}
        mapType="standard"
        region={initialRegion}
        initialRegion={initialRegion}
        liteMode={true}
        mapPadding={edgePadding}
        maxDelta={0}
        minDelta={0}
        legalLabelInsets={edgeInsets}

        onMapReady={() => ({})}
        onKmlReady={kmlCallback}
        onRegionChange={regionCallback}
        onRegionChangeComplete={regionCallback}
        onPress={mapEventCallback}
        onLongPress={mapEventCallback}
        onUserLocationChange={userLocationCallback}
        onPanDrag={mapEventCallback}
        onPoiClick={(event: MapEvent<{ placeId: string, name: string }>) => console.log(event)}
        onMarkerPress={(event: MapEvent<{ action: 'marker-press', id: string }>) =>  console.log(event)}
        onMarkerSelect={(event: MapEvent<{ action: 'marker-select', id: string }>) => console.log(event)}
        onMarkerDeselect={(event: MapEvent<{ action: 'marker-deselect', id: string }>) => console.log(event)}
        onCalloutPress={(event: MapEvent<{ action: 'callout-press' }>) => console.log(event)}
        onMarkerDragStart={mapEventCallback}
        onMarkerDrag={mapEventCallback}
        onMarkerDragEnd={mapEventCallback}

        minZoomLevel={0}
        maxZoomLevel={0}
        kmlSrc="src"
        style={{ flex: 1 }}
    />
);
// #endregion

async () => {
    const updateEventListener: Updates.UpdateEventListener = ({ type }) => {
        switch (type) {
            case Updates.EventType.DOWNLOAD_STARTED:
            case Updates.EventType.DOWNLOAD_PROGRESS:
            case Updates.EventType.DOWNLOAD_FINISHED:
            case Updates.EventType.NO_UPDATE_AVAILABLE:
            case Updates.EventType.ERROR:
                return true;
        }
    };

    Updates.reload();

    Updates.reloadFromCache();

    Updates.addListener(updateEventListener);

    const updateCheckResult = await Updates.checkForUpdateAsync();

    if (updateCheckResult.isAvailable) {
        console.log(updateCheckResult.manifest);
    }

    Updates.fetchUpdateAsync({ eventListener: updateEventListener });

    const bundleFetchResult = await Updates.fetchUpdateAsync();

    if (bundleFetchResult.isNew) {
        console.log(bundleFetchResult.manifest);
    }
};

async () => {
  const asset: MediaLibrary.Asset = await MediaLibrary.createAssetAsync('some-url');
  const getAssetsOptions: MediaLibrary.GetAssetsOptions = {
    first: 0,
    after: 'lastAssetId',
    album: 'albumId',
    sortBy: MediaLibrary.SortBy.creationTime,
    mediaType: MediaLibrary.MediaType.photo
  };
  const assetsList: MediaLibrary.GetAssetsResult = await MediaLibrary.getAssetsAsync(getAssetsOptions);
  const endCursor: string = assetsList.endCursor;
  const hasNextPage: boolean = assetsList.hasNextPage;
  const totalCount: number = assetsList.totalCount;
  const asset1: MediaLibrary.Asset = await MediaLibrary.getAssetInfoAsync(asset);
  if (await MediaLibrary.deleteAssetsAsync(assetsList.assets)) {
    console.log('assets deleted');
  }
  const albums: MediaLibrary.Album[] = await MediaLibrary.getAlbumsAsync();
  const album: MediaLibrary.Album | null = await MediaLibrary.getAlbumAsync('albumName');
  const album1: MediaLibrary.Album = await MediaLibrary.createAlbumAsync('albumName', asset1);
  if (await MediaLibrary.addAssetsToAlbumAsync([asset, asset1], album1, true)) {
    console.log('assets added');
  }

  const moments: MediaLibrary.Album[] = await MediaLibrary.getMomentsAsync();

  switch (getAssetsOptions.mediaType) {
    case MediaLibrary.MediaType.audio:
    case MediaLibrary.MediaType.photo:
    case MediaLibrary.MediaType.video:
    case MediaLibrary.MediaType.unknow:
      return true;
  }

  switch (getAssetsOptions.sortBy) {
    case MediaLibrary.SortBy.default:
    case MediaLibrary.SortBy.id:
    case MediaLibrary.SortBy.creationTime:
    case MediaLibrary.SortBy.modificationTime:
    case MediaLibrary.SortBy.mediaType:
    case MediaLibrary.SortBy.width:
    case MediaLibrary.SortBy.height:
    case MediaLibrary.SortBy.duration:
      return true;
  }
};

// #region MediaLibrary
async () => {
  const mlAsset: MediaLibrary.Asset = await MediaLibrary.createAssetAsync('localUri');
  const mlAssetResult: MediaLibrary.GetAssetsResult = await MediaLibrary.getAssetsAsync({
    first: 0,
    after: '',
    album: 'Album',
    sortBy: MediaLibrary.SortBy.creationTime,
    mediaType: MediaLibrary.MediaType.photo
  });
  const mlAsset1: MediaLibrary.Asset = await MediaLibrary.getAssetInfoAsync(mlAsset);
  const areDeleted: boolean = await MediaLibrary.deleteAssetsAsync([mlAsset]);
  const albums: MediaLibrary.Album[] = await MediaLibrary.getAlbumsAsync();
  const album: MediaLibrary.Album = await MediaLibrary.getAlbumAsync('album');
  const album1: MediaLibrary.Album = await MediaLibrary.createAlbumAsync('album', mlAsset);
  const areAddedToAlbum: boolean = await MediaLibrary.addAssetsToAlbumAsync([mlAsset, mlAsset1], 'album');
  const areDeletedFromAlbum: boolean = await MediaLibrary.removeAssetsFromAlbumAsync([mlAsset, mlAsset1], 'album');
  const momuents: MediaLibrary.Album[] = await MediaLibrary.getMomentsAsync();
};
//#endregion

// #region Haptic
Haptic.impact(Haptic.ImpactStyles.Heavy);
Haptic.impact(Haptic.ImpactStyles.Light);
Haptic.impact(Haptic.ImpactStyles.Medium);

Haptic.notification(Haptic.NotificationType.Error);
Haptic.notification(Haptic.NotificationType.Success);
Haptic.notification(Haptic.NotificationType.Error);

Haptic.selection();
// #endregion

// #region Constants
async () => {
    const appOwnerShip = Constants.appOwnership;
    const expoVersion = Constants.expoVersion;
    const installationId = Constants.installationId;
    const deviceId = Constants.deviceId;
    const deviceName = Constants.deviceName;
    const deviceYearClass = Constants.deviceYearClass;
    const isDevice = Constants.isDevice;
    const platform = Constants.platform;
    const sessionId = Constants.sessionId;
    const statusBarHeight = Constants.statusBarHeight;
    const systemFonts = Constants.systemFonts;
    const manifest = Constants.manifest;
    const linkingUri = Constants.linkingUri;
    const userAgent: string = await Constants.getWebViewUserAgentAsync();
};
// #endregion

// #region Localization

let locale: string = Localization.locale;
let locales: string[] = Localization.locales;
let country: string | undefined = Localization.country;
let isoCurrencyCodes: string[] | undefined = Localization.isoCurrencyCodes;
let timezone: string = Localization.timezone;
let isRTL: boolean = Localization.isRTL;

async () => {
    const localizationData = await Localization.getLocalizationAsync();

    locale = localizationData.locale;
    locales = localizationData.locales;
    country = localizationData.country;
    isoCurrencyCodes = localizationData.isoCurrencyCodes;
    timezone = localizationData.timezone;
    isRTL = localizationData.isRTL;
};

// #endregion

// #region Contacts
Contacts.Fields.ID === 'id';
Contacts.Fields.Name === 'name';
Contacts.Fields.FirstName === 'firstName';
Contacts.Fields.MiddleName === 'middleName';
Contacts.Fields.LastName === 'lastName';
Contacts.Fields.NamePrefix === 'namePrefix';
Contacts.Fields.NameSuffix === 'nameSuffix';
Contacts.Fields.PhoneticFirstName === 'phoneticFirstName';
Contacts.Fields.PhoneticMiddleName === 'phoneticMiddleName';
Contacts.Fields.PhoneticLastName === 'phoneticLastName';
Contacts.Fields.Birthday === 'birthday';
Contacts.Fields.Emails === 'emails';
Contacts.Fields.PhoneNumbers === 'phoneNumbers';
Contacts.Fields.Addresses === 'addresses';
Contacts.Fields.InstantMessageAddresses === 'instantMessageAddresses';
Contacts.Fields.UrlAddresses === 'urlAddresses';
Contacts.Fields.Company === 'company';
Contacts.Fields.JobTitle === 'jobTitle';
Contacts.Fields.Department === 'department';
Contacts.Fields.ImageAvailable === 'imageAvailable';
Contacts.Fields.Image === 'image';
Contacts.Fields.Note === 'note';
Contacts.Fields.Dates === 'dates';
Contacts.Fields.Relationships === 'relationships';
Contacts.Fields.Nickname === 'nickname';
Contacts.Fields.RawImage === 'rawImage';
Contacts.Fields.MaidenName === 'maidenName';
Contacts.Fields.ContactType === 'contactType';
Contacts.Fields.SocialProfiles === 'socialProfiles';
Contacts.Fields.NonGregorianBirthday === 'nonGregorianBirthday';

const contact: Contacts.Contact = {
    [Contacts.Fields.ID]: 'id',
    [Contacts.Fields.Name]: 'name',
    [Contacts.Fields.FirstName]: 'firstName',
    [Contacts.Fields.MiddleName]: 'middleName',
    [Contacts.Fields.LastName]: 'lastName',
    [Contacts.Fields.NamePrefix]: 'namePrefix',
    [Contacts.Fields.NameSuffix]: 'nameSuffix',
    [Contacts.Fields.PhoneticFirstName]: 'phoneticFirstName',
    [Contacts.Fields.PhoneticMiddleName]: 'phoneticMiddleName',
    [Contacts.Fields.PhoneticLastName]: 'phoneticLastName',
    [Contacts.Fields.Birthday]: {
        day: 1,
        month: 1,
        year: 2010,
        format: Contacts.CalendarFormats.Gregorian,
        id: 'id',
        label: 'label'
    },
    [Contacts.Fields.Emails]: [{
        email: 'email',
        isPrimary: true,
        id: 'id',
        label: 'label'
    }],
    [Contacts.Fields.PhoneNumbers]: [{
        number: 'number',
        isPrimary: true,
        digits: 'digits',
        countryCode: 'countryCode',
        id: 'id',
        label: 'label'
    }],
    [Contacts.Fields.Addresses]: [{
        street: 'street',
        city: 'city',
        country: 'country',
        region: 'region',
        neighborhood: 'neighborhood',
        postalCode: 'postalCode',
        poBox: 'poBox',
        isoCountryCode: 'isoCountryCode',
        id: 'id',
        label: 'label'
    }],
    [Contacts.Fields.InstantMessageAddresses]: [{
        service: 'service',
        username: 'username',
        localizedProfile: 'localizedProfile',
        id: 'id',
        label: 'label'
    }],
    [Contacts.Fields.UrlAddresses]: [{
        url: 'url',
        id: 'id',
        label: 'label'
    }],
    [Contacts.Fields.Company]: 'company',
    [Contacts.Fields.JobTitle]: 'jobTitle',
    [Contacts.Fields.Department]: 'department',
    [Contacts.Fields.ImageAvailable]: true,
    [Contacts.Fields.Image]: {
        uri: 'uri'
    },
    [Contacts.Fields.Note]: 'note',
    [Contacts.Fields.Dates]: [{
        day: 1,
        month: 1,
        year: 2010,
        format: Contacts.CalendarFormats.Gregorian,
        id: 'id',
        label: 'label'
    }],
    [Contacts.Fields.Relationships]: [{
        name: 'name',
        id: 'id',
        label: 'label'
    }],
    [Contacts.Fields.Nickname]: 'nickname',
    [Contacts.Fields.RawImage]: {
        uri: 'uri'
    },
    [Contacts.Fields.MaidenName]: 'maidenName',
    [Contacts.Fields.ContactType]: Contacts.ContactTypes.Person,
    [Contacts.Fields.SocialProfiles]: [{
        service: 'service',
        username: 'username',
        localizedProfile: 'localizedProfile',
        url: 'url',
        userId: 'userId',
        id: 'id',
        label: 'label'
    }],
    [Contacts.Fields.NonGregorianBirthday]: {
        day: 1,
        month: 1,
        year: 2010,
        format: Contacts.CalendarFormats.Hebrew,
        id: 'id',
        label: 'label'
    }
};

async () => {
    const response1: Contacts.ContactResponse = await Contacts.getContactsAsync();
    const response2: Contacts.ContactResponse = await Contacts.getContactsAsync({ id: 'contactId' });

    const response3: Contacts.Contact = await Contacts.getContactByIdAsync('contactId');
    const response4: Contacts.Contact = await Contacts.getContactByIdAsync('contactId', [Contacts.Fields.Name]);

    const response5: string = await Contacts.addContactAsync(contact);
    const response6: string = await Contacts.addContactAsync(contact, 'containerId');

    const response7: string = await Contacts.updateContactAsync(contact);
    await Contacts.removeContactAsync('contactId');
    const response8: string = await Contacts.writeContactToFileAsync({ id: 'contactId' });
    await Contacts.presentFormAsync('contactId');
    await Contacts.addExistingGroupToContainerAsync('groupId', 'containerId');

    const response9: string = await Contacts.createGroupAsync('groupId');
    const response10: string = await Contacts.createGroupAsync('groupId', 'containerId');

    await Contacts.updateGroupNameAsync('groupName', 'groupId');
    await Contacts.removeGroupAsync('groupId');
    await Contacts.addExistingContactToGroupAsync('contactId', 'groupId');
    await Contacts.removeContactFromGroupAsync('contactId', 'groupId');

    const response11 = await Contacts.getGroupsAsync({ groupName: 'groupName' });
    response11.forEach((_: Contacts.Group) => _);

    const response12: string = await Contacts.getDefaultContainerIdAsync();

    const response13 = await Contacts.getContainersAsync({ containerId: 'containerId' });
    response13.forEach((_: Contacts.Container) => _);
};
// #endregion

// #region SplashScreen
SplashScreen.hide();
SplashScreen.preventAutoHide();
// #endregion

// #region WebBrowser
async () => {
    const result1 = await WebBrowser.openBrowserAsync('https://google.com');
    result1.type;

    const result2 = await WebBrowser.openAuthSessionAsync('https://google.com', 'https://example.com');
    if (result2.type === 'success') {
        result2.url;
    } else {
        result2.type;
    }

    WebBrowser.dismissBrowser();
};
// #endregion
