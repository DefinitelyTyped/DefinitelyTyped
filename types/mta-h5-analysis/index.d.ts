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
    cid?: string | undefined; // 如果开启自定义事件，此项目为必填，否则不填
    autoReport?: 0 | 1 | undefined; // 是否开启自动上报(1:init完成则上报一次,0:使用pgv方法才上报)
    senseHash?: 0 | 1 | undefined; // hash锚点是否进入url统计
    senseQuery?: 0 | 1 | undefined; // url参数是否进入url统计
    performanceMonitor?: 0 | 1 | undefined; // 是否开启性能监控
    ignoreParams?: string | undefined; // 开启url参数上报时，可忽略部分参数拼接上报
}): void;

export function pgv(): void;

export function clickStat(
    type: string,
    params?: {
        [key: string]: any;
    },
): void;

export function clickShare(channelId: string): void;
