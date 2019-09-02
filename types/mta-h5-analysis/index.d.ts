// Type definitions for mta-h5-analysis 2.0
// Project: https://www.npmjs.com/package/mta-h5-analysis
// Definitions by: dusk_ <https://github.com/steady-join>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:no-internal-module
declare module MtaH5Analysis {
    const version: string;
    const conf: {
        autoReport: 0 | 1;
        cid: string;
        ignoreParams: string[];
        performanceMonitor: 0 | 1;
        senseHash: 0 | 1;
        senseQuery: 0 | 1;
        sid: string;
        userReport: 0 | 1;
    };

    function init(params: {
        sid: string; // 必填，统计用的appid
        cid?: string; // 如果开启自定义事件，此项目为必填，否则不填
        autoReport?: 0 | 1; // 是否开启自动上报(1:init完成则上报一次,0:使用pgv方法才上报)
        senseHash?: 0 | 1; // hash锚点是否进入url统计
        senseQuery?: 0 | 1; // url参数是否进入url统计
        performanceMonitor?: 0 | 1; // 是否开启性能监控
        ignoreParams?: string; // 开启url参数上报时，可忽略部分参数拼接上报
    }): void;

    function pgv(): void;

    function clickStat(
        type: string,
        params?: {
            [key: string]: any;
        },
    ): void;

    function clickShare(channelId: string): void;
}

// tslint:disable-next-line:no-single-declare-module
declare module 'mta-h5-analysis' {
    export default MtaH5Analysis;
}
