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
