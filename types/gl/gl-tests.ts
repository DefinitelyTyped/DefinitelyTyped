import _default = require("gl");

import type { STACKGL_destroy_context, STACKGL_resize_drawingbuffer, StackGLExtension } from "gl";

const createContext = _default;
const WebGLRenderingContext = _default.WebGLRenderingContext;

createContext(0, 0); // $ExpectType WebGLRenderingContext & StackGLExtension
createContext(0, 0, { preserveDrawingBuffer: true }); // $ExpectType WebGLRenderingContext & StackGLExtension
createContext(0, 0).getExtension("STACKGL_resize_drawingbuffer"); // $ExpectType STACKGL_resize_drawingbuffer | null
createContext(0, 0).getExtension("STACKGL_destroy_context"); // $ExpectType STACKGL_destroy_context | null
createContext(0, 0).getExtension("STACKGL_resize_drawingbuffer")!.resize(0, 0); // $ExpectType void
createContext(0, 0).getExtension("STACKGL_destroy_context")!.destroy(); // $ExpectType void
new WebGLRenderingContext(); // $ExpectType WebGLRenderingContext & StackGLExtension
WebGLRenderingContext.prototype; // $ExpectType WebGLRenderingContext & StackGLExtension
