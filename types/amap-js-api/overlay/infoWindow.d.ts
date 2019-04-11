declare namespace AMap {
    namespace InfoWindow {
        interface EventMap<I> {
            change: Event<'change', { target: I }>;
            open: Event<'open', { target: I }>;
            close: Event<'close', { target: I }>;
        }

        type Anchor = 'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'center' | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

        interface Options<ExtraData = any> extends Overlay.Options<ExtraData> {
            /**
             * 是否自定义窗体
             */
            isCustom?: boolean;
            /**
             * 是否自动调整窗体到视野内
             */
            autoMove?: boolean;
            /**
             * 控制是否在鼠标点击地图后关闭信息窗体
             */
            closeWhenClickMap?: boolean;
            /**
             * 显示内容
             */
            content?: string | HTMLElement;
            /**
             * 信息窗体尺寸
             */
            size?: SizeValue;
            /**
             * 信息窗体锚点
             */
            anchor?: Anchor;
            /**
             * 信息窗体显示位置偏移量
             */
            offset?: Pixel;
            /**
             * 信息窗体显示基点位置
             */
            position?: LocationValue;
            /**
             * 是否显示信息窗体阴影
             */
            showShadow?: boolean;
            // internal
            height?: number;
        }
    }

    class InfoWindow<ExtraData = any> extends Overlay<ExtraData> {
        /**
         * 信息展示窗体
         * @param options 选项
         */
        constructor(options?: InfoWindow.Options);
        /**
         * 在地图的指定位置打开信息窗体
         * @param map 地图
         * @param position 打开的位置
         */
        open(map: Map, position?: LocationValue): void;
        /**
         * 关闭信息窗体
         */
        close(): void;
        /**
         * 获取信息窗体是否打开
         */
        getIsOpen(): boolean;
        /**
         * 设置信息窗体内容
         * @param content 窗体内容
         */
        setContent(content: string | HTMLElement): void;
        /**
         * 获取信息窗体内容
         */
        getContent(): string | HTMLElement | undefined;
        /**
         * 设置信息窗体显示基点位置
         * @param lnglat 位置经纬度
         */
        setPosition(lnglat: LocationValue): void;
        /**
         * 获取信息窗体显示基点位置
         */
        getPosition(): LngLat | undefined;
        /**
         * 获取锚点
         */
        getAnchor(): InfoWindow.Anchor | undefined;
        /**
         * 设置锚点
         * @param anchor 锚点
         */
        setAnchor(anchor?: InfoWindow.Anchor): void;
        /**
         * 设置信息窗体大小
         * @param size 大小
         */
        setSize(size: SizeValue): void;
        /**
         * 获取信息窗体大小
         */
        getSize(): Size | undefined;

        // internal
        setOffset(offset: Pixel): void;
    }
}
