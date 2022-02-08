declare namespace AMap {
    namespace LabelMarker {
        interface EventMap<I = LabelMarker> extends LabelsLayer.EventMap<I> { }

        type TextDirection = 'top' | 'right' | 'bottom' | 'left' | 'center';
        type FontWeight = 'normal' | 'thin' | 'bold';
        type Anchor = 'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'center' | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
        interface TextStyle {
            fontSize?: number | undefined;
            fontFamily?: string | undefined;
            fontWeight?: FontWeight | undefined;
            fillColor?: string | undefined;
            strokeColor?: string | undefined;
            strokeWidth?: number | undefined;
        }
        interface TextOptions {
            content?: string | undefined;
            direction?: TextDirection | undefined;
            offset?: Pixel | [number, number] | undefined;
            zooms?: [number, number] | undefined;
            style?: TextStyle | undefined;
        }
        interface IconOptions {
            image?: string | undefined;
            size?: number[] | Size | undefined;
            // unsupport Pixel in v1.4.14
            clipOrigin?: number[] | Pixel | undefined;
            anchor?: Anchor | undefined;
            retina?: boolean | undefined;

            // internal
            angel?: number | undefined;
            type?: string | undefined;
            clipSize?: [number, number] | undefined;
            zooms?: [number, number] | undefined;
        }
        interface Options<ExtraData = any> extends Overlay.Options<ExtraData> {
            position?: string | LocationValue | undefined;
            zooms?: [number, number] | undefined;
            opacity?: number | undefined;
            icon?: IconOptions | undefined;
            text?: TextOptions | undefined;

            // internal
            zIndex?: number | undefined;
            title?: string | undefined;
            rank?: number | undefined;
        }
    }

    class LabelMarker<ExtraData = any> extends Overlay<ExtraData> {
        constructor(options?: LabelMarker.Options);
        /**
         * 设置标注位置
         * @param position 标注位置
         */
        setPosition(position: [number, number]): void;
        /**
         * 获取标注位置
         */
        getPosition(): [number, number] | [string, string];
        /**
         * 获取显示级别范围
         */
        getZooms(): [number, number];
        /**
         * 设置显示级别范围
         * @param zooms 显示级别范围
         */
        setZooms(zooms: [number, number]): void;
        /**
         * 获取透明度
         */
        getOpacity(): number;
        /**
         * 设置透明度
         * @param opacity 透明度
         */
        setOpacity(opacity: number): void;
        /**
         * 注册事件
         * @param eventName 事件名称
         * @param handler 事件回调函数
         * @param context 事件回调中的上下文
         * @param once 触发一次
         * @param unshift 更改事件顺序
         */
        on<C = this>(
            eventName: string,
            handler: (this: C, event: any) => void,
            context?: C,
            once?: boolean,
            unshift?: boolean
        ): any; // should be void
        /**
         * 移除事件绑定
         * @param eventName 事件名称
         * @param handler 事件功能函数
         * @param context 事件上下文
         */
        off<C = this>(
            eventName: string,
            handler: ((this: C, event: any) => void) | 'mv',
            context?: C
        ): any; // should be void

        // internal
        getBounds(): Bounds;
    }
}
