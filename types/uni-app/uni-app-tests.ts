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
