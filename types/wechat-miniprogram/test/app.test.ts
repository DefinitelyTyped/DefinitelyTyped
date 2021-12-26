// $ExpectType void
App({})

App({
  globalData: {
    userInfo: {} as unknown as WechatMiniprogram.UserInfo,
  },
  userInfoReadyCallback(userInfo: WechatMiniprogram.UserInfo) {
    userInfo.gender
  },
  onLaunch() {
    const logs: number[] = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res.userInfo)
              }
            },
          })
        }
      },
    })
  },
  f(a: number) {
    return a.toFixed()
  },
  onError() {},
  onHide() {
    // $ExpectType string
    this.f(1)
  },
  onPageNotFound(e) {
    // $ExpectType boolean
    e.isEntryPage
  },
  onUnhandledRejection({ reason, promise }) {
    // $ExpectType string
    reason
    // $ExpectType Promise<any>
    promise
  },
})
