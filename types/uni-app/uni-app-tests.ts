uni.request({
    url: 'https://dcloud.io',
    success(res) {
        uni.showToast({
            title: res.data
        });
    },
    fail(error) {
        uni.showToast({
            title: error.errMsg
        });
    }
});

uni.navigateTo({
    url: 'index/index'
});

uni.showLoading({
    title: 'test'
});

uni.createSelectorQuery().select('.test').context(res => {
    const context = <EditorContext> res.context;
    context.getContents({
        success() {
            console.log('getContents success');
        }
    });
});

uni.createSelectorQuery().select(".test").boundingClientRect(data => {
    console.log(data);
}).exec();

const px: number = uni.upx2px(750);

uni.canvasToTempFilePath({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    destWidth: 100,
    destHeight: 100,
    canvasId: 'test',
    fileType: 'png',
    quality: 1,
    success() {
        console.log('canvasToTempFilePath success');
    }
});

const videoContext = uni.createVideoContext('test');
videoContext.play();

uni.onKeyboardHeightChange(({ height }) => {
    console.log(height);
});

uni.checkSession({
    success() {
        console.log('success');
    }
});

const mapContext = uni.createMapContext('map');
mapContext.getCenterLocation({
    success(res) {
        console.log(res.longitude);
    }
});
mapContext.moveToLocation();
mapContext.translateMarker({
    markerId: 1,
    destination: {
        latitude: 100,
        longitude: 100
    },
    autoRotate: false,
    rotate: 0,
    animationEnd() {
        console.log('animationEnd');
    }
});
mapContext.includePoints({
    points: [{
        latitude: 100,
        longitude: 100
    }],
    padding: [0]
});
mapContext.getRegion({
    success(res) {
        console.log(res.northeast);
    }
});
mapContext.getScale({
    success(res) {
        console.log(res.scale);
    }
});

const systemInfo = uni.getSystemInfoSync();
console.log(systemInfo.swanNativeVersion);
const safeArea = <SafeAreaResult> systemInfo.safeArea;
console.log(safeArea.top);

uni.onTabBarMidButtonTap(() => {
    console.log('onTabBarMidButtonTap');
});

const cameraContext = uni.createCameraContext();
cameraContext.startRecord({
    success() {
        setTimeout(() => {
            cameraContext.stopRecord({
                success(res) {
                    console.log(res.tempThumbPath);
                }
            });
        }, 1000);
    }
});
cameraContext.onCameraFrame(cameraFrame => {
    console.log(cameraFrame.data);
});
