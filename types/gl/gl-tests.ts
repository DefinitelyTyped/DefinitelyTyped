import createContext = require("gl");

const gl = createContext(0, 0); gl; // $ExpectType WebGLRenderingContext
const resizeDrawingbuffer = gl.getExtension("STACKGL_resize_drawingbuffer"); resizeDrawingbuffer; // $ExpectType STACKGL_resize_drawingbuffer | null
const destroyContext = gl.getExtension("STACKGL_destroy_context"); destroyContext; // $ExpectType STACKGL_destroy_context | null
createContext(0, 0, { preserveDrawingBuffer: true }); // $ExpectType WebGLRenderingContext
createContext(0, 0, { preserveDrawingBuffer: 0 }); // $ExpectError
resizeDrawingbuffer!.resize(0, 0); // $ExpectType void
resizeDrawingbuffer!.resize(0, ""); // $ExpectError
destroyContext!.destroy(); // $ExpectType void
destroyContext!.somethingElse(); // $ExpectError
