// Type definitions for wepy 1.7
// Project: https://github.com/Tencent/wepy#readme
// Definitions by: Jiayu Liu <https://github.com/Jimexist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import component from "./component";
import mixin from "./mixin";
import event from "./event";
import page from "./page";
import app from "./app";
import util from "./util";
import base from "./base";
import { WxEnhances } from "./wx_enhanced";

interface DefaultExport extends WxEnhances {
    event: typeof event;
    app: typeof app;
    component: typeof component;
    page: typeof page;
    mixin: typeof mixin;
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
