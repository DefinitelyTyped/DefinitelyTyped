// Type definitions for non-npm package amap-js-api-scale 1.4
// Project: https://lbs.amap.com/api/javascript-api/reference/map-control#AMap.Scale
// Definitions by: breeze9527 <https://github.com/breeze9527>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="amap-js-api" />

declare namespace AMap {
    namespace Scale {
        interface EventMap {
            show: Event<'show'>;
            hide: Event<'hide'>;
        }
        type Position = 'LT' | 'RT' | 'LB' | 'RB';
        interface Options {
            /**
             * 控件停靠位置
             * LT:左上角;
             * RT:右上角;
             * LB:左下角;
             * RB:右下角;
             * 默认位置：LB
             */
            position?: Position;
            /**
             * 是否可见
             */
            visible?: boolean;
            /**
             * 相对于地图容器左上角的偏移量
             */
            offset?: Pixel;
        }
    }

    /**
     * 比例尺插件
     */
    class Scale extends EventEmitter {
        constructor(options?: Scale.Options);
        /**
         * 控件停靠位置
         */
        position: Scale.Position;
        /**
         * 相对于地图容器左上角的偏移量
         */
        offset: Pixel;
        /**
         * 是否可见
         */
        visible: boolean;
        /**
         * 显示比例尺
         */
        show(): void;
        /**
         * 隐藏比例尺
         */
        hide(): void;
    }
}
