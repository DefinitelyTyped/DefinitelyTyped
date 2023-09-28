declare namespace AMap {
    namespace Layer {
        interface Options {
            /**
             * 所属的地图对象
             */
            map?: Map | undefined;
        }
    }

    abstract class Layer extends EventEmitter {
        /**
         * 图层获取DOM节点
         */
        getContainer(): HTMLDivElement | undefined;
        /**
         * 获取图层缩放范围
         */
        getZooms(): [number, number];
        /**
         * 设置透明度
         * @param alpha 透明度
         */
        setOpacity(alpha: number): void;
        /**
         * 设置透明度
         */
        getOpacity(): number;
        /**
         * 显示图层
         */
        show(): void;
        /**
         * 隐藏图层
         */
        hide(): void;
        /**
         * 设置图层所属地图
         * @param map map对象
         */
        setMap(map?: Map | null): void;
        /**
         * 获取图层所属地图
         */
        getMap(): Map | null | undefined;
        /**
         * 设置图层的层级
         * @param index 层级
         */
        setzIndex(index: number): void;
        /**
         * 获取图层的层级
         */
        getzIndex(): number;
    }
}
