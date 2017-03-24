// Type definitions for WebGL Extensions
// Project: http://webgl.org/
// Definitions by: Arthur Langereis <https://github.com/zenmumbler/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/webgl-ext

// These definitions go beyond those already defined in TS 1.6.2 stdlib
// All non-draft WebGL 1.0 extensions and prefixed extension names are
// covered.

interface HTMLCanvasElement {
	getContext(contextId: "webgl"): WebGLRenderingContext;
}

interface WebGLRenderingContext {
	getExtension(name: "ANGLE_instanced_arrays"): ANGLEInstancedArrays;

	getExtension(name: "EXT_blend_minmax"): EXTBlendMinMax;
	getExtension(name: "EXT_color_buffer_half_float"): EXTColorBufferHalfFloat;
	getExtension(name: "EXT_frag_depth"): EXTFragDepth;
	getExtension(name: "EXT_sRGB"): EXTsRGB;
	getExtension(name: "EXT_shader_texture_lod"): EXTShaderTextureLOD;
	getExtension(name: "EXT_texture_filter_anisotropic"): EXTTextureFilterAnisotropic;

	getExtension(name: "OES_element_index_uint"): OESElementIndexUint;
	getExtension(name: "OES_standard_derivatives"): OESStandardDerivatives;
	getExtension(name: "OES_texture_float"): OESTextureFloat;
	getExtension(name: "OES_texture_float_linear"): OESTextureFloatLinear;
	getExtension(name: "OES_texture_half_float"): OESTextureHalfFloat;
	getExtension(name: "OES_texture_half_float_linear"): OESTextureHalfFloatLinear;
	getExtension(name: "OES_vertex_array_object"): OESVertexArrayObject;

	getExtension(name: "WEBGL_color_buffer_float"): WebGLColorBufferFloat;
	getExtension(name: "WEBGL_compressed_texture_atc"): WebGLCompressedTextureATC;
	getExtension(name: "WEBGL_compressed_texture_etc1"): WebGLCompressedTextureETC1;
	getExtension(name: "WEBGL_compressed_texture_pvrtc"): WebGLCompressedTexturePVRTC;
	getExtension(name: "WEBGL_compressed_texture_s3tc"): WebGLCompressedTextureS3TC;
	getExtension(name: "WEBGL_debug_renderer_info"): WebGLDebugRendererInfo;
	getExtension(name: "WEBGL_debug_shaders"): WebGLDebugShaders;
	getExtension(name: "WEBGL_depth_texture"): WebGLDepthTexture;
	getExtension(name: "WEBGL_draw_buffers"): WebGLDrawBuffers;
	getExtension(name: "WEBGL_lose_context"): WebGLLoseContext;

	// Prefixed versions appearing in the wild as per September 2015

	getExtension(name: "WEBKIT_EXT_texture_filter_anisotropic"): EXTTextureFilterAnisotropic;
	getExtension(name: "WEBKIT_WEBGL_compressed_texture_atc"): WebGLCompressedTextureATC;
	getExtension(name: "WEBKIT_WEBGL_compressed_texture_pvrtc"): WebGLCompressedTexturePVRTC;
	getExtension(name: "WEBKIT_WEBGL_compressed_texture_s3tc"): WebGLCompressedTextureS3TC;
	getExtension(name: "WEBKIT_WEBGL_depth_texture"): WebGLDepthTexture;
	getExtension(name: "WEBKIT_WEBGL_lose_context"): WebGLLoseContext;

	getExtension(name: "MOZ_WEBGL_compressed_texture_s3tc"): WebGLCompressedTextureS3TC;
	getExtension(name: "MOZ_WEBGL_depth_texture"): WebGLDepthTexture;
	getExtension(name: "MOZ_WEBGL_lose_context"): WebGLLoseContext;
}

interface ANGLEInstancedArrays {
	VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: number;

	drawArraysInstancedANGLE(mode: number, first: number, count: number, primcount: number): void;
	drawElementsInstancedANGLE(mode: number, count: number, type: number, offset: number, primcount: number): void;
	vertexAttribDivisorANGLE(index: number, divisor: number): void;
}

interface EXTBlendMinMax {
	MIN_EXT: number;
	MAX_EXT: number;
}

interface EXTColorBufferHalfFloat {
	RGBA16F_EXT: number;
	RGB16F_EXT: number;
	FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: number;
	UNSIGNED_NORMALIZED_EXT: number;
}

interface EXTFragDepth {
}

interface EXTsRGB {
	SRGB_EXT: number;
	SRGB_ALPHA_EXT: number;
	SRGB8_ALPHA8_EXT: number;
	FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: number;
}

interface EXTShaderTextureLOD {
}

interface EXTTextureFilterAnisotropic {
	TEXTURE_MAX_ANISOTROPY_EXT: number;
	MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
}

interface OESElementIndexUint {
}

interface OESStandardDerivatives {
	FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;
}

interface OESTextureFloat {
}

interface OESTextureFloatLinear {
}

interface OESTextureHalfFloat {
	HALF_FLOAT_OES: number;
}

interface OESTextureHalfFloatLinear {
}

interface WebGLVertexArrayObjectOES extends WebGLObject {
}

interface OESVertexArrayObject {
	VERTEX_ARRAY_BINDING_OES: number;

	createVertexArrayOES(): WebGLVertexArrayObjectOES | null;
	deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
	isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): boolean;
	bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
}

interface WebGLColorBufferFloat {
	RGBA32F_EXT: number;
	FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: number;
	UNSIGNED_NORMALIZED_EXT: number;
}

interface WebGLCompressedTextureATC {
	COMPRESSED_RGB_ATC_WEBGL: number;
	COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: number;
	COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: number;
}

interface WebGLCompressedTextureETC1 {
	COMPRESSED_RGB_ETC1_WEBGL: number;
}

interface WebGLCompressedTexturePVRTC {
	COMPRESSED_RGB_PVRTC_4BPPV1_IMG: number;
	COMPRESSED_RGB_PVRTC_2BPPV1_IMG: number;
	COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: number;
	COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: number;
}

interface WebGLCompressedTextureS3TC {
	COMPRESSED_RGB_S3TC_DXT1_EXT: number;
	COMPRESSED_RGBA_S3TC_DXT1_EXT: number;
	COMPRESSED_RGBA_S3TC_DXT3_EXT: number;
	COMPRESSED_RGBA_S3TC_DXT5_EXT: number;
}

interface WebGLDebugRendererInfo {
	UNMASKED_VENDOR_WEBGL: number;
	UNMASKED_RENDERER_WEBGL: number;
}

interface WebGLDebugShaders {
	getTranslatedShaderSource(shader: WebGLShader): string;
}

interface WebGLDepthTexture {
	UNSIGNED_INT_24_8_WEBGL: number;
}

interface WebGLDrawBuffers {
	COLOR_ATTACHMENT0_WEBGL: number;
	COLOR_ATTACHMENT1_WEBGL: number;
	COLOR_ATTACHMENT2_WEBGL: number;
	COLOR_ATTACHMENT3_WEBGL: number;
	COLOR_ATTACHMENT4_WEBGL: number;
	COLOR_ATTACHMENT5_WEBGL: number;
	COLOR_ATTACHMENT6_WEBGL: number;
	COLOR_ATTACHMENT7_WEBGL: number;
	COLOR_ATTACHMENT8_WEBGL: number;
	COLOR_ATTACHMENT9_WEBGL: number;
	COLOR_ATTACHMENT10_WEBGL: number;
	COLOR_ATTACHMENT11_WEBGL: number;
	COLOR_ATTACHMENT12_WEBGL: number;
	COLOR_ATTACHMENT13_WEBGL: number;
	COLOR_ATTACHMENT14_WEBGL: number;
	COLOR_ATTACHMENT15_WEBGL: number;

	DRAW_BUFFER0_WEBGL: number;
	DRAW_BUFFER1_WEBGL: number;
	DRAW_BUFFER2_WEBGL: number;
	DRAW_BUFFER3_WEBGL: number;
	DRAW_BUFFER4_WEBGL: number;
	DRAW_BUFFER5_WEBGL: number;
	DRAW_BUFFER6_WEBGL: number;
	DRAW_BUFFER7_WEBGL: number;
	DRAW_BUFFER8_WEBGL: number;
	DRAW_BUFFER9_WEBGL: number;
	DRAW_BUFFER10_WEBGL: number;
	DRAW_BUFFER11_WEBGL: number;
	DRAW_BUFFER12_WEBGL: number;
	DRAW_BUFFER13_WEBGL: number;
	DRAW_BUFFER14_WEBGL: number;
	DRAW_BUFFER15_WEBGL: number;

	MAX_COLOR_ATTACHMENTS_WEBGL: number;
	MAX_DRAW_BUFFERS_WEBGL: number;

	drawBuffersWEBGL(buffers: number[]): void;
}

interface WebGLLoseContext {
	loseContext(): void;
	restoreContext(): void;
}
