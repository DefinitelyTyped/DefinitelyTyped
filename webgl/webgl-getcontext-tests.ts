/// <reference path="webgl-getcontext.d.ts" />
var canvas: HTMLCanvasElement;
var c2d: CanvasRenderingContext2D;
var gl: WebGLRenderingContext;
var gl2: WebGL2RenderingContext;

// Tests for 2d overloads of getContext
c2d = canvas.getContext("2d");
c2d = canvas.getContext("2d", { alpha: true });

// Tests for webgl overloads of getContext
gl = canvas.getContext("experimental-webgl");
gl = canvas.getContext("experimental-webgl", { antialias: true });
gl = canvas.getContext("experimental-webgl", { antialias: true, preferLowPowerToHighPerformance: true });
gl = canvas.getContext("webgl");
gl = canvas.getContext("webgl", { antialias: true });
gl = canvas.getContext("webgl", { antialias: true, preferLowPowerToHighPerformance: true });

// Tests for webgl2 overloads of getContext
gl2 = canvas.getContext("experimental-webgl2");
gl2 = canvas.getContext("experimental-webgl2", { antialias: true });
gl2 = canvas.getContext("experimental-webgl2", { antialias: true, preferLowPowerToHighPerformance: true });
gl2 = canvas.getContext("webgl2");
gl2 = canvas.getContext("webgl2", { antialias: true });
gl2 = canvas.getContext("webgl2", { antialias: true, preferLowPowerToHighPerformance: true });

// Brand WebGL2RenderingContext to ensure type-checking.
// This is because webgl-getcontext.d.ts only defines it as an empty stub interface
interface WebGL2RenderingContext { __WebGL2RenderingContext: void; }
