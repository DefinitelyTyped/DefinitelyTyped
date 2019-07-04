// Type definitions for non-npm package miniprogram-wxs 2.6
// Project: https://developers.weixin.qq.com/miniprogram/en/dev/framework/view/wxs/index.html
// Definitions by: New Future <https://github.com/NewFuture>
//                 wechat miniprogram <https://github.com/wechat-miniprogram-admin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference no-default-lib="true"/>
/// <reference lib="es5"/>

/**
 * 生成 regexp 对象需要使用 getRegExp函数。
 * @param pattern : 正则表达式的内容
 * @param flags ：修饰符`g`: global;`i`: ignoreCase; `m`: multiline
 */
declare function getRegExp(pattern: string, flags?: string): RegExp;

/**
 * 返回一个当前时间的对象。
 */
declare function getDate(): Date;

/**
 * 获取时间
 * @param value  时间
 * milliseconds: 从1970年1月1日00:00:00 UTC开始计算的毫秒数
 * datestring: 日期字符串，其格式为："month day, year hours:minutes:seconds"
 */
declare function getDate(value: number | string): Date;
declare function getDate(
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number,
): Date;

declare interface DateConstructor {
    /**
     * wxs 中禁止使用new来构造 Date
     * 使用 `getDate` 代替
     */
    new(...args: any): never;
}

declare interface RegExpConstructor {
    /**
     * wxs 中禁止使用new来构造 RegExp
     * 使用 `getRegExp` 代替
     */
    new(...args: any): never;
}
/**
 * 方法用于在 console 窗口输出信息。它可以接受多个参数，将它们的结果连接起来输出。
 */
declare const console: {
    log(message?: any, ...optionalParams: any[]): void;
};
