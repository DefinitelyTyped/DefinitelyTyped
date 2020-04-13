// Type definitions for non-npm package amap-js-api-map-type 1.4
// Project: https://lbs.amap.com/api/javascript-api/reference/map-control#AMap.MapType
// Definitions by: breeze9527 <https://github.com/breeze9527>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="amap-js-api" />

declare namespace AMap {
    namespace MapType {
        interface EventMap {
            hide: Event<'hide'>;
            show: Event<'show'>;
        }
        interface Options {
            /**
             * 初始化默认图层类型，默认为0
             * 取值为0：默认底图
             * 取值为1：卫星图
             */
            defaultType?: 0 | 1;
            /**
             * 是否叠加实时交通图层，默认false
             */
            showTraffic?: boolean;
            /**
             * 是否叠加路网图层，默认false
             */
            showRoad?: boolean;
        }
    }

    class MapType extends EventEmitter {
        constructor(options?: MapType.Options);
        show(): void;
        hide(): void;
    }
}
