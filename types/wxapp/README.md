# 如何使用

微信小程序本身并无相应的类库，因此，像 `App()`、`Page()` 等全局函数，都需要一个个导入。

## 注册程序

```typescript
import { App, getApp, Page, getCurrentPages, wx } from 'wxapp';

App({
  onLaunch: (options) => {
    // Do something initial when launch.
  },
  onShow: (options) => {
      // Do something when show.
  },
  onHide: () => {
      // Do something when hide.
  },
  onError: (msg) => {
    console.log(msg)
  },
  globalData: 'I am global data'
})
```

## 注册页面

```typescript
import { App, getApp, Page, getCurrentPages, wx } from 'wxapp';

Page({
  data: {
    text: "This is page data."
  },
  onLoad: (options) => {
    // Do some initialize when page load.
  },
  get: () => {
      wx.request({
        url: 'test.php', //仅为示例，并非真实的接口地址
        data: {
            x: '' ,
            y: ''
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            console.log(res.data)
        }
    })
  }
})
```

## API

```typescript
import { App, getApp, Page, getCurrentPages, wx } from 'wxapp';

wx.downloadFile({
    url: "http://example.com/audio/123", // 仅为示例，并非真实的资源
    success: (res) => {
        wx.playVoice({
            filePath: res.tempFilePath
        });
    }
});
```
