import texture2D = require('gl-texture2d');
import glFBO from 'gl-fbo';

type Texture = ReturnType<typeof texture2D>;

const gl = new WebGLRenderingContext();

glFBO(gl, [12, 34]);
glFBO(gl, [12, 34], {preferFloat: true});
glFBO(gl, [12, 34], {float: false});
glFBO(gl, [12, 34], {color: 2});
glFBO(gl, [12, 34], {depth: false});
glFBO(gl, [12, 34], {stencil: false});

const fbo = glFBO(gl, [12, 34]);
fbo.bind();
fbo.dispose();

// $ExpectType [number, number]
fbo.shape;

// $ExpectType WebGLRenderingContext
fbo.gl;

// $ExpectType WebGLFramebuffer
fbo.handle;

// $ExpectType Texture[]
fbo.color;

// $ExpectType Texture | null
fbo.depth;
