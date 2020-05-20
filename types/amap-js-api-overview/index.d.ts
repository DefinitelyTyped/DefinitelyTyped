// Type definitions for non-npm package amap-js-api-overview 1.4
// Project: https://lbs.amap.com/api/javascript-api/reference/map-control#AMap.OverView
// Definitions by: breeze9527 <https://github.com/breeze9527>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="amap-js-api" />

declare namespace AMap {
    namespace OverView {
        interface EventMap {
            show: Event<'show'>;
            hide: Event<'hide'>;
            open: Event<'open'>;
            close: Event<'close'>;
        }
        interface Options<L extends TileLayer = TileLayer> {
            /**
             * 鹰眼窗体中需显示的切片图层
             */
            tileLayer?: L;
            /**
             * 鹰眼是否展开，默认为false
             */
            isOpen?: boolean;
            /**
             * 鹰眼是否显示，默认为true
             */
            visible?: boolean;
        }
    }

    /**
     * 地图鹰眼插件
     */
    class OverView<L extends TileLayer = TileLayer> extends EventEmitter {
        constructor(options?: OverView.Options<L>);
        /**
         * 显示鹰眼窗体
         */
        show(): void;
        /**
         * 隐藏鹰眼窗体
         */
        hide(): void;
        /**
         * 展开鹰眼窗口
         */
        open(): void;
        /***
         * 折叠鹰眼窗口
         */
        close(): void;
        /**
         * 设置鹰眼中需显示的切片图层
         * @param tileLayer 切片图层
         */
        setTileLayer(tileLayer: L): void;
        /**
         * 获取窗体中显示的切片图层
         */
        getTileLayer(): L;
    }
}
