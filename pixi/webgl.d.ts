// Type definitions for WebGL
// Project: https://www.khronos.org/webgl/
// Definitions by: xperiments <http://github.com/xperiments/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface WebGLObject {
	$__dummyprop__WebGLObject : any;
}

interface WebGLBuffer extends WebGLObject {
	$__dummyprop__WebGLBuffer : any;
}

interface WebGLFramebuffer extends WebGLObject {
	$__dummyprop__WebGLFramebuffer : any;
}

interface WebGLProgram extends WebGLObject {
	$__dummyprop__WebGLProgram : any;
}

interface WebGLRenderbuffer extends WebGLObject {
	$__dummyprop__WebGLRenderbuffer : any;
}

interface WebGLShader extends WebGLObject {
	$__dummyprop__WebGLShader : any;
}

interface WebGLTexture extends WebGLObject {
	$__dummyprop__WebGLTexture : any;
}

interface WebGLUniformLocation {
	$__dummyprop__WebGLUniformLocation : any;
}

interface WebGLRenderingContext {
	NUM_COMPRESSED_TEXTURE_FORMATS : number;
	ACTIVE_UNIFORM_MAX_LENGTH : number;
	INFO_LOG_LENGTH : number;
	SHADER_SOURCE_LENGTH : number;
	getContextAttributes() : WebGLContextAttributes;
	isContextLost() : boolean;
	getSupportedExtensions() : string[];
	getExtension(name : string) : any;
	activeTexture(texture : number) : void;
	attachShader(program : WebGLProgram, shader : WebGLShader) : void;
	bindAttribLocation(program : WebGLProgram, index : number, name : string) : void;
	bindBuffer(target : number, buffer : WebGLBuffer) : void;
	bindFramebuffer(target : number, framebuffer : WebGLFramebuffer) : void;
	bindRenderbuffer(target : number, renderbuffer : WebGLRenderbuffer) : void;
	bindTexture(target : number, texture : WebGLTexture) : void;
	blendColor(red : number, green : number, blue : number, alpha : number) : void;
	blendEquation(mode : number) : void;
	blendEquationSeparate(modeRGB : number, modeAlpha : number) : void;
	blendFunc(sfactor : number, dfactor : number) : void;
	blendFuncSeparate(srcRGB : number, dstRGB : number, srcAlpha : number, dstAlpha : number) : void;
	bufferData(target : number, size : number, usage : number) : void;
	bufferData(target : number, data : ArrayBufferView, usage : number) : void;
	bufferData(target : number, data : ArrayBuffer, usage : number) : void;
	bufferSubData(target : number, offset : number, data : ArrayBufferView) : void;
	bufferSubData(target : number, offset : number, data : ArrayBuffer) : void;
	checkFramebufferStatus(target : number) : number;
	clear(mask : number) : void;
	clearColor(red : number, green : number, blue : number, alpha : number) : void;
	clearDepth(depth : number) : void;
	clearStencil(s : number) : void;
	colorMask(red : boolean, green : boolean, blue : boolean, alpha : boolean) : void;
	compileShader(shader : WebGLShader) : void;
	copyTexImage2D(target : number, level : number, internalformat : number, x : number, y : number, width : number, height : number, border : number) : void;
	copyTexSubImage2D(target : number, level : number, xoffset : number, yoffset : number, x : number, y : number, width : number, height : number) : void;
	createBuffer() : WebGLBuffer;
	createFramebuffer() : WebGLFramebuffer;
	createProgram() : WebGLProgram;
	createRenderbuffer() : WebGLRenderbuffer;
	createShader(type : number) : WebGLShader;
	createTexture() : WebGLTexture;
	cullFace(mode : number) : void;
	deleteBuffer(buffer : WebGLBuffer) : void;
	deleteFramebuffer(framebuffer : WebGLFramebuffer) : void;
	deleteProgram(program : WebGLProgram) : void;
	deleteRenderbuffer(renderbuffer : WebGLRenderbuffer) : void;
	deleteShader(shader : WebGLShader) : void;
	deleteTexture(texture : WebGLTexture) : void;
	depthFunc(func : number) : void;
	depthMask(flag : boolean) : void;
	depthRange(zNear : number, zFar : number) : void;
	detachShader(program : WebGLProgram, shader : WebGLShader) : void;
	disable(cap : number) : void;
	disableVertexAttribArray(index : number) : void;
	drawArrays(mode : number, first : number, count : number) : void;
	drawElements(mode : number, count : number, type : number, offset : number) : void;
	enable(cap : number) : void;
	enableVertexAttribArray(index : number) : void;
	finish() : void;
	flush() : void;
	framebufferRenderbuffer(target : number, attachment : number, renderbuffertarget : number, renderbuffer : WebGLRenderbuffer) : void;
	framebufferTexture2D(target : number, attachment : number, textarget : number, texture : WebGLTexture, level : number) : void;
	frontFace(mode : number) : void;
	generateMipmap(target : number) : void;
	getActiveAttrib(program : WebGLProgram, index : number) : WebGLActiveInfo;
	getActiveUniform(program : WebGLProgram, index : number) : WebGLActiveInfo;
	getAttachedShaders(program : WebGLProgram) : WebGLShader[];
	getAttribLocation(program : WebGLProgram, name : string) : number;
	getParameter(pname : number) : any;
	getBufferParameter(target : number, pname : number) : any;
	getError() : number;
	getFramebufferAttachmentParameter(target : number, attachment : number, pname : number) : any;
	getProgramParameter(program : WebGLProgram, pname : number) : any;
	getProgramInfoLog(program : WebGLProgram) : string;
	getRenderbufferParameter(target : number, pname : number) : any;
	getShaderParameter(shader : WebGLShader, pname : number) : any;
	getShaderInfoLog(shader : WebGLShader) : string;
	getShaderSource(shader : WebGLShader) : string;
	getTexParameter(target : number, pname : number) : any;
	getUniform(program : WebGLProgram, location : WebGLUniformLocation) : any;
	getUniformLocation(program : WebGLProgram, name : string) : WebGLUniformLocation;
	getVertexAttrib(index : number, pname : number) : any;
	getVertexAttribOffset(index : number, pname : number) : number;
	hint(target : number, mode : number) : void;
	isBuffer(buffer : WebGLBuffer) : boolean;
	isEnabled(cap : number) : boolean;
	isFramebuffer(framebuffer : WebGLFramebuffer) : boolean;
	isProgram(program : WebGLProgram) : boolean;
	isRenderbuffer(renderbuffer : WebGLRenderbuffer) : boolean;
	isShader(shader : WebGLShader) : boolean;
	isTexture(texture : WebGLTexture) : boolean;
	lineWidth(width : number) : void;
	linkProgram(program : WebGLProgram) : void;
	pixelStorei(pname : number, param : number) : void;
	polygonOffset(factor : number, units : number) : void;
	readPixels(x : number, y : number, width : number, height : number, format : number, type : number, pixels : ArrayBufferView) : void;
	renderbufferStorage(target : number, internalformat : number, width : number, height : number) : void;
	sampleCoverage(value : number, invert : boolean) : void;
	scissor(x : number, y : number, width : number, height : number) : void;
	shaderSource(shader : WebGLShader, source : string) : void;
	stencilFunc(func : number, ref : number, mask : number) : void;
	stencilFuncSeparate(face : number, func : number, ref : number, mask : number) : void;
	stencilMask(mask : number) : void;
	stencilMaskSeparate(face : number, mask : number) : void;
	stencilOp(fail : number, zfail : number, zpass : number) : void;
	stencilOpSeparate(face : number, fail : number, zfail : number, zpass : number) : void;
	texImage2D(target : number, level : number, internalformat : number, width : number, height : number, border : number, format : number, type : number, pixels : ArrayBufferView) : void;
	texImage2D(target : number, level : number, internalformat : number, format : number, type : number, pixels : ImageData) : void;
	texImage2D(target : number, level : number, internalformat : number, format : number, type : number, image : HTMLImageElement) : void;
	texImage2D(target : number, level : number, internalformat : number, format : number, type : number, canvas : HTMLCanvasElement) : void;
	texImage2D(target : number, level : number, internalformat : number, format : number, type : number, video : HTMLVideoElement) : void;
	texParameterf(target : number, pname : number, param : number) : void;
	texParameteri(target : number, pname : number, param : number) : void;
	texSubImage2D(target : number, level : number, xoffset : number, yoffset : number, width : number, height : number, format : number, type : number, pixels : ArrayBufferView) : void;
	texSubImage2D(target : number, level : number, xoffset : number, yoffset : number, format : number, type : number, pixels : ImageData) : void;
	texSubImage2D(target : number, level : number, xoffset : number, yoffset : number, format : number, type : number, image : HTMLImageElement) : void;
	texSubImage2D(target : number, level : number, xoffset : number, yoffset : number, format : number, type : number, canvas : HTMLCanvasElement) : void;
	texSubImage2D(target : number, level : number, xoffset : number, yoffset : number, format : number, type : number, video : HTMLVideoElement) : void;
	uniform1f(location : WebGLUniformLocation, x : number) : void;
	uniform1fv(location : WebGLUniformLocation, v : Float32Array) : void;
	uniform1fv(location : WebGLUniformLocation, v : number[]) : void;
	uniform1i(location : WebGLUniformLocation, x : number) : void;
	uniform1iv(location : WebGLUniformLocation, v : Int32Array) : void;
	uniform1iv(location : WebGLUniformLocation, v : number[]) : void;
	uniform2f(location : WebGLUniformLocation, x : number, y : number) : void;
	uniform2fv(location : WebGLUniformLocation, v : Float32Array) : void;
	uniform2fv(location : WebGLUniformLocation, v : number[]) : void;
	uniform2i(location : WebGLUniformLocation, x : number, y : number) : void;
	uniform2iv(location : WebGLUniformLocation, v : Int32Array) : void;
	uniform2iv(location : WebGLUniformLocation, v : number[]) : void;
	uniform3f(location : WebGLUniformLocation, x : number, y : number, z : number) : void;
	uniform3fv(location : WebGLUniformLocation, v : Float32Array) : void;
	uniform3fv(location : WebGLUniformLocation, v : number[]) : void;
	uniform3i(location : WebGLUniformLocation, x : number, y : number, z : number) : void;
	uniform3iv(location : WebGLUniformLocation, v : Int32Array) : void;
	uniform3iv(location : WebGLUniformLocation, v : number[]) : void;
	uniform4f(location : WebGLUniformLocation, x : number, y : number, z : number, w : number) : void;
	uniform4fv(location : WebGLUniformLocation, v : Float32Array) : void;
	uniform4fv(location : WebGLUniformLocation, v : number[]) : void;
	uniform4i(location : WebGLUniformLocation, x : number, y : number, z : number, w : number) : void;
	uniform4iv(location : WebGLUniformLocation, v : Int32Array) : void;
	uniform4iv(location : WebGLUniformLocation, v : number[]) : void;
	uniformMatrix2fv(location : WebGLUniformLocation, transpose : boolean, value : Float32Array) : void;
	uniformMatrix2fv(location : WebGLUniformLocation, transpose : boolean, value : number[]) : void;
	uniformMatrix3fv(location : WebGLUniformLocation, transpose : boolean, value : Float32Array) : void;
	uniformMatrix3fv(location : WebGLUniformLocation, transpose : boolean, value : number[]) : void;
	uniformMatrix4fv(location : WebGLUniformLocation, transpose : boolean, value : Float32Array) : void;
	uniformMatrix4fv(location : WebGLUniformLocation, transpose : boolean, value : number[]) : void;
	useProgram(program : WebGLProgram) : void;
	validateProgram(program : WebGLProgram) : void;
	vertexAttrib1f(indx : number, x : number) : void;
	vertexAttrib1fv(indx : number, values : Float32Array) : void;
	vertexAttrib1fv(indx : number, values : number[]) : void;
	vertexAttrib2f(indx : number, x : number, y : number) : void;
	vertexAttrib2fv(indx : number, values : Float32Array) : void;
	vertexAttrib2fv(indx : number, values : number[]) : void;
	vertexAttrib3f(indx : number, x : number, y : number, z : number) : void;
	vertexAttrib3fv(indx : number, values : Float32Array) : void;
	vertexAttrib3fv(indx : number, values : number[]) : void;
	vertexAttrib4f(indx : number, x : number, y : number, z : number, w : number) : void;
	vertexAttrib4fv(indx : number, values : Float32Array) : void;
	vertexAttrib4fv(indx : number, values : number[]) : void;
	vertexAttribPointer(indx : number, size : number, type : number, normalized : boolean, stride : number, offset : number) : void;
	viewport(x : number, y : number, width : number, height : number) : void;
}

interface WebGLContextEvent extends Event {
	initWebGLContextEvent(typeArg : string, canBubbleArg : boolean, cancelableArg : boolean, statusMessageArg : string) : void;
}

//Extend the window object with cross Browser callbacks so TS will not complain 
//Also add the (non-standard) Canvas Element parameter for performance improvement 
interface WindowAnimationTiming {
	requestAnimationFrame(callback: FrameRequestCallback, canvas ?: HTMLCanvasElement): number;
	//msRequestAnimationFrame(callback: FrameRequestCallback, canvas ?: HTMLCanvasElement): number;
	mozRequestAnimationFrame(callback: FrameRequestCallback, canvas ?: HTMLCanvasElement): number;
	webkitRequestAnimationFrame(callback: FrameRequestCallback, canvas ?: HTMLCanvasElement): number;
	oRequestAnimationFrame(callback: FrameRequestCallback, canvas ?: HTMLCanvasElement): number;	 

	cancelRequestAnimationFrame(handle: number): void;
	//msCancelRequestAnimationFrame(handle: number): void;
	mozCancelRequestAnimationFrame(handle: number): void;
	webkitCancelRequestAnimationFrame(handle: number): void;
	oCancelRequestAnimationFrame(handle: number): void;
}

//To make WebGL work 
interface HTMLCanvasElement {
	getContext(contextId: string, params : {}): WebGLRenderingContext;
}
