// render-gl1/declarations - WebGL 1 extension definitions (beyond TS lib)
// Extracted from Stardazed - https://github.com/stardazed/stardazed

interface HTMLCanvasElement {
    getContext(
        contextId: "webgl" | "experimental-webgl",
        contextAttributes?: WebGLContextAttributes,
    ): (WebGLRenderingContext & WebGL1Extensions) | null;
}

interface WebGL1Extensions {
    getExtension(name: "EXT_color_buffer_half_float"): EXT_color_buffer_half_float;

    getExtension(name: "WEBGL_compressed_texture_atc"): WEBGL_compressed_texture_atc;
    getExtension(name: "WEBGL_compressed_texture_etc1"): WEBGL_compressed_texture_etc1;
    getExtension(name: "WEBGL_compressed_texture_pvrtc"): WEBKIT_WEBGL_compressed_texture_pvrtc;

    // Prefixed versions appearing in the wild as per February 2018
    getExtension(name: "WEBKIT_EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic; // Chrome
    getExtension(name: "WEBKIT_WEBGL_compressed_texture_atc"): WEBGL_compressed_texture_atc; // Android
    getExtension(name: "WEBKIT_WEBGL_compressed_texture_pvrtc"): WEBKIT_WEBGL_compressed_texture_pvrtc; // Safari iOS
    getExtension(name: "WEBKIT_WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc; // Chrome
    getExtension(name: "WEBKIT_WEBGL_depth_texture"): WEBGL_depth_texture; // Chrome
    getExtension(name: "WEBKIT_WEBGL_lose_context"): WEBGL_lose_context; // Chrome
}

// WebGL 1 Type Branding
interface WebGLObject {
    readonly __WebGLObject: void;
}
interface WebGLBuffer {
    readonly __WebGLBuffer: void;
}
interface WebGLFramebuffer {
    readonly __WebGLFramebuffer: void;
}
interface WebGLProgram {
    readonly __WebGLProgram: void;
}
interface WebGLRenderbuffer {
    readonly __WebGLRenderbuffer: void;
}
interface WebGLShader {
    readonly __WebGLShader: void;
}
interface WebGLTexture {
    readonly __WebGLTexture: void;
}
interface WebGLUniformLocation {
    readonly __WebGLUniformLocation: void;
}
interface WebGLVertexArrayObjectOES extends WebGLObject {
    readonly __WebGLVertexArrayObjectOES: void;
}

interface EXT_frag_depth {
    readonly __EXT_frag_depth: void;
}
interface EXT_shader_texture_lod {
    readonly __EXT_shader_texture_lod: void;
}

interface OES_element_index_uint {
    readonly __OESElementIndexUint: void;
}
interface OES_texture_float {
    readonly __OES_texture_float: void;
}
interface OES_texture_float_linear {
    readonly __OES_texture_float_linear: void;
}
interface OES_texture_half_float_linear {
    readonly __OES_texture_half_float_linear: void;
}

interface OES_vertex_array_object {
    // TS's lib.dom (as of v3.1.3) does not specify the nulls
    createVertexArrayOES(): WebGLVertexArrayObjectOES | null;
    deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): boolean;
    bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
}

interface WEBGL_compressed_texture_atc {
    readonly COMPRESSED_RGB_ATC_WEBGL: number;
    readonly COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: number;
    readonly COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: number;
}

interface WEBKIT_WEBGL_compressed_texture_pvrtc {
    readonly COMPRESSED_RGB_PVRTC_4BPPV1_IMG: number;
    readonly COMPRESSED_RGB_PVRTC_2BPPV1_IMG: number;
    readonly COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: number;
    readonly COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: number;
}
