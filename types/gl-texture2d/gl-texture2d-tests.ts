import texture2d = require("gl-texture2d");
import ndarray = require("ndarray");

const gl = new WebGLRenderingContext();
const canvas = new HTMLCanvasElement();
const video = new HTMLVideoElement();
const image = new HTMLImageElement();
const imageData = new ImageData(1, 1);

// tslint:disable-next-line: no-unnecessary-generics
declare function rawType<T>(): {width: number, height: number, raw: T};

texture2d(gl, canvas);
texture2d(gl, canvas, gl.RGBA);
texture2d(gl, canvas, gl.RGBA,  gl.UNSIGNED_BYTE);

texture2d(gl, video);
texture2d(gl, video, gl.RGBA);
texture2d(gl, video, gl.RGBA,  gl.UNSIGNED_BYTE);

texture2d(gl, image);
texture2d(gl, image, gl.RGBA);
texture2d(gl, image, gl.RGBA,  gl.UNSIGNED_BYTE);

texture2d(gl, imageData);
texture2d(gl, imageData, gl.RGBA);
texture2d(gl, imageData, gl.RGBA,  gl.UNSIGNED_BYTE);

texture2d(gl, [1, 1]);
texture2d(gl, [1, 1], gl.RGBA);
texture2d(gl, [1, 1], gl.RGBA,  gl.UNSIGNED_BYTE);

texture2d(gl, rawType<ImageData>());
texture2d(gl, rawType<ImageData>(), gl.RGBA);
texture2d(gl, rawType<ImageData>(), gl.RGBA,  gl.UNSIGNED_BYTE);

texture2d(gl, rawType<ArrayBufferView>());
texture2d(gl, rawType<ArrayBufferView>(), gl.RGBA);
texture2d(gl, rawType<ArrayBufferView>(), gl.RGBA,  gl.UNSIGNED_BYTE);

texture2d(gl, rawType<HTMLCanvasElement>());
texture2d(gl, rawType<HTMLCanvasElement>(), gl.RGBA);
texture2d(gl, rawType<HTMLCanvasElement>(), gl.RGBA,  gl.UNSIGNED_BYTE);

texture2d(gl, rawType<HTMLImageElement>());
texture2d(gl, rawType<HTMLImageElement>(), gl.RGBA);
texture2d(gl, rawType<HTMLImageElement>(), gl.RGBA,  gl.UNSIGNED_BYTE);

texture2d(gl, rawType<HTMLVideoElement>());
texture2d(gl, rawType<HTMLVideoElement>(), gl.RGBA);
texture2d(gl, rawType<HTMLVideoElement>(), gl.RGBA,  gl.UNSIGNED_BYTE);

texture2d(gl, ndarray([1, 2, 3]));

const texture = texture2d(gl, canvas);

texture.dispose();
texture.generateMipmap();

texture.bind();
texture.bind(1);

texture.setPixels(canvas);
texture.setPixels(video);
texture.setPixels(image);
texture.setPixels(imageData);
texture.setPixels(ndarray([1, 2, 3]));
texture.setPixels(canvas, [1, 1]);
texture.setPixels(canvas, [1, 1], 0);

texture.magFilter = 1;
texture.minFilter = 1;
texture.mipSamples = 1;

texture.shape = [1, 1];
texture.wrap = [gl.REPEAT, gl.REPEAT];

 // $ExpectType WebGLRenderingContext
texture.gl;

// $ExpectType WebGLTexture
texture.handle;

// $ExpectType number
texture.format;

// $ExpectType number
texture.type;
