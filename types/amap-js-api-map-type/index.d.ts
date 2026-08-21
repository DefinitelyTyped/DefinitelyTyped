/// <reference types="amap-js-api" />

declare namespace AMap {
    namespace MapType {
        interface EventMap {
            hide: Event<"hide">;
            show: Event<"show">;
        }
        interface Options {
            /**
             * 初始化默认图层类型，默认为0
             * 取值为0：默认底图
             * 取值为1：卫星图
             */
            defaultType?: 0 | 1 | undefined;
            /**
             * 是否叠加实时交通图层，默认false
             */
            showTraffic?: boolean | undefined;
            /**
             * 是否叠加路网图层，默认false
             */
            showRoad?: boolean | undefined;
        }
    }

    class MapType extends EventEmitter {
        constructor(options?: MapType.Options);
        show(): void;
        hide(): void;
    }
}
