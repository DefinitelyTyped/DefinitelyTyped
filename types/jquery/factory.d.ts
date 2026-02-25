/// <reference path="index.d.ts" />

// jQuery factory for environments without a window (CommonJS)
// Usage: const { jQueryFactory } = require("jquery/factory");
//        const $ = jQueryFactory(window);

export declare function jQueryFactory(window: Window): JQueryStatic;
