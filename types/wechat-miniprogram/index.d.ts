/// <reference path="./lib.wx.app.d.ts" />
/// <reference path="./lib.wx.page.d.ts" />
/// <reference path="./lib.wx.api.d.ts" />
/// <reference path="./lib.wx.cloud.d.ts" />
/// <reference path="./lib.wx.component.d.ts" />
/// <reference path="./lib.wx.behavior.d.ts" />
/// <reference path="./lib.wx.event.d.ts" />

declare namespace WechatMiniprogram {
    type IAnyObject = Record<string, any>;
    type Optional<F> = F extends (arg: infer P) => infer R ? (arg?: P) => R : F;
    type OptionalInterface<T> = { [K in keyof T]: Optional<T[K]> };
    interface AsyncMethodOptionLike {
        success?: ((...args: any[]) => void) | undefined;
    }
    type PromisifySuccessResult<
        P,
        T extends AsyncMethodOptionLike,
    > = P extends { success: any } ? void
        : P extends { fail: any } ? void
        : P extends { complete: any } ? void
        : Promise<Parameters<Exclude<T["success"], undefined>>[0]>;
    interface Console {
        /** [console.debug()](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.debug.html)
         *
         * 向调试面板中打印 debug 日志 */
        debug(
            /** 日志内容，可以有任意多个。 */
            ...args: any[]
        ): void;
        /** [console.error()](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.error.html)
         *
         * 向调试面板中打印 error 日志 */
        error(
            /** 日志内容，可以有任意多个。 */
            ...args: any[]
        ): void;
        /** [console.group(string label)](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.group.html)
         *
         * 在调试面板中创建一个新的分组。随后输出的内容都会被添加一个缩进，表示该内容属于当前分组。调用 [console.groupEnd](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.groupEnd.html)之后分组结束。
         *
         * **注意**
         *
         * 仅在工具中有效，在 vConsole 中为空函数实现。 */
        group(
            /** 分组标记，可选。 */
            label?: string,
        ): void;
        /** [console.groupEnd()](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.groupEnd.html)
         *
         * 结束由 [console.group](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.group.html) 创建的分组
         *
         * **注意**
         *
         * 仅在工具中有效，在 vConsole 中为空函数实现。 */
        groupEnd(): void;
        /** [console.info()](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.info.html)
         *
         * 向调试面板中打印 info 日志 */
        info(
            /** 日志内容，可以有任意多个。 */
            ...args: any[]
        ): void;
        /** [console.log()](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.log.html)
         *
         * 向调试面板中打印 log 日志 */
        log(
            /** 日志内容，可以有任意多个。 */
            ...args: any[]
        ): void;
        /** [console.warn()](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.warn.html)
         *
         * 向调试面板中打印 warn 日志 */
        warn(
            /** 日志内容，可以有任意多个。 */
            ...args: any[]
        ): void;
    }
}

declare let console: WechatMiniprogram.Console;

declare let wx: WechatMiniprogram.Wx;
/** 引入模块。返回模块通过 `module.exports` 或 `exports` 暴露的接口。 */
declare function require(
    /** 需要引入模块文件相对于当前文件的相对路径，或 npm 模块名，或 npm 模块路径。不支持绝对路径 */
    module: string,
): any;
/** 引入插件。返回插件通过 `main` 暴露的接口。 */
declare function requirePlugin(
    /** 需要引入的插件的 alias */
    module: string,
): any;
/** 插件引入当前使用者小程序。返回使用者小程序通过 [插件配置中 `export` 暴露的接口](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html#%E5%AF%BC%E5%87%BA%E5%88%B0%E6%8F%92%E4%BB%B6)。
 *
 * 该接口只在插件中存在
 *
 * 最低基础库： `2.11.1` */
declare function requireMiniProgram(): any;
/** 当前模块对象 */
declare let module: {
    /** 模块向外暴露的对象，使用 `require` 引用该模块时可以获取 */
    exports: any;
};
/** `module.exports` 的引用 */
declare let exports: any;

/** [clearInterval(number intervalID)](https://developers.weixin.qq.com/miniprogram/dev/api/base/timer/clearInterval.html)
 *
 * 取消由 setInterval 设置的定时器。 */
declare function clearInterval(
    /** 要取消的定时器的 ID */
    intervalID: number,
): void;
/** [clearTimeout(number timeoutID)](https://developers.weixin.qq.com/miniprogram/dev/api/base/timer/clearTimeout.html)
 *
 * 取消由 setTimeout 设置的定时器。 */
declare function clearTimeout(
    /** 要取消的定时器的 ID */
    timeoutID: number,
): void;
/** [number setInterval(function callback, number delay, any rest)](https://developers.weixin.qq.com/miniprogram/dev/api/base/timer/setInterval.html)
 *
 * 设定一个定时器。按照指定的周期（以毫秒计）来执行注册的回调函数 */
declare function setInterval(
    /** 回调函数 */
    callback: (...args: any[]) => any,
    /** 执行回调函数之间的时间间隔，单位 ms。 */
    delay?: number,
    /** param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数。 */
    rest?: any,
): number;
/** [number setTimeout(function callback, number delay, any rest)](https://developers.weixin.qq.com/miniprogram/dev/api/base/timer/setTimeout.html)
 *
 * 设定一个定时器。在定时到期以后执行注册的回调函数 */
declare function setTimeout(
    /** 回调函数 */
    callback: (...args: any[]) => any,
    /** 延迟的时间，函数的调用会在该延迟之后发生，单位 ms。 */
    delay?: number,
    /** param1, param2, ..., paramN 等附加参数，它们会作为参数传递给回调函数。 */
    rest?: any,
): number;
