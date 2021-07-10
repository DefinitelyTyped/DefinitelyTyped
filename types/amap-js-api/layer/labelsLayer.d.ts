declare namespace AMap {
    namespace LabelsLayer {
        interface EventMap<I = LabelsLayer> {
            click: Event<'click', LabelsLayerEvent<I>>;
            mouseover: Event<'mouseover', LabelsLayerEvent<I>>;
            mouseout: Event<'mouseout', LabelsLayerEvent<I>>;
            mousemove: Event<'mousemove', LabelsLayerEvent<I>>;
            mousedown: Event<'mousedown', LabelsLayerEvent<I>>;
            mouseup: Event<'mouseup', LabelsLayerEvent<I>>;
            touchstart: Event<'touchstart', LabelsLayerEvent<I>>;
            touchend: Event<'touchend', LabelsLayerEvent<I>>;
        }
        interface EventData {
            data: {
                id: number;
                name: string;
                position: [number, number] | [string, string];
                zooms: [number, number];
                rank?: number | undefined;
                txt?: string | undefined;
            };
            opts: {
                opacity: number;
                zIndex: number;
                icon: LabelMarker.IconOptions;
                text: LabelMarker.TextOptions;
            };
        }
        interface LabelsLayerEvent<I> {
            data: EventData;
            target: I;
            pixel: Pixel;
            lnglat: LngLat;
        }
        interface Options extends Layer.Options {
            /**
             * 图层是否可见
             */
            visible?: boolean | undefined;
            /**
             * 图层的层级
             */
            zIndex?: number | undefined;
            /**
             * 图层的透明度
             */
            opacity?: number | undefined;
            zooms?: [number, number] | undefined;
        }
    }

    class LabelsLayer extends Layer {
        /**
         * 标注图层
         * @param options 选项
         */
        constructor(options?: LabelsLayer.Options);
        /**
         * 图层中添加LabelMarker
         * @param labelMarker 标注对象
         */
        add(labelMarker: LabelMarker | LabelMarker[]): void;
        /**
         * 图层中移除LabelMarker
         * @param labelMarker 标注对象
         */
        remove(labelMarker: LabelMarker): void;
        /**
         * 清空图层
         */
        clear(): void;
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
    }
}
