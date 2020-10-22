

var canvas = document.createElement("canvas");
var gl = canvas.getContext("webgl");
var ext: any;
var t: any;

if (ext = gl.getExtension("EXT_color_buffer_half_float")) {
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
