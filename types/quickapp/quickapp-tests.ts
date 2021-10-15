// tslint:disable:object-literal-shorthand
// tslint:disable:only-arrow-functions
// tslint:disable:space-before-function-paren
// tslint:disable:expect
// tslint:disable:prefer-template
// tslint:disable:comment-format

const video = require('@hap.io.Video');
const account = require('@service.account');
const ad = require('@service.ad');
const alipay = require('@service.alipay');
const exchange = require('@service.exchange');
const health = require('@service.health');
const pay = require('@service.pay');
const push = require('@service.push');
const qqaccount = require('@service.qqaccount');
const share = require('@service.share');
const stats = require('@service.stats');
const texttoaudio = require('@service.texttoaudio');
const wbaccount = require('@service.wbaccount');
const wxaccount = require('@service.wxaccount');
const wxpay = require('@service.wxpay');
const alarm = require('@system.alarm');
const app = require('@system.app');
const audio = require('@system.audio');
const barcode = require('@system.barcode');
const battery = require('@system.battery');
const bluetooth = require('@system.bluetooth');
const brightness = require('@system.brightness');
const calendar = require('@system.calendar');
const cipher = require('@system.cipher');
const clipboard = require('@system.clipboard');
const configuration = require('@system.configuration');
const contact = require('@system.contact');
const device = require('@system.device');
const systemFetch = require('@system.fetch');
const file = require('@system.file');
const geolocation = require('@system.geolocation');
const image = require('@system.image');
const keyguard = require('@system.keyguard');
const media = require('@system.media');
const network = require('@system.network');
const notification = require('@system.notification');
const hapPackage = require('@system.package');
const systemPrompt = require('@system.prompt');
const record = require('@system.record');
const request = require('@system.request');
const resident = require('@system.resident');
const router = require('@system.router');
const sensor = require('@system.sensor');
const systemShare = require('@system.share');
const shortcut = require('@system.shortcut');
const sms = require('@system.sms');
const storage = require('@system.storage');
const telecom = require('@system.telecom');
const vibrator = require('@system.vibrator');
const volume = require('@system.volume');
const websocketfactory = require('@system.websocketfactory');
const webview = require('@system.webview');
const wifi = require('@system.wifi');
const zip = require('@system.zip');
const downloadtask = require('@system.downloadtask');
const uploadtask = require('@system.uploadtask');
const requesttask = require('@system.requesttask');
const nfc = require('@system.nfc');
const screenshot = require('@system.screenshot');

video.getVideoInfo({ uri: 'internal://temp/xxx.mp4' });

account.getProvider();

ad.createBannerAd({ adUnitId: 'test121' });

alipay.pay({ orderInfo: 'test' });

exchange.get({ key: 'test111' });

health.getLastWeekSteps({
    success: function (data: { stepsList: { [x: string]: { steps: any; date: any } } }) {
        for (const i in data.stepsList) {
            console.log(`handling success date: ${data.stepsList[i].date} steps: ${data.stepsList[i].steps}`);
        }
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}, errorMsg=${data}`);
    },
});

pay.getProvider();

push.getProvider();

qqaccount.authorize({
    state: 'random2234',
    scope: 'all',
    redirectUri: 'https://your.redirect.url/path',
    success: function (data: any) {
        console.log('qqaccount authorize success, data:' + JSON.stringify(data));
    },
    fail: function (data: string, code: number) {
        console.log('qqaccount authorize fail, data:' + data + ', code:' + code);
    },
    cancel: function () {
        console.log('qqaccount authorize cancelled.');
    },
});

share.getAvailablePlatforms({
    success: function (data: { platforms: { [x: string]: string } }) {
        for (const i in data.platforms) {
            console.log('platforms: ' + data.platforms[i]);
        }
    },
    fail: function (data: any, code: number) {
        console.log('handling fail, code=' + code);
    },
});

stats.recordCalculateEvent({
    category: 'user_pay',
    key: 'buy_ebook',
    value: 20,
    map: {
        param1: 'value1',
    },
});

texttoaudio.isLanguageAvailable({
    lang: 'zh_CN',
    success: function (data: { isAvailable: any }) {
        console.log(`isAvailable: ${data.isAvailable}`);
    },
});

wxaccount.authorize({
    scope: 'snsapi_userinfo',
    state: 'randomString',
    success: function (data: any) {
        console.log('wxaccount authorize success:' + JSON.stringify(data));
    },
    fail: function (data: string, code: number) {
        console.log('wxaccount authorize fail:' + data + ', code:' + code);
    },
    cancel: function () {
        console.log('wxaccount authorize cancelled.');
    },
});

wbaccount.authorize({
    redirectUri: 'https://api.weibo.com/oauth2/default.html',
    scope: 'follow_app_official_microblog',
    success: function (data: { accessToken: string }) {
        console.log('handling success. accessToken=' + data.accessToken);
    },
    fail: function (data: string, code: number) {
        console.log('handling fail, result data=' + data + ', code=' + code);
    },
    cancel: function () {
        console.log('handling cancel');
    },
});

wxpay.getType();

alarm.getProvider();

app.createQuickAppQRCode({
    path: '/component/basic/image?key1=value1&key2=value2',
    success: function (data: { uri: any }) {
        console.log(`handling success: ${data.uri}`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

audio.getPlayState({
    success: function (data: {
        state: any;
        src: any;
        currentTime: any;
        autoplay: any;
        loop: any;
        volume: any;
        muted: any;
        notificationVisible: any;
    }) {
        console.log(`handling success: state: ${data.state},src:${data.src},currentTime:${data.currentTime},autoplay:${data.autoplay},loop:${data.loop},
              volume: ${data.volume},muted:${data.muted},notificationVisible:${data.notificationVisible}`);
    },
    fail: function (data: any, code: number) {
        console.log('handling fail, code=' + code);
    },
});

barcode.scan({
    success: function (data: { result: any }) {
        console.log(`handling success: ${data.result}`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}, errorMsg=${data}`);
    },
});

battery.getStatus({
    success: function (data: { level: any }) {
        console.log(`handling success: ${data.level}`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

bluetooth.getAdapterState({
    success: function (data: { available: any; discovering: any }) {
        console.log(`handling adapter state, available = ${data.available}, discovering = ${data.discovering}`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
    complete: function () {
        console.log('complete');
    },
});

brightness.setKeepScreenOn({
    keepScreenOn: true,
    success: function () {
        console.log('handling success');
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

calendar.insert({
    title: '事件Ａ',
    startDate: 1490770543000,
    endDate: 1490880543000,
    remindMinutes: [5, 15, 30],
    rrule: 'FREQ=WEEKLY;COUNT=２',
    success: function (data: any) {
        console.log('handling success');
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}, errorMsg=${data}`);
    },
});

cipher.aes({
    action: 'encrypt',
    //待加密的文本内容
    text: 'hello',
    //base64编码后的密钥
    key: 'NDM5Qjk2UjAzMEE0NzVCRjlFMkQwQkVGOFc1NkM1QkQ=',
    transformation: 'AES/CBC/PKCS5Padding',
    ivOffset: 0,
    ivLen: 16,
    success: (data: { text: any }) => {
        console.log(`handling success: ${data.text}`);
    },
    fail: (data: any, code: number) => {
        console.log(`### cipher.aes fail ### ${code}: ${data}`);
    },
});

clipboard.get({
    success: function (data: { text: any }) {
        console.log(`handling success: ${data.text}`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

configuration.getLocale();

contact.list({
    success: function (data: { contactList: { [x: string]: { number: any; displayName: string } } }) {
        for (const i in data.contactList) {
            console.log(`name: ${data.contactList[i].displayName},number:${data.contactList[i].number}`);
        }
    },
    fail: function (data: any, code: number) {
        console.log('handling fail, code=' + code);
    },
});

device.getAdvertisingId({
    success: function (data: { advertisingId: any }) {
        console.log(`handling success: ${data.advertisingId}`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

systemFetch.fetch({
    url: 'http://www.example.com',
    responseType: 'text',
    success: function (response: { code: any; data: any; headers: any }) {
        console.log(`the status code of the response: ${response.code}`);
        console.log(`the data of the response: ${response.data}`);
        console.log(`the headers of the response: ${JSON.stringify(response.headers)}`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, errMsg = ${data}`);
        console.log(`handling fail, errCode = ${code}`);
    },
});

file.delete({
    uri: 'internal://files/path/to/file',
    success: function (data: any) {
        console.log('handling success');
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

geolocation.chooseLocation({
    success: function (data: { name: any; address: any; coordType: any; latitude: any; longitude: any }) {
        console.log(
            `choose location success: name = ${data.name}, address = ${data.address}, coordType = ${data.coordType}, latitude = ${data.latitude}, longitude = ${data.longitude}`,
        );
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}, errorMsg=${data}`);
    },
    complete: function () {
        console.log(`choose location complete`);
    },
});

image.applyOperations({
    uri: 'internal://cache/123.png',
    operations: [
        {
            action: 'scale',
            scaleX: 0.5,
            scaleY: 0.5,
        },
        {
            action: 'crop',
            width: 200,
            height: 200,
        },
        {
            action: 'rotate',
            degree: 90,
        },
    ],
    quality: 90,
    format: 'webp',
    success: function (data: { uri: any }) {
        console.log(`handling success: ${data.uri}`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

keyguard.getKeyguardLockedStatus({
    success: (result: { isKeyguardLocked: any }) => {
        console.log('当前应用是否为锁屏状态：', result.isKeyguardLocked);
    },
    fail: (data: any, code: number) => {
        console.log(`get isKeyguardLocked fail, errMsg = ${data}`);
        console.log(`get isKeyguardLocked fail, errCode = ${code}`);
    },
});

media.getRingtone({
    type: 'ringtone',
    success: function (data: { title: any }) {
        console.log(`get ringtone success title: ${data.title}`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

network.getSimOperators({
    success: function (data: { size: any }) {
        console.log(`size: ${data.size}`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}, errorMsg=${data}`);
    },
});

notification.show({
    contentTitle: 'title',
    clickAction: {
        uri: '/index.html?index=1',
    },
});

hapPackage.getSignatureDigests({
    package: 'com.hap.app',
    success: function (data: { signatureDigests: any[] }) {
        data.signatureDigests.map(function (item: any) {
            console.log(`handling success: signature = ${item}`);
        });
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

systemPrompt.showContextMenu({
    itemList: ['item1', 'item2'],
    itemColor: '#ff33ff',
    success: function (data: any) {
        console.log('handling success');
    },
    cancel: function () {
        console.log('handling cancel');
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

record.start({
    duration: 10000,
    sampleRate: 8000,
    numberOfChannels: 1,
    encodeBitRate: 16000,
    format: 'aac',
    success: function (data: { uri: any }) {
        console.log(`handling success: ${data.uri}`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}, errorMsg=${data}`);
    },
});

request.download({
    url: 'http://www.example.com',
    success: function (data: { token: any }) {
        console.log(`handling success${data.token}`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

resident.start({
    desc: '备份进度 30%',
});

router.push({
    uri: 'tel:10086',
});

sensor.subscribeAccelerometer({
    callback: function (ret: { x: any; y: any; z: any }) {
        console.log(`handling callback, x = ${ret.x}, y = ${ret.y}, z = ${ret.z}`);
    },
});

systemShare.share({
    type: 'text/html',
    data: '<b>bold</b>',
    success: function (data: any) {
        console.log('handling success');
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

shortcut.hasInstalled({
    success: function () {
        console.log('handling success');
    },
});

sms.readSafely({
    success: function (data: { message: string }) {
        console.log('handling success. message=' + data.message);
    },
    fail: function (data: string, code: number) {
        console.log('handling fail, result data=' + data + ', code=' + code);
    },
});

storage.delete({
    key: 'A1',
    success: function (data: any) {
        console.log('handling success');
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

telecom.getTelecomInfo({
    success: function (ret: { is5GDevice: any }) {
        console.log(`handling success, is5GDevice = ${ret.is5GDevice}`);
    },
});

vibrator.vibrate({
    mode: 'long',
});

volume.getMediaValue({
    success: function (data: { value: any }) {
        console.log(`handling success: ${data.value}`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

websocketfactory.create({
    url: 'wss://echo.websocket.org',
    header: {
        'content-type': 'application/json',
    },
    protocols: ['protocol'],
});

webview.loadUrl({
    url: 'http://www.example.com',
    allowthirdpartycookies: true,
});

wifi.connect({
    SSID: '',
    BSSID: '',
    success: function () {
        console.log('connect wifi success');
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

zip.decompress({
    srcUri: 'internal://cache/test.zip',
    dstUri: 'internal://files/unzip/',
    success: function () {
        console.log(`handling success`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, code = ${code}`);
    },
});

downloadtask.downloadFile({
    url: 'https://www.test.mp3',
    success(res: any) {
        console.log('Download success. resp = ' + JSON.stringify(res));
    },
    fail(res: any) {
        console.log('Download fail. resp = ' + JSON.stringify(res));
    },
});

uploadtask.uploadFile({
    url: 'http://www.example.com',
    filePath: 'internal://mass/download/test.png',
    name: 'testImg',
    success: function (res: any) {
        console.log('Upload success.resp = ' + JSON.stringify(res));
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, errMsg = ${data}`);
        console.log(`handling fail, errCode = ${code}`);
    },
});

requesttask.request({
    url: 'http://www.example.com',
    responseType: 'text',
    method: 'GET',
    success: function (res: any) {
        console.log(`the status code of the response: ${res.statusCode}`);
        console.log(`the data of the response: ${res.data}`);
        console.log(`the headers of the response: ${JSON.stringify(res.headers)}`);
    },
    fail: function (data: any, code: number) {
        console.log(`handling fail, errMsg = ${data}`);
        console.log(`handling fail, errCode = ${code}`);
    },
});

nfc.getNFCAdapter();

screenshot.onUserCaptureScreen({
    callback: function (data: any) {
        console.log(`用户截屏了`);
    },
});
