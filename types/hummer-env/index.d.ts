/// <reference path="./components/Index.d.ts" />
/// <reference path="./interface/style.d.ts" />
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
        /**
         * @summary 设置事件监听
         * @param event 要监听的事件名, 可以通过 triggerEvent 触发该事件
         * @param callback 回调函数
         */
        addEventListener(event: string, callback: (value?: any) => void): void;
        /**
         * @summary 移除事件监听
         * @param event 要移除的事件名
         * @param callback 要移除的回调函数
         */
        removeEventListener(event: string, callback: (value?: any) => void): void;
        /**
         * @summary 触发事件
         * @param event 触发的事件名
         * @param param 传递的参数, 会当成 addEventListerner 回调函数的参数
         */
        triggerEvent(event: string, param?: unknown): void;
    };
    /**
     * 当前页面信息
     */
    pageInfo: {
        animated: boolean;
        closeSelf: boolean;
        params: {
            [key: string]: string | number;
        };
        sourcePath: string;
        url: string;
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
    /**
     * @param pageInfo 页面信息
     * @param pageInfo.url 跳转页面url
     * @param pageInfo.params 页面间传递的参数
     * @param pageInfo.animated 是否需要转场动画（默认是true）
     * @param pageInfo.id 页面唯一标示，可以不传，当需要pop到该页面时，需要指定page的id
     * @param pageInfo.closeSelf 打开页面时是否关闭自身 (默认是false)
     * @param cb 回调函数
     */
    openPage(pageInfo: import("./interface/info").JumpPageInfo, cb?: (obj: unknown) => void): void;
    /**
     * @summary 关闭当前页面
     * @param pageInfo.animated 是否需要转场动画（默认是true）
     */
    popPage(pageInfo?: Partial<import("./interface/info").JumpPageInfo>): void;
    /**
     * 回退到指定页面
     * @param pageInfo 页面信息
     * @param pageInfo.id 指定页面的id, 通过openPage打开页面时设置的id
     */
    popToPage(pageInfo?: Partial<import("./interface/info").JumpPageInfo>): void;
    /**
     * @summary 回退到首页
     * @param pageInfo.animated 是否需要转场动画（默认是true）
     */
    popToRootPage(pageInfo?: Partial<import("./interface/info").JumpPageInfo>): void;
    /**
     * @summary 回退指定数量的页面
     * @param count 回退的页面数量
     * @param pageInfo.animated 是否需要转场动画（默认是true）
     */
    popBack(count: number, pageInfo?: Partial<import("./interface/info").JumpPageInfo>): void;
};

interface BasicAnimation<V = unknown> {
    /**
     * @summary 属性值
     */
    value: V;
    /**
     * @summary 动画持续时间（单位：秒）
     */
    duration: number;
    /**
     * @summary 动画延时（单位：秒）
     */
    delay: number;
    /**
     * @summary 动画次数 <0: 无限次 0、1: 动画做1次 2: 动画做2次
     */
    repeatCount: number;
    /**
     * @summary 动画运动速率曲线
     */
    easing: import("./interface/info").animationEasing;
    /**
     * 动画执行开始或结束时的回调
     *
     * @param event 事件类型（'start' 或 'end'）
     * @param callback 事件回调
     */
    on(event: "start" | "end", cb: () => void): void;
}

declare const BasicAnimation: {
    prototype: BasicAnimation;
    /**
     * @param animationType:    "position" | "scale" | "scaleX" | "scaleY" | "rotationX" | "rotationY" | "rotationZ" | "opacity" | "backgroundColor" | "width" | "height";
     * @param animationType = position - 平移动画，单位：px、hm、dp/pt
     * @param animationType = scale - 缩放动画（x轴和y轴同时）
     * @param animationType = scaleX - 缩放动画（x轴）
     * @param animationType = scaleY - 缩放动画（y轴）
     * @param animationType = rotationX - 旋转动画（x轴），单位：度
     * @param animationType = rotationY - 旋转动画（y轴），单位：度
     * @param animationType = rotationZ - 旋转动画（z轴），单位：度
     * @param animationType = opacity - 透明度动画，取值为[0, 1]（0-全透明, 1-不透明）
     * @param animationType = backgroundColor - 背景色动画
     * @param animationType = width - 宽度动画
     * @param animationType = height - 高度动画
     */
    new<T extends keyof import("./interface/info").animationTypeMap>(animationType: T): BasicAnimation<
        import("./interface/info").animationTypeMap[T]
    >;
};

interface KeyframeAnimation<V = unknown> {
    /**
     * @summary 关键帧
     */
    keyframes: Array<{
        percent: number;
        value: V;
        easing?: import("./interface/info").animationEasing;
    }>;
    /**
     * @summary 动画持续时间（单位：秒）
     */
    duration: number;
    /**
     * @summary 动画延时（单位：秒）
     */
    delay: number;
    /**
     * @summary 动画次数 <0: 无限次 0、1: 动画做1次 2: 动画做2次
     */
    repeatCount: number;
    /**
     * @summary 动画运动速率曲线
     */
    easing: import("./interface/info").animationEasing;
    /**
     * 动画执行开始或结束时的回调
     *
     * @param event 事件类型（'start' 或 'end'）
     * @param callback 事件回调
     */
    on(event: "start" | "end", cb: () => void): void;
}

declare const KeyframeAnimation: {
    prototype: KeyframeAnimation;
    /**
     * @param animationType:    "position" | "scale" | "scaleX" | "scaleY" | "rotationX" | "rotationY" | "rotationZ" | "opacity" | "backgroundColor" | "width" | "height";
     * @param animationType = position - 平移动画，单位：px、hm、dp/pt
     * @param animationType = scale - 缩放动画（x轴和y轴同时）
     * @param animationType = scaleX - 缩放动画（x轴）
     * @param animationType = scaleY - 缩放动画（y轴）
     * @param animationType = rotationX - 旋转动画（x轴），单位：度
     * @param animationType = rotationY - 旋转动画（y轴），单位：度
     * @param animationType = rotationZ - 旋转动画（z轴），单位：度
     * @param animationType = opacity - 透明度动画，取值为[0, 1]（0-全透明, 1-不透明）
     * @param animationType = backgroundColor - 背景色动画
     * @param animationType = width - 宽度动画
     * @param animationType = height - 高度动画
     */
    new<T extends keyof import("./interface/info").animationTypeMap>(animationType: T): KeyframeAnimation<
        import("./interface/info").animationTypeMap[T]
    >;
};

declare const Toast: {
    /**
     * @summary 展示默认Toast
     * @param msg 信息
     * @param duration 时长（安卓上duration<=2000时是短时长，duration>2000是长时长）
     */
    show(msg: string, duration?: number): void;
    /**
     * @summary 显示自定义Toast
     * @param view 自定义View
     * @param duration 时长（安卓上duration<=2000时是短时长，duration>2000是长时长）
     */
    custom(view: HummerComponent, duration?: number): void;
};

interface Dialog {
    /**
     * @summary 是否可以被取消（按返回键或者点击空白区域是否可以关闭对话框）默认 true
     */
    cancelable: boolean;
    /**
     * @summary 对话框显示层级是否是低层级（比系统对话框层级低）默认 false
     */
    lowLayer: boolean;
    /**
     * 显示提示对话框（用户需要点击【确定】按钮才能继续进行操作）
     *
     * @param msg 内容
     * @param btnText 按钮内容
     * @param callback 按钮点击回调
     */
    alert(msg: string, btnText?: string, callback?: () => void): void;
    /**
     * 显示确认对话框（用户需要点击【确定】或【取消】按钮才能继续进行操作）
     *
     * @param title 标题
     * @param msg 内容
     * @param okBtnText [确认]按钮内容
     * @param cancelBtnText [取消]按钮内容
     * @param okCallback [确认]按钮点击回调
     * @param cancelCallback [取消]按钮点击回调
     */
    confirm(
        title: string,
        msg?: string,
        okBtnText?: string,
        cancelBtnText?: string,
        okCallback?: () => void,
        cancelCallback?: () => void,
    ): void;
    /**
     * 显示等待对话框（只能通过调用dismiss方法关闭对话框）
     * @param msg message to display, can only be closed by dismiss method
     */
    loading(msg: string): void;
    /**
     * 关闭对话框
     */
    dismiss(): void;
    /**
     * 显示自定义对话框
     *
     * @param view 自定义View
     */
    custom(view: HummerComponent): void;
}
declare const Dialog: {
    prototype: Dialog;
    new(): Dialog;
};

interface Request {
    /**
     * @summary API地址 【必填】
     */
    url: string;
    /**
     * @summary 请求方式（不区分大小写）
     */
    method: string;
    /**
     * @summary 超时时间（单位：毫秒）
     */
    timeout: number;
    /**
     * @summary 网络请求头部
     */
    header: {
        [key: string]: string | number;
    };
    /**
     * @summary 网络请求参数
     */
    param: {
        [key: string]: string | number;
    };
    /**
     * 发起网络请求
     * @param cb 请求返回触发的回调
     */
    send(cb: (response: import("./interface/info").RequestResponse) => void): void;
}

declare const Request: {
    prototype: Request;
    new(): Request;
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
    onmessage(cb: (ev: import("./interface/info").WebSocketMessageEvent) => void): void;
    /**
     * @summary 链接关闭时的回调
     * @param cb 回调函数, 回调参数 event: {code:错误码(number), reason: 错误原因(string)}
     */
    onclose(cb: (ev: import("./interface/info").WebSocketCloseEvent) => void): void;
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
    new(url: string): WebSocket;
};

declare const Storage: {
    /**
     * 保存键值对
     *
     * @param key 名称
     * @param value 值
     */
    set(key: string, value: string): void;
    /**
     * 获取键对应的值
     *
     * @param key 名称
     * @return value 值
     */
    get(key: string): string;
    /**
     * 删除键值对
     *
     * @param key 名称
     */
    remove(key: string): void;
    /**
     * 删除所有数据
     */
    removeAll(): void;
    /**
     * 是否存在某个键值对
     *
     * @param key 名称
     */
    exist(key: string): boolean;
};

declare const Memory: {
    /**
     * 保存键值对
     *
     * @param key 名称
     * @param value 值
     */
    set(key: string, value: unknown): void;
    /**
     * 获取键对应的值
     *
     * @param key 名称
     * @return value 值
     */
    get(key: string): any;
    /**
     * 删除键值对
     *
     * @param key 名称
     */
    remove(key: string): void;
    /**
     * 删除所有数据
     */
    removeAll(): void;
    /**
     * 是否存在某个键值对
     *
     * @param key 名称
     */
    exist(key: string): boolean;
};

interface Location {
    /**
     * 获取上一次缓存的位置信息
     * @param cb 位置信息回调, (locationInfo : LocationInfo) => void
     */
    getLastLocation(cb: (locationInfo: import("./interface/info").LocationInfo) => void): void;
    /**
     * 开启位置定位
     * @param cb 位置信息回调, (locationInfo : LocationInfo) => void
     * @param intervalTime 位置变化的时间间隔（单位：毫秒），默认60000毫秒
     * @param intervalDistance 位置变化的距离改变范围（单位：米），默认0米
     */
    startLocation(
        cb: (locationInfo: import("./interface/info").LocationInfo) => void,
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
    new(): Location;
};
