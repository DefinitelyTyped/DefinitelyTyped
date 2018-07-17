//画布
let canvas = wx.createCanvas();
console.assert(canvas != null);
//图片
let images = wx.createImage();
console.assert(images != null);
//字体
let texts = wx.getTextLineHeight({
    text:"",
    fontFamily: 'Arial',
    fontSize:28,
    fontWeight:'bold',
    fontStyle:'normal',
    success: function(res) {
        console.assert(res.lineHeight == 0);
    }
});
let textload = wx.loadFont('Arial');
console.assert(textload != null) //当前版本不支持此加载自定义字体
//帧率
wx.setPreferredFramesPerSecond(30);
//系统信息
let sys = wx.getBatteryInfo({
    
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


//系统事件
wx.onAudioInterruptionEnd(()=>{
    console.log("audio interrupted end");
});
let offAudioEnd = wx.offAudioInterruptionEnd(()=>{});
console.assert(offAudioEnd == undefined);
let onAudioBeg = wx.onAudioInterruptionBegin(()=>{});
console.assert(onAudioBeg == undefined);
let offAudioBeg = wx.offAudioInterruptionBegin(()=>{});
console.assert(offAudioBeg == undefined);
let onErr = wx.onError(()=>{});

console.assert(onErr == undefined);
let offErr = wx.offError;
//触摸事件
let onTouS = wx.onTouchStart;
let offTouS = wx.offTouchStart;
let onTouM = wx.onTouchMove;
let offTouM = wx.offTouchMove;
let onTouE = wx.onTouchEnd;
let offTouE = wx.offTouchEnd;
let onTouC = wx.onTouchCancel;
let offTouC = wx.offTouchCancel;
//加速计
wx.onAccelerometerChange(function(res) {
    console.assert(res.x != null)
    console.assert(res.y !=null)
    console.assert(res.z !=null)
})
wx.startAccelerometer({
    interval:"game",
    success:function(){
        console.log("wx.startAccelerometer success");
    }
});
wx.stopAccelerometer({
    success:function(){
        console.log("wx.stopAccelerometer success");
    }
});
//电量
let getBat = wx.getBatteryInfoSync();
console.dir(getBat);
console.assert(getBat.isCharging != null);
console.assert(getBat.level != null);
//剪切板
wx.getClipboardData({
    success:function(){
        console.log("wx.getClipboardData success");
    }
});
wx.setClipboardData({
    data:"",
    success:function(){
        console.log("wx.setClipboardData success");
    }
})
//罗盘
wx.onCompassChange(function(res){
    console.assert(res.direction !=null);
})
wx.startCompass({
    success:function(){
        console.log("wx.startCompass success");
    }
})
wx.stopCompass({
    success:function(){
        console.log("wx.stopCompass success");
    }
})
//网络
wx.getNetworkType({
    success:function(){
        console.log("wx.getNetworkType success");
    }
})
wx.onNetworkStatusChange(function(res){
    console.assert(res.isConnected !=null)
})
//屏幕
wx.getScreenBrightness({
    success:function(){
        console.log("wx.getScreenBrightness success");
    }
})
wx.setKeepScreenOn({
    keepScreenOn:true,
    success:function(){
        console.log("wx.setKeepScreenOn success");
    }
})
wx.setScreenBrightness({
    value:1,
    success:function(){
        console.log("wx.setScreenBrightness success");
    }
})
//震动
wx.vibrateShort({
    success:function(){
        console.log("wx.vibrateShort success");
    }
})
wx.vibrateLong({
    success:function(){
        console.log("wx.vibrateLong success");
    }
})
//转屏
wx.onDeviceOrientationChange(function(res){
    console.assert(res.value != null)
})
//文件
let getFile = wx.getFileSystemManager();
console.assert(getFile != null);
//位置
wx.getLocation({
    success:function(res){
        res.altitude !=null;
        console.log("wx.getLocation success");
    }
})
//下载
let downLoad = wx.downloadFile({
    url:"",
    header: {},
    filePath:"",
    success: function(){
        console.log("wx.downloadFile success");
    },
    fail: function(){
        console.log("wx.downloadFile fail")
    },
    complete: function(){
        console.log("wx.downloadFile comp")
    }
});
console.assert(downLoad !=null)
downLoad.abort();
//发起请求
let requ = wx.request({
    url:'https://www.baidu.com/',
    success:function(){
        console.log("wx.request success");
    }
})
console.assert(requ !=null);
requ.abort();
//WebSocket
let conne = wx.connectSocket({
    url:'wss://www.baidu.com/',
    header:{},
    protocols:[],
    success: function(){
        console.log("wx.connectSocket success");
    }
})
console.assert(conne !=null);
wx.closeSocket({
    reason:'',
    success: function(){
        console.log("wx.closeSocket success");
    }
})
wx.onSocketOpen(function(res){
    console.assert(res.header !=null);
})
wx.onSocketClose;
wx.sendSocketMessage({
    data:"",
    success: function(){
        console.log("wx.sendSocketMessage success");
    }
})
// 上传
let upLoad = wx.uploadFile({
    url:"https://www.baidu.com/",
    filePath:"./",
    name:"111",
    success: function(){
        console.log("wx.uploadFile success");
    },
    fail:function(){
        console.log("wx.uploadFile fail");
    }
})
console.assert(upLoad !=null)

//开放数据
let context = wx.getOpenDataContext();
context.postMessage({
    "item":"friend"
});
context.postMessage({
    "item":"group"
});
context.postMessage({
    "item":"user"
});

wx.removeUserCloudStorage({
    keyList:[]
})
wx.setUserCloudStorage({
    KVDataList:[]
})

//登录
wx.checkSession({

})
wx.login({
    success:(res) => {
        console.log(res.code);
    }
})
//防沉迷
wx.checkIsUserAdvisedToRest({
    todayPlayedTime:10,
    success:function(res){
        res.result !=null
    }
});
//用户信息
let crea = wx.createUserInfoButton({
    type:'text',
    text:'',
    image:'',
    style:{
        left:1,
            top:1,
            width:1,
            height:1,
            /**
             * 格式#ff0000
             */
            backgroundColor:'',
            /**
             * 格式#ff0000
             */
            borderColor:'',
            borderWidth:1,
            borderRadius:1,
            textAlign:"left",
            fontSize:1,
            lineHeight:1
    },
    withCredentials:true
});
console.assert(crea != null);
wx.getUserInfo({
    success: function(res) {
        //console.assert(res.data.country !=null);
    }
})
//设置
let createOpenSet = wx.createOpenSettingButton(
    'text',
    'wenzi',
    '',
    {
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '',
        borderColor:'',
        borderWidth:1,
        borderRadius:1,
        textAlign: 'center',
        fontSize: 16
    }
)
console.assert(createOpenSet !=null);
wx.getSetting({
    success:function(res){
        res.authSetting != null;
    }
})
wx.openSetting({
    success:function(res){
        res.authSetting != null;
    }
})
//微信运动
wx.getWeRunData({
    success:function(res){
        res.encryptedData != null;
        res.iv !=null;
    }
})
//授权
wx.authorize({
    scope:""
})
//游戏圈
let yxq = wx.createGameClubButton({
    type:"text",
    text:"dssss",
    image:"",
    style:{
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '',
        borderColor:'',
        borderWidth:1,
        borderRadius:1,
        textAlign: 'center',
        fontSize: 16
    },
    icon:"green"
})
console.assert(yxq !=null)
//意见反馈
wx.createFeedbackButton({
    type:"text",
    text:"dssss",
    image:"",
    style:{
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '',
        borderColor:'',
        borderWidth:1,
        borderRadius:1,
        textAlign: 'center',
        fontSize: 16
    }
})
//客服消息
wx.openCustomerServiceConversation({
    
})
//开放数据域
let getOpenD = wx.getOpenDataContext();
console.assert(getOpenD !=null);
//转发
wx.getShareInfo({
    shareTicket:"",
    success:function(res){
        res.encryptedData !=null;
        res.errMsg !=null;
        res.iv !=null;
    }
})
wx.hideShareMenu({

})
wx.onShareAppMessage(function(res){
    res.imageUrl !=null;
    res.query !=null;
    res.title != null;

})
wx.showShareMenu({
    withShareTicket:true
})
wx.shareAppMessage({
    title:''
})
wx.updateShareMenu({
    withShareTicket:true
})
//性能
let getPer = wx.getPerformance();
console.assert(getPer !=null)
//调试
wx.setEnableDebug({
    enableDebug:true
})
//数据缓存
wx.clearStorage({
    success:function(){
        console.log("wx.clearStorage success")
    }
})
wx.getStorage({
    key:'',
    success:function(res){
        res.data !=null
    }
})
wx.getStorageInfo({
    success:function(res){
        res.keys !=null;
        res.currentSize !=null
        res.limitSize !=null;
        console.log('wx.getStorageInfo success');
    }
})
wx.removeStorage({
    key:"",
    success:function(){
        console.log('wx.removeStorage success');
    }
})
wx.setStorage({
    key:"",
    data:"",
    success:function(){
        console.log('wx.removeStorage success');
    }
})
//分包加载
let loadSu = wx.loadSubpackage({
    name:'',
    success:function(){
        console.log('wx.loadSubpackage success');
    },
    fail:function(){},
    complete:function(){
    }
})
//菜单
let getMenu = wx.getMenuButtonBoundingClientRect()
console.dir(getMenu);
console.assert(getMenu.width != null);
console.assert(getMenu.height != null);
console.assert(getMenu.top != null);
console.assert(getMenu.right != null);
console.assert(getMenu.bottom != null);
console.assert(getMenu.left != null);
wx.setMenuStyle({
    style:'dark',
    success:function(){

    }
})
//交互
wx.hideToast({

})
wx.hideLoading({

})
wx.showModal({
    title:"",
    content:"",
    confirmText:"",
    cancelText:"",
    success:function(res){
        res.cancel=false
    }

})
wx.showToast({
    title:"",
    icon:"loading",
    image:"",
    duration:1
})
wx.showLoading({
    title:""
})
wx.showActionSheet({
    itemList:[]
})
//键盘
wx.hideKeyboard();
wx.onKeyboardInput(function(res){
    res.value
})
wx.showKeyboard({
    defaultValue:"",
    maxLength:22,
    multiple: true,
    confirmHold: false,
    confirmType:"done",
})
wx.updateKeyboard({
    value:''
})
//状态栏
wx.setStatusBarStyle({
    style:"black"
});
//窗口
wx.onWindowResize(function(res){
    console.assert(res.windowHeight != 0);
    console.assert(res.windowWidth != 0);
})
//更新
let getUpda = wx.getUpdateManager();
console.assert(getUpda != null)
//worker
let createWor = wx.createWorker();
console.assert(createWor != null);
//音频
let creatInn = wx.createInnerAudioContext();
console.assert(creatInn != null);

wx.getAvailableAudioSources({

})
//录音
let getRecord = wx.getRecorderManager();
console.assert(getRecord != null);
//图片
wx.chooseImage({
    count:1,
    sizeType:['original'],
    sourceType:['album'],
    success:function(res){
        res.tempFilePaths
    }
});
wx.previewImage({
    urls:[]
});
wx.saveImageToPhotosAlbum({
    filePath:""
});
//视频
wx.createVideo({
    src:1,
    poster:1,
    objectFit:'fill'
})
//虚拟支付
wx.requestMidasPayment({
    mode:"game",
    offerId:"",
    currencyType:"CNY"
})