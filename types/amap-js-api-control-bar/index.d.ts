// Type definitions for non-npm package amap-js-api-control-bar 1.4
// Project: https://lbs.amap.com/api/javascript-api/reference/map-control#control-bar
// Definitions by: breeze9527 <https://github.com/breeze9527>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="amap-js-api" />

declare namespace AMap {
    namespace ControlBar {
        interface EventMap {
            hide: Event<'hide'>;
            show: Event<'show'>;
        }
        interface Position {
            top?: string;
            right?: string;
            bottom?: string;
            left?: string;
        }
        interface Options {
            /**
             * 显示位置
             */
            position?: Position;
            /**
             * 是否显示缩放按钮
             */
            showZoomBar?: boolean;
            /**
             * 是否显示倾斜、旋转按钮
             */
            showControlButton?: boolean;
        }
    }
    class ControlBar extends EventEmitter {
        /**
         * 组合了旋转、倾斜、复位、缩放在内的地图控件
         * @param options 选项
         */
        constructor(options?: ControlBar.Options);
        // internal
        show(): void;
        hide(): void;
    }
}
