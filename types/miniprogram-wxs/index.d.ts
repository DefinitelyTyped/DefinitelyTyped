/// <reference no-default-lib="true"/>
/// <reference path="es5.d.ts"/>

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

/**
 * 方法用于在 console 窗口输出信息。它可以接受多个参数，将它们的结果连接起来输出。
 */
declare const console: {
    log(message?: any, ...optionalParams: any[]): void;
};

interface Module {
    /**
     * 导出内容
     */
    exports: any;
}

/**
 * 模块
 */
declare const module: Module;
