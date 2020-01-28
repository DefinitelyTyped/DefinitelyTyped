// Type definitions for non-npm package amap-js-api-tool-bar 1.4
// Project: https://lbs.amap.com/api/javascript-api/reference/map-control#AMap.ToolBar
// Definitions by: breeze9527 <https://github.com/breeze9527>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="amap-js-api" />

declare namespace AMap {
    namespace ToolBar {
        interface EventMap {
            hide: Event<'hide'>;
            show: Event<'show'>;
            location: Event<'location', {lnglat: LngLat}>;
            zoomchanged: Event<'zoomin' | 'zoomout'>;
            // internal
            'location-success': Event<'location-success'>; // TODO geolocation.getCurrentPosition
            'location-failed': Event<'location-failed'>; // TODO geolocation.getCurrentPosition
        }
        type Position = 'LT' | 'RT' | 'LB' | 'RB';
        interface Options {
            /**
             * 相对于地图容器左上角的偏移量
             */
            offset?: Pixel;
            /**
             * 控件停靠位置
             * LT:左上角;
             * RT:右上角;
             * LB:左下角;
             * RB:右下角;
             */
            position?: Position;
            /**
             * 标尺键盘是否可见
             */
            ruler?: boolean;
            /**
             * 定位失败后，是否开启IP定位
             */
            noIpLocate?: boolean;
            /**
             * 是否显示定位按钮
             */
            locate?: boolean;
            /**
             * 是否使用精简模式
             */
            liteStyle?: boolean;
            /**
             * 方向键盘是否可见
             */
            direction?: boolean;
            /**
             * 是否自动定位，即地图初始化加载完成后，是否自动定位的用户所在地，仅在支持HTML5的浏览器中有效
             */
            autoPosition?: boolean;
            /**
             * 自定义定位图标，值为Marker对象
             */
            locationMarker?: Marker;
            /**
             * 是否使用高德定位sdk用来辅助优化定位效果
             */
            useNative?: boolean;
            // internal
            timeout?: number;
        }
    }

    class ToolBar extends EventEmitter {
        constructor(options?: ToolBar.Options);
        /**
         * 获取工具条相对于地图容器左上角的偏移量
         */
        getOffset(): Pixel;
        /**
         * 设置工具条相对于地图容器左上角的偏移量
         * @param offset 偏移量
         */
        setOffset(offset: Pixel): void;
        /**
         * 隐藏缩放级别等级条
         */
        hideRuler(): void;
        /**
         * 显示缩放级别等级条
         */
        showRuler(): void;
        /**
         * 隐藏方向键盘
         */
        hideDirection(): void;
        /**
         * 显示方向键盘
         */
        showDirection(): void;
        /**
         * 隐藏定位小部件
         */
        hideLocation(): void;
        /**
         * 显示定位小部件
         */
        showLocation(): void;
        /**
         * 进行位置定位
         */
        doLocation(): void;
        /**
         * 获取上次定位的结果
         */
        getLocation(): LngLat | null | undefined;
        /**
         * 隐藏工具条
         */
        hide(): void;
        /**
         * 显示工具条
         */
        show(): void;
    }
}
