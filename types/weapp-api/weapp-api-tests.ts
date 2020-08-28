import {wx, App, Page, getApp, setTimeout, clearTimeout, setInterval, clearInterval} from 'weapp-api'
App({
    onLaunch: function () {
        //调用API从本地缓存中获取数据
        let logs = wx.getStorageSync('logs') as Array<any> || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
    },
    getUserInfo: function (cb: Function) {
        let that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.login({
                success: function () {
                    wx.getUserInfo({
                        success: function (res: any) {
                            that.globalData.userInfo = res.userInfo;
                            typeof cb == "function" && cb(that.globalData.userInfo)
                        }
                    })
                }
            });
        }
    },
    globalData: {
        userInfo: null
    }
})


let app = getApp();
let page = app.getCurrentPage();
page.setData({ 'foo': 'bar' });
Page({
    data: {
        foo: 'bar'
    },
    onLoad: function (options) {
    }
})


wx.request({
    url: 'test.php',
    data: {
        x: '',
        y: ''
    },
    header: {
        'Content-Type': 'application/json'
    },
    success: function (res: any) {
        console.log(res.data)
    }
})

wx.chooseImage({
    success: function (res: any) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
            url: 'http://example.com/upload',
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
                'user': 'test'
            }
        })
    }
})

wx.downloadFile({
    url: 'http://example.com/audio/123',
    type: 'audio',
    success: function (res: any) {
        wx.playVoice({
            filePath: res.tempFilePath
        })
    }
})

wx.connectSocket({
    url: 'test.php',
    data: {
        x: '',
        y: ''
    },
    header: {
        'content-type': 'application/json'
    },
    method: "GET",
})

wx.connectSocket({
    url: 'test.php'
})
wx.onSocketOpen(function (res: any) {
    console.log('WebSocket连接已打开！')
})

wx.connectSocket({
    url: 'test.php'
})
wx.onSocketOpen(function (res: any) {
    console.log('WebSocket连接已打开！')
})
wx.onSocketError(function (res: any) {
    console.log('WebSocket连接打开失败，请检查！')
})

var socketOpen = false
var socketMsgQueue: Array<string> = []
wx.connectSocket({
    url: 'test.php'
})

wx.onSocketOpen(function (res: any) {
    socketOpen = true
    for (var i = 0; i < socketMsgQueue.length; i++) {
        sendSocketMessage(socketMsgQueue[i])
    }
    socketMsgQueue = []
})

function sendSocketMessage(msg: string) {
    if (socketOpen) {
        wx.sendSocketMessage({
            data: msg
        })
    } else {
        socketMsgQueue.push(msg)
    }
}

wx.connectSocket({
    url: 'test.php'
})

wx.onSocketMessage(function (res: any) {
    console.log('收到服务器内容：' + res.data)
})

wx.connectSocket({
    url: 'test.php'
})

//注意这里有时序问题，
//如果 wx.connectSocket 还没回调 wx.onSocketOpen，而先调用 wx.closeSocket，那么就做不到关闭 WebSocket 的目的。
//必须在 WebSocket 打开期间调用 wx.closeSocket 才能关闭。
wx.onSocketOpen(function () {
    wx.closeSocket()
})

wx.onSocketClose(function (res: any) {
    console.log('WebSocket 已关闭！')
})

wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res: any) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
    }
})

wx.previewImage({
    current: '', // 当前显示图片的http链接
    urls: [] // 需要预览的图片http链接列表
})

wx.startRecord({
    success: function (res: any) {
        var tempFilePath = res.tempFilePath
    },
    fail: function (res: any) {
        //录音失败
    }
})
setTimeout(function () {
    //结束录音
    wx.stopRecord()
}, 10000)

wx.startRecord({
    success: function (res: any) {
        var tempFilePath = res.tempFilePath
        wx.playVoice({
            filePath: tempFilePath,
            complete: function () {
            }
        })
    }
})

wx.startRecord({
    success: function (res: any) {
        var tempFilePath = res.tempFilePath
        wx.playVoice({
            filePath: tempFilePath
        })

        setTimeout(function () {
            //暂停播放
            wx.pauseVoice()
        }, 5000)
    }
})

wx.startRecord({
    success: function (res: any) {
        var tempFilePath = res.tempFilePath
        wx.playVoice({
            filePath: tempFilePath
        })

        setTimeout(function () {
            wx.stopVoice()
        }, 5000)
    }
})

wx.getBackgroundAudioPlayerState({
    success: function (res: any) {
        var status = res.status
        var dataUrl = res.dataUrl
        var currentPosition = res.currentPosition
        var duration = res.duration
        var downloadPercent = res.downloadPercent
    }
})

wx.playBackgroundAudio({
    dataUrl: '',
    title: '',
    coverImgUrl: ''
})

wx.pauseBackgroundAudio()

wx.seekBackgroundAudio({
    position: 30
})
wx.stopBackgroundAudio()

wx.startRecord({
    success: function (res: any) {
        var tempFilePath = res.tempFilePath
        wx.saveFile({
            tempFilePath: tempFilePath,
            success: function (res: any) {
                var savedFilePath = res.savedFilePath
            }
        })
    }
})


Page({
    bindButtonTap: function () {
        var that = this
        wx.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: ['front', 'back'],
            success: function (res: any) {
                that.setData({
                    src: res.tempFilePath
                })
            }
        })
    }
})

wx.setStorage({
    key: "key",
    data: "value"
})

try {
    wx.setStorageSync('key', 'value')
} catch (e) {
}

wx.getStorage({
    key: 'key',
    success: function (res: any) {
        console.log(res.data)
    }
})


var value = wx.getStorageSync('key')
if (value) {
    // Do something with return value
}


wx.clearStorage()


try {
    wx.clearStorageSync()
} catch (e) {
}


wx.getLocation({
    type: 'wgs84',
    success: function (res: any) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
    }
})

wx.getLocation({
  type: 'gcj02', //返回可以用于wx.openLocation的经纬度
  success: function(res: any) {
    var latitude = res.latitude
    var longitude = res.longitude
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: 28
    })
  }
})

wx.getNetworkType({
  success: function(res: any) {
    var networkType = res.networkType // 返回网络类型2g，3g，4g，wifi
  }
})

wx.getSystemInfo({
  success: function(res: any) {
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
  }
})

const updateManager = wx.getUpdateManager()

// updateManager.onCheckForUpdate(function (res: any) {
//     //请求完新版本信息的回调
//     console.log(res.hasUpdate)
// })

updateManager.onUpdateReady(function () {
    // wx.showModal({
    //     title: '更新提示',
    //     content: '新版本已经准备好，是否重启应用？',
    //     success(res: any) {
    //         if (res.confirm) {
    //             // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
    //             updateManager.applyUpdate()
    //         }
    //     }
    // })
})

updateManager.onUpdateFailed(function () {
    // 新版本下载失败
})

wx.onAccelerometerChange(function(res: any) {
  console.log(res.x)
  console.log(res.y)
  console.log(res.z)
})

wx.onCompassChange(function (res: any) {
  console.log(res.direction)
})

wx.setNavigationBarTitle({
  title: '当前页面'
})

wx.navigateTo({
  url: 'test?id=1'
})

wx.redirectTo({
  url: 'test?id=1'
})


var animation = wx.createAnimation({
  transformOrigin: "50% 50%",
  duration: 1000,
  timingFunction: "ease",
  delay: 0
})


Page({
  data: {
    animationData: {}
  },
  onShow: function(){
    var animation = wx.createAnimation({
      duration: 1000,
        timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2,2).rotate(45).step()

    this.setData({
      animationData:animation.export()
    })

    setTimeout(function() {
      animation.translate(30).step()
      this.setData({
        animationData:animation.export()
      })
    }, 1000)
  },
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData:animation.export()
    })
  },
  rotateThenScale: function () {
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationData:animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData:animation.export()
    })
  }
})

// 假设页面上有3个画布
var canvas1Id = 3001
var canvas2Id = 3002
var canvas3Id = 3003

var context = wx.createContext();

[canvas1Id, canvas2Id, canvas3Id].forEach(function (id) {
  context.clearActions()
  // 在context上调用方法
  wx.drawCanvas({
    canvasId: id,
    actions: context.getActions()
  })
})


Page({
  onReady: function() {
    var context = wx.createContext()
    context.rect(5, 5, 25, 15)
    context.stroke()
    context.scale(2, 2) //再放大2倍
    context.rect(5, 5, 25, 15)
    context.stroke()
    context.scale(2, 2) //再放大2倍
    context.rect(5, 5, 25, 15)
    context.stroke()
    wx.drawCanvas({
      canvasId: 1,
      actions: context.getActions()
    })
  }
})


Page({
  onReady: function() {
    var context = wx.createContext()
    context.rect(50, 50, 200, 200)
    context.stroke()
    context.rotate(5 * Math.PI / 180)
    context.rect(50, 50, 200, 200)
      context.stroke()
      context.rotate(5 * Math.PI / 180)
      context.rect(50, 50, 200, 200)
      context.stroke()

    wx.drawCanvas({
      canvasId: 1,
      actions: context.getActions()
    })
  }
})

Page({
  onReady: function() {
    var context = wx.createContext()

    context.rect(50, 50, 200, 200)
    context.stroke()
    context.translate(50, 50)
    context.rect(50, 50, 200, 200)
    context.stroke()

    wx.drawCanvas({
      canvasId: 1,
      actions: context.getActions()
    })
  }
})

Page({
  onReady: function() {
    var context = wx.createContext()

    context.rect(50, 50, 200, 200)
    context.fill()
    context.clearRect(100, 100, 50, 50)

    wx.drawCanvas({
      canvasId: 1,
      actions: context.getActions()
    })
  }
})

Page({
  onReady: function() {
    var context = wx.createContext()
    wx.chooseImage({
      success: function(res: any) {
        context.drawImage(res.tempFilePaths[0], 0, 0)
        wx.drawCanvas({
          canvasId: 1,
          actions: context.getActions()
        })
      }
    })
  }
})

Page({
  onReady:function(){
    var context = wx.createContext()

    context.setFontSize(14)
    context.fillText("MINA", 50, 50)
    context.moveTo(0, 50)
    context.lineTo(100, 50)
    context.stroke()

    context.setFontSize(20)
    context.fillText("MINA", 100, 100)
    context.moveTo(0, 100)
    context.lineTo(200, 100)
    context.stroke()
    wx.drawCanvas({
      canvasId: 1,
      actions: context.getActions()
    });
  }
})

Page({
  onReady: function() {
    var context = wx.createContext()

    context.setFillStyle("#ff00ff")
    context.setStrokeStyle("#00ffff")

    context.rect(50, 50, 100, 100)
    context.fill()
    context.stroke()
    wx.drawCanvas({
      canvasId: 1,
      actions: context.getActions()
    });
  }
})

Page({
  onReady: function() {
    var context = wx.createContext()

    context.setLineWidth(10)
    context.setLineCap("round")
    context.setLineJoin("miter")
    context.setMiterLimit(10)
    context.moveTo(20, 20)
    context.lineTo(150, 27)
    context.lineTo(20, 54)
    context.stroke()

    context.beginPath()

    context.setMiterLimit(3)
    context.moveTo(20, 70)
    context.lineTo(150, 77)
    context.lineTo(20, 104)
    context.stroke()

    wx.drawCanvas({
      canvasId: 1,
      actions: context.getActions()
    });
  }
})
Page({
  canvasIdErrorCallback: function (e:any) {
    console.error(e.detail.errMsg)
  },
  onReady: function() {
    //使用wx.createContext获取绘图上下文context
    var context = wx.createContext()

    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0,2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0,2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()

    // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
    wx.drawCanvas({
      canvasId: 'firstCanvas',
      actions: context.getActions() // 获取绘图动作数组
    })
  }
})


App({
  onLaunch: function() {
    wx.login({
      success: function(res: any) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }
})


wx.getUserInfo({
  success: function(res: any) {
    var userInfo = res.userInfo
    var nickName = userInfo.nickName
    var avatarUrl = userInfo.avatarUrl
    var gender = userInfo.gender //性别 0：未知、1：男、2：女
    var province = userInfo.province
    var city = userInfo.city
    var country = userInfo.country
  }
})

wx.requestPayment({
   'timeStamp': '',
   'nonceStr': '',
   'package': '',
   'signType': 'MD5',
   'paySign': '',
   'success':function(res: any){
   },
   'fail':function(res: any){
   }
})

App({
    onLaunch(options){
        console.log(options.query)
    }
})
