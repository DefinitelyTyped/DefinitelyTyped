// Type definitions for layui-src 2.6
// Project: https://github.com/javabitar/layui
// Definitions by: javabitar <https://github.com/javabitar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

/// <reference path="misc.d.ts" />
/// <reference path="Layui.d.ts" />

declare global {
    interface Window {
        layui: Layui;
        lay: Layui.Lay;
        layer: Layui.Layer;
    }
}

export = layui;
