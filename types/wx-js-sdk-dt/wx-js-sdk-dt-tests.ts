// No npm package for wx-js-sdk, source location is: https://res.wx.qq.com/open/js/jweixin-1.2.0.js

wx.config({
    appId: '',
    timestamp: 123,
    nonceStr: '',
    signature: '',
    jsApiList: ['']
});

wx.ready(() => {
});

wx.error((res: any) => {
});

wx.checkJsApi({
    jsApiList: [''],
    success: res => {
        res.checkResult;
        if (res.errMsg) {
            res.errMsg.msg;
        }
    },
    complete: () => {
    }
});

wx.onMenuShareAppMessage({
    desc: '',
    title: '',
    link: '',
    imgUrl: ''
});

wx.onMenuShareTimeline({
    title: '',
    link: ''
});

wx.scanQRCode({
});

wx.closeWindow();

wx.downloadImage({
    serverId: ''
});

wx.addCard({
    cardList: [
        {
            cardId: '',
            cardExt: ''
        }
    ]
});

wx.chooseImage({
    success: (res) => {
        res.localIds;
    }
});

wx.chooseWXPay({
    timestamp: 0,
    nonceStr: '',
    package: '',
    paySign: '',
    success: () => {},
    cancel: () => {},
    fail: () => {}
});

wx.getLocation({
    success: (res) => {
        if (res) {
            res.accuracy;
            res.latitude;
            res.longitude;
            res.speed;
        }
    }
});

wx.getNetworkType((res) => {
    if (res) {
        res.networkType;
    }
});

wx.hideMenuItems({
    menuList: []
});

wx.hideAllNonBaseMenuItem();

wx.onMenuShareQQ({
    title: '',
    link: '',
    desc: ''
});

wx.openLocation({
    name: '',
    latitude: 123.2,
    longitude: -12.23
});

wx.openProductSpecificView({
    productId: '1',
    viewType: 0
});

wx.chooseCard({
    cardId: '',
    shopId: '',
    cardType: '',
    cardSign: '',
    nonceStr: '',
    timestamp: 1,
    signType: ''
});

wx.onVoiceRecordEnd((res) => {
    res.localId;
});

wx.onVoicePlayEnd((res) => {
    res.localId;
});

wx.openProductSpecificView({
    productId: ''
});

wx.updateAppMessageShareData({
    title: '',
    desc: '',
    link: '',
    imgUrl: '',
    success: () => {
    }
});

wx.updateTimelineShareData({
    title: '',
    link: '',
    imgUrl: ''
});

wx.openAddress({
    success: (res) => {
        console.log(res.userName);
    },
});

console.log(window.__wxjs_is_wkwebview);
