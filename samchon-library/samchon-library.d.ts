// Type definitions for Samchon Library v0.0.2
// Project: https://github.com/samchon/framework
// Definitions by: Jeongho Nam <http://samchon.org>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// ------------------------------------------------------------------------------------
// In Samchon Collection, merging multiple 'ts' files to a module is not possible yet.
// Instead of using "import" instruction, use such trick: 
//
// <code>
// declare var global: any;
// declare var require: Function;
//
// library = require("samchon-library");
// let xml: library.XML = new library.XML();
// </code>
//
// Those declaration of global and require can be substituted by using "node.d.ts"
// ------------------------------------------------------------------------------------

/// <reference path="../samchon-framework/samchon-framework.d.ts" />

declare var library: typeof samchon.library;