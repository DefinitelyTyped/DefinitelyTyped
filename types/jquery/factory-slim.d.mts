/// <reference path="index.d.ts" />

// jQuery slim factory for environments without a window
// Usage: import { jQueryFactory } from "jquery/factory-slim";
//        const $ = jQueryFactory(window);

export declare function jQueryFactory(window: Window): JQueryStatic;
