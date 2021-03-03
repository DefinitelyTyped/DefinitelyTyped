// $ExpectType void
Page({})

const app = getApp<{
  globalData: {
    userInfo: WechatMiniprogram.UserInfo
  }
  userInfoReadyCallback(userInfo: WechatMiniprogram.UserInfo): void
}>()

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res,
          hasUserInfo: true,
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
        },
      })
    }
  },

  getUserInfo(e: any) {
    this.selectComponent('test')
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  },
})

Page({
  data: {
    text: 'init data',
    array: [{ msg: '1' }, { msg: '2' }],
    logs: [] as string[],
  },
  onLoad(options) {
    // $ExpectType string | undefined
    options.from
    const app = getApp<{
      globalData: { userInfo: WechatMiniprogram.UserInfo }
    }>()
    // $ExpectType string
    app.globalData.userInfo.nickName
  },
  onReady() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: number) => {
        return new Date(log).toString()
      }),
    })
  },
  onShow() {},
  onUnload() {},
  onPullDownRefresh() {},
  onShareAppMessage(res) {
    // $ExpectType string
    res.from
    if (res.from === 'button') {
      // $ExpectType string | undefined
      res.webViewUrl
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
    }
  },
  onPageScroll() {},
  onResize() {},
  onTabItemTap(item) {
    // $ExpectType string
    item.index
    // $ExpectType string
    item.pagePath
    // $ExpectType string
    item.text
  },
  viewTap() {
    this.setData(
      {
        text: 'Set some data for updating view.',
        'array[0].text': 'changed data',
        'object.text': 'changed data',
        'newField.text': 'new data',
      },
      () => {},
    )
    // $ExpectType string
    this.route
    // $ExpectType string
    this.data.text
    this.viewTap()

    const p = getCurrentPages()[1] as WechatMiniprogram.Page.Instance<
      { a: number },
      { customData: { b: number } }
    >
    p.customData.b = p.data.a
  },
  customData: {
    hi: 'MINA',
  },
})

Page({
  data: {
    a: 1,
  },
  onLoad(q) {
    // $ExpectType Record<string, string | undefined>
    q
    // $ExpectType number
    this.data.a
    // $ExpectError
    this.a
  },
  jump() {
    const query = wx.createSelectorQuery()
    query.select('#a').boundingClientRect(res => {
      // $ExpectType BoundingClientRectCallbackResult
      res
    })
    query.selectViewport().scrollOffset(res => {
      // $ExpectType ScrollOffsetCallbackResult
      res
    })
    query.exec(res => {
      // $ExpectType any
      res
    })
  },
  jumpBack() {
    wx.navigateBack({})
  },
})

Page({
  data: {},
  f() {
    // $ExpectType {}
    this.data
    this.setData({
      a: 1,
    })
  },
})

Page({
  onLoad(q) {
    q
  },
  f() {
    this.onLoad()
  },
})

interface DataType {
  logs: string[]
}
interface CustomOption {
  getLogs(): string[]
}

Page<DataType, CustomOption>({
  data: {
    logs: [],
  },
  getLogs() {
    return (wx.getStorageSync('logs') || []).map((log: number) => {
      return new Date(log).toString()
    })
  },
  onLoad() {
    const logs = this.getLogs()
    // $ExpectType string[]
    logs
    this.setData({ logs })
    // $ExpectError
    this.logs
    // $ExpectType string[]
    this.data.logs
  },
})

Page({
  test() {
    const channel = this.getOpenerEventChannel()
    // $ExpectType EventChannel
    channel
    channel.emit('test', {})
    channel.on('xxx', () => {})
    // $ExpectError
    channel.emit(1, 2)
  },
})

Page({
  onAddToFavorites(res) {
    // webview 页面返回 webviewUrl
    if (res.webviewUrl) {
      console.log('WebviewUrl: ', res.webviewUrl)
    }
    return {
      title: '自定义标题',
      imageUrl: 'http://demo.png',
      query: 'name=xxx&age=xxx',
    }
  },
})

Page({
  data: { a: '123' },
  onShow() {
    // $ExpectType () => 1
    this.fn
  },
  fn() {
    const a = 1
    return a
  },
  onShareAppMessage(): WechatMiniprogram.Page.ICustomShareContent {
    return { title: this.data.a, imageUrl: '', path: '' }
  },
})
