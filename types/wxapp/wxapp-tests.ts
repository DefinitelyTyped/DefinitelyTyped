// Not Support AMD require
import { App, getApp, Page, getCurrentPages, wx } from 'wxapp';

const appInstance = getApp();

App({
    data: 1,
    onLaunch: () => {
        console.log('aa');
    },
    onShow: (options) => {
        console.log(options.path);
    }
});

Page({
    data: {},
    onLoad: (options) => {
        console.log(options);
    },
    onShow: () => {
        this.setData();
        console.log(getCurrentPages().length);
    },
    changeNum: () => {
        ++this.num;
    },
    onShareAppMessage: (res) => {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target);
        }
        return {
            title: '自定义转发标题',
            path: '/page/user?id=123'
        };
    }
});

wx.chooseImage({
    success: (res) => {
        let tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
            url: 'http://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
                user: 'test'
            },
            success: (res) => {
                let data = res.data;
            }
        });
    }
});

wx.downloadFile({
    url: "http://example.com/audio/123", // 仅为示例，并非真实的资源
    success: (res) => {
        wx.playVoice({
            filePath: res.tempFilePath
        });
    }
});

// WebSocket
wx.connectSocket({
    url: 'test.php',
    data: {
        x: '',
        y: ''
    },
    header: {
        'content-type': 'application/json'
    },
    method: "GET"
});
wx.onSocketOpen((res) => {
    console.log('WebSocket连接已打开！');
});

// =====录音=====
wx.startRecord({
    success: (res) => {
        let tempFilePath = res.tempFilePath;
    },
    fail: (res) => {
        // 录音失败
    }
});
setTimeout(() => {
    // 结束录音
    wx.stopRecord();
}, 10000);

// =====音频播放控制=====
wx.startRecord({
    success: (res) => {
        let tempFilePath = res.tempFilePath;
        wx.playVoice({
            filePath: tempFilePath,
            success: () => {
                console.log('');
            }
        });

        setTimeout(() => {
            wx.stopVoice();
        }, 5000);
    }
});

// =====音乐播放控制=====
wx.playBackgroundAudio({
    dataUrl: '',
    title: '',
    coverImgUrl: ''
});
wx.pauseBackgroundAudio();
wx.seekBackgroundAudio({
    position: 30
});
wx.stopBackgroundAudio();

// =====背景音频播放管理=====
const backgroundAudioManager = wx.getBackgroundAudioManager();
backgroundAudioManager.title = '此时此刻';
backgroundAudioManager.epname = '此时此刻';
backgroundAudioManager.singer = '汪峰';
backgroundAudioManager.coverImgUrl = '';
backgroundAudioManager.src = '';

// =====音频组件控制=====
const audioCtx = wx.createAudioContext('myAudio');
audioCtx.setSrc('');
audioCtx.play();

// =====视频=====
wx.chooseVideo({
    sourceType: ['album', 'camera'],
    maxDuration: 60,
    camera: 'back',
    success: (res) => {
        this.setData({
            src: res.tempFilePath
        });
    }
});

wx.saveVideoToPhotosAlbum({
    filePath: '',
    success: (res) => {
        console.log(res.errMsg);
    }
});

// =====文件=====
wx.chooseImage({
    success: (res) => {
        let tempFilePaths = res.tempFilePaths;
        wx.saveFile({
            tempFilePath: tempFilePaths[0],
            success: (res) => {
                let savedFilePath = res.savedFilePath;
            }
        });
    }
});

wx.getSavedFileList({
    success: (res) => {
        console.log(res.fileList);
    }
});

wx.getSavedFileInfo({
    filePath: 'wxfile://somefile', // 仅做示例用，非真正的文件路径
    success: (res) => {
        console.log(res.size);
        console.log(res.createTime);
    }
});

wx.downloadFile({
    url: 'http://example.com/somefile.pdf',
    success: (res) => {
        wx.openDocument({
            filePath: res.tempFilePath,
            success: (res) => {
                console.log('打开文档成功');
            }
        });
    }
});

// =====数据缓存=====
wx.setStorage({
    key: "key",
    data: "value"
});
wx.setStorageSync('key', 'value');
wx.getStorage({
    key: 'key',
    success: (res) => {
        console.log(res.data);
    }
});
wx.getStorageSync('key');
wx.removeStorageSync('key');
wx.clearStorage();
wx.clearStorageSync();

// =====获取位置=====
wx.getLocation({
    type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
    success: (res) => {
        wx.openLocation({
            latitude: res.latitude,
            longitude: res.longitude,
            scale: 28
        });
    }
});

// =====地图组件控制=====
const mapCtx = wx.createMapContext('myMap');
mapCtx.getCenterLocation({
    success: (res) => {
        console.log(res.longitude);
        console.log(res.latitude);
    }
});
mapCtx.moveToLocation();
mapCtx.translateMarker({
    markerId: 0,
    autoRotate: true,
    duration: 1000,
    destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
    },
    animationEnd: () => {
        console.log('animation end');
    }
});
mapCtx.includePoints({
    padding: [10],
    points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
    }, {
        latitude: 23.00229,
        longitude: 113.3345211,
    }]
});

// =====系统信息=====
wx.getSystemInfo({
    success: (res) => {
        console.log(res.model);
        console.log(res.pixelRatio);
        console.log(res.windowWidth);
        console.log(res.windowHeight);
        console.log(res.language);
        console.log(res.version);
        console.log(res.platform);
    }
});
wx.canIUse('');

// =====网络状态=====
wx.getNetworkType({
    success: (res) => {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        console.log(res.networkType);
    }
});
wx.onNetworkStatusChange((res) => {
    console.log(res.isConnected, res.networkType);
});

// =====加速度计=====
wx.onAccelerometerChange((res) => {
    console.log(res.x, res.y, res.z);
});
wx.startAccelerometer();
wx.stopAccelerometer();

// =====罗盘=====
wx.onCompassChange((res) => {
    console.log(res.direction);
});
wx.startCompass();
wx.stopCompass();

// =====拨打电话=====
wx.makePhoneCall({
    phoneNumber: '1340000'
});

// =====扫码=====
wx.scanCode({
    success: (res) => {
        console.log(res);
    }
});

// =====剪贴板=====
wx.setClipboardData({
    data: 'data',
    success: (res) => {
        wx.getClipboardData({
            success: (res) => {
                console.log(res.data);
            }
        });
    }
});

// =====蓝牙=====
wx.getBluetoothAdapterState({
    success: (res) => {
        console.log(res.adapterState.available);
    }
});
wx.onBluetoothAdapterStateChange((res) => {
    console.log(res.available, res.discovering);
});

wx.startBluetoothDevicesDiscovery({
    services: ['FEE7'],
    success: (res) => {
        console.log(res.isDiscovering);
    }
});

wx.getBluetoothDevices({
    success: (res) => {
        console.log(res.devices[0].RSSI);
    }
});

wx.onBluetoothDeviceFound((devices) => {
    console.dir(devices[0].name);
});
wx.getConnectedBluetoothDevices({
    services: [],
    success: (res) => {
        console.log(res.devices[0].name);
    }
});
wx.getBLEDeviceServices({
    deviceId: 'deviceId',
    success: (res) => {
        console.log('device services:', res.services[0].isPrimary);
    }
});
wx.getBLEDeviceCharacteristics({
    // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
    deviceId: 'deviceId',
    // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
    serviceId: 'serviceId',
    success: (res) => {
        console.log('device getBLEDeviceCharacteristics:', res.characteristics[0].properties.indicate);
    }
});
wx.readBLECharacteristicValue({
    // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
    deviceId: 'deviceId',
    // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
    serviceId: 'serviceId',
    // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
    characteristicId: 'characteristicId',
    success: (res) => {
        console.log('readBLECharacteristicValue:', res.characteristic.value);
    }
});
wx.writeBLECharacteristicValue({
    // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
    deviceId: 'deviceId',
    // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
    serviceId: 'serviceId',
    // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
    characteristicId: 'characteristicId',
    // 这里的value是ArrayBuffer类型
    value: 'buffer',
    success: (res) => {
        console.log('writeBLECharacteristicValue success', res.errMsg);
    }
});
wx.onBLEConnectionStateChange((res) => {
    // 该方法回调中可以用于处理连接意外断开等异常情况
    console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`);
});
wx.onBLECharacteristicValueChange((res) => {
    console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value} ${res.serviceId}`);
});

// =====iBeacon=====
wx.startBeaconDiscovery({
    uuids: [],
    success: (res) => {
    }
});

// =====屏幕亮度=====
wx.getScreenBrightness({
    success: (res) => {
        console.log(res.value);
    }
});
wx.setScreenBrightness({
    value: 1
});

// =====振动=====
wx.vibrateLong();
wx.vibrateShort();

// =====手机联系人=====
wx.addPhoneContact({
    firstName: 'asdf'
});

// =====交互反馈=====
wx.showToast({
    title: '成功',
    icon: 'success',
    duration: 2000
});
wx.showLoading({ title: 'asdf' });
wx.hideToast();
wx.hideLoading();
wx.showModal({
    title: '提示',
    content: '这是一个模态弹窗',
    success: (res) => {
        if (res.confirm) {
            console.log('用户点击确定');
        } else if (res.cancel) {
            console.log('用户点击取消');
        }
    }
});
wx.showActionSheet({
    itemList: ['A', 'B', 'C'],
    success: (res) => {
        console.log(res.tapIndex);
    },
    fail: (res) => {
        console.log(res.errMsg);
    }
});

// =====设置导航条=====
wx.setNavigationBarTitle({
    title: '当前页面'
});
wx.showNavigationBarLoading();
wx.hideNavigationBarLoading();

// =====导航=====
wx.navigateTo({
    url: 'test?id=1'
});
wx.redirectTo({
    url: 'test?id=1'
});
wx.reLaunch({
    url: 'test?id=1'
});
wx.switchTab({
    url: '/index'
});
wx.navigateBack({
    delta: 2
});

// =====动画=====
let animation = wx.createAnimation({
    duration: 1000,
    timingFunction: 'ease',
});
animation.scale(2, 2).rotate(45).step();
console.log(animation.export());
// 旋转同时放大
animation.rotate(45).scale(2, 2).step();
animation.export();

// =====绘图=====
const ctx = wx.createCanvasContext('myCanvas');
wx.chooseImage({
    success: (res) => {
        ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100);
        ctx.draw();
    }
});

// =====下拉刷新=====
wx.stopPullDownRefresh();

// =====第三方平台=====
let extConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {};

// =====登录=====
wx.login({
    success: (res) => {
        if (res.code) { }
    }
});
wx.getUserInfo({
    success: (res) => {
        let userInfo = res.userInfo;
    }
});

// =====微信支付=====
wx.requestPayment({
    timeStamp: '',
    nonceStr: '',
    package: '',
    signType: 'MD5',
    paySign: '',
    success: (res) => { }
});

// =====转发=====
wx.showShareMenu({
    withShareTicket: true
});

// =====收货地址=====
wx.chooseAddress({
    success: (res) => {
        console.log(res.userName);
        console.log(res.postalCode);
        console.log(res.provinceName);
        console.log(res.cityName);
        console.log(res.countyName);
        console.log(res.detailInfo);
        console.log(res.nationalCode);
        console.log(res.telNumber);
    }
});

// =====卡券=====
wx.addCard({
    cardList: [
        {
            cardId: '',
            cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
        }, {
            cardId: '',
            cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
        }
    ],
    success: (res) => {
        console.log(res.cardList[0].isSuccess);
    }
});
wx.openCard({
    cardList: [
        {
            cardId: '',
            code: ''
        }, {
            cardId: '',
            code: ''
        }
    ],
    success: (res) => {
    }
});

// =====设置=====
wx.openSetting({
    success: (res) => {
        console.log(res.authSetting);
        /*
         * res.authSetting = {
         *   "scope.userInfo": true,
         *   "scope.userLocation": true
         * }
         */
    }
});
wx.getSetting({
    success: (res) => {
        console.log(res.authSetting);
        /*
         * res.authSetting = {
         *   "scope.userInfo": true,
         *   "scope.userLocation": true
         * }
         */
    }
});

// =====微信运动=====
wx.getWeRunData({
    success(res) {
        const encryptedData = res.encryptedData;
    }
});

// =====打开小程序=====
wx.navigateToMiniProgram({
    appId: '',
    path: 'pages/index/index?id=123',
    extarData: {
        foo: 'bar'
    },
    envVersion: 'develop',
    success(res) {
        // 打开成功
    }
});
wx.navigateBackMiniProgram({
    extraData: {
        foo: 'bar'
    },
    success(res) {
        // 返回成功
    }
});

// =====扩展接口=====
wx.arrayBufferToBase64(new Uint8Array([11, 22, 33]));
wx.base64ToArrayBuffer('CxYh');
