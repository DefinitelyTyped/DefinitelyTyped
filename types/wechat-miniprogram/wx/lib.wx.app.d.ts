/*! *****************************************************************************
Copyright (c) 2020 Tencent, Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do 
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
***************************************************************************** */

declare namespace WechatMiniprogram {
    namespace App {
        interface ReferrerInfo {
            /** 来源小程序或公众号或App的 appId
             *
             * 以下场景支持返回 referrerInfo.appId：
             * - 1020（公众号 profile 页相关小程序列表）： appId
             * - 1035（公众号自定义菜单）：来源公众号 appId
             * - 1036（App 分享消息卡片）：来源应用 appId
             * - 1037（小程序打开小程序）：来源小程序 appId
             * - 1038（从另一个小程序返回）：来源小程序 appId
             * - 1043（公众号模板消息）：来源公众号 appId
             */
            appId: string
            /** 来源小程序传过来的数据，scene=1037或1038时支持 */
            extraData?: any
        }

        type SceneValues =
            | 1001
            | 1005
            | 1006
            | 1007
            | 1008
            | 1011
            | 1012
            | 1013
            | 1014
            | 1017
            | 1019
            | 1020
            | 1023
            | 1024
            | 1025
            | 1026
            | 1027
            | 1028
            | 1029
            | 1030
            | 1031
            | 1032
            | 1034
            | 1035
            | 1036
            | 1037
            | 1038
            | 1039
            | 1042
            | 1043
            | 1044
            | 1045
            | 1046
            | 1047
            | 1048
            | 1049
            | 1052
            | 1053
            | 1056
            | 1057
            | 1058
            | 1059
            | 1064
            | 1067
            | 1069
            | 1071
            | 1072
            | 1073
            | 1074
            | 1077
            | 1078
            | 1079
            | 1081
            | 1082
            | 1084
            | 1089
            | 1090
            | 1091
            | 1092
            | 1095
            | 1096
            | 1097
            | 1099
            | 1102
            | 1124
            | 1125
            | 1126
            | 1129

        interface LaunchShowOption {
            /** 打开小程序的路径 */
            path: string
            /** 打开小程序的query */
            query: IAnyObject
            /** 打开小程序的场景值
             * - 1001：发现栏小程序主入口，「最近使用」列表（基础库2.2.4版本起包含「我的小程序」列表）
             * - 1005：微信首页顶部搜索框的搜索结果页
             * - 1006：发现栏小程序主入口搜索框的搜索结果页
             * - 1007：单人聊天会话中的小程序消息卡片
             * - 1008：群聊会话中的小程序消息卡片
             * - 1011：扫描二维码
             * - 1012：长按图片识别二维码
             * - 1013：扫描手机相册中选取的二维码
             * - 1014：小程序模板消息
             * - 1017：前往小程序体验版的入口页
             * - 1019：微信钱包（微信客户端7.0.0版本改为支付入口）
             * - 1020：公众号 profile 页相关小程序列表
             * - 1023：安卓系统桌面图标
             * - 1024：小程序 profile 页
             * - 1025：扫描一维码
             * - 1026：发现栏小程序主入口，「附近的小程序」列表
             * - 1027：微信首页顶部搜索框搜索结果页「使用过的小程序」列表
             * - 1028：我的卡包
             * - 1029：小程序中的卡券详情页
             * - 1030：自动化测试下打开小程序
             * - 1031：长按图片识别一维码
             * - 1032：扫描手机相册中选取的一维码
             * - 1034：微信支付完成页
             * - 1035：公众号自定义菜单
             * - 1036：App 分享消息卡片
             * - 1037：小程序打开小程序
             * - 1038：从另一个小程序返回
             * - 1039：摇电视
             * - 1042：添加好友搜索框的搜索结果页
             * - 1043：公众号模板消息
             * - 1044：带 shareTicket 的小程序消息卡片 [详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html)
             * - 1045：朋友圈广告
             * - 1046：朋友圈广告详情页
             * - 1047：扫描小程序码
             * - 1048：长按图片识别小程序码
             * - 1049：扫描手机相册中选取的小程序码
             * - 1052：卡券的适用门店列表
             * - 1053：搜一搜的结果页
             * - 1056：聊天顶部音乐播放器右上角菜单
             * - 1057：钱包中的银行卡详情页
             * - 1058：公众号文章
             * - 1059：体验版小程序绑定邀请页
             * - 1064：微信首页连Wi-Fi状态栏
             * - 1067：公众号文章广告
             * - 1069：移动应用
             * - 1071：钱包中的银行卡列表页
             * - 1072：二维码收款页面
             * - 1073：客服消息列表下发的小程序消息卡片
             * - 1074：公众号会话下发的小程序消息卡片
             * - 1077：摇周边
             * - 1078：微信连Wi-Fi成功提示页
             * - 1079：微信游戏中心
             * - 1081：客服消息下发的文字链
             * - 1082：公众号会话下发的文字链
             * - 1084：朋友圈广告原生页
             * - 1089：微信聊天主界面下拉，「最近使用」栏（基础库2.2.4版本起包含「我的小程序」栏）
             * - 1090：长按小程序右上角菜单唤出最近使用历史
             * - 1091：公众号文章商品卡片
             * - 1092：城市服务入口
             * - 1095：小程序广告组件
             * - 1096：聊天记录
             * - 1097：微信支付签约页
             * - 1099：页面内嵌插件
             * - 1102：公众号 profile 页服务预览
             * - 1124：扫“一物一码”打开小程序
             * - 1125：长按图片识别“一物一码”
             * - 1126：扫描手机相册中选取的“一物一码”
             * - 1129：微信爬虫访问 [详情](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html)
             */
            scene: SceneValues
            /** shareTicket，详见 [获取更多转发信息]((转发#获取更多转发信息)) */
            shareTicket: string
            /** 当场景为由从另一个小程序或公众号或App打开时，返回此字段 */
            referrerInfo?: ReferrerInfo
        }

        interface PageNotFoundOption {
            /** 不存在页面的路径 */
            path: string
            /** 打开不存在页面的 query */
            query: IAnyObject
            /** 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面） */
            isEntryPage: boolean
        }

        interface Option {
            /** 生命周期回调—监听小程序初始化
             *
             * 小程序初始化完成时触发，全局只触发一次。
             */
            onLaunch(options: LaunchShowOption): void
            /** 生命周期回调—监听小程序显示
             *
             * 小程序启动，或从后台进入前台显示时
             */
            onShow(options: LaunchShowOption): void
            /** 生命周期回调—监听小程序隐藏
             *
             * 小程序从前台进入后台时
             */
            onHide(): void
            /** 错误监听函数
             *
             * 小程序发生脚本错误，或者 api
             */
            onError(/** 错误信息，包含堆栈 */ error: string): void
            /** 页面不存在监听函数
             *
             * 小程序要打开的页面不存在时触发，会带上页面信息回调该函数
             *
             * **注意：**
             * 1. 如果开发者没有添加 `onPageNotFound` 监听，当跳转页面不存在时，将推入微信客户端原生的页面不存在提示页面。
             * 2. 如果 `onPageNotFound` 回调中又重定向到另一个不存在的页面，将推入微信客户端原生的页面不存在提示页面，并且不再回调 `onPageNotFound`。
             *
             * 最低基础库： 1.9.90
             */
            onPageNotFound(options: PageNotFoundOption): void
            /**
             * 小程序有未处理的 Promise 拒绝时触发。也可以使用 [wx.onUnhandledRejection](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html) 绑定监听。注意事项请参考 [wx.onUnhandledRejection](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html)。
             * **参数**：与 [wx.onUnhandledRejection](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html) 一致
             */
            onUnhandledRejection: OnUnhandledRejectionCallback
            /**
             * 系统切换主题时触发。也可以使用 wx.onThemeChange 绑定监听。
             *
             * 最低基础库： 2.11.0
             */
            onThemeChange: OnThemeChangeCallback
        }

        type Instance<T extends IAnyObject> = Option & T
        type Options<T extends IAnyObject> = Partial<Option> &
            T &
            ThisType<Instance<T>>
        type TrivialInstance = Instance<IAnyObject>

        interface Constructor {
            <T extends IAnyObject>(options: Options<T>): void
        }

        interface GetAppOption {
            /** 在 `App` 未定义时返回默认实现。当App被调用时，默认实现中定义的属性会被覆盖合并到App中。一般用于独立分包
             *
             * 最低基础库： 2.2.4
             */
            allowDefault?: boolean
        }

        interface GetApp {
            <T = IAnyObject>(opts?: GetAppOption): Instance<T>
        }
    }
}

declare let App: WechatMiniprogram.App.Constructor
declare let getApp: WechatMiniprogram.App.GetApp
