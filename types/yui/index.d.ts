// Type definitions for yui 3.14.0
// Project: https://github.com/yui/yui3
// Definitions by: Gia Bảo @ Sân Đình <https://github.com/giabao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="yui-test.d.ts" />

interface YUI {
    Test: YUITest.YUITestStatic
    Assert: YUITest.IAssert

    add(name: string, fn: (Y: YUI, name: string) => any, version: string, details?: Y.IConfig): YUI;

    mix(receiver: Function, supplier: Function, overwrite?: boolean, whitelist?: string[], mode?: number, merge?: boolean): any//Function|Object|YUI
    mix(receiver: Object, supplier: Function, overwrite?: boolean, whitelist?: string[], mode?: number, merge?: boolean): any//Function|Object|YUI
    mix(receiver: Function, supplier: Object, overwrite?: boolean, whitelist?: string[], mode?: number, merge?: boolean): any//Function|Object|YUI
    mix(receiver: Object, supplier: Object, overwrite?: boolean, whitelist?: string[], mode?: number, merge?: boolean): any//Function|Object|YUI
}

declare namespace Y{
    interface IConfig{
        requires: string[]
        optional: string[]
        use: string[]
    }
}

declare var Y: YUI;
declare var YUI: YUI;
