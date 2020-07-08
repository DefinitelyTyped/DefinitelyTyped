import { expectType } from 'tsd'

wx.request({
  url: 'https://www.baidu.com',
  success(res) {
    expectType<string>(res.errMsg)
    expectType<WechatMiniprogram.RequestSuccessCallbackResult>(res)
  },
})
wx.startBluetoothDevicesDiscovery({
  services: ['FEE7'],
  fail(res) {
    expectType<number>(res.errCode)
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
  expectType<WechatMiniprogram.CanvasContext>(ctx)
  ctx.setFillStyle('red')
  ctx.fillRect(10, 10, 150, 75)
  ctx.draw()
}

getCurrentPages().map(p => p.options)

const query = wx.createSelectorQuery()
expectType<WechatMiniprogram.SelectorQuery>(query)
query.select('#a').boundingClientRect(res => {
  expectType<number>(res.bottom)
})
query.selectViewport().scrollOffset(res => {
  expectType<number>(res.scrollTop)
})
query.exec(res => {
  expectType<any>(res)
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

expectType<string>(wx.env.USER_DATA_PATH)
