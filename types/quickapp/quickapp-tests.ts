import alarm from "@system.alarm";
import app from "@system.app";
import audio from "@system.audio";
import barcode from "@system.barcode";
import battery from "@system.battery";
import bluetooth from "@system.bluetooth";
import brightness from "@system.brightness";
import calendar from "@system.calendar";
import cipher from "@system.cipher";
import clipboard from "@system.clipboard";
import configuration from "@system.configuration";
import contact from "@system.contact";
import device from "@system.device";
import downloadtask from "@system.downloadtask";
import fetch from "@system.fetch";
import file from "@system.file";
import geolocation from "@system.geolocation";
import image from "@system.image";
import keyguard from "@system.keyguard";
import media from "@system.media";
import network from "@system.network";
import nfc from "@system.nfc";
import notification from "@system.notification";
import pkg from "@system.package";
import prompt from "@system.prompt";
import record from "@system.record";
import request from "@system.request";
import requesttask from "@system.requesttask";
import resident from "@system.resident";
import router from "@system.router";
import screenshot from "@system.screenshot";
import sensor from "@system.sensor";
import share from "@system.share";
import shortcut from "@system.shortcut";
import sms from "@system.sms";
import storage from "@system.storage";
import telecom from "@system.telecom";
import uploadtask from "@system.uploadtask";
import vibrator from "@system.vibrator";
import volume from "@system.volume";
import websocketfactory from "@system.websocketfactory";
import webview from "@system.webview";
import wifi from "@system.wifi";
import zip from "@system.zip";

import account from "@service.account";
import ad from "@service.ad";
import alipay from "@service.alipay";
import exchange from "@service.exchange";
import health from "@service.health";
import pay from "@service.pay";
import push from "@service.push";
import qqaccount from "@service.qqaccount";
import share2 from "@service.share";
import stats from "@service.stats";
import texttoaudio from "@service.texttoaudio";
import wbaccount from "@service.wbaccount";
import wxaccount from "@service.wxaccount";
import wxpay from "@service.wxpay";

import Video from "@hap.io.Video";

app.getInfo();

app.createQuickAppQRCode({
    path: "pages/index/index",
    success: function(data) {
        data.uri;
    },
    fail: function(data, code) {
        data === "";
        code === 0;
    },
});

router.push({
    uri: "pages/index/index",
});

router.replace({
    uri: "pages/index/index",
});

router.switchTab({
    uri: "pages/index/index",
});

router.back();

router.back({
    path: "pages/index/index",
});

router.clear();

router.getLength();

router.getPages()[0].path;

resident.start({
    desc: "notification",
});

resident.stop();

configuration.getLocale();

configuration.setLocale({
    language: "zh",
    countryOrRegion: "CN",
});

configuration.getThemeMode();

configuration.setGrayMode({
    enable: true,
    duration: {
        regular: ["10/22"],
        temporary: ["2025/10/22"],
    },
    excludedPage: ["pages/index/index"],
});

share.share({
    type: "text/plain",
    data: "Hello World",
});

prompt.showToast({
    message: "Hello World",
});

prompt.showDialog({
    title: "Hello World",
    message: "Hello World",
});

prompt.showContextMenu({
    itemList: ["Item 1", "Item 2"],
});

webview.loadUrl({
    url: "https://www.example.com",
});

webview.setCookie({
    domain: "www.example.com",
    name: "cookieName",
});

notification.show({
    contentTitle: "Hello World",
    contentText: "Hello World",
    clickAction: {
        uri: "pages/index/index",
    },
});

request.upload({
    url: "https://www.example.com",
    files: [{
        filename: "file.txt",
        uri: "file:///path/to/file.txt",
    }],
});

request.download({
    url: "https://www.example.com",
});

request.onDownloadComplete({
    token: "test",
});

const dtask = downloadtask.downloadFile({
    url: "https://www.example.com",
});

dtask.abort();

dtask.onProgressUpdate((data) => {
    data.progress === 0;
    data.totalBytesExpectedToWrite === 0;
    data.totalBytesWritten === 0;
});

dtask.offProgressUpdate();

dtask.onHeadersReceived((headers) => {
    headers["Content-Type"];
});

dtask.offHeadersReceived();

const utask = uploadtask.uploadFile({
    url: "https://www.example.com",
    filePath: "file:///path/to/file.txt",
    name: "file",
});

utask.abort();

utask.onProgressUpdate((data) => {
    data.progress === 0;
    data.totalBytesExpectedToSend === 0;
    data.totalBytesSent === 0;
});

utask.offProgressUpdate();

utask.onHeadersReceived((headers) => {
    headers["Content-Type"];
});

utask.offHeadersReceived();

fetch.fetch({
    url: "https://www.example.com",
});

const rtask = requesttask.request({
    url: "https://www.example.com",
});

rtask.abort();

rtask.onHeadersReceived((headers) => {
    headers["Content-Type"];
});

rtask.offHeadersReceived();

const ws = websocketfactory.create({
    url: "wss://www.example.com",
});

ws.send({
    data: "Hello World",
});

ws.close({
    code: 1000,
});

ws.onopen = function() {};

ws.onmessage = function(data) {
    data.data;
};

ws.onclose = function(data) {
    data.code === "";
    data.reason === "";
    data.wasClean === false;
};

ws.onerror = function(data) {
    data.data;
};

storage.get({
    key: "key",
});

storage.set({
    key: "key",
    value: "value",
});

storage.clear();

storage.clear({
    success() {},
});

storage.delete({
    key: "key",
});

storage.key({
    index: 0,
});

storage.length === 0;

file.move({
    srcUri: "file:///path/to/file.txt",
    dstUri: "file:///path/to/file.txt",
});

file.copy({
    srcUri: "file:///path/to/file.txt",
    dstUri: "file:///path/to/file.txt",
});

file.list({
    uri: "file:///path/to/file.txt",
});

file.get({
    uri: "file:///path/to/file.txt",
});

file.delete({
    uri: "file:///path/to/file.txt",
});

file.writeText({
    uri: "file:///path/to/file.txt",
    text: "Hello World",
});

file.writeArrayBuffer({
    uri: "file:///path/to/file.txt",
    buffer: new Uint8Array(8),
});

file.readText({
    uri: "file:///path/to/file.txt",
});

file.readArrayBuffer({
    uri: "file:///path/to/file.txt",
});

file.access({
    uri: "file:///path/to/file.txt",
});

file.mkdir({
    uri: "file:///path/to/file.txt",
});

file.rmdir({
    uri: "file:///path/to/file.txt",
});

exchange.get({
    key: "key",
    success(data) {
        data.value === "";
    },
});

exchange.set({
    key: "key",
    value: "value",
});

exchange.remove({
    key: "key",
});

exchange.clear();

exchange.grantPermission({
    package: "com.example.app",
    sign: "sign",
});

exchange.revokePermission({
    package: "com.example.app",
});

vibrator.vibrate();

barcode.scan();

sensor.subscribeAccelerometer({
    callback(data) {
        data.x === 0;
        data.y === 0;
        data.z === 0;
    },
});

sensor.unsubscribeAccelerometer();

sensor.subscribeCompass({
    callback(data) {
        data.accuracy === 0;
        data.direction === 0;
    },
});

sensor.unsubscribeCompass();

sensor.subscribeProximity({
    callback(data) {
        data.distance === 0;
    },
});

sensor.unsubscribeProximity();

sensor.subscribeLight({
    callback(data) {
        data.intensity === 0;
    },
});

sensor.unsubscribeLight();

sensor.subscribeStepCounter({
    callback(data) {
        data.steps === 0;
    },
});

sensor.unsubscribeStepCounter();

clipboard.set({
    text: "Hello World",
});

clipboard.get({
    success(data) {
        data.text === "Hello World";
    },
});

geolocation.getLocation({
    success(data) {
        data.accuracy === 0;
        data.latitude === 0;
        data.longitude === 0;
        data.time === 0;
    },
});

geolocation.openLocation({
    latitude: 0,
    longitude: 0,
});

geolocation.chooseLocation({
    success(data) {
        data.address === "";
        data.coordType === "";
        data.latitude === 0;
        data.longitude === 0;
        data.name === "";
    },
});

geolocation.getLocationType({
    success(data) {
        data.types[0] === "";
    },
});

geolocation.subscribe({
    callback(data) {
        data.accuracy === 0;
        data.latitude === 0;
        data.longitude === 0;
        data.time === 0;
    },
});

geolocation.unsubscribe();

geolocation.getSupportedCoordTypes()[0] === "";

geolocation.geocodeQuery({
    city: "Beijing",
    address: "Tiananmen Square",
    success(data) {
        data.latitude === 0;
        data.longitude === 0;
    },
});

geolocation.reverseGeocodeQuery({
    latitude: 0,
    longitude: 0,
    success(data) {
        data.address === "";
        data.city === "";
        data.countryName === "";
        data.district === "";
        data.poiInfoList?.[0];
        data.street === "";
    },
});

shortcut.hasInstalled();

shortcut.install();

shortcut.systemPromptEnabled === true;

calendar.insert({
    title: "Meeting",
    startDate: 10000,
    endDate: 20000,
});

network.getType();

network.subscribe({
    callback(data) {
        data.type === "";
        data.metered === true;
    },
});

network.unsubscribe();

network.getSimOperators();

device.getInfo();

device.getId({
    type: ["device"],
});

device.getDeviceId();

device.getUserId();

device.getAdvertisingId();

device.getSerial();

device.getTotalStorage();

device.getAvailableStorage();

device.getCpuInfo();

device.getOAID();

device.platform.versionCode === 0;

device.platform.versionName === "";

device.allowTrackOAID === true;

device.host.package === "";

device.host.versionCode === 0;

device.host.versionName === "";

telecom.getTelecomInfo();

brightness.getValue();

brightness.setValue({
    value: 0,
});

brightness.getMode();

brightness.setMode({
    mode: 0,
});

brightness.setKeepScreenOn({
    keepScreenOn: true,
});

volume.getMediaValue();

volume.setMediaValue({
    value: 0,
});

battery.getStatus();

pkg.hasInstalled({
    package: "com.example.app",
});

pkg.install({
    package: "com.example.app",
});

pkg.getInfo({
    package: "com.example.app",
});

pkg.getSignatureDigests({
    package: "com.example.app",
});

record.start();

record.onframerecorded = function(data) {
    data.frameBuffer === new ArrayBuffer(10);
    data.isLastFrame === true;
};

record.stop();

contact.pick();

contact.list();

sms.send({
    address: "123456789",
    content: "Hello World",
});

sms.readSafely();

wifi.connect({
    SSID: "MyNetwork",
    BSSID: "MyNetwork",
});

wifi.scan();

wifi.getConnectedWifi();

wifi.onscanned = (data) => {
    data.wifiList[0];
};

wifi.onstatechanged = (data) => {
    data.state === 0;
};

bluetooth.openAdapter();

bluetooth.closeAdapter();

bluetooth.getAdapterState();

bluetooth.onadapterstatechange = (data) => {
    data.available === true;
    data.discovering === true;
};

bluetooth.startDevicesDiscovery();

bluetooth.stopDevicesDiscovery();

bluetooth.getDevices();

bluetooth.ondevicefound = (data) => {
    data.devices[0];
};

bluetooth.getConnectedDevices({
    services: ["service1", "service2"],
});

bluetooth.createBLEConnection({
    deviceId: "device1",
});

bluetooth.closeBLEConnection({
    deviceId: "device1",
});

bluetooth.getBLEDeviceServices({
    deviceId: "device1",
});

bluetooth.getBLEDeviceCharacteristics({
    deviceId: "device1",
    serviceId: "service1",
});

bluetooth.readBLECharacteristicValue({
    deviceId: "device1",
    serviceId: "service1",
    characteristicId: "characteristic1",
});

bluetooth.writeBLECharacteristicValue({
    deviceId: "device1",
    serviceId: "service1",
    characteristicId: "characteristic1",
    value: new ArrayBuffer(10),
});

bluetooth.notifyBLECharacteristicValueChange({
    deviceId: "device1",
    serviceId: "service1",
    characteristicId: "characteristic1",
    state: true,
});

bluetooth.onblecharacteristicvaluechange = (data) => {
    data.deviceId === "device1";
    data.serviceId === "service1";
    data.characteristicId === "characteristic1";
    data.value === new ArrayBuffer(10);
};

bluetooth.onbleconnectionstatechange = (data) => {
    data.deviceId === "device1";
    data.connected === true;
};

alarm.setAlarm({
    hour: 0,
    minute: 0,
});

alarm.getProvider() === "";

alarm.isAvailable();

zip.decompress({
    srcUri: "file:///path/to/zip/file.zip",
    dstUri: "file:///path/to/destination/folder",
});

keyguard.getKeyguardLockedStatus();

screenshot.onUserCaptureScreen({
    callback: () => {},
});

screenshot.offUserCaptureScreen();

const NFCAdp = nfc.getNFCAdapter();

NFCAdp.startDiscovery();

NFCAdp.stopDiscovery();

NFCAdp.onDiscovered({
    callback(data) {
        data.id === new ArrayBuffer(10);
        data.techs[0] === "NFC_A";
        data.messages[0].id === new ArrayBuffer(10);
        data.messages[0].type === new ArrayBuffer(10);
        data.messages[0].payload === new ArrayBuffer(10);
    },
});

NFCAdp.offDiscovered();

const ndef = NFCAdp.getNdef();

ndef.close();
ndef.connect();
ndef.isConnected();
ndef.setTimeout({
    timeout: 1000,
});
ndef.writeNdefMessage();

const nfcA = NFCAdp.getNfcA();

nfcA.close();
nfcA.connect();
nfcA.getMaxTransceiveLength();
nfcA.isConnected();
nfcA.setTimeout({
    timeout: 1000,
});
nfcA.transceive();
nfcA.getAtqa();
nfcA.getSak();

const nfcB = NFCAdp.getNfcB();

nfcB.close();
nfcB.connect();
nfcB.getMaxTransceiveLength();
nfcB.isConnected();
nfcB.transceive();

const nfcF = NFCAdp.getNfcF();

nfcF.close();
nfcF.connect();
nfcF.getMaxTransceiveLength();
nfcF.isConnected();
nfcF.setTimeout({
    timeout: 1000,
});
nfcF.transceive();

const nfcV = NFCAdp.getNfcV();

nfcV.close();
nfcV.connect();
nfcV.getMaxTransceiveLength();
nfcV.isConnected();
nfcV.transceive();

const isoDep = NFCAdp.getIsoDep();

isoDep.close();
isoDep.connect();
isoDep.getHistoricalBytes();
isoDep.getMaxTransceiveLength();
isoDep.isConnected();
isoDep.setTimeout({
    timeout: 1000,
});
isoDep.transceive();

const mifareClassic = NFCAdp.getMifareClassic();

mifareClassic.close();
mifareClassic.connect();
mifareClassic.getMaxTransceiveLength();
mifareClassic.isConnected();
mifareClassic.setTimeout({
    timeout: 1000,
});
mifareClassic.transceive();

const mifareUltralight = NFCAdp.getMifareUltralight();

mifareUltralight.close();
mifareUltralight.connect();
mifareUltralight.getMaxTransceiveLength();
mifareUltralight.isConnected();
mifareUltralight.setTimeout({
    timeout: 1000,
});
mifareUltralight.transceive();

cipher.rsa({
    action: "encrypt",
    text: "text",
    key: "key",
});

cipher.aes({
    action: "decrypt",
    text: "text",
    key: "key",
});

media.takePhoto();

media.takeVideo();

media.pickImage();

media.pickImages();

media.pickVideo();

media.pickVideos();

media.pickFile();

media.saveToPhotosAlbum({
    uri: "file:///path/to/file",
});

media.previewImage({
    uris: ["file:///path/to/file1", "file:///path/to/file2"],
});

media.getRingtone({
    type: "ringtone",
});

media.setRingtone({
    uri: "file:///path/to/file",
    type: "ringtone",
});

image.getImageInfo({
    uri: "file:///path/to/file",
});

image.compressImage({
    uri: "file:///path/to/file",
});

image.applyOperations({
    uri: "file:///path/to/file",
    operations: [{
        action: "crop",
        x: 0,
        y: 0,
        width: 100,
        height: 100,
    }],
});

image.editImage({
    uri: "file:///path/to/file",
});

image.getExifAttributes({
    uri: "file:///path/to/file",
});

image.setExifAttributes({
    uri: "file:///path/to/file",
    attributes: {
        "ApertureValue": 1,
        "BitsPerSample": "123123",
    },
});

const video = new Video({
    uri: "file:///path/to/file",
});

video.onprogressupdate = (data) => {
    data.progress === 0.5;
};

video.compressVideo();

video.abort();

Video.getVideoInfo({
    uri: "file:///path/to/file",
});

Video.getVideoThumbnail({
    uri: "file:///path/to/file",
});

audio.play();

audio.pause();

audio.stop();

audio.getPlayState();

audio.src = "file:///path/to/file";

audio.currentTime = 100;

audio.duration = 100;

audio.autoplay = true;

audio.loop = true;

audio.muted = true;

audio.notificationVisible = true;

audio.title = "title";

audio.cover = "file:///path/to/file";

audio.streamType = "music";

audio.onplay = () => {};

audio.onpause = () => {};

audio.onstop = () => {};

audio.onloadeddata = () => {};

audio.onended = () => {};

audio.ondurationchange = () => {};

audio.onerror = () => {};

audio.ontimeupdate = () => {};

audio.onprevious = () => {};

audio.onnext = () => {};

texttoaudio.speak({
    lang: "en_US",
    content: "Hello world",
});

texttoaudio.textToAudioFile({
    lang: "en_US",
    content: "Hello world",
});

texttoaudio.isLanguageAvailable({
    lang: "en_US",
});

texttoaudio.onttsstatechange = (data) => {
    data.state === "onDone";
    data.utteranceId === "123";
};

texttoaudio.stop() === 0;

push.getProvider();

push.subscribe();

push.unsubscribe();

push.on({
    callback(data) {
        data.data === "data";
        data.messageId === "messageId";
    },
});

push.off();

pay.getProvider();

pay.pay({
    orderInfo: "123123",
});

stats.getProvider();

stats.recordCountEvent({
    key: "key",
});

stats.recordCalculateEvent({
    key: "key",
    value: 1,
});

account.getProvider();

account.isLogin();

account.authorize({
    type: "code",
});

account.getProfile({
    token: "asdasd",
});

account.getPhoneNumber();

account.getEncryptedID();

health.hasStepsOfDay();

health.getTodaySteps();

health.getLastWeekSteps();

ad.getProvider();

const bannerAd = ad.createBannerAd({
    adUnitId: "adUnitId",
});
bannerAd.style.width = 100;
bannerAd.show();
bannerAd.hide();
bannerAd.onError((err) => {
    err.errCode === 1000;
    err.errMsg === "error";
});
bannerAd.offError(() => {});
bannerAd.onLoad(() => {});
bannerAd.offLoad(() => {});
bannerAd.onResize(() => {});
bannerAd.offResize(() => {});
bannerAd.destroy();

const interstitialAd = ad.createInterstitialAd({
    adUnitId: "adUnitId",
});
interstitialAd.show();
interstitialAd.onLoad(() => {});
interstitialAd.offLoad(() => {});
interstitialAd.onClose(() => {});
interstitialAd.offClose(() => {});
interstitialAd.onError((err) => {
    err.errCode === 1000;
    err.errMsg === "error";
});
interstitialAd.offError(() => {});
interstitialAd.destroy();

const nativeAd = ad.createNativeAd({
    adUnitId: "adUnitId",
});
nativeAd.load();
nativeAd.reportAdShow({
    adId: "adId",
});
nativeAd.reportAdClick({
    adId: "adId",
});
nativeAd.onLoad(() => {});
nativeAd.offLoad(() => {});
nativeAd.onError((err) => {
    err.errCode === 1000;
    err.errMsg === "error";
});
nativeAd.offError(() => {});
nativeAd.destroy();

ad.preloadAd({
    adUnitId: "adUnitId",
    type: "native",
    adCount: 2,
});

const rewardedVideoAd = ad.createRewardedVideoAd({
    adUnitId: "adUnitId",
});
rewardedVideoAd.load();
rewardedVideoAd.show();
rewardedVideoAd.onLoad(() => {});
rewardedVideoAd.offLoad(() => {});
rewardedVideoAd.onClose(() => {});
rewardedVideoAd.offClose(() => {});
rewardedVideoAd.onError((err) => {
    err.errCode === 1000;
    err.errMsg === "error";
});
rewardedVideoAd.offError(() => {});

wxpay.getType();

wxpay.pay({
    prepayid: "prepayid",
    extra: {
        app_id: "app_id",
        partner_id: "partner_id",
        package_value: "package_value",
        nonce_str: "nonce_str",
        time_stamp: "timestamp",
        order_sign: "sign",
    },
});

alipay.pay({
    orderInfo: "orderInfo",
});

share2.getProvider();

share2.share({
    shareType: 1,
    title: "title",
});

share2.getAvailablePlatforms();

qqaccount.getType();

qqaccount.authorize({
    state: "state",
    redirectUri: "redirectUri",
});

wxaccount.getType();

wxaccount.authorize({
    scope: "scope",
});

wbaccount.getType();

wbaccount.authorize({
    redirectUri: "redirectUri",
});
