// Type definitions for mta-h5-analysis 2.0
// Project: https://www.npmjs.com/package/mta-h5-analysis
// Definitions by: dusk_ <https://github.com/steady-join>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const version: string;
export const conf: {
    autoReport: 0 | 1;
    cid: string;
    ignoreParams: string[];
    performanceMonitor: 0 | 1;
    senseHash: 0 | 1;
    senseQuery: 0 | 1;
    sid: string;
    userReport: 0 | 1;
};

export function init(params: {
    sid: string; // 必填，统计用的appid
    cid?: string; // 如果开启自定义事件，此项目为必填，否则不填
    autoReport?: 0 | 1; // 是否开启自动上报(1:init完成则上报一次,0:使用pgv方法才上报)
    senseHash?: 0 | 1; // hash锚点是否进入url统计
    senseQuery?: 0 | 1; // url参数是否进入url统计
    performanceMonitor?: 0 | 1; // 是否开启性能监控
    ignoreParams?: string; // 开启url参数上报时，可忽略部分参数拼接上报
}): void;

export function pgv(): void;

export function clickStat(
    type: string,
    params?: {
        [key: string]: any;
    },
): void;

export function clickShare(channelId: string): void;
