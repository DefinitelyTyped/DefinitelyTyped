// growingIO
interface GIOObjectVariables {
    [key: string]: string;
}

interface GIOInitOptions {
    /** 配置imp类型的数据关闭发送 */
    imp?: boolean | undefined;
}

interface GIOConfigOptions {
    /** 是否采集数据 */
    dataCollect?: "true" | "false" | boolean | undefined;
    /** 是否检测hash变化 */
    hashtag?: "true" | "false" | boolean | undefined;
}

interface GrowingIO {
    /** clearUserId: 清空用户信息, sendPage: 上报页面数据 */
    (action: "clearUserId" | "sendPage"): void;
    /** 设置用户登录id */
    (action: "setUserId", userId: string): void;
    /** app.set: 对于应用级变量，也就是 1.x 版本中的 CS2 - CS10, people.set: 用户级变量, page.set: 页面级变量 visit.set: 访问用户级变量, evar.set: 转化变量 */
    (action: "app.set" | "people.set" | "page.set" | "visit.set" | "evar.set", variables: GIOObjectVariables): void;
    /** app.set: 对于应用级变量，也就是 1.x 版本中的 CS2 - CS10, people.set: 用户级变量, page.set: 页面级变量 visit.set: 访问用户级变量, evar.set: 转化变量 */
    (action: "app.set" | "people.set" | "page.set" | "visit.set" | "evar.set", key: string, value: string): void;
    /** 自定义埋点 */
    (action: "track", eventId: string, numberOrVariables?: number | GIOObjectVariables): void;
    /** 自定义埋点 */
    (action: "track", eventId: string, number: number, eventLevelVariables: GIOObjectVariables): void;
    /** 初始化 */
    (action: "init", projectId: string, options?: GIOInitOptions): void;
    /** 配置 */
    (action: "config", options: GIOConfigOptions): void;
}

declare const gio: GrowingIO;
