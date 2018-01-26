import * as React from 'react';
import { Text } from 'react-native';

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
    CameraObject,
    DocumentPicker,
    Facebook,
    FacebookAds,
    FileSystem,
    ImagePicker,
    ImageManipulator,
    FaceDetector,
    Svg,
    IntentLauncherAndroid,
    KeepAwake,
    LinearGradient,
    Permissions,
    registerRootComponent,
    ScreenOrientation
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
    allowsRecordingIOS: true
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
    const result = await Audio.Sound.create({uri: 'uri'}, {
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
    await sound.loadAsync({uri: 'uri'});
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

async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos
    });

    if (!result.cancelled) {
        result.uri;
        result.width;
        result.height;
    }
};

async () => {
    const result = await ImageManipulator.manipulate('url', {
        rotate: 90
    }, {
        compress: 0.5
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
        />
        <Svg.Circle
            cx={50}
            cy={50}
            r={50}
            fill="pink"
        />
        <Svg.Ellipse
            cx={55}
            cy={55}
            rx={50}
            ry={30}
            stroke="purple"
            strokeWidth={2}
            fill="yellow"
        />
        <Svg.Line
            x1={0}
            y1={0}
            x2={100}
            y2={100}
            stroke="red"
            strokeWidth={2}
        />
        <Svg.Polygon
            points="40,5 70,80 25,95"
            fill="lime"
            stroke="purple"
            strokeWidth={1}
        />
        <Svg.Polyline
            points="10,10 20,12 30,20 40,60 60,70 95,90"
            fill="none"
            stroke="black"
            strokeWidth={3}
        />
        <Svg.Text
            fill="none"
            stroke="purple"
            fontSize={20}
            fontWeight="bold"
            x={100}
            y={20}
            textAnchor="middle"
        >
            STROKED TEXT
        </Svg.Text>
        <Svg.Defs>
            <Svg.Path
                id="path"
                d=""
            />
        </Svg.Defs>
        <Svg.G y={20}>
            <Svg.Text fill="blue"        >
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
        <Svg.Use href="#shape" x="20" y="0" />
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
        start={[1, 1]}
        end={[3, 3]}
        locations={[1, 2]} />
);

Permissions.CAMERA === 'camera';
Permissions.CAMERA_ROLL === 'cameraRoll';
Permissions.AUDIO_RECORDING === 'audioRecording';
Permissions.CONTACTS === 'contacts';
Permissions.NOTIFICATIONS === 'remoteNotifications';
Permissions.REMOTE_NOTIFICATIONS === 'remoteNotifications';
Permissions.SYSTEM_BRIGHTNESS === 'systemBrightness';
async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA);

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
