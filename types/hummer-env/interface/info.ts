export type fingerEvent = 'touch' | 'tab' | 'longPress' | 'pan' | 'swiper' | 'pinch' | 'input' | 'scroll' | 'switch';

export interface viewRect {
    /**
     * @summary 控件宽度
     */
    width: number; // 控件宽度
    /**
     * @summary 控件高度
     */
    height: number; // 控件高度
    /**
     * @summary 控件左边框相对于父容器左边框的坐标
     */
    left: number; // 控件左边框相对于父容器左边框的坐标
    /**
     * @summary 控件右边框相对于父容器左边框的坐标
     */
    right: number; // 控件右边框相对于父容器左边框的坐标
    /**
     * @summary 控件上边框相对于父容器上边框的坐标
     */
    top: number; // 控件上边框相对于父容器上边框的坐标
    /**
     * @summary 控件下边框相对于父容器上边框的坐标
     */
    bottom: number;
    /**
     * @summary 控件左边框相对于屏幕左边缘的坐标
     */
    windowLeft: number;
    /**
     * @summary 控件右边框相对于屏幕左边缘的坐标
     */
    windowRight: number;
    /**
     * @summary 控件上边框相对于屏幕上边缘的坐标
     */
    windowTop: number;
    /**
     * @summary 控件下边框相对于屏幕上边缘的坐标
     */
    windowBottom: number;
}

interface rickTextProps {
    /**
     * @summary color: '#FF0000'
     */
    color?: string; // color: '#000000'
    /**
     * @summary backgroundColor: "#ff0000"
     */
    backgroundColor?: string;
    /**
     * @summary fontFamily: 'Times New Roman'
     */
    fontFamily?: string;
    /**
     * @summary fontSize: 16 | '48px'
     */
    fontSize?: number | string;
    /**
     * @summary fontWeight: 'normal' | 'bold'
     */
    fontWeight?: string;
    /**
     * @summary fontWeight: 'normal' | 'italic'
     */
    fontStyle?: string;
    /**
     * @summary textDecoration: 'none' | 'underline' | 'line-through'
     */
    textDecoration?: string;
    /**
     * @summary image: 'http://xxx/test.jpg'
     */
    image?: string;
    /**
     * @summary imageWidth: 100 | '100px'
     */
    imageWidth?: number | string;
    /**
     * @summary imageHeight: 100 | '100px'
     */
    imageHeight?: number | string;
    /**
     * @summary imageAlign: 'baseline' | 'top' | 'center' | 'bottom'
     */
    imageAlign?: string;
    /**
     * @summary href: 'http://hummer.didi.cn'
     */
    href?: string;
    /**
     * @summary hrefColor: '#0000FF'
     */
    hrefColor?: string;
}

export type rickTextType = string | rickTextProps | Array<string | rickTextProps>;

export interface buttonStatusProps {
    backgroundColor?: string;
    color?: string;
}

export interface imageStyle {
    /**
     * @summary 图片路径
     */
    src?: string;
    /**
     * @summary 占位图片
     */
    placeholder?: string;
    /**
     * @summary 失败图片
     */
    failedImage?: string;
    /**
     * @summary Gif图路径
     */
    gifSrc?: string;
    /**
     * @summary Gif图重复次数
     */
    gifRepeatCount?: number;
}

export interface JumpPageInfo {
    /**
     * @summary 页面Url，以 scheme://xxx/yyy 的形式传入
     */
    url: string;
    /**
     * 页面间传递的参数
     */
    params?: {
        [key: string]: string | number;
    };
    /**
     * 是否需要转场动画（默认是true）
     */
    animated?: boolean;
    /**
     * 页面唯一标示，可以不传，当需要pop到该页面时，需要指定page的id
     */
    id?: string;
    /**
     * 打开页面时是否关闭自身
     */
    closeSelf?: boolean;
}

export interface RequestResponse {
    /**
     * @summary 状态码
     */
    status: number;
    /**
     * @summary 请求头
     */
    header: {
        [key: string]: string | number;
    };
    /**
     * @summary 响应数据
     */
    data: any;
    /**
     * @summary 请求错误信息
     */
    error: {
        code: number;
        msg: string;
    };
}

export type animationType =
    | 'position'
    | 'scale'
    | 'scaleX'
    | 'scaleY'
    | 'rotationX'
    | 'rotationY'
    | 'rotationZ'
    | 'opacity'
    | 'backgroundColor'
    | 'width'
    | 'height';

export type animationEasing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

export interface animationTypeMap {
    position: {
        x: number | string;
        y: number | string;
    };
    scale: number;
    scaleX: number;
    scaleY: number;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
    opacity: number;
    backgroundColor: string;
    width: number;
    height: number;
}

/**
 * data 消息文本
 */
export interface WebSocketMessageEvent {
    data: string;
}

export interface WebSocketCloseEvent {
    code: number;
    reason: string;
}

export interface LocationInfo {
    /**
     * @summary 纬度
     */
    latitude: number;
    /**
     * @summary 经度
     */
    longitude: number;
    /**
     * @summary 海拔（单位：米）
     */
    altitude: number;
    /**
     * @summary 精确度（单位：米）
     */
    accuracy: number;
    /**
     * @summary 速度（单位：米/秒）
     */
    speed: number;
    /**
     * @summary 方向角（单位：度，范围是0~360度）
     */
    bearing: number;
    /**
     * @summary 时间戳
     */
    timestamp: number;
}
