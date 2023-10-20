import XMplayer from "./player";
import XMLY from "./xmly";

interface options {
    appKey: string; // 开放平台应用接入申请的app_key
    deviceId?: string; // 设备ID，JSSDK内部默认自动生成一个，若用户传入则覆盖默认
    timeout?: number; // 请求超时时间（单位毫秒，默认：10*1000毫秒，即10s）
    debug?: boolean; // 是否开启调试模式（控制台输出日志）
    /**
     *  - appSecret、accessTokenUrl、getAccessToken 参数三选一，必传
     *  - 如果都传入，优先级：getAccessToken > access_token_url > appSecret
     */
    appSecret?: string; // 开放平台应用接入申请的app_secret（免登录授权必传）
    accessTokenUrl?: string; // 应用登记的oauth2授权回调地址（标准登录授权，必传）
    getAccessToken?: () => string; // 合作方实现：获取 access_token 的 js 函数（第三方账号登录授权，必传）
}

export default class XMPlugin {
    static instance?: XMPlugin;
    player: XMplayer;
    xmly: XMLY;
    options: options;
    /**
     * 初始化方法
     * @param options 初始化参数
     */
    static init(options: options): XMPlugin;
    /**
     * 获取当前插件实例
     */
    static getInstance(): XMPlugin | undefined;
    /**
     * 销毁方法
     */
    static destroy(): void;
    /**
     * 快捷方法，用于在插件初始化提取设备ID
     */
    static getDeviceId: () => string;
    /**
     * 获取插件版本号
     */
    static getVersion: () => string;
}
