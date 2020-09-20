// No npm package for miniprogram api, docs: https://miniprogram.alipay.com/docs/miniprogram/mpdev/framework_overview

my.SDKVersion;

App({
    onLaunch() {},
    onShow() {},
    onHide() {},
    onError() {},
    globalData: 1,
});

Page({
    data: {
        title: 'Mini Program',
    },
    onLoad(query) {
        // Page loading
    },
    onShow() {
        // Page showing
    },
    onReady() {
        // Page loading complete
    },
    onHide() {
        // Page hiding
    },
    onUnload() {
        // Page closed
    },
    onTitleClick() {
        // Title clicked
    },
    onPullDownRefresh() {
        // Page pulled down
    },
    onReachBottom() {
        // Page pulled down till bottom
    },
    onShareAppMessage() {
        // Return customized sharing information
    },
    // Event handler object
    events: {
        onBack() {},
    },
    // Custom event handler
    viewTap() {
        this.setData({
            text: 'Set data for update.',
        });
    },
    // Custom event handler
    go() {
        // Jump with parameters, read type from query of onLoad function in page/ui/index
        my.navigateTo({ url: '/page/ui/index?type=mini' });
    },
    // Custom data object
    customData: {
        name: 'Mini Program',
    },
});

getApp();

getCurrentPages();

my.showNavigationBarLoading();

my.hideNavigationBarLoading();

my.setNavigationBar({
    title: '',
    backgroundColor: '',
    success() {},
    fail() {},
    complete() {},
});

my.hideTabBar({
    animation: true,
});

my.switchTab({
    url: 'url',
});

my.navigateTo({
    url: 'url',
});

my.navigateBack({
    delta: 1,
});

my.redirectTo({
    url: '',
});

my.reLaunch({
    url: '',
});

my.alert({
    content: '',
});

my.confirm({});

my.prompt({
    message: '',
});

my.showLoading();

my.hideLoading();

my.showToast();

my.hideToast();

my.startPullDownRefresh();
my.stopPullDownRefresh();

my.choosePhoneContact({});

const animate = my.createAnimation();
animate
    .opacity(1)
    .backgroundColor('')
    .width(1)
    .height(1)
    .top(1)
    .left(1)
    .bottom(1)
    .right(1)
    .rotate(1)
    .rotateX(1)
    .rotateY(1)
    .rotateZ(1)
    .rotate3d(1, 1, 1)
    .scale(1)
    .scaleX(1)
    .scaleY(1)
    .scaleZ(1)
    .scale3d(1, 1, 1)
    .translate(1, 1)
    .translateX(1)
    .translateY(1)
    .translateZ(1)
    .translate3d(1, 1, 1)
    .skew(1, 1)
    .skewX(1)
    .skewY(1)
    .matrix(1, 2, 3, 4, 5, 6)
    .matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
    .step();

const ctx = my.createCanvasContext('id');
ctx.addColorStop(1, '');
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.beginPath();
ctx.bezierCurveTo(1, 2, 3, 4, 5, 6);
ctx.clearRect(1, 2, 3, 4);
ctx.clip();
ctx.closePath();
ctx.createCircularGradient(1, 2, 3);
ctx.createLinearGradient(1, 2, 3, 4);
ctx.draw(true, () => {});
ctx.drawImage('', 1, 2, 3, 4);
ctx.fill();
ctx.fillRect(1, 2, 3, 4);
ctx.fillText('', 1, 2);
ctx.getImageData({
    x: 1,
    y: 1,
    width: 1,
    height: 1,
    success(res) {
        res.width;
        res.height;
        res.data;
        // res.data?.length;
    },
});
ctx.lineTo(1, 2);
ctx.measureText('');
ctx.moveTo(1, 2);
ctx.putImageData({
    data: new Uint8ClampedArray([255, 0, 0, 1]),
    x: 1,
    y: 1,
    width: 1,
    height: 1,
});
ctx.quadraticCurveTo(1, 2, 3, 4);
ctx.rect(1, 2, 3, 4);
ctx.restore();
ctx.rotate(1);
ctx.rotate(1);
ctx.save();
ctx.scale(1, 2);
ctx.setFillStyle('');
ctx.setFontSize(1);
ctx.setGlobalAlpha(1);
ctx.setLineCap('');
ctx.setLineDash([1]);
ctx.setLineJoin('');
ctx.setLineWidth(1);
ctx.setMiterLimit(1);
ctx.setShadow(1, 1, 1, '');
ctx.setStrokeStyle('');
ctx.setTextAlign('');
ctx.setTextBaseline('');
ctx.setTransform(1, 2, 3, 4, 5, 6);
ctx.stroke();
ctx.strokeRect(1, 2, 3, 4);
ctx.toDataURL({
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    destWidth: 100,
    destHeight: 100,
}).then(dataURL => {
    ctx.drawImage(dataURL, 0, 0);
    ctx.draw();
});
ctx.toTempFilePath({
    success(res) {
        res.filePath;
    },
});
ctx.transform(1, 2, 3, 4, 5, 6);
ctx.translate(1, 2);

my.hideKeyboard();

my.pageScrollTo({
    scrollTo: 1,
});

my.createSelectorQuery()
    .select('#non-exists')
    .boundingClientRect()
    .select('#one')
    .boundingClientRect()
    .selectAll('.all')
    .boundingClientRect()
    .select('#scroll')
    .scrollOffset()
    .selectViewport()
    .boundingClientRect()
    .selectViewport()
    .scrollOffset()
    .exec(ret => {
        my.alert({
            content: JSON.stringify(ret, null, 2),
        });
    });

my.multiLevelSelect({
    list: [],
    name: '',
});

my.setBackgroundColor({
    backgroundColor: '',
    backgroundColorBottom: '',
    backgroundColorTop: '',
});

my.setCanPullDown({ canPullDown: true });

my.chooseImage({
    count: 2,
    success: res => {
        res.apFilePaths[0];
    },
});

my.previewImage({
    current: 2,
    urls: [
        'https://img.example.com/example1.jpg',
        'https://img.example.com/example2.jpg',
        'https://img.example.com/example3.jpg',
    ],
});

my.saveImage({
    url: 'https://img.example.com/example1.jpg',
    showActionSheet: true,
    success: () => {
        my.alert({
            title: 'Save success',
        });
    },
});

my.getImageInfo({
    src: 'image/api.png',
    success: res => {
        res.height;
        res.orientation;
        res.path;
        res.type;
        res.width;
    },
});

my.getStorage({
    key: '',
});

my.getStorageSync({ key: '' });

my.setStorage({ key: '', data: '' });

my.setStorageSync({ key: '', data: {} });

my.removeStorage({ key: '' });

my.removeStorageSync({ key: '' });

my.clearStorage();

my.clearStorageSync();

my.saveFile({
    apFilePath: '',
    success: res => {
        res.apFilePath;
    },
});

my.getFileInfo({
    apFilePath: '',
    digestAlgorithm: 'sha1',
    success: res => {
        res.digest;
        res.size;
    },
});

my.getSavedFileInfo({
    apFilePath: '',
    success: resu => {
        resu.size;
        resu.createTime;
    },
});

my.getSavedFileList({
    success: res => {
        res.fileList;
    },
});

my.removeSavedFile({
    apFilePath: '',
});

my.getLocation({
    fail(res) {
        res.error;
        res.errorMessage;
    }
});

my.request({ url: '' });

my.uploadFile({
    url: 'Please use your own server address',
    fileType: 'image',
    fileName: 'file',
    filePath: '...',
    success: res => {
        my.alert({
            content: 'Upload success',
        });
    },
});

my.downloadFile({
    url: ' ',
    success({ apFilePath }) {
        my.previewImage({
            urls: [apFilePath],
        });
    },
});

my.canIUse('getFileInfo');

my.SDKVersion;

my.getSystemInfo({
    success(res) {
        res.app;
        res.brand;
        res.currentBattery;
        res.fontSizeSetting;
        res.language;
        res.model;
        res.pixelRatio;
        res.platform;
        res.screenHeight;
        res.screenWidth;
        res.statusBarHeight;
        res.storage;
        res.system;
        res.titleBarHeight;
        res.version;
        res.windowHeight;
        res.windowWidth;
    },
});

my.getNetworkType({
    success(res) {
        res.networkAvailable;
        res.networkType;
    },
});

my.getClipboard({
    success: res => {
        res.text;
    },
});

my.setClipboard({
    text: '',
});

my.vibrate({});

my.makePhoneCall({ number: '00000' });

my.getServerTime({
    success(res) {
        res.time;
    },
});

my.onUserCaptureScreen(() => {});

my.offUserCaptureScreen();

my.setScreenBrightness({
    brightness: 1,
});

my.getScreenBrightness({
    success(res) {
        res.brightness;
    },
});

my.setKeepScreenOn({
    keepScreenOn: false,
});

my.addPhoneContact({
    photoFilePath: '/sdcard/DCIM/Camera/a.jpg',
    nickName: 'Baking July',
    lastName: 'Last',
    middleName: 'Middle',
    firstName: 'First',
    remark: 'This is remarks',
    mobilePhoneNumber: '13800000000',
    homePhoneNumber: '11111115',
    workPhoneNumber: '11111112',
    homeFaxNumber: '11111114',
    workFaxNumber: '11111111',
    hostNumber: '11111113',
    addressCountry: 'address country',
    addressState: 'address state',
    addressCity: 'address city',
    addressStreet: 'address street',
    addressPostalCode: '94016',
    workAddressCountry: 'work country',
    workAddressState: 'work state',
    workAddressCity: 'work city',
    workAddressStreet: 'work street',
    workAddressPostalCode: '111111',
    homeAddressCountry: 'home country',
    homeAddressState: 'home state',
    homeAddressCity: 'home city',
    homeAddressStreet: 'home street',
    homeAddressPostalCode: '123456',
    organization: 'organization',
    title: 'Developer',
    email: 'liuhuo01@miniprogram.com',
    url: 'www.miniprogram.com',
    success: res => {
        res.success;
    },
});

my.showAuthGuide({
    authType: 'LBS',
    success: res => {
        res.shown;
    },
});

my.scan({
    type: 'qr',
});

const webViewContext = my.createWebViewContext('web-view-1');
webViewContext.postMessage({});

my.getSiteInfo({
    success(res) {
        res.siteName;
    },
});

my.navigateToMiniProgram({
    appId: 'xxxx',
    extraData: {
        data1: 'test',
    },
});

my.navigateBackMiniProgram({
    extraData: {
        data1: 'test',
    },
});

my.getAuthCode({
    scopes: ['USER_ID', 'USER_NICKNAME', 'USER_AVATAR'],
    success: res => {
        my.alert({
            content: res.authCode,
        });
    },
});

my.getOpenUserInfo({
    success: res => {
        res.response;
    },
});

my.tradePay({
    tradeNO: '201711152100110410533667792', // get the tradeNo from the server first
    success: res => {
        my.alert({
            content: JSON.stringify(res),
        });
    },
    fail: res => {
        my.alert({
            content: JSON.stringify(res),
        });
    },
});

my.signContract({
    signStr: 'https://openauth.xxx.com/authentication.htm?authId=FBF16F91-28FB-47EC-B9BE-27B285C23CD3',
    success: res => {
        my.alert({
            content: JSON.stringify(res),
        });
    },
    fail: res => {
        my.alert({
            content: JSON.stringify(res),
        });
    },
});
