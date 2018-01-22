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
    ImagePicker,
    ImageManipulator,
    FaceDetector,
    Svg
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
