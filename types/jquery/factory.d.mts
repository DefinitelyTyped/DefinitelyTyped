/// <reference path="index.d.ts" />

// jQuery factory for environments without a window
// Usage: import { jQueryFactory } from "jquery/factory";
//        const $ = jQueryFactory(window);

export declare function jQueryFactory(window: Window): JQueryStatic;
