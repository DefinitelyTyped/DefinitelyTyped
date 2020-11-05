// Type definitions for non-npm package Wechat Mini Program - wechat-miniprogram 3.1
// Project: https://developers.weixin.qq.com/miniprogram/dev/api/
// Definitions by: Wechat Miniprogram <https://github.com/wechat-miniprogram>,
//                SgLy <https://github.com/SgLy>,
//                TtTRz <https://github.com/TtTRz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5


/// <reference path="./lib.wx.app.d.ts" />
/// <reference path="./lib.wx.page.d.ts" />
/// <reference path="./lib.wx.api.d.ts" />
/// <reference path="./lib.wx.cloud.d.ts" />
/// <reference path="./lib.wx.component.d.ts" />
/// <reference path="./lib.wx.behavior.d.ts" />
/// <reference path="./lib.wx.event.d.ts" />

declare namespace WechatMiniprogram {
    type IAnyObject = Record<string, any>
    type Optional<F> = F extends (arg: infer P) => infer R ? (arg?: P) => R : F
    type OptionalInterface<T> = { [K in keyof T]: Optional<T[K]> }
    interface AsyncMethodOptionLike {
        success?: (...args: any[]) => void
    }
    type PromisifySuccessResult<
        P,
        T extends AsyncMethodOptionLike
    > = P extends { success: any }
        ? void
        : P extends { fail: any }
        ? void
        : P extends { complete: any }
        ? void
        : Promise<Parameters<Exclude<T['success'], undefined>>[0]>
}
