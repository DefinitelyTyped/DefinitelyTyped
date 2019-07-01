declare namespace AMap {
    namespace MassMarks {
        interface EventMap<I = MassMarks> {
            click: UIEvent<'click', I>;
            dblclick: UIEvent<'dblclick', I>;
            mousedown: UIEvent<'mousedown', I>;
            mouseup: UIEvent<'mouseup', I>;
            mouseover: UIEvent<'mouseover', I>;
            mouseout: UIEvent<'mouseout', I>;
            touchstart: UIEvent<'touchstart', I>;
            touchend: UIEvent<'touchend', I>;
        }

        interface Style {
            /**
             * 图标显示位置偏移量，以图标的左上角为基准点（0,0）点
             */
            anchor: Pixel;
            /**
             * 图标的地址
             */
            url: string;
            /**
             * 图标的尺寸
             */
            size: Size;
            /**
             * 旋转角度
             */
            rotation?: number;
        }

        type UIEvent<N extends string, I> = Event<N, {
            /**
             * 事件触发目标
             */
            target: I;
            /**
             * 目标点的数据
             */
            data: I extends MassMarks<infer D> ? D : Data;
        }>;

        interface Options extends Layer.Options {
            /**
             * 显示层级
             */
            zIndex?: number;
            /**
             * 指针样式
             */
            cursor?: string;
            /**
             * 是否在拖拽缩放过程中实时重绘
             */
            alwayRender?: boolean;
            /**
             * 设置点的样式
             */
            style: Style | Style[];
            // rejectMapMask
        }
        interface Data {
            lnglat: LocationValue;
            style?: number;
        }
    }

    class MassMarks<D extends MassMarks.Data = MassMarks.Data> extends Layer {
        /**
         * 海量点类，利用该类可同时在地图上展示万级别的点
         * @param data 点对象数组或url
         * @param opts 选项
         */
        constructor(data: D[] | string, opts: MassMarks.Options);
        /**
         * 设置显示样式
         * @param style 样式设置
         */
        setStyle(style: MassMarks.Style | MassMarks.Style[]): void;
        /**
         * 获取显示样式
         */
        getStyle(): MassMarks.Style | MassMarks.Style[];
        /**
         * 设置数据集
         * @param data 数据集
         */
        setData(data: D[] | string): void;
        /**
         * 获取数据集
         */
        getData(): Array<Pick<D, Exclude<keyof D, 'lnglat'>> & { lnglat: LngLat }>;
        /**
         * 清除海量点
         */
        clear(): void;
    }
}
