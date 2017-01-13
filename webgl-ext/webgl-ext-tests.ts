

var canvas = document.createElement("canvas");
var gl = canvas.getContext("webgl");
var ext: any;
var t: any;

if (ext = gl.getExtension("ANGLE_instanced_arrays")) {
	t = ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE;
}

if (ext = gl.getExtension("EXT_blend_minmax")) {
	t = ext.MIN_EXT;
}

if (ext = gl.getExtension("EXT_color_buffer_half_float")) {
	t = ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT;
}

if (ext = gl.getExtension("EXT_frag_depth")) {
	// no fields
}

if (ext = gl.getExtension("EXT_sRGB")) {
	t = ext.SRGB8_ALPHA8_EXT;
}

if (ext = gl.getExtension("EXT_shader_texture_lod")) {
	// no fields
}

if (ext = gl.getExtension("EXT_texture_filter_anisotropic")) {
	t = ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT;
}

if (ext = gl.getExtension("OES_element_index_uint")) {
	// no fields
}

if (ext = gl.getExtension("OES_standard_derivatives")) {
	t = ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES;
}

if (ext = gl.getExtension("OES_texture_float")) {
	// no fields
}

if (ext = gl.getExtension("OES_texture_float_linear")) {
	// no fields
}

if (ext = gl.getExtension("OES_texture_half_float")) {
	t = ext.HALF_FLOAT_OES;
}

if (ext = gl.getExtension("OES_texture_half_float_linear")) {
	// no fields
}

if (ext = gl.getExtension("OES_vertex_array_object")) {
	t = ext.createVertexArrayOES;  // just get fn ref, don't call
}

if (ext = gl.getExtension("WEBGL_color_buffer_float")) {
	t = ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT;
}

if (ext = gl.getExtension("WEBGL_compressed_texture_atc")) {
	t = ext.COMPRESSED_RGB_ATC_WEBGL;
}

if (ext = gl.getExtension("WEBGL_compressed_texture_etc1")) {
	t = ext.COMPRESSED_RGB_ETC1_WEBGL;
}

if (ext = gl.getExtension("WEBGL_compressed_texture_pvrtc")) {
	t = ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
}

if (ext = gl.getExtension("WEBGL_compressed_texture_s3tc")) {
	t = ext.COMPRESSED_RGBA_S3TC_DXT5_EXT;
}

if (ext = gl.getExtension("WEBGL_debug_renderer_info")) {
	t = ext.UNMASKED_VENDOR_WEBGL;
}

if (ext = gl.getExtension("WEBGL_debug_shaders")) {
	t = ext.getTranslatedShaderSource; // just get fn ref, don't call
}

if (ext = gl.getExtension("WEBGL_depth_texture")) {
	t = ext.UNSIGNED_INT_24_8_WEBGL;
}

if (ext = gl.getExtension("WEBGL_draw_buffers")) {
	t = ext.MAX_COLOR_ATTACHMENTS_WEBGL;
}

if (ext = gl.getExtension("WEBGL_lose_context")) {
	t = ext.loseContext; // just get fn ref, don't call
}
