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
    success: (res) => {
    }
});

wx.onMenuShareAppMessage({
    desc: '',
    title: '',
    link: '',
    imgUrl: ''
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
    success: (res) => {}
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
    productId: '',
    viewType: ''
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
