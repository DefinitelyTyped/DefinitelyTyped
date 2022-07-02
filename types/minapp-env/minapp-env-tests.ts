Page({
    data: {
        msg: 'hello world',
        share: 'share to my friends!',
    },
    onLoad() {
        wx.showToast({
            title: 'my_world',
            icon: 'success',
            duration: 1500,
        });
        wx.setStorageSync('token', 'e23o33xfsefeeooi2344');
    },
    onReady() {
        wx.getStorageSync('token');
    },
    onShareAppMessage(e: Page.IShareAppMessageOption): any {
        wx.showModal({
            title: 'my_title',
            content: 'this is content...',
            success(res) {
                console.log(res);
            },
        });
        wx.showToast({
            title: '成功！',
        });
    },
});
