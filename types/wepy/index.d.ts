import app from "./app";
import base from "./base";
import component from "./component";
import event from "./event";
import mixin from "./mixin";
import page from "./page";
import util from "./util";
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
