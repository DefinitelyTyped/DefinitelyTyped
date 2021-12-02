export type fingerEvent = 'touch' | 'tab' | 'longPress' | 'pan' | 'swiper' | 'pinch' | 'input' | 'scroll' | 'switch';

export interface viewRect {
    width: number; // 控件宽度
    height: number; // 控件高度
    left: number; // 控件左边框相对于父容器左边框的坐标
    right: number; // 控件右边框相对于父容器左边框的坐标
    top: number; // 控件上边框相对于父容器上边框的坐标
    bottom: number; // 控件下边框相对于父容器上边框的坐标
    windowLeft: number; // 控件左边框相对于屏幕左边缘的坐标
    windowRight: number; // 控件右边框相对于屏幕左边缘的坐标
    windowTop: number; // 控件上边框相对于屏幕上边缘的坐标
    windowBottom: number; // 控件下边框相对于屏幕上边缘的坐标
}

interface rickTextProps {
    color?: string; // color: '#000000'
    backgroundColor?: string; // color: '#FF0000'
    fontFamily?: string; // fontFamily: 'Times New Roman'
    fontSize?: number | string; // fontSize: 16 | '48px'
    fontWeight?: string; // fontWeight: 'normal' | 'bold'
    fontStyle?: string; // fontWeight: 'normal' | 'italic'
    textDecoration?: string; // textDecoration: 'none' | 'underline' | 'line-through'
    image?: string; // image: 'http://xxx/test.jpg'
    imageWidth?: number | string; // imageWidth: 100 | '100px'
    imageHeight?: number | string; // imageHeight: 100 | '100px'
    imageAlign?: string; // imageAlign: 'baseline' | 'top' | 'center' | 'bottom'
    href?: string; // href: 'http://hummer.didi.cn'
    hrefColor?: string; // hrefColor: '#0000FF'
}

export type rickTextType = string | rickTextProps | Array<string | rickTextProps>;

export interface buttonStatusProps {
    backgroundColor?: string;
    color?: string;
}

export interface imageStyle {
    src?: string; // 图片路径
    placeholder?: string; // 占位图片
    failedImage?: string; // 失败图片
    gifSrc?: string; // Gif图路径
    gifRepeatCount?: number; // Gif图重复次数
}

export interface JumpPageInfo {
    url: string;
    param?: unknown;
    animated?: boolean;
    id?: string;
    closeSelf?: boolean;
}

export interface RequestResponse {
    status: number;
    header: {
        [key: string]: string | number;
    };
    data: any;
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
        x: number;
        y: number;
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
    latitude: number; // 纬度
    longitude: number; // 经度
    altitude: number; // 海拔（单位：米）
    accuracy: number; // 精确度（单位：米）
    speed: number; // 速度（单位：米/秒）
    bearing: number; // 方向角（单位：度，范围是0~360度）
    timestamp: number; // 时间戳
}
