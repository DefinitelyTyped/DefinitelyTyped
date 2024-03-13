/**
 * “浙里办” 多端容器环境支持的数据埋点上报能力。
 * This API just for [浙里办](https://apps.apple.com/us/app/zhe-jiang-zheng-wu-fu-wu/id910260096)
 * 1. 在页面 head 中先引入 zwjsbridge：
 *  ```js
 *      <script type="text/javascript" src="//assets.zjzwfw.gov.cn/assets/ZWJSBridge/1.1.0/zwjsbridge.js"></script>
 *  ```
 * 2. 在 zwjsbridge 后面引入 zwlog：
 * ```js
 *      <script type="text/javascript" src="//assets.zjzwfw.gov.cn/assets/zwlog/1.0.0/zwlog.js"></script>
 * ```
 * 3. 在声明 Zwlog 对象实例时，可以传入一些 app 或者用户信息
 * ```js
 *      const zwlog = new ZwLog({
 *          _user_id:"用户 ID",
 *          _user_nick:"用户昵称"
 *      })
 * ```
 */

interface ZwLogInitOptions {
    /**
     * 用户ID
     */
    _user_id: string;
    /**
     * 用户昵称
     */
    _user_nick: string;
}

type EventParamsKey =
    | "uidaplus"
    | "spm-url"
    | "spmpre"
    | "spm_cnt"
    | "pvid"
    | "_dev_id"
    | "_anony_id"
    | "_user_id"
    | "_user_nick"
    | "_session_id";

interface zwlog {
    cbQueue: any[];
    metaInfo: {
        "aplus-cpvdata": {
            sdk_info: string;
            sdk_version: string;
        };
        "aplus-exdata": {
            sdk_info: string;
            sdk_version: string;
        };
        "aplus-rhost-g": string;
        "aplus-rhost-v": string;
        "aplus-waiting": string;
        appId: string;
    } & ZwLogInitOptions;
    readyFlag: boolean;
    init: () => void;

    /**
     * 初始化jsapi，初始化完成即onReady之后再调用jsapi。
     *
     * @param callBack 初始化成功回调
     */
    onReady(callBack: () => void): void;

    /**
     * PV日志
     *
     * @param data
     */
    sendPV: (data: {
        /**
         * IRS 服务侧应用 appid,
         */
        miniAppId: string;
        /**
         * IRS 服务侧应用 appname,
         */
        miniAppName: string;
        /**
         * 页面 ID
         */
        pageId: string;
        /**
         * 页面名称
         */
        pageName: string;
        /**
         * 页面启动到加载完成的时间
         */
        t2: number;
        /**
         * 页面启动到页面响应完成的时间
         */
        t0: number;
        /**
         * 用户登录状态（01:未登录/ 02:单点登录）
         */
        log_status: "01" | "02";
    }) => void;
    /**
     * 令箭日志
     *
     * @param data
     */
    record: (
        /**
         * 注册的事件编码 可传空值或特定事件指定编码
         */
        trackerEventCode: string,
        /**
         * 时间类型 取值为'EXP':⾃定义曝光事件/'CLK':⾃定义点击事件/'OTHER': 其他⾃定义事件
         */
        eventType: "EXP" | "CLK" | "OTHER" | string,
        /**
         * 本次事件中上报的事件参数. 其取值为⼀个 JSON 对象（平铺的简单对象，不能多层嵌套）
         * JSON 中的 key 不能是以下保留属性：uidaplus,spm-url,spmpre,spm_cnt,pvid,_dev_id,_anony_id,_user_id,_user_nick,_session_id
         */
        eventParams: Record<string, any> & { [key in EventParamsKey]?: never },
    ) => void;
    /**
     * 支付宝上报采集
     *
     * @param data
     */
    sendAliMonitor: (
        data:
            | {
                /**
                 * 固定值，针对涉及“拆解”业务；
                 */
                name: "cj";
                /**
                 * 业务数据
                 */
                obj: {
                    /**
                     * 填写具体业务名称，如“余额查询”
                     */
                    title: string;
                    /**
                     * 常规业务：taSR；医疗或医保业务：taSR_YL
                     */
                    c1: string;
                    /**
                     * H5 服务 url
                     */
                    url: string;
                };
            }
            | {
                /**
                 * 固定值，针对涉及“办结”业务
                 */
                name: "bj";
                /**
                 * 业务数据
                 */
                obj: {
                    /**
                     * 填写具体业务名称，如“余额查询”
                     */
                    title: string;
                    /**
                     * 常规业务：taSR；医疗或医保业务：taSR_YL
                     */
                    c1: string;
                    /**
                     * 服务耗时，无法统计填写 0
                     */
                    time: number;
                    /**
                     * 办结成功或失败
                     */
                    success: boolean;
                };
            },
    ) => void;
}

interface ZwLog {
    new(initOptions: ZwLogInitOptions): zwlog;
}

declare var ZwLog: ZwLog;
