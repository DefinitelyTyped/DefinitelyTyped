/// <reference types="node" />

import amdefine = require("amdefine");

// Create define function
const define = amdefine(module);

// Define with dependencies and factory
define(["dep1", "dep2"], (dep1: any, dep2: any) => {
    return { value: dep1 + dep2 };
});

// Define with just factory
define(() => {
    return { simple: true };
});

// Define with id and dependencies
define("myModule", ["dep"], (dep: any) => {
    return dep;
});

// Define with id, dependencies and value
define("myModule", ["dep"], { value: 42 });

// Define with just id and factory
define("simpleModule", () => ({ ok: true }));

// Test define.amd property
const amd: object = define.amd;

// Test define.require
const req: NodeRequire = define.require;

// Create with explicit requireFn
const define2 = amdefine(module, require);
