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
