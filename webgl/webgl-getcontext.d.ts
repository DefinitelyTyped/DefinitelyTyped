// Type definitions for WebGL
// Project: http://webgl.org/
// Definitions by: Shane S. Anderson <https://github.com/ander-nz/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped/webgl

// These definitions update the getContext() overloads to support context attributes and "webgl" without "experimental-" prefix.
// It also adds overloads for "webgl2" and "experimental-webgl2", but it only defines a stub interface for WebGL2RenderingContext.

interface HTMLCanvasElement {
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
  getContext(contextId: "2d", attributes?: CanvasContextAttributes): CanvasRenderingContext2D;
  getContext(contextId: "experimental-webgl", attributes?: WebGLContextAttributes): WebGLRenderingContext;
  getContext(contextId: "webgl", attributes?: WebGLContextAttributes): WebGLRenderingContext;
  getContext(contextId: "experimental-webgl2", attributes?: WebGLContextAttributes): WebGL2RenderingContext;
  getContext(contextId: "webgl2", attributes?: WebGLContextAttributes): WebGL2RenderingContext;
  getContext(contextId: string, ...args: any[]): CanvasRenderingContext2D | WebGLRenderingContext | WebGL2RenderingContext;
}

interface CanvasContextAttributes {
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
  alpha?: boolean;
}

interface WebGLContextAttributes {
  // https://www.khronos.org/registry/webgl/specs/latest/1.0/index.html#WEBGLCONTEXTATTRIBUTES
  preferLowPowerToHighPerformance?: boolean;
  failIfMajorPerformanceCaveat?: boolean;
}

interface WebGL2RenderingContext {
  // Defined in a separate definition file.
}
