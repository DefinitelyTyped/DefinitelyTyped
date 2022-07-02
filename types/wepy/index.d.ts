// Type definitions for wepy 1.7
// Project: https://github.com/Tencent/wepy#readme, https://github.com/wepyjs/wepy
// Definitions by: Jiayu Liu <https://github.com/Jimexist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import component from "./component";
import mixin from "./mixin";
import event from "./event";
import page from "./page";
import app from "./app";
import util from "./util";
import base from "./base";
import { WxEnhances } from "./wx_enhanced";

export as namespace wepy;

export type Event = typeof event;
export type Component = typeof component;
export type App = typeof app;
export type Page = typeof page;
export type Mixin = typeof mixin;

interface DefaultExport extends WxEnhances {
    event: wepy.Event;
    app: wepy.App;
    component: wepy.Component;
    page: wepy.Page;
    mixin: wepy.Mixin;
    $createApp: typeof base.$createApp;
    $createPage: typeof base.$createPage;
    $isEmpty: typeof util.$isEmpty;
    $isEqual: typeof util.$isEqual;
    $isDeepEqual: typeof util.$isDeepEqual;
    $has: typeof util.$has;
    $extend: typeof util.$extend;
    $isPlainObject: typeof util.$isPlainObject;
    $copy: typeof util.$copy;
}

declare const defaultExport: DefaultExport;

export default defaultExport;
