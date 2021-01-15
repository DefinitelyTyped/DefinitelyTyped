import Viz = require('viz.js');
import { Module, render } from 'viz.js/full.render.js';

// Correct usage
const viz = new Viz({ Module, render });
let promise: Promise<string>;
promise = viz.renderString("graph a { b }", { format: "svg" });
promise = viz.renderString("digraph a { b }");

// This won't necessarily work, but shouldn't violate typing rules
new Viz({Module, render: (instance: Module, src: string, options: Options) => "string"});
new Viz({Module, render: (instance: Module, src: string, options: {format?: string}) => "string"});
new Viz({Module, render: (instance: Module, src: string, options: {format?: string, garbage?: number}) => "string"});
viz.renderString("string", {files: []});
viz.renderString("string", {images: ["totally a file"]});
viz.renderString("string", {format: "svg", engine: "fdp", files: ["test"], images: ["totally an image"], yInvert: false});

// Incorrect
new Viz({Module: 1, render}); // $ExpectError
new Viz({Module: {}, render}); // $ExpectError
new Viz({Module, render: (instance: Module, src: string, options: Options) => 1}); // $ExpectError
new Viz({Module, render: (instance: string, src: string, options: Options) => "hello"}); // $ExpectError
new Viz({Module, render: (instance: Module, src: number, options: Options) => "string"}); // $ExpectError
new Viz({Module, render: (instance: Module, src: string, options: {format: string}) => "string"}); // $ExpectError
viz.renderString(1, {}); // $ExpectError
viz.renderString("string", { a: 1 }); // $ExpectError
viz.renderString("string", { yInvert: "true" }); // $ExpectError
viz.renderString("string", { engine: 1}); // $ExpectError
