/// <reference path="./wechat.d.ts" />
namespace WechatTests {
    export class TestFixture {
        public config(appId: string, timestamp: string, nonceStr: string, signature: string) {
            wx.config({
                appId: appId,
                timestamp: timestamp,
                nonceStr: nonceStr,
                signature: signature,
                jsApiList: [
                    'openLocation',
                    'getLocation',
                    'closeWindow',
                    'chooseWXPay'
                ]
            });
        }
        public chooseWXPay(timestamp: string, nonceStr: string, pkg: string, signType: string, paySign: string) {
            wx.chooseWXPay({
                timestamp: timestamp,
                nonceStr: nonceStr,
                "package": pkg,
                signType: signType,
                paySign: paySign,
                success: (res: any) => {
                    console.log("success");
                }
            });
        }
        public location() {
            wx.getLocation({
                success: position => {
                    wx.openLocation(position);
                }
            });
            // navigator.geolocation.getCurrentPosition((position: Position) => {
            //     wx.openLocation(position);
            // }, console.log, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
        }
    }
}