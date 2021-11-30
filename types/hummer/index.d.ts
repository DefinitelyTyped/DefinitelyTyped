// Type definitions for hummer 1.0
// Project: https://github.com/didi/Hummer
// Definitions by: Mi <https://github.com/iammvp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="./components/Index.d.ts" />
declare const Hummer: {
    render(view: HummerComponent): void;
    env: {
        /**
         * @summary 平台类型
         */
        platform: string;
        /**
         * @summary 平台系统版本号
         */
        osVersion: string;
        /**
         * @summary App版本号
         */
        appVersion: string;
        /**
         * @summary App名字
         */
        appName: string;
        /**
         * @summary 状态栏高度（单位：dp或pt）
         */
        statusBarHeight: number;
        /**
         * @summary iOS安全区域高度（单位：dp或pt）（Android可忽略）
         */
        safeAreaBottom: number;
        /**
         * @summary 设备宽度（单位：dp或pt）
         */
        deviceWidth: number;
        /**
         * @summary 设备高度（单位：dp或pt）
         */
        deviceHeight: number;
        /**
         * @summary 可用范围宽度（单位：dp或pt）
         */
        availableWidth: number;
        /**
         * @summary 可用范围高度（单位：dp或pt）
         */
        availableHeight: number;
        /**
         * @summary 像素缩放比例
         */
        scale: number;
    };
    notifyCenter: {
        addEventListener(event: string, callback: (value: any) => void): void;
        removeEventListener(event: string, callback: (value: any) => void): void;
        triggerEvent(event: string, param: unknown): void;
    };
};
declare const console: {
    log(msg: unknown): void;
    debug(msg: unknown): void;
    info(msg: unknown): void;
    warn(msg: unknown): void;
    error(msg: unknown): void;
};
declare function setInterval(cb: () => void, interval: number): number;
declare function clearInterval(timer: number): void;
declare function setTimeout(cb: () => void, timeout: number): number;
declare function clearTimeout(timer: number): void;
declare const Navigator: {
    openPage(pageInfo: import('./interface/info').JumpPageInfo, cb?: (obj: unknown) => void): void;
    popPage(pageInfo?: Partial<import('./interface/info').JumpPageInfo>): void;
    popToPage(pageInfo?: Partial<import('./interface/info').JumpPageInfo>): void;
    popToRootPage(pageInfo?: Partial<import('./interface/info').JumpPageInfo>): void;
    popBack(count: number, pageInfo?: Partial<import('./interface/info').JumpPageInfo>): void;
};

interface BasicAnimation<V = unknown> {
    value: V;
    duration: number;
    delay: number;
    repeatCount: number;
    easing: import('./interface/info').animationEasing;
    on(event: 'on' | 'off', cb: () => void): void;
}

declare const BasicAnimation: {
    prototype: BasicAnimation;
    /**
     * @param animationType:    "position" | "scale" | "scaleX" | "scaleY" | "rotationX" | "rotationY" | "rotationZ" | "opacity" | "backgroundColor" | "width" | "height";
     */
    new <T extends keyof import('./interface/info').animationTypeMap>(animationType: T): BasicAnimation<
        import('./interface/info').animationTypeMap[T]
    >;
};

interface KeyframeAnimation<V = unknown> {
    keyframes: Array<{
        percent: number;
        value: V;
        easing?: import('./interface/info').animationEasing;
    }>;
    duration: number;
    delay: number;
    repeatCount: number;
    easing: import('./interface/info').animationEasing;
    on(event: 'on' | 'off', cb: () => void): void;
}

declare const KeyframeAnimation: {
    prototype: KeyframeAnimation;
    /**
     * @param animationType:    "position" | "scale" | "scaleX" | "scaleY" | "rotationX" | "rotationY" | "rotationZ" | "opacity" | "backgroundColor" | "width" | "height";
     */
    new <T extends keyof import('./interface/info').animationTypeMap>(animationType: T): KeyframeAnimation<
        import('./interface/info').animationTypeMap[T]
    >;
};

declare const Toast: {
    show(msg: string, duration?: number): void;
    custom(view: HummerComponent, duration?: number): void;
};

interface Dialog {
    cancelable: boolean;
    lowLayer: boolean;
    alert(msg: string, btnText?: string, callback?: () => void): void;
    confirm(
        title: string,
        msg?: string,
        okBtnText?: string,
        cancelBtnText?: string,
        okCallback?: () => void,
        cancelCallback?: () => void,
    ): void;
    /**
     *
     * @param msg message to display, can only be closed by dismiss method
     */
    loading(msg: string): void;
    dismiss(): void;
    custom(view: HummerComponent): void;
}
declare const Dialog: {
    prototype: Dialog;
    new (): Dialog;
};

interface Request {
    url: string;
    method: string;
    timeout: number;
    header: {
        [key: string]: string | number;
    };
    param: {
        [key: string]: string | number;
    };
    send(cb: (response: import('./interface/info').RequestResponse) => void): void;
}

declare const Request: {
    prototype: Request;
    new (): Request;
};

interface WebSocket {
    /**
     * @summary 链接连上时的回调
     * @param cb 回调函数
     */
    onopen(cb: () => void): void;
    /**
     * @summary 接收消息的回调
     * @param cb 回调函数 , 回调参数 event : {data: 消息文本(string)}
     */
    onmessage(cb: (ev: import('./interface/info').WebSocketMessageEvent) => void): void;
    /**
     * @summary 链接关闭时的回调
     * @param cb 回调函数, 回调参数 event: {code:错误码(number), reason: 错误原因(string)}
     */
    onclose(cb: (ev: import('./interface/info').WebSocketCloseEvent) => void): void;
    /**
     * @summary 链接出错时的回调
     * @param cb 回调函数
     */
    onerror(cb: () => void): void;
}

/**
 * @summary 连接WebSocket（构造方法）
 * @param url 链接地址
 */
declare const WebSocket: {
    prototype: WebSocket;
    new (url: string): WebSocket;
};

declare const Storage: {
    set(key: string, value: string): void;
    get(key: string): string;
    remove(key: string): void;
    removeAll(): void;
    exist(key: string): boolean;
};

declare const Memory: {
    set(key: string, value: unknown): void;
    get(key: string): any;
    remove(key: string): void;
    removeAll(): void;
    exist(key: string): boolean;
};

interface Location {
    /**
     * 获取上一次缓存的位置信息
     * @param cb 位置信息回调, (locationInfo : LocationInfo) => void
     */
    getLastLocation(cb: (locationInfo: import('./interface/info').LocationInfo) => void): void;
    /**
     * 开启位置定位
     * @param cb 位置信息回调, (locationInfo : LocationInfo) => void
     * @param intervalTime 位置变化的时间间隔（单位：毫秒），默认60000毫秒
     * @param intervalDistance 位置变化的距离改变范围（单位：米），默认0米
     */
    startLocation(
        cb: (locationInfo: import('./interface/info').LocationInfo) => void,
        intervalTime?: number,
        intervalDistance?: number,
    ): void;
    /**
     * 停止位置定位
     */
    stopLocation(): void;
    /**
     * 定位时遇到的错误信息
     * @param cb 错误回调, (errCode:number, errMsg:string) => void;
     */
    onError(cb: (errCode: number, errMsg: string) => void): void;
}

declare const Location: {
    prototype: Location;
    new (): Location;
};
