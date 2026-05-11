/// <reference path="index.d.ts" />

// jQuery slim factory for environments without a window (CommonJS)
// Usage: const { jQueryFactory } = require("jquery/factory-slim");
//        const $ = jQueryFactory(window);

export declare function jQueryFactory(window: Window): JQueryStatic;
