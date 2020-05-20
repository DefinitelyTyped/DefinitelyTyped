// 画布
let canvas = wx.createCanvas();
console.assert(canvas != null);
// 图片
let images = wx.createImage();
console.assert(images != null);
// 字体
let texts = wx.getTextLineHeight({
    text: "",
    fontFamily: 'Arial',
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: 'normal',
    success: res => {
        console.assert(res.lineHeight === 0);
    }
});
let textload = wx.loadFont('Arial');
console.assert(textload != null); // 当前版本不支持此加载自定义字体
// 帧率
wx.setPreferredFramesPerSecond(30);
// 系统信息
wx.getBatteryInfo({
    success: info => {
        console.info(info.isCharging);
        console.info(info.level);
    }
});

let sysinfo = wx.getSystemInfoSync();
console.dir(sysinfo);
console.assert(sysinfo.brand != null);
console.assert(sysinfo.model != null);
console.assert(sysinfo.pixelRatio != null);
console.assert(sysinfo.screenWidth != null);
console.assert(sysinfo.screenHeight != null);
console.assert(sysinfo.windowWidth != null);
console.assert(sysinfo.windowHeight != null);
console.assert(sysinfo.language != null);
console.assert(sysinfo.system != null);
console.assert(sysinfo.platform != null);
console.assert(sysinfo.fontSizeSetting != null);
console.assert(sysinfo.SDKVersion != null);
console.assert(sysinfo.benchmarkLevel != null);
console.assert(sysinfo.battery != null); // 手机电量 报错
console.assert(sysinfo.wifiSignal != null); // 手机WIFI信号强度 报错

// 系统事件
const audioEnd = () => {
    console.log("audio interrupted end");
};
wx.onAudioInterruptionEnd(audioEnd);
wx.offAudioInterruptionEnd(audioEnd);
const audioBegin = () => {
    console.log("audio interrupted begin");
};
wx.onAudioInterruptionBegin(audioBegin);
wx.offAudioInterruptionBegin(audioBegin);

const onWXError = (res: { message: string, stack: string }) => { console.error(`sys error: ${res.message}....${res.stack}`); };
wx.onError(onWXError);
wx.offError(onWXError);

// 触摸事件
wx.onTouchStart(d => { console.assert(d != null); });
wx.onTouchMove(d => { console.assert(d != null); });
wx.onTouchEnd(d => { console.assert(d != null); });
wx.onTouchCancel(d => { console.assert(d != null); });
// 加速计
wx.onAccelerometerChange(res => {
    console.assert(res.x != null);
    console.assert(res.y != null);
    console.assert(res.z != null);
});
wx.startAccelerometer({
    interval: "game",
    success: () => {
        console.log("wx.startAccelerometer success");
    }
});
wx.stopAccelerometer({
    success: () => {
        console.log("wx.stopAccelerometer success");
    }
});
// 电量
let getBat = wx.getBatteryInfoSync();
console.dir(getBat);
console.info(getBat.isCharging);
console.info(getBat.level);
// 剪切板
wx.getClipboardData({
    success: () => {
        console.log("wx.getClipboardData success");
    }
});
wx.setClipboardData({
    data: "test",
    success: () => {
        console.log("wx.setClipboardData success");
    }
});
// 罗盘
wx.onCompassChange(res => {
    console.assert(res.direction != null);
});
wx.startCompass({
    success: () => {
        console.log("wx.startCompass success");
    }
});
wx.stopCompass({
    success: () => {
        console.log("wx.stopCompass success");
    }
});
// 网络
wx.getNetworkType({
    success: () => {
        console.log("wx.getNetworkType success");
    }
});
wx.onNetworkStatusChange(res => {
    console.assert(res.isConnected != null);
});
// 屏幕
wx.getScreenBrightness({
    success: () => {
        console.log("wx.getScreenBrightness success");
    }
});
wx.setKeepScreenOn({
    keepScreenOn: true,
    success: () => {
        console.log("wx.setKeepScreenOn success");
    }
});
wx.setScreenBrightness({
    value: 1,
    success: () => {
        console.log("wx.setScreenBrightness success");
    }
});
// 震动
wx.vibrateShort({
    success: () => {
        console.log("wx.vibrateShort success");
    }
});
wx.vibrateLong({
    success: () => {
        console.log("wx.vibrateLong success");
    }
});
// 转屏
wx.onDeviceOrientationChange(res => {
    console.assert(res.value != null);
});
// 文件
let getFile = wx.getFileSystemManager();
console.assert(getFile != null);
// 位置
wx.getLocation({
    success: res => {
        res.altitude != null;
        console.log("wx.getLocation success");
    }
});
// 下载
let downLoad = wx.downloadFile({
    url: "",
    header: {},
    filePath: "",
    success: () => {
        console.log("wx.downloadFile success");
    },
    fail: () => {
        console.log("wx.downloadFile fail");
    },
    complete: () => {
        console.log("wx.downloadFile comp");
    }
});
console.assert(downLoad != null);
downLoad.abort();
// 发起请求
let requ = wx.request({
    url: 'https://www.baidu.com/',
    success: () => {
        console.log("wx.request success");
    }
});
console.assert(requ != null);
requ.abort();
// WebSocket
let conne = wx.connectSocket({
    url: 'wss://www.baidu.com/',
    header: {},
    protocols: [],
    success: () => {
        console.log("wx.connectSocket success");
    }
});
console.assert(conne != null);
wx.closeSocket({
    reason: 'normal close',
    success: () => {
        console.log("wx.closeSocket success");
    }
});
wx.onSocketOpen(res => {
    console.assert(res.header != null);
});
wx.onSocketClose;
wx.sendSocketMessage({
    data: "testdata",
    success: () => {
        console.log("wx.sendSocketMessage success");
    }
});
// 上传
let upLoad = wx.uploadFile({
    url: "https://www.baidu.com/",
    filePath: "./",
    name: "111",
    success: () => {
        console.log("wx.uploadFile success");
    },
    fail: () => {
        console.log("wx.uploadFile fail");
    }
});
console.assert(upLoad != null);
upLoad.onProgressUpdate(res => {
    console.log(`upload progress: ${res.progress}, ${res.totalBytesSent / res.totalBytesExpectedToSend}`);
});
upLoad.abort();

// 开放数据
let context = wx.getOpenDataContext();
context.postMessage({
    item: "friend"
});
context.postMessage({
    item: "group"
});
context.postMessage({
    item: "user"
});

wx.removeUserCloudStorage({
    keyList: []
});
wx.setUserCloudStorage({
    KVDataList: []
});

// 登录
wx.checkSession({
    success: () => {
        console.log("session valid");
    }
});
wx.login({
    success: (res) => {
        console.log(`login code: ${res.code}`);
    }
});
// 防沉迷
wx.checkIsUserAdvisedToRest({
    todayPlayedTime: 10,
    success: res => {
        console.assert(res.result != null);
    }
});
// 用户信息
let ubtn = wx.createUserInfoButton({
    type: 'text',
    text: 'test btn',
    style: {
        left: 1,
        top: 1,
        width: 100,
        height: 40,
        /**
         * 格式#ff0000
         */
        backgroundColor: '#fefefe',
        /**
         * 格式#ff0000
         */
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 3,
        textAlign: "center",
        fontSize: 24,
        lineHeight: 24
    }
});
console.assert(ubtn != null);
ubtn.onTap(res => {
    console.assert(res.errMsg != null && res.userInfo != null);
});
const newUserInfoParam: wx.types.NewUserInfoParam = {
    success: res => {
        console.assert(res.data != null);
    }
};
wx.getUserInfo(newUserInfoParam);
// 设置
let createOpenSet = wx.createOpenSettingButton({
    type: "text",
    text: "testbtn",
    style: {
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '#ff12ff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 3,
        textAlign: 'center',
        fontSize: 16
    }
});
console.assert(createOpenSet != null);
wx.getSetting({
    success: res => {
        res.authSetting != null;
    }
});
wx.openSetting({
    success: res => {
        res.authSetting != null;
    }
});
// 微信运动
wx.getWeRunData({
    success: res => {
        res.encryptedData != null;
        res.iv != null;
    }
});
// 授权
wx.authorize({
    scope: "userInfo"
});
// 游戏圈
let yxq = wx.createGameClubButton({
    type: "text",
    text: "dssss",
    style: {
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '#f00ff0',
        borderColor: '#fff222',
        borderWidth: 1,
        borderRadius: 3,
        textAlign: 'center',
        fontSize: 16
    },
    icon: "green"
});
console.assert(yxq != null);
// 意见反馈
wx.createFeedbackButton({
    type: "text",
    text: "dssss",
    style: {
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '#00f0f0',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 3,
        textAlign: 'center',
        fontSize: 16
    }
});
// 客服消息
wx.openCustomerServiceConversation({
    success: () => {
        console.log("opened conversation window");
    }
});
// 开放数据域
let getOpenD = wx.getOpenDataContext();
console.assert(getOpenD != null);
// 转发
wx.getShareInfo({
    shareTicket: "",
    success: res => {
        res.encryptedData != null;
        res.errMsg != null;
        res.iv != null;
    }
});
wx.hideShareMenu();
wx.onShareAppMessage((): wx.types.ShareOption => {
    return {
        imageUrl: "test.png",
        title: "test title",
        query: "__shareQueryStr"
    };
});
wx.showShareMenu({
    withShareTicket: true
});
wx.shareAppMessage({
    title: ''
});
wx.updateShareMenu({
    withShareTicket: true
});
// 性能
let getPer = wx.getPerformance();
console.assert(getPer != null);
// 调试
wx.setEnableDebug({
    enableDebug: true
});
// 数据缓存
wx.clearStorage({
    success: () => {
        console.log("wx.clearStorage success");
    }
});
wx.getStorage({
    key: 'test key',
    success: res => {
        console.assert(res.data != null);
    }
});
wx.getStorageInfo({
    success: res => {
        console.assert(res.keys != null);
        console.assert(res.currentSize != null);
        console.assert(res.limitSize != null);
        console.log('wx.getStorageInfo success');
    }
});
wx.removeStorage({
    key: "test key",
    success: () => {
        console.log('wx.removeStorage success');
    }
});
wx.setStorage({
    key: "",
    data: "",
    success: () => {
        console.log('wx.removeStorage success');
    }
});
// 分包加载
let loadSu = wx.loadSubpackage({
    name: 'package name',
    success: () => {
        console.log('wx.loadSubpackage success');
    }
});
// 菜单
let getMenu = wx.getMenuButtonBoundingClientRect();
console.dir(getMenu);
console.assert(getMenu.width != null);
console.assert(getMenu.height != null);
console.assert(getMenu.top != null);
console.assert(getMenu.right != null);
console.assert(getMenu.bottom != null);
console.assert(getMenu.left != null);
wx.setMenuStyle({
    style: 'dark'
});
// 交互
wx.showModal({
    title: "modal window"
});
wx.showToast({
    duration: 1,
    title: "show toast"
});
wx.showLoading({
    title: "loaidng..."
});
wx.showActionSheet({
    itemList: []
});
wx.hideToast();
wx.hideLoading();
// 键盘
wx.hideKeyboard();
wx.onKeyboardInput(res => {
    console.assert(res.value != null);
});
wx.showKeyboard({
    defaultValue: "ABCDE",
    maxLength: 22,
    multiple: true,
    confirmHold: false,
    confirmType: "done"
});
wx.updateKeyboard({
    value: 'DEFGHI'
});
// 状态栏
wx.setStatusBarStyle({
    style: "black"
});
// 窗口
wx.onWindowResize(res => {
    console.assert(res.windowHeight !== 0);
    console.assert(res.windowWidth !== 0);
});
// 更新
let getUpda = wx.getUpdateManager();
console.assert(getUpda != null);
// worker
let createWor = wx.createWorker();
console.assert(createWor != null);
// 音频
let creatInn = wx.createInnerAudioContext();
console.assert(creatInn != null);

wx.getAvailableAudioSources({
    success: res => {
        console.assert(res.audioSources.length > 0);
    }
});
// 录音
let getRecord = wx.getRecorderManager();
console.assert(getRecord != null);
// 图片
wx.chooseImage({
    count: 1,
    sizeType: ['original'],
    sourceType: ['album'],
    success: res => {
        console.assert(res.tempFilePaths.length > 0);
    }
});
wx.previewImage({
    urls: []
});
wx.saveImageToPhotosAlbum({
    filePath: "./temp"
});
// 视频
wx.createVideo({
    src: "../res/testv.mp4",
    objectFit: 'fill'
});
// 虚拟支付
wx.requestMidasPayment({
    mode: "game",
    offerId: "",
    currencyType: "CNY"
});
