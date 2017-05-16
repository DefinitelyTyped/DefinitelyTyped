// Type definitions for WebGL
// Project: http://webgl.org/
// Definitions by: Shane S. Anderson <https://github.com/ander-nz/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped/webgl

// This file adds 'branding' to the WebGL types to ensure that accidental assignments aren't made.
// For example, var program: WebGLProgram = gl.createShader(...);

// WebGL types
interface WebGLObject { __WebGLObject: void; }
interface WebGLBuffer { __WebGLBuffer: void; }
interface WebGLFramebuffer { __WebGLFramebuffer: void; }
interface WebGLProgram { __WebGLProgram: void; }
interface WebGLRenderbuffer { __WebGLRenderbuffer: void; }
interface WebGLShader { __WebGLShader: void; }
interface WebGLTexture { __WebGLTexture: void; }
interface WebGLUniformLocation { __WebGLUniformLocation: void; }

// WebGL2 types
interface WebGLQuery { __WebGLQuery: void; }
interface WebGLSampler { __WebGLSampler: void; }
interface WebGLSync { __WebGLSync: void; }
interface WebGLTransformFeedback { __WebGLTransformFeedback: void; }
interface WebGLVertexArrayObject { __WebGLVertexArrayObject: void; }
