// Type definitions for Samchon Collection v0.0.2
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
// collection = require("samchon-collection");
// let cont: collection.ArrayCollection<string> = new collection.ArrayCollection<string>();
// </code>
//
// Those declaration of global and require can be substituted by using "node.d.ts"
// ------------------------------------------------------------------------------------

/// <reference path="../samchon-framework/samchon-framework.d.ts" />

declare var collection: typeof samchon.collection;