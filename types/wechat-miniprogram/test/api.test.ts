wx.request({
  url: 'https://www.baidu.com',
  success(res) {
    // $ExpectType string
    res.errMsg
  },
})
wx.startBluetoothDevicesDiscovery({
  services: ['FEE7'],
  fail(res) {
    // $ExpectType number
    res.errCode
  },
})
wx.authorize({
  scope: 'scope.record',
})
wx.navigateTo({
  url: '/pages/index/index',
})

{
  const ctx = wx.createCanvasContext('myCanvas')
  // $ExpectType CanvasContext
  ctx
  ctx.setFillStyle('red')
  ctx.fillRect(10, 10, 150, 75)
  ctx.draw()
}

getCurrentPages().map(p => p.options)

const query = wx.createSelectorQuery()
// $ExpectType SelectorQuery
query
query.select('#a').boundingClientRect(res => {
  // $ExpectType number
  res.bottom
})
query.selectViewport().scrollOffset(res => {
  // $ExpectType number
  res.scrollTop
})
query.exec(res => {
  // $ExpectType any
  res
})

Page({
  f() {
    wx.createSelectorQuery().in(this)
  },
})
Component({
  methods: {
    f() {
      wx.createSelectorQuery().in(this)
    },
  },
})

console.group('test')
console.debug('console', 'debug')
console.log('console', 'log')
console.info('console', 'info')
console.warn('console', 'warn')
console.error('console', 'error')
console.groupEnd()

// $ExpectType string
wx.env.USER_DATA_PATH

wx.getStorage<string>({
  key: 'key',
  success(res) {
    // $ExpectType string
    res.data
  },
})
wx.getStorage<string>({ key: 'key' }).then(res => {
  // $ExpectType string
  res.data
})
wx.getStorage({
  key: 'key',
  success(res) {
    // $ExpectType any
    res.data
  },
})

wx.request<ArrayBuffer>({
  url: 'https://developer.weixin.qq.com',
  success(res) {
    // $ExpectType ArrayBuffer
    res.data
  },
})

{
  const thisShouldBeAny = wx.getStorageSync('test')
  // $ExpectType any
  thisShouldBeAny
  const thisShouldBeNumber = wx.getStorageSync<number>('test')
  // $ExpectType number
  thisShouldBeNumber
}
