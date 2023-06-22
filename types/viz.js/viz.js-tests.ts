import Viz = require('viz.js');
import { Module, render } from 'viz.js/full.render.js';

// Correct usage
const viz = new Viz({ Module, render });
let promise: Promise<string>;
promise = viz.renderString("graph a { b }", { format: "svg" });
promise = viz.renderString("digraph a { b }");

// This won't necessarily work, but shouldn't violate typing rules
new Viz({Module, render: (instance: Module, src: string, options: Options) => "string"});
new Viz({Module, render: (instance: Module, src: string, options: {format?: string | undefined}) => "string"});
new Viz({Module, render: (instance: Module, src: string, options: {format?: string | undefined, garbage?: number | undefined}) => "string"});
viz.renderString("string", {files: []});
viz.renderString("string", {images: ["totally a file"]});
viz.renderString("string", {format: "svg", engine: "fdp", files: ["test"], images: ["totally an image"], yInvert: false});

// $ExpectType Promise<SVGSVGElement>
viz.renderSVGElement("string");

// $ExpectType Promise<HTMLImageElement>
viz.renderImageElement("string");

// $ExpectType Promise<object>
viz.renderJSONObject("string");

// Incorrect
// @ts-expect-error
new Viz({Module: 1, render});
// @ts-expect-error
new Viz({Module: {}, render});
// @ts-expect-error
new Viz({Module, render: (instance: Module, src: string, options: Options) => 1});
// @ts-expect-error
new Viz({Module, render: (instance: string, src: string, options: Options) => "hello"});
// @ts-expect-error
new Viz({Module, render: (instance: Module, src: number, options: Options) => "string"});
// @ts-expect-error
new Viz({Module, render: (instance: Module, src: string, options: {format: string}) => "string"});
// @ts-expect-error
viz.renderString(1, {});
// @ts-expect-error
viz.renderString("string", { a: 1 });
// @ts-expect-error
viz.renderString("string", { yInvert: "true" });
// @ts-expect-error
viz.renderString("string", { engine: 1});
