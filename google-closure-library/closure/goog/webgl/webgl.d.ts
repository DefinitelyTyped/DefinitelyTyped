declare module goog {
    function require(name: 'goog.webgl'): typeof goog.webgl;
}

declare module goog.webgl {

    /**
     * @const
     * @type {number}
     */
    var DEPTH_BUFFER_BIT: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_BUFFER_BIT: number;

    /**
     * @const
     * @type {number}
     */
    var COLOR_BUFFER_BIT: number;

    /**
     * @const
     * @type {number}
     */
    var POINTS: number;

    /**
     * @const
     * @type {number}
     */
    var LINES: number;

    /**
     * @const
     * @type {number}
     */
    var LINE_LOOP: number;

    /**
     * @const
     * @type {number}
     */
    var LINE_STRIP: number;

    /**
     * @const
     * @type {number}
     */
    var TRIANGLES: number;

    /**
     * @const
     * @type {number}
     */
    var TRIANGLE_STRIP: number;

    /**
     * @const
     * @type {number}
     */
    var TRIANGLE_FAN: number;

    /**
     * @const
     * @type {number}
     */
    var ZERO: number;

    /**
     * @const
     * @type {number}
     */
    var ONE: number;

    /**
     * @const
     * @type {number}
     */
    var SRC_COLOR: number;

    /**
     * @const
     * @type {number}
     */
    var ONE_MINUS_SRC_COLOR: number;

    /**
     * @const
     * @type {number}
     */
    var SRC_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    var ONE_MINUS_SRC_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    var DST_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    var ONE_MINUS_DST_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    var DST_COLOR: number;

    /**
     * @const
     * @type {number}
     */
    var ONE_MINUS_DST_COLOR: number;

    /**
     * @const
     * @type {number}
     */
    var SRC_ALPHA_SATURATE: number;

    /**
     * @const
     * @type {number}
     */
    var FUNC_ADD: number;

    /**
     * @const
     * @type {number}
     */
    var BLEND_EQUATION: number;

    /**
     * Same as BLEND_EQUATION
     * @const
     * @type {number}
     */
    var BLEND_EQUATION_RGB: number;

    /**
     * @const
     * @type {number}
     */
    var BLEND_EQUATION_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    var FUNC_SUBTRACT: number;

    /**
     * @const
     * @type {number}
     */
    var FUNC_REVERSE_SUBTRACT: number;

    /**
     * @const
     * @type {number}
     */
    var BLEND_DST_RGB: number;

    /**
     * @const
     * @type {number}
     */
    var BLEND_SRC_RGB: number;

    /**
     * @const
     * @type {number}
     */
    var BLEND_DST_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    var BLEND_SRC_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    var CONSTANT_COLOR: number;

    /**
     * @const
     * @type {number}
     */
    var ONE_MINUS_CONSTANT_COLOR: number;

    /**
     * @const
     * @type {number}
     */
    var CONSTANT_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    var ONE_MINUS_CONSTANT_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    var BLEND_COLOR: number;

    /**
     * @const
     * @type {number}
     */
    var ARRAY_BUFFER: number;

    /**
     * @const
     * @type {number}
     */
    var ELEMENT_ARRAY_BUFFER: number;

    /**
     * @const
     * @type {number}
     */
    var ARRAY_BUFFER_BINDING: number;

    /**
     * @const
     * @type {number}
     */
    var ELEMENT_ARRAY_BUFFER_BINDING: number;

    /**
     * @const
     * @type {number}
     */
    var STREAM_DRAW: number;

    /**
     * @const
     * @type {number}
     */
    var STATIC_DRAW: number;

    /**
     * @const
     * @type {number}
     */
    var DYNAMIC_DRAW: number;

    /**
     * @const
     * @type {number}
     */
    var BUFFER_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    var BUFFER_USAGE: number;

    /**
     * @const
     * @type {number}
     */
    var CURRENT_VERTEX_ATTRIB: number;

    /**
     * @const
     * @type {number}
     */
    var FRONT: number;

    /**
     * @const
     * @type {number}
     */
    var BACK: number;

    /**
     * @const
     * @type {number}
     */
    var FRONT_AND_BACK: number;

    /**
     * @const
     * @type {number}
     */
    var CULL_FACE: number;

    /**
     * @const
     * @type {number}
     */
    var BLEND: number;

    /**
     * @const
     * @type {number}
     */
    var DITHER: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_TEST: number;

    /**
     * @const
     * @type {number}
     */
    var DEPTH_TEST: number;

    /**
     * @const
     * @type {number}
     */
    var SCISSOR_TEST: number;

    /**
     * @const
     * @type {number}
     */
    var POLYGON_OFFSET_FILL: number;

    /**
     * @const
     * @type {number}
     */
    var SAMPLE_ALPHA_TO_COVERAGE: number;

    /**
     * @const
     * @type {number}
     */
    var SAMPLE_COVERAGE: number;

    /**
     * @const
     * @type {number}
     */
    var NO_ERROR: number;

    /**
     * @const
     * @type {number}
     */
    var INVALID_ENUM: number;

    /**
     * @const
     * @type {number}
     */
    var INVALID_VALUE: number;

    /**
     * @const
     * @type {number}
     */
    var INVALID_OPERATION: number;

    /**
     * @const
     * @type {number}
     */
    var OUT_OF_MEMORY: number;

    /**
     * @const
     * @type {number}
     */
    var CW: number;

    /**
     * @const
     * @type {number}
     */
    var CCW: number;

    /**
     * @const
     * @type {number}
     */
    var LINE_WIDTH: number;

    /**
     * @const
     * @type {number}
     */
    var ALIASED_POINT_SIZE_RANGE: number;

    /**
     * @const
     * @type {number}
     */
    var ALIASED_LINE_WIDTH_RANGE: number;

    /**
     * @const
     * @type {number}
     */
    var CULL_FACE_MODE: number;

    /**
     * @const
     * @type {number}
     */
    var FRONT_FACE: number;

    /**
     * @const
     * @type {number}
     */
    var DEPTH_RANGE: number;

    /**
     * @const
     * @type {number}
     */
    var DEPTH_WRITEMASK: number;

    /**
     * @const
     * @type {number}
     */
    var DEPTH_CLEAR_VALUE: number;

    /**
     * @const
     * @type {number}
     */
    var DEPTH_FUNC: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_CLEAR_VALUE: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_FUNC: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_FAIL: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_PASS_DEPTH_FAIL: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_PASS_DEPTH_PASS: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_REF: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_VALUE_MASK: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_WRITEMASK: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_BACK_FUNC: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_BACK_FAIL: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_BACK_PASS_DEPTH_FAIL: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_BACK_PASS_DEPTH_PASS: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_BACK_REF: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_BACK_VALUE_MASK: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_BACK_WRITEMASK: number;

    /**
     * @const
     * @type {number}
     */
    var VIEWPORT: number;

    /**
     * @const
     * @type {number}
     */
    var SCISSOR_BOX: number;

    /**
     * @const
     * @type {number}
     */
    var COLOR_CLEAR_VALUE: number;

    /**
     * @const
     * @type {number}
     */
    var COLOR_WRITEMASK: number;

    /**
     * @const
     * @type {number}
     */
    var UNPACK_ALIGNMENT: number;

    /**
     * @const
     * @type {number}
     */
    var PACK_ALIGNMENT: number;

    /**
     * @const
     * @type {number}
     */
    var MAX_TEXTURE_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    var MAX_VIEWPORT_DIMS: number;

    /**
     * @const
     * @type {number}
     */
    var SUBPIXEL_BITS: number;

    /**
     * @const
     * @type {number}
     */
    var RED_BITS: number;

    /**
     * @const
     * @type {number}
     */
    var GREEN_BITS: number;

    /**
     * @const
     * @type {number}
     */
    var BLUE_BITS: number;

    /**
     * @const
     * @type {number}
     */
    var ALPHA_BITS: number;

    /**
     * @const
     * @type {number}
     */
    var DEPTH_BITS: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_BITS: number;

    /**
     * @const
     * @type {number}
     */
    var POLYGON_OFFSET_UNITS: number;

    /**
     * @const
     * @type {number}
     */
    var POLYGON_OFFSET_FACTOR: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE_BINDING_2D: number;

    /**
     * @const
     * @type {number}
     */
    var SAMPLE_BUFFERS: number;

    /**
     * @const
     * @type {number}
     */
    var SAMPLES: number;

    /**
     * @const
     * @type {number}
     */
    var SAMPLE_COVERAGE_VALUE: number;

    /**
     * @const
     * @type {number}
     */
    var SAMPLE_COVERAGE_INVERT: number;

    /**
     * @const
     * @type {number}
     */
    var COMPRESSED_TEXTURE_FORMATS: number;

    /**
     * @const
     * @type {number}
     */
    var DONT_CARE: number;

    /**
     * @const
     * @type {number}
     */
    var FASTEST: number;

    /**
     * @const
     * @type {number}
     */
    var NICEST: number;

    /**
     * @const
     * @type {number}
     */
    var GENERATE_MIPMAP_HINT: number;

    /**
     * @const
     * @type {number}
     */
    var BYTE: number;

    /**
     * @const
     * @type {number}
     */
    var UNSIGNED_BYTE: number;

    /**
     * @const
     * @type {number}
     */
    var SHORT: number;

    /**
     * @const
     * @type {number}
     */
    var UNSIGNED_SHORT: number;

    /**
     * @const
     * @type {number}
     */
    var INT: number;

    /**
     * @const
     * @type {number}
     */
    var UNSIGNED_INT: number;

    /**
     * @const
     * @type {number}
     */
    var FLOAT: number;

    /**
     * @const
     * @type {number}
     */
    var DEPTH_COMPONENT: number;

    /**
     * @const
     * @type {number}
     */
    var ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    var RGB: number;

    /**
     * @const
     * @type {number}
     */
    var RGBA: number;

    /**
     * @const
     * @type {number}
     */
    var LUMINANCE: number;

    /**
     * @const
     * @type {number}
     */
    var LUMINANCE_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    var UNSIGNED_SHORT_4_4_4_4: number;

    /**
     * @const
     * @type {number}
     */
    var UNSIGNED_SHORT_5_5_5_1: number;

    /**
     * @const
     * @type {number}
     */
    var UNSIGNED_SHORT_5_6_5: number;

    /**
     * @const
     * @type {number}
     */
    var FRAGMENT_SHADER: number;

    /**
     * @const
     * @type {number}
     */
    var VERTEX_SHADER: number;

    /**
     * @const
     * @type {number}
     */
    var MAX_VERTEX_ATTRIBS: number;

    /**
     * @const
     * @type {number}
     */
    var MAX_VERTEX_UNIFORM_VECTORS: number;

    /**
     * @const
     * @type {number}
     */
    var MAX_VARYING_VECTORS: number;

    /**
     * @const
     * @type {number}
     */
    var MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;

    /**
     * @const
     * @type {number}
     */
    var MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;

    /**
     * @const
     * @type {number}
     */
    var MAX_TEXTURE_IMAGE_UNITS: number;

    /**
     * @const
     * @type {number}
     */
    var MAX_FRAGMENT_UNIFORM_VECTORS: number;

    /**
     * @const
     * @type {number}
     */
    var SHADER_TYPE: number;

    /**
     * @const
     * @type {number}
     */
    var DELETE_STATUS: number;

    /**
     * @const
     * @type {number}
     */
    var LINK_STATUS: number;

    /**
     * @const
     * @type {number}
     */
    var VALIDATE_STATUS: number;

    /**
     * @const
     * @type {number}
     */
    var ATTACHED_SHADERS: number;

    /**
     * @const
     * @type {number}
     */
    var ACTIVE_UNIFORMS: number;

    /**
     * @const
     * @type {number}
     */
    var ACTIVE_ATTRIBUTES: number;

    /**
     * @const
     * @type {number}
     */
    var SHADING_LANGUAGE_VERSION: number;

    /**
     * @const
     * @type {number}
     */
    var CURRENT_PROGRAM: number;

    /**
     * @const
     * @type {number}
     */
    var NEVER: number;

    /**
     * @const
     * @type {number}
     */
    var LESS: number;

    /**
     * @const
     * @type {number}
     */
    var EQUAL: number;

    /**
     * @const
     * @type {number}
     */
    var LEQUAL: number;

    /**
     * @const
     * @type {number}
     */
    var GREATER: number;

    /**
     * @const
     * @type {number}
     */
    var NOTEQUAL: number;

    /**
     * @const
     * @type {number}
     */
    var GEQUAL: number;

    /**
     * @const
     * @type {number}
     */
    var ALWAYS: number;

    /**
     * @const
     * @type {number}
     */
    var KEEP: number;

    /**
     * @const
     * @type {number}
     */
    var REPLACE: number;

    /**
     * @const
     * @type {number}
     */
    var INCR: number;

    /**
     * @const
     * @type {number}
     */
    var DECR: number;

    /**
     * @const
     * @type {number}
     */
    var INVERT: number;

    /**
     * @const
     * @type {number}
     */
    var INCR_WRAP: number;

    /**
     * @const
     * @type {number}
     */
    var DECR_WRAP: number;

    /**
     * @const
     * @type {number}
     */
    var VENDOR: number;

    /**
     * @const
     * @type {number}
     */
    var RENDERER: number;

    /**
     * @const
     * @type {number}
     */
    var VERSION: number;

    /**
     * @const
     * @type {number}
     */
    var NEAREST: number;

    /**
     * @const
     * @type {number}
     */
    var LINEAR: number;

    /**
     * @const
     * @type {number}
     */
    var NEAREST_MIPMAP_NEAREST: number;

    /**
     * @const
     * @type {number}
     */
    var LINEAR_MIPMAP_NEAREST: number;

    /**
     * @const
     * @type {number}
     */
    var NEAREST_MIPMAP_LINEAR: number;

    /**
     * @const
     * @type {number}
     */
    var LINEAR_MIPMAP_LINEAR: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE_MAG_FILTER: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE_MIN_FILTER: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE_WRAP_S: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE_WRAP_T: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE_2D: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE_CUBE_MAP: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE_BINDING_CUBE_MAP: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE_CUBE_MAP_POSITIVE_X: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE_CUBE_MAP_NEGATIVE_X: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE_CUBE_MAP_POSITIVE_Y: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE_CUBE_MAP_NEGATIVE_Y: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE_CUBE_MAP_POSITIVE_Z: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE_CUBE_MAP_NEGATIVE_Z: number;

    /**
     * @const
     * @type {number}
     */
    var MAX_CUBE_MAP_TEXTURE_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE0: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE1: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE2: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE3: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE4: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE5: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE6: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE7: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE8: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE9: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE10: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE11: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE12: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE13: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE14: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE15: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE16: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE17: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE18: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE19: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE20: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE21: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE22: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE23: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE24: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE25: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE26: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE27: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE28: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE29: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE30: number;

    /**
     * @const
     * @type {number}
     */
    var TEXTURE31: number;

    /**
     * @const
     * @type {number}
     */
    var ACTIVE_TEXTURE: number;

    /**
     * @const
     * @type {number}
     */
    var REPEAT: number;

    /**
     * @const
     * @type {number}
     */
    var CLAMP_TO_EDGE: number;

    /**
     * @const
     * @type {number}
     */
    var MIRRORED_REPEAT: number;

    /**
     * @const
     * @type {number}
     */
    var FLOAT_VEC2: number;

    /**
     * @const
     * @type {number}
     */
    var FLOAT_VEC3: number;

    /**
     * @const
     * @type {number}
     */
    var FLOAT_VEC4: number;

    /**
     * @const
     * @type {number}
     */
    var INT_VEC2: number;

    /**
     * @const
     * @type {number}
     */
    var INT_VEC3: number;

    /**
     * @const
     * @type {number}
     */
    var INT_VEC4: number;

    /**
     * @const
     * @type {number}
     */
    var BOOL: number;

    /**
     * @const
     * @type {number}
     */
    var BOOL_VEC2: number;

    /**
     * @const
     * @type {number}
     */
    var BOOL_VEC3: number;

    /**
     * @const
     * @type {number}
     */
    var BOOL_VEC4: number;

    /**
     * @const
     * @type {number}
     */
    var FLOAT_MAT2: number;

    /**
     * @const
     * @type {number}
     */
    var FLOAT_MAT3: number;

    /**
     * @const
     * @type {number}
     */
    var FLOAT_MAT4: number;

    /**
     * @const
     * @type {number}
     */
    var SAMPLER_2D: number;

    /**
     * @const
     * @type {number}
     */
    var SAMPLER_CUBE: number;

    /**
     * @const
     * @type {number}
     */
    var VERTEX_ATTRIB_ARRAY_ENABLED: number;

    /**
     * @const
     * @type {number}
     */
    var VERTEX_ATTRIB_ARRAY_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    var VERTEX_ATTRIB_ARRAY_STRIDE: number;

    /**
     * @const
     * @type {number}
     */
    var VERTEX_ATTRIB_ARRAY_TYPE: number;

    /**
     * @const
     * @type {number}
     */
    var VERTEX_ATTRIB_ARRAY_NORMALIZED: number;

    /**
     * @const
     * @type {number}
     */
    var VERTEX_ATTRIB_ARRAY_POINTER: number;

    /**
     * @const
     * @type {number}
     */
    var VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;

    /**
     * @const
     * @type {number}
     */
    var COMPILE_STATUS: number;

    /**
     * @const
     * @type {number}
     */
    var LOW_FLOAT: number;

    /**
     * @const
     * @type {number}
     */
    var MEDIUM_FLOAT: number;

    /**
     * @const
     * @type {number}
     */
    var HIGH_FLOAT: number;

    /**
     * @const
     * @type {number}
     */
    var LOW_INT: number;

    /**
     * @const
     * @type {number}
     */
    var MEDIUM_INT: number;

    /**
     * @const
     * @type {number}
     */
    var HIGH_INT: number;

    /**
     * @const
     * @type {number}
     */
    var FRAMEBUFFER: number;

    /**
     * @const
     * @type {number}
     */
    var RENDERBUFFER: number;

    /**
     * @const
     * @type {number}
     */
    var RGBA4: number;

    /**
     * @const
     * @type {number}
     */
    var RGB5_A1: number;

    /**
     * @const
     * @type {number}
     */
    var RGB565: number;

    /**
     * @const
     * @type {number}
     */
    var DEPTH_COMPONENT16: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_INDEX: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_INDEX8: number;

    /**
     * @const
     * @type {number}
     */
    var DEPTH_STENCIL: number;

    /**
     * @const
     * @type {number}
     */
    var RENDERBUFFER_WIDTH: number;

    /**
     * @const
     * @type {number}
     */
    var RENDERBUFFER_HEIGHT: number;

    /**
     * @const
     * @type {number}
     */
    var RENDERBUFFER_INTERNAL_FORMAT: number;

    /**
     * @const
     * @type {number}
     */
    var RENDERBUFFER_RED_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    var RENDERBUFFER_GREEN_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    var RENDERBUFFER_BLUE_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    var RENDERBUFFER_ALPHA_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    var RENDERBUFFER_DEPTH_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    var RENDERBUFFER_STENCIL_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    var FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;

    /**
     * @const
     * @type {number}
     */
    var FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;

    /**
     * @const
     * @type {number}
     */
    var FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;

    /**
     * @const
     * @type {number}
     */
    var FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;

    /**
     * @const
     * @type {number}
     */
    var COLOR_ATTACHMENT0: number;

    /**
     * @const
     * @type {number}
     */
    var DEPTH_ATTACHMENT: number;

    /**
     * @const
     * @type {number}
     */
    var STENCIL_ATTACHMENT: number;

    /**
     * @const
     * @type {number}
     */
    var DEPTH_STENCIL_ATTACHMENT: number;

    /**
     * @const
     * @type {number}
     */
    var NONE: number;

    /**
     * @const
     * @type {number}
     */
    var FRAMEBUFFER_COMPLETE: number;

    /**
     * @const
     * @type {number}
     */
    var FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;

    /**
     * @const
     * @type {number}
     */
    var FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;

    /**
     * @const
     * @type {number}
     */
    var FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;

    /**
     * @const
     * @type {number}
     */
    var FRAMEBUFFER_UNSUPPORTED: number;

    /**
     * @const
     * @type {number}
     */
    var FRAMEBUFFER_BINDING: number;

    /**
     * @const
     * @type {number}
     */
    var RENDERBUFFER_BINDING: number;

    /**
     * @const
     * @type {number}
     */
    var MAX_RENDERBUFFER_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    var INVALID_FRAMEBUFFER_OPERATION: number;

    /**
     * @const
     * @type {number}
     */
    var UNPACK_FLIP_Y_WEBGL: number;

    /**
     * @const
     * @type {number}
     */
    var UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;

    /**
     * @const
     * @type {number}
     */
    var CONTEXT_LOST_WEBGL: number;

    /**
     * @const
     * @type {number}
     */
    var UNPACK_COLORSPACE_CONVERSION_WEBGL: number;

    /**
     * @const
     * @type {number}
     */
    var BROWSER_DEFAULT_WEBGL: number;

    /**
     * From the OES_texture_half_float extension.
     * http://www.khronos.org/registry/webgl/extensions/OES_texture_half_float/
     * @const
     * @type {number}
     */
    var HALF_FLOAT_OES: number;

    /**
     * From the OES_standard_derivatives extension.
     * http://www.khronos.org/registry/webgl/extensions/OES_standard_derivatives/
     * @const
     * @type {number}
     */
    var FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;

    /**
     * From the OES_vertex_array_object extension.
     * http://www.khronos.org/registry/webgl/extensions/OES_vertex_array_object/
     * @const
     * @type {number}
     */
    var VERTEX_ARRAY_BINDING_OES: number;

    /**
     * From the WEBGL_debug_renderer_info extension.
     * http://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
     * @const
     * @type {number}
     */
    var UNMASKED_VENDOR_WEBGL: number;

    /**
     * From the WEBGL_debug_renderer_info extension.
     * http://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
     * @const
     * @type {number}
     */
    var UNMASKED_RENDERER_WEBGL: number;

    /**
     * From the WEBGL_compressed_texture_s3tc extension.
     * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
     * @const
     * @type {number}
     */
    var COMPRESSED_RGB_S3TC_DXT1_EXT: number;

    /**
     * From the WEBGL_compressed_texture_s3tc extension.
     * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
     * @const
     * @type {number}
     */
    var COMPRESSED_RGBA_S3TC_DXT1_EXT: number;

    /**
     * From the WEBGL_compressed_texture_s3tc extension.
     * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
     * @const
     * @type {number}
     */
    var COMPRESSED_RGBA_S3TC_DXT3_EXT: number;

    /**
     * From the WEBGL_compressed_texture_s3tc extension.
     * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
     * @const
     * @type {number}
     */
    var COMPRESSED_RGBA_S3TC_DXT5_EXT: number;

    /**
     * From the EXT_texture_filter_anisotropic extension.
     * http://www.khronos.org/registry/webgl/extensions/EXT_texture_filter_anisotropic/
     * @const
     * @type {number}
     */
    var TEXTURE_MAX_ANISOTROPY_EXT: number;

    /**
     * From the EXT_texture_filter_anisotropic extension.
     * http://www.khronos.org/registry/webgl/extensions/EXT_texture_filter_anisotropic/
     * @const
     * @type {number}
     */
    var MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
}
