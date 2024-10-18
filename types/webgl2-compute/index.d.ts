// Constants and methods found in Chromium 87.0.4280.141 (nw.js 0.50.3)
// WebGL 2 Compute was removed in Chromium 88.0.4324.11 (19 November 2020), see:
// https://chromereleases.googleblog.com/2020/11/dev-channel-update-for-desktop_19.html
// https://chromium.googlesource.com/chromium/src/+/34b075c18befb4f043aaa9612bd04ee2dc3328fd

interface HTMLCanvasElement extends HTMLElement {
    getContext(
        contextId: "webgl2-compute",
        contextAttributes?: WebGLContextAttributes,
    ): WebGL2ComputeRenderingContext | null;
}

interface OffscreenCanvas {
    getContext(
        contextId: "webgl2-compute",
        contextAttributes?: WebGLContextAttributes,
    ): WebGL2ComputeRenderingContext | null;
}

interface WebGL2ComputeRenderingContext extends WebGL2RenderingContext {
    readonly ACTIVE_ATOMIC_COUNTER_BUFFERS: number; // 37593
    readonly ACTIVE_RESOURCES: number; // 37621
    readonly ACTIVE_VARIABLES: number; // 37637
    readonly ALL_BARRIER_BITS: number; // 4294967295
    readonly ARRAY_SIZE: number; // 37627
    readonly ARRAY_STRIDE: number; // 37630
    readonly ATOMIC_COUNTER_BARRIER_BIT: number; // 4096
    readonly ATOMIC_COUNTER_BUFFER: number; // 37568
    readonly ATOMIC_COUNTER_BUFFER_BINDING: number; // 37569
    readonly ATOMIC_COUNTER_BUFFER_INDEX: number; // 37633
    readonly ATOMIC_COUNTER_BUFFER_SIZE: number; // 37571
    readonly ATOMIC_COUNTER_BUFFER_START: number; // 37570
    readonly BLOCK_INDEX: number; // 37629
    readonly BUFFER_BINDING: number; // 37634
    readonly BUFFER_DATA_SIZE: number; // 37635
    readonly BUFFER_UPDATE_BARRIER_BIT: number; // 512
    readonly BUFFER_VARIABLE: number; // 37605
    readonly COMMAND_BARRIER_BIT: number; // 64
    readonly COMPUTE_SHADER: number; // 37305
    readonly DISPATCH_INDIRECT_BUFFER: number; // 37102
    readonly DISPATCH_INDIRECT_BUFFER_BINDING: number; // 37103
    readonly DRAW_INDIRECT_BUFFER: number; // 36671
    readonly DRAW_INDIRECT_BUFFER_BINDING: number; // 36675
    readonly ELEMENT_ARRAY_BARRIER_BIT: number; // 2
    readonly FRAMEBUFFER_BARRIER_BIT: number; // 1024
    readonly IS_ROW_MAJOR: number; // 37632
    readonly LOCATION: number; // 37646
    readonly MATRIX_STRIDE: number; // 37631
    readonly MAX_ATOMIC_COUNTER_BUFFER_BINDINGS: number; // 37596
    readonly MAX_ATOMIC_COUNTER_BUFFER_SIZE: number; // 37592
    readonly MAX_COMBINED_ATOMIC_COUNTERS: number; // 37591
    readonly MAX_COMBINED_ATOMIC_COUNTER_BUFFERS: number; // 37585
    readonly MAX_COMBINED_SHADER_STORAGE_BLOCKS: number; // 37084
    readonly MAX_COMPUTE_ATOMIC_COUNTERS: number; // 33381
    readonly MAX_COMPUTE_ATOMIC_COUNTER_BUFFERS: number; // 33380
    readonly MAX_COMPUTE_IMAGE_UNIFORMS: number; // 37309
    readonly MAX_COMPUTE_SHADER_STORAGE_BLOCKS: number; // 37083
    readonly MAX_COMPUTE_SHARED_MEMORY_SIZE: number; // 33378
    readonly MAX_COMPUTE_TEXTURE_IMAGE_UNITS: number; // 37308
    readonly MAX_COMPUTE_UNIFORM_BLOCKS: number; // 37307
    readonly MAX_COMPUTE_UNIFORM_COMPONENTS: number; // 33379
    readonly MAX_COMPUTE_WORK_GROUP_COUNT: number; // 37310
    readonly MAX_COMPUTE_WORK_GROUP_INVOCATIONS: number; // 37099
    readonly MAX_COMPUTE_WORK_GROUP_SIZE: number; // 37311
    readonly MAX_FRAGMENT_ATOMIC_COUNTERS: number; // 37590
    readonly MAX_FRAGMENT_ATOMIC_COUNTER_BUFFERS: number; // 37584
    readonly MAX_FRAGMENT_SHADER_STORAGE_BLOCKS: number; // 37082
    readonly MAX_NAME_LENGTH: number; // 37622
    readonly MAX_NUM_ACTIVE_VARIABLES: number; // 37623
    readonly MAX_SHADER_STORAGE_BLOCK_SIZE: number; // 37086
    readonly MAX_SHADER_STORAGE_BUFFER_BINDINGS: number; // 37085
    readonly MAX_VERTEX_ATOMIC_COUNTERS: number; // 37586
    readonly MAX_VERTEX_ATOMIC_COUNTER_BUFFERS: number; // 37580
    readonly MAX_VERTEX_SHADER_STORAGE_BLOCKS: number; // 37078
    readonly NAME_LENGTH: number; // 37625
    readonly NUM_ACTIVE_VARIABLES: number; // 37636
    readonly OFFSET: number; // 37628
    readonly PIXEL_BUFFER_BARRIER_BIT: number; // 128
    readonly PROGRAM_INPUT: number; // 37603
    readonly PROGRAM_OUTPUT: number; // 37604
    readonly READ_ONLY: number; // 35000
    readonly READ_WRITE: number; // 35002
    readonly REFERENCED_BY_COMPUTE_SHADER: number; // 37643
    readonly REFERENCED_BY_FRAGMENT_SHADER: number; // 37642
    readonly REFERENCED_BY_VERTEX_SHADER: number; // 37638
    readonly SHADER_IMAGE_ACCESS_BARRIER_BIT: number; // 32
    readonly SHADER_STORAGE_BARRIER_BIT: number; // 8192
    readonly SHADER_STORAGE_BLOCK: number; // 37606
    readonly SHADER_STORAGE_BUFFER: number; // 37074
    readonly SHADER_STORAGE_BUFFER_BINDING: number; // 37075
    readonly SHADER_STORAGE_BUFFER_OFFSET_ALIGNMENT: number; // 37087
    readonly SHADER_STORAGE_BUFFER_SIZE: number; // 37077
    readonly SHADER_STORAGE_BUFFER_START: number; // 37076
    readonly TEXTURE_FETCH_BARRIER_BIT: number; // 8
    readonly TEXTURE_UPDATE_BARRIER_BIT: number; // 256
    readonly TOP_LEVEL_ARRAY_SIZE: number; // 37644
    readonly TOP_LEVEL_ARRAY_STRIDE: number; // 37645
    readonly TRANSFORM_FEEDBACK_BARRIER_BIT: number; // 2048
    readonly TRANSFORM_FEEDBACK_VARYING: number; // 37620
    readonly TYPE: number; // 37626
    readonly UNIFORM: number; // 37601
    readonly UNIFORM_BARRIER_BIT: number; // 4
    readonly UNIFORM_BLOCK: number; // 37602
    readonly UNSIGNED_INT_ATOMIC_COUNTER: number; // 37595
    readonly VERTEX_ATTRIB_ARRAY_BARRIER_BIT: number; // 1
    readonly WRITE_ONLY: number; // 35001

    bindImageTexture(
        unit: number,
        texture: WebGLTexture | null,
        level: number,
        layered: boolean,
        layer: number,
        access: number,
        format: number,
    ): void;

    dispatchCompute(num_groups_x: number, num_groups_y: number, num_groups_z: number): void;
    dispatchComputeIndirect(offset: number): void;

    drawArraysIndirect(mode: number, offset: number): void;
    drawElementsIndirect(mode: number, type: number, offset: number): void;

    getProgramInterfaceParameter(program: WebGLProgram, programInterface: number, pname: number): any;
    getProgramResource(program: WebGLProgram, programInterface: number, index: number, props: number): any;
    getProgramResourceIndex(program: WebGLProgram, programInterface: number, name: string): number;
    getProgramResourceLocation(program: WebGLProgram, programInterface: number, name: string): any;
    getProgramResourceName(program: WebGLProgram, programInterface: number, index: number): string;

    memoryBarrier(barriers: number): void;
    memoryBarrierByRegion(barriers: number): void;

    // Present in specification but not implemented:

    // framebufferParameter(target: number, pname: number, param: number): void;
    // getFramebufferParameter(target: number, pname: number): any;

    // programUniform1i(program: WebGLProgram, location: WebGLUniformLocation | null, v0: number): void;
    // programUniform2i(program: WebGLProgram, location: WebGLUniformLocation | null, v0: number, v1: number): void;
    // programUniform3i(program: WebGLProgram, location: WebGLUniformLocation | null, v0: number, v1: number, v2: number): void;
    // programUniform4i(program: WebGLProgram, location: WebGLUniformLocation | null, v0: number, v1: number, v2: number, v3: number): void;

    // programUniform1ui(program: WebGLProgram, location: WebGLUniformLocation | null, v0: number): void;
    // programUniform2ui(program: WebGLProgram, location: WebGLUniformLocation | null, v0: number, v1: number): void;
    // programUniform3ui(program: WebGLProgram, location: WebGLUniformLocation | null, v0: number, v1: number, v2: number): void;
    // programUniform4ui(program: WebGLProgram, location: WebGLUniformLocation | null, v0: number, v1: number, v2: number, v3: number): void;

    // programUniform1f(program: WebGLProgram, location: WebGLUniformLocation | null, v0: number): void;
    // programUniform2f(program: WebGLProgram, location: WebGLUniformLocation | null, v0: number, v1: number): void;
    // programUniform3f(program: WebGLProgram, location: WebGLUniformLocation | null, v0: number, v1: number, v2: number): void;
    // programUniform4f(program: WebGLProgram, location: WebGLUniformLocation | null, v0: number, v1: number, v2: number, v3: number): void;

    // programUniform1iv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, data: Int32Array | ArrayLike<number>): void;
    // programUniform2iv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, data: Int32Array | ArrayLike<number>): void;
    // programUniform3iv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, data: Int32Array | ArrayLike<number>): void;
    // programUniform4iv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, data: Int32Array | ArrayLike<number>): void;

    // programUniform1uiv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, data: Uint32Array | ArrayLike<number>): void;
    // programUniform2uiv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, data: Uint32Array | ArrayLike<number>): void;
    // programUniform3uiv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, data: Uint32Array | ArrayLike<number>): void;
    // programUniform4uiv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, data: Uint32Array | ArrayLike<number>): void;

    // programUniform1fv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, data: Float32Array | ArrayLike<number>): void;
    // programUniform2fv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, data: Float32Array | ArrayLike<number>): void;
    // programUniform3fv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, data: Float32Array | ArrayLike<number>): void;
    // programUniform4fv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, data: Float32Array | ArrayLike<number>): void;

    // programUniformMatrix2fv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, transpose: boolean, data: Float32Array | ArrayLike<number>): void;
    // programUniformMatrix3fv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, transpose: boolean, data: Float32Array | ArrayLike<number>): void;
    // programUniformMatrix4fv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, transpose: boolean, data: Float32Array | ArrayLike<number>): void;
    // programUniformMatrix2x3fv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, transpose: boolean, data: Float32Array | ArrayLike<number>): void;
    // programUniformMatrix3x2fv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, transpose: boolean, data: Float32Array | ArrayLike<number>): void;
    // programUniformMatrix2x4fv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, transpose: boolean, data: Float32Array | ArrayLike<number>): void;
    // programUniformMatrix4x2fv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, transpose: boolean, data: Float32Array | ArrayLike<number>): void;
    // programUniformMatrix3x4fv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, transpose: boolean, data: Float32Array | ArrayLike<number>): void;
    // programUniformMatrix4x3fv(program: WebGLProgram, location: WebGLUniformLocation | null, count: number, transpose: boolean, data: Float32Array | ArrayLike<number>): void;

    // texStorage2DMultisample(target: number, samples: number, internalformat: number, width: number, height: number, fixedsamplelocations: boolean): void;
    // getTexLevelParameter(target: number, level: number, pname: number): any;
    // getMultisample(pname: number, index: number): any;
    // sampleMask(index: number, mask: number): void;

    // bindVertexBuffer(bindingindex: number, buffer: WebGLBuffer | null, offset: number, stride: number): void;
    // vertexAttribFormat(attribindex: number, size: number, type: number, normalized: boolean, relativeoffset: number): void;
    // vertexAttribIFormat(attribindex: number, size: number, type: number, relativeoffset: number): void;
    // vertexAttribBinding(attribindex: number, bindingindex: number): void;
    // vertexBindingDivisor(bindingindex: number, divisor: number): void;
}

declare var WebGL2ComputeRenderingContext: {
    prototype: WebGL2ComputeRenderingContext;
    new(): WebGL2ComputeRenderingContext;

    // WebGL constants
    readonly ACTIVE_ATTRIBUTES: number; // 35721
    readonly ACTIVE_TEXTURE: number; // 34016
    readonly ACTIVE_UNIFORMS: number; // 35718
    readonly ALIASED_LINE_WIDTH_RANGE: number; // 33902
    readonly ALIASED_POINT_SIZE_RANGE: number; // 33901
    readonly ALPHA: number; // 6406
    readonly ALPHA_BITS: number; // 3413
    readonly ALWAYS: number; // 519
    readonly ARRAY_BUFFER: number; // 34962
    readonly ARRAY_BUFFER_BINDING: number; // 34964
    readonly ATTACHED_SHADERS: number; // 35717
    readonly BACK: number; // 1029
    readonly BLEND: number; // 3042
    readonly BLEND_COLOR: number; // 32773
    readonly BLEND_DST_ALPHA: number; // 32970
    readonly BLEND_DST_RGB: number; // 32968
    readonly BLEND_EQUATION: number; // 32777
    readonly BLEND_EQUATION_ALPHA: number; // 34877
    readonly BLEND_EQUATION_RGB: number; // 32777
    readonly BLEND_SRC_ALPHA: number; // 32971
    readonly BLEND_SRC_RGB: number; // 32969
    readonly BLUE_BITS: number; // 3412
    readonly BOOL: number; // 35670
    readonly BOOL_VEC2: number; // 35671
    readonly BOOL_VEC3: number; // 35672
    readonly BOOL_VEC4: number; // 35673
    readonly BROWSER_DEFAULT_WEBGL: number; // 37444
    readonly BUFFER_SIZE: number; // 34660
    readonly BUFFER_USAGE: number; // 34661
    readonly BYTE: number; // 5120
    readonly CCW: number; // 2305
    readonly CLAMP_TO_EDGE: number; // 33071
    readonly COLOR_ATTACHMENT0: number; // 36064
    readonly COLOR_BUFFER_BIT: number; // 16384
    readonly COLOR_CLEAR_VALUE: number; // 3106
    readonly COLOR_WRITEMASK: number; // 3107
    readonly COMPILE_STATUS: number; // 35713
    readonly COMPRESSED_TEXTURE_FORMATS: number; // 34467
    readonly CONSTANT_ALPHA: number; // 32771
    readonly CONSTANT_COLOR: number; // 32769
    readonly CONTEXT_LOST_WEBGL: number; // 37442
    readonly CULL_FACE: number; // 2884
    readonly CULL_FACE_MODE: number; // 2885
    readonly CURRENT_PROGRAM: number; // 35725
    readonly CURRENT_VERTEX_ATTRIB: number; // 34342
    readonly CW: number; // 2304
    readonly DECR: number; // 7683
    readonly DECR_WRAP: number; // 34056
    readonly DELETE_STATUS: number; // 35712
    readonly DEPTH_ATTACHMENT: number; // 36096
    readonly DEPTH_BITS: number; // 3414
    readonly DEPTH_BUFFER_BIT: number; // 256
    readonly DEPTH_CLEAR_VALUE: number; // 2931
    readonly DEPTH_COMPONENT: number; // 6402
    readonly DEPTH_COMPONENT16: number; // 33189
    readonly DEPTH_FUNC: number; // 2932
    readonly DEPTH_RANGE: number; // 2928
    readonly DEPTH_STENCIL: number; // 34041
    readonly DEPTH_STENCIL_ATTACHMENT: number; // 33306
    readonly DEPTH_TEST: number; // 2929
    readonly DEPTH_WRITEMASK: number; // 2930
    readonly DITHER: number; // 3024
    readonly DONT_CARE: number; // 4352
    readonly DST_ALPHA: number; // 772
    readonly DST_COLOR: number; // 774
    readonly DYNAMIC_DRAW: number; // 35048
    readonly ELEMENT_ARRAY_BUFFER: number; // 34963
    readonly ELEMENT_ARRAY_BUFFER_BINDING: number; // 34965
    readonly EQUAL: number; // 514
    readonly FASTEST: number; // 4353
    readonly FLOAT: number; // 5126
    readonly FLOAT_MAT2: number; // 35674
    readonly FLOAT_MAT3: number; // 35675
    readonly FLOAT_MAT4: number; // 35676
    readonly FLOAT_VEC2: number; // 35664
    readonly FLOAT_VEC3: number; // 35665
    readonly FLOAT_VEC4: number; // 35666
    readonly FRAGMENT_SHADER: number; // 35632
    readonly FRAMEBUFFER: number; // 36160
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number; // 36049
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number; // 36048
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number; // 36051
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number; // 36050
    readonly FRAMEBUFFER_BINDING: number; // 36006
    readonly FRAMEBUFFER_COMPLETE: number; // 36053
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number; // 36054
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number; // 36057
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number; // 36055
    readonly FRAMEBUFFER_UNSUPPORTED: number; // 36061
    readonly FRONT: number; // 1028
    readonly FRONT_AND_BACK: number; // 1032
    readonly FRONT_FACE: number; // 2886
    readonly FUNC_ADD: number; // 32774
    readonly FUNC_REVERSE_SUBTRACT: number; // 32779
    readonly FUNC_SUBTRACT: number; // 32778
    readonly GENERATE_MIPMAP_HINT: number; // 33170
    readonly GEQUAL: number; // 518
    readonly GREATER: number; // 516
    readonly GREEN_BITS: number; // 3411
    readonly HIGH_FLOAT: number; // 36338
    readonly HIGH_INT: number; // 36341
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: number; // 35739
    readonly IMPLEMENTATION_COLOR_READ_TYPE: number; // 35738
    readonly INCR: number; // 7682
    readonly INCR_WRAP: number; // 34055
    readonly INT: number; // 5124
    readonly INT_VEC2: number; // 35667
    readonly INT_VEC3: number; // 35668
    readonly INT_VEC4: number; // 35669
    readonly INVALID_ENUM: number; // 1280
    readonly INVALID_FRAMEBUFFER_OPERATION: number; // 1286
    readonly INVALID_OPERATION: number; // 1282
    readonly INVALID_VALUE: number; // 1281
    readonly INVERT: number; // 5386
    readonly KEEP: number; // 7680
    readonly LEQUAL: number; // 515
    readonly LESS: number; // 513
    readonly LINEAR: number; // 9729
    readonly LINEAR_MIPMAP_LINEAR: number; // 9987
    readonly LINEAR_MIPMAP_NEAREST: number; // 9985
    readonly LINES: number; // 1
    readonly LINE_LOOP: number; // 2
    readonly LINE_STRIP: number; // 3
    readonly LINE_WIDTH: number; // 2849
    readonly LINK_STATUS: number; // 35714
    readonly LOW_FLOAT: number; // 36336
    readonly LOW_INT: number; // 36339
    readonly LUMINANCE: number; // 6409
    readonly LUMINANCE_ALPHA: number; // 6410
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: number; // 35661
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: number; // 34076
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: number; // 36349
    readonly MAX_RENDERBUFFER_SIZE: number; // 34024
    readonly MAX_TEXTURE_IMAGE_UNITS: number; // 34930
    readonly MAX_TEXTURE_SIZE: number; // 3379
    readonly MAX_VARYING_VECTORS: number; // 36348
    readonly MAX_VERTEX_ATTRIBS: number; // 34921
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: number; // 35660
    readonly MAX_VERTEX_UNIFORM_VECTORS: number; // 36347
    readonly MAX_VIEWPORT_DIMS: number; // 3386
    readonly MEDIUM_FLOAT: number; // 36337
    readonly MEDIUM_INT: number; // 36340
    readonly MIRRORED_REPEAT: number; // 33648
    readonly NEAREST: number; // 9728
    readonly NEAREST_MIPMAP_LINEAR: number; // 9986
    readonly NEAREST_MIPMAP_NEAREST: number; // 9984
    readonly NEVER: number; // 512
    readonly NICEST: number; // 4354
    readonly NONE: number; // 0
    readonly NOTEQUAL: number; // 517
    readonly NO_ERROR: number; // 0
    readonly ONE: number; // 1
    readonly ONE_MINUS_CONSTANT_ALPHA: number; // 32772
    readonly ONE_MINUS_CONSTANT_COLOR: number; // 32770
    readonly ONE_MINUS_DST_ALPHA: number; // 773
    readonly ONE_MINUS_DST_COLOR: number; // 775
    readonly ONE_MINUS_SRC_ALPHA: number; // 771
    readonly ONE_MINUS_SRC_COLOR: number; // 769
    readonly OUT_OF_MEMORY: number; // 1285
    readonly PACK_ALIGNMENT: number; // 3333
    readonly POINTS: number; // 0
    readonly POLYGON_OFFSET_FACTOR: number; // 32824
    readonly POLYGON_OFFSET_FILL: number; // 32823
    readonly POLYGON_OFFSET_UNITS: number; // 10752
    readonly RED_BITS: number; // 3410
    readonly RENDERBUFFER: number; // 36161
    readonly RENDERBUFFER_ALPHA_SIZE: number; // 36179
    readonly RENDERBUFFER_BINDING: number; // 36007
    readonly RENDERBUFFER_BLUE_SIZE: number; // 36178
    readonly RENDERBUFFER_DEPTH_SIZE: number; // 36180
    readonly RENDERBUFFER_GREEN_SIZE: number; // 36177
    readonly RENDERBUFFER_HEIGHT: number; // 36163
    readonly RENDERBUFFER_INTERNAL_FORMAT: number; // 36164
    readonly RENDERBUFFER_RED_SIZE: number; // 36176
    readonly RENDERBUFFER_STENCIL_SIZE: number; // 36181
    readonly RENDERBUFFER_WIDTH: number; // 36162
    readonly RENDERER: number; // 7937
    readonly REPEAT: number; // 10497
    readonly REPLACE: number; // 7681
    readonly RGB: number; // 6407
    readonly RGB5_A1: number; // 32855
    readonly RGB565: number; // 36194
    readonly RGBA: number; // 6408
    readonly RGBA4: number; // 32854
    readonly SAMPLER_2D: number; // 35678
    readonly SAMPLER_CUBE: number; // 35680
    readonly SAMPLES: number; // 32937
    readonly SAMPLE_ALPHA_TO_COVERAGE: number; // 32926
    readonly SAMPLE_BUFFERS: number; // 32936
    readonly SAMPLE_COVERAGE: number; // 32928
    readonly SAMPLE_COVERAGE_INVERT: number; // 32939
    readonly SAMPLE_COVERAGE_VALUE: number; // 32938
    readonly SCISSOR_BOX: number; // 3088
    readonly SCISSOR_TEST: number; // 3089
    readonly SHADER_TYPE: number; // 35663
    readonly SHADING_LANGUAGE_VERSION: number; // 35724
    readonly SHORT: number; // 5122
    readonly SRC_ALPHA: number; // 770
    readonly SRC_ALPHA_SATURATE: number; // 776
    readonly SRC_COLOR: number; // 768
    readonly STATIC_DRAW: number; // 35044
    readonly STENCIL_ATTACHMENT: number; // 36128
    readonly STENCIL_BACK_FAIL: number; // 34817
    readonly STENCIL_BACK_FUNC: number; // 34816
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: number; // 34818
    readonly STENCIL_BACK_PASS_DEPTH_PASS: number; // 34819
    readonly STENCIL_BACK_REF: number; // 36003
    readonly STENCIL_BACK_VALUE_MASK: number; // 36004
    readonly STENCIL_BACK_WRITEMASK: number; // 36005
    readonly STENCIL_BITS: number; // 3415
    readonly STENCIL_BUFFER_BIT: number; // 1024
    readonly STENCIL_CLEAR_VALUE: number; // 2961
    readonly STENCIL_FAIL: number; // 2964
    readonly STENCIL_FUNC: number; // 2962
    readonly STENCIL_INDEX8: number; // 36168
    readonly STENCIL_PASS_DEPTH_FAIL: number; // 2965
    readonly STENCIL_PASS_DEPTH_PASS: number; // 2966
    readonly STENCIL_REF: number; // 2967
    readonly STENCIL_TEST: number; // 2960
    readonly STENCIL_VALUE_MASK: number; // 2963
    readonly STENCIL_WRITEMASK: number; // 2968
    readonly STREAM_DRAW: number; // 35040
    readonly SUBPIXEL_BITS: number; // 3408
    readonly TEXTURE: number; // 5890
    readonly TEXTURE0: number; // 33984
    readonly TEXTURE1: number; // 33985
    readonly TEXTURE2: number; // 33986
    readonly TEXTURE3: number; // 33987
    readonly TEXTURE4: number; // 33988
    readonly TEXTURE5: number; // 33989
    readonly TEXTURE6: number; // 33990
    readonly TEXTURE7: number; // 33991
    readonly TEXTURE8: number; // 33992
    readonly TEXTURE9: number; // 33993
    readonly TEXTURE10: number; // 33994
    readonly TEXTURE11: number; // 33995
    readonly TEXTURE12: number; // 33996
    readonly TEXTURE13: number; // 33997
    readonly TEXTURE14: number; // 33998
    readonly TEXTURE15: number; // 33999
    readonly TEXTURE16: number; // 34000
    readonly TEXTURE17: number; // 34001
    readonly TEXTURE18: number; // 34002
    readonly TEXTURE19: number; // 34003
    readonly TEXTURE20: number; // 34004
    readonly TEXTURE21: number; // 34005
    readonly TEXTURE22: number; // 34006
    readonly TEXTURE23: number; // 34007
    readonly TEXTURE24: number; // 34008
    readonly TEXTURE25: number; // 34009
    readonly TEXTURE26: number; // 34010
    readonly TEXTURE27: number; // 34011
    readonly TEXTURE28: number; // 34012
    readonly TEXTURE29: number; // 34013
    readonly TEXTURE30: number; // 34014
    readonly TEXTURE31: number; // 34015
    readonly TEXTURE_2D: number; // 3553
    readonly TEXTURE_BINDING_2D: number; // 32873
    readonly TEXTURE_BINDING_CUBE_MAP: number; // 34068
    readonly TEXTURE_CUBE_MAP: number; // 34067
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: number; // 34070
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: number; // 34072
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: number; // 34074
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: number; // 34069
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: number; // 34071
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: number; // 34073
    readonly TEXTURE_MAG_FILTER: number; // 10240
    readonly TEXTURE_MIN_FILTER: number; // 10241
    readonly TEXTURE_WRAP_S: number; // 10242
    readonly TEXTURE_WRAP_T: number; // 10243
    readonly TRIANGLES: number; // 4
    readonly TRIANGLE_FAN: number; // 6
    readonly TRIANGLE_STRIP: number; // 5
    readonly UNPACK_ALIGNMENT: number; // 3317
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: number; // 37443
    readonly UNPACK_FLIP_Y_WEBGL: number; // 37440
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: number; // 37441
    readonly UNSIGNED_BYTE: number; // 5121
    readonly UNSIGNED_INT: number; // 5125
    readonly UNSIGNED_SHORT: number; // 5123
    readonly UNSIGNED_SHORT_4_4_4_4: number; // 32819
    readonly UNSIGNED_SHORT_5_5_5_1: number; // 32820
    readonly UNSIGNED_SHORT_5_6_5: number; // 33635
    readonly VALIDATE_STATUS: number; // 35715
    readonly VENDOR: number; // 7936
    readonly VERSION: number; // 7938
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number; // 34975
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: number; // 34338
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: number; // 34922
    readonly VERTEX_ATTRIB_ARRAY_POINTER: number; // 34373
    readonly VERTEX_ATTRIB_ARRAY_SIZE: number; // 34339
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: number; // 34340
    readonly VERTEX_ATTRIB_ARRAY_TYPE: number; // 34341
    readonly VERTEX_SHADER: number; // 35633
    readonly VIEWPORT: number; // 2978
    readonly ZERO: number; // 0

    // WebGL2 constants
    readonly ACTIVE_UNIFORM_BLOCKS: number; // 35382
    readonly ALREADY_SIGNALED: number; // 37146
    readonly ANY_SAMPLES_PASSED: number; // 35887
    readonly ANY_SAMPLES_PASSED_CONSERVATIVE: number; // 36202
    readonly COLOR: number; // 6144
    readonly COLOR_ATTACHMENT1: number; // 36065
    readonly COLOR_ATTACHMENT2: number; // 36066
    readonly COLOR_ATTACHMENT3: number; // 36067
    readonly COLOR_ATTACHMENT4: number; // 36068
    readonly COLOR_ATTACHMENT5: number; // 36069
    readonly COLOR_ATTACHMENT6: number; // 36070
    readonly COLOR_ATTACHMENT7: number; // 36071
    readonly COLOR_ATTACHMENT8: number; // 36072
    readonly COLOR_ATTACHMENT9: number; // 36073
    readonly COLOR_ATTACHMENT10: number; // 36074
    readonly COLOR_ATTACHMENT11: number; // 36075
    readonly COLOR_ATTACHMENT12: number; // 36076
    readonly COLOR_ATTACHMENT13: number; // 36077
    readonly COLOR_ATTACHMENT14: number; // 36078
    readonly COLOR_ATTACHMENT15: number; // 36079
    readonly COMPARE_REF_TO_TEXTURE: number; // 34894
    readonly CONDITION_SATISFIED: number; // 37148
    readonly COPY_READ_BUFFER: number; // 36662
    readonly COPY_READ_BUFFER_BINDING: number; // 36662
    readonly COPY_WRITE_BUFFER: number; // 36663
    readonly COPY_WRITE_BUFFER_BINDING: number; // 36663
    readonly CURRENT_QUERY: number; // 34917
    readonly DEPTH: number; // 6145
    readonly DEPTH24_STENCIL8: number; // 35056
    readonly DEPTH32F_STENCIL8: number; // 36013
    readonly DEPTH_COMPONENT24: number; // 33190
    readonly DEPTH_COMPONENT32F: number; // 36012
    readonly DRAW_BUFFER0: number; // 34853
    readonly DRAW_BUFFER1: number; // 34854
    readonly DRAW_BUFFER2: number; // 34855
    readonly DRAW_BUFFER3: number; // 34856
    readonly DRAW_BUFFER4: number; // 34857
    readonly DRAW_BUFFER5: number; // 34858
    readonly DRAW_BUFFER6: number; // 34859
    readonly DRAW_BUFFER7: number; // 34860
    readonly DRAW_BUFFER8: number; // 34861
    readonly DRAW_BUFFER9: number; // 34862
    readonly DRAW_BUFFER10: number; // 34863
    readonly DRAW_BUFFER11: number; // 34864
    readonly DRAW_BUFFER12: number; // 34865
    readonly DRAW_BUFFER13: number; // 34866
    readonly DRAW_BUFFER14: number; // 34867
    readonly DRAW_BUFFER15: number; // 34868
    readonly DRAW_FRAMEBUFFER: number; // 36009
    readonly DRAW_FRAMEBUFFER_BINDING: number; // 36006
    readonly DYNAMIC_COPY: number; // 35050
    readonly DYNAMIC_READ: number; // 35049
    readonly FLOAT_32_UNSIGNED_INT_24_8_REV: number; // 36269
    readonly FLOAT_MAT2x3: number; // 35685
    readonly FLOAT_MAT2x4: number; // 35686
    readonly FLOAT_MAT3x2: number; // 35687
    readonly FLOAT_MAT3x4: number; // 35688
    readonly FLOAT_MAT4x2: number; // 35689
    readonly FLOAT_MAT4x3: number; // 35690
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT: number; // 35723
    readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: number; // 33301
    readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: number; // 33300
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: number; // 33296
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: number; // 33297
    readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: number; // 33302
    readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: number; // 33299
    readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: number; // 33298
    readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: number; // 33303
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: number; // 36052
    readonly FRAMEBUFFER_DEFAULT: number; // 33304
    readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: number; // 36182
    readonly HALF_FLOAT: number; // 5131
    readonly INTERLEAVED_ATTRIBS: number; // 35980
    readonly INT_2_10_10_10_REV: number; // 36255
    readonly INT_SAMPLER_2D: number; // 36298
    readonly INT_SAMPLER_2D_ARRAY: number; // 36303
    readonly INT_SAMPLER_3D: number; // 36299
    readonly INT_SAMPLER_CUBE: number; // 36300
    readonly INVALID_INDEX: number; // 4294967295
    readonly MAX: number; // 32776
    readonly MAX_3D_TEXTURE_SIZE: number; // 32883
    readonly MAX_ARRAY_TEXTURE_LAYERS: number; // 35071
    readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: number; // 37447
    readonly MAX_COLOR_ATTACHMENTS: number; // 36063
    readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: number; // 35379
    readonly MAX_COMBINED_UNIFORM_BLOCKS: number; // 35374
    readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: number; // 35377
    readonly MAX_DRAW_BUFFERS: number; // 34852
    readonly MAX_ELEMENTS_INDICES: number; // 33001
    readonly MAX_ELEMENTS_VERTICES: number; // 33000
    readonly MAX_ELEMENT_INDEX: number; // 36203
    readonly MAX_FRAGMENT_INPUT_COMPONENTS: number; // 37157
    readonly MAX_FRAGMENT_UNIFORM_BLOCKS: number; // 35373
    readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: number; // 35657
    readonly MAX_PROGRAM_TEXEL_OFFSET: number; // 35077
    readonly MAX_SAMPLES: number; // 36183
    readonly MAX_SERVER_WAIT_TIMEOUT: number; // 37137
    readonly MAX_TEXTURE_LOD_BIAS: number; // 34045
    readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: number; // 35978
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: number; // 35979
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: number; // 35968
    readonly MAX_UNIFORM_BLOCK_SIZE: number; // 35376
    readonly MAX_UNIFORM_BUFFER_BINDINGS: number; // 35375
    readonly MAX_VARYING_COMPONENTS: number; // 35659
    readonly MAX_VERTEX_OUTPUT_COMPONENTS: number; // 37154
    readonly MAX_VERTEX_UNIFORM_BLOCKS: number; // 35371
    readonly MAX_VERTEX_UNIFORM_COMPONENTS: number; // 35658
    readonly MIN: number; // 32775
    readonly MIN_PROGRAM_TEXEL_OFFSET: number; // 35076
    readonly OBJECT_TYPE: number; // 37138
    readonly PACK_ROW_LENGTH: number; // 3330
    readonly PACK_SKIP_PIXELS: number; // 3332
    readonly PACK_SKIP_ROWS: number; // 3331
    readonly PIXEL_PACK_BUFFER: number; // 35051
    readonly PIXEL_PACK_BUFFER_BINDING: number; // 35053
    readonly PIXEL_UNPACK_BUFFER: number; // 35052
    readonly PIXEL_UNPACK_BUFFER_BINDING: number; // 35055
    readonly QUERY_RESULT: number; // 34918
    readonly QUERY_RESULT_AVAILABLE: number; // 34919
    readonly R8: number; // 33321
    readonly R8I: number; // 33329
    readonly R8UI: number; // 33330
    readonly R8_SNORM: number; // 36756
    readonly R11F_G11F_B10F: number; // 35898
    readonly R16F: number; // 33325
    readonly R16I: number; // 33331
    readonly R16UI: number; // 33332
    readonly R32F: number; // 33326
    readonly R32I: number; // 33333
    readonly R32UI: number; // 33334
    readonly RASTERIZER_DISCARD: number; // 35977
    readonly READ_BUFFER: number; // 3074
    readonly READ_FRAMEBUFFER: number; // 36008
    readonly READ_FRAMEBUFFER_BINDING: number; // 36010
    readonly RED: number; // 6403
    readonly RED_INTEGER: number; // 36244
    readonly RENDERBUFFER_SAMPLES: number; // 36011
    readonly RG: number; // 33319
    readonly RG8: number; // 33323
    readonly RG8I: number; // 33335
    readonly RG8UI: number; // 33336
    readonly RG8_SNORM: number; // 36757
    readonly RG16F: number; // 33327
    readonly RG16I: number; // 33337
    readonly RG16UI: number; // 33338
    readonly RG32F: number; // 33328
    readonly RG32I: number; // 33339
    readonly RG32UI: number; // 33340
    readonly RGB8: number; // 32849
    readonly RGB8I: number; // 36239
    readonly RGB8UI: number; // 36221
    readonly RGB8_SNORM: number; // 36758
    readonly RGB9_E5: number; // 35901
    readonly RGB10_A2: number; // 32857
    readonly RGB10_A2UI: number; // 36975
    readonly RGB16F: number; // 34843
    readonly RGB16I: number; // 36233
    readonly RGB16UI: number; // 36215
    readonly RGB32F: number; // 34837
    readonly RGB32I: number; // 36227
    readonly RGB32UI: number; // 36209
    readonly RGBA8: number; // 32856
    readonly RGBA8I: number; // 36238
    readonly RGBA8UI: number; // 36220
    readonly RGBA8_SNORM: number; // 36759
    readonly RGBA16F: number; // 34842
    readonly RGBA16I: number; // 36232
    readonly RGBA16UI: number; // 36214
    readonly RGBA32F: number; // 34836
    readonly RGBA32I: number; // 36226
    readonly RGBA32UI: number; // 36208
    readonly RGBA_INTEGER: number; // 36249
    readonly RGB_INTEGER: number; // 36248
    readonly RG_INTEGER: number; // 33320
    readonly SAMPLER_2D_ARRAY: number; // 36289
    readonly SAMPLER_2D_ARRAY_SHADOW: number; // 36292
    readonly SAMPLER_2D_SHADOW: number; // 35682
    readonly SAMPLER_3D: number; // 35679
    readonly SAMPLER_BINDING: number; // 35097
    readonly SAMPLER_CUBE_SHADOW: number; // 36293
    readonly SEPARATE_ATTRIBS: number; // 35981
    readonly SIGNALED: number; // 37145
    readonly SIGNED_NORMALIZED: number; // 36764
    readonly SRGB: number; // 35904
    readonly SRGB8: number; // 35905
    readonly SRGB8_ALPHA8: number; // 35907
    readonly STATIC_COPY: number; // 35046
    readonly STATIC_READ: number; // 35045
    readonly STENCIL: number; // 6146
    readonly STREAM_COPY: number; // 35042
    readonly STREAM_READ: number; // 35041
    readonly SYNC_CONDITION: number; // 37139
    readonly SYNC_FENCE: number; // 37142
    readonly SYNC_FLAGS: number; // 37141
    readonly SYNC_FLUSH_COMMANDS_BIT: number; // 1
    readonly SYNC_GPU_COMMANDS_COMPLETE: number; // 37143
    readonly SYNC_STATUS: number; // 37140
    readonly TEXTURE_2D_ARRAY: number; // 35866
    readonly TEXTURE_3D: number; // 32879
    readonly TEXTURE_BASE_LEVEL: number; // 33084
    readonly TEXTURE_BINDING_2D_ARRAY: number; // 35869
    readonly TEXTURE_BINDING_3D: number; // 32874
    readonly TEXTURE_COMPARE_FUNC: number; // 34893
    readonly TEXTURE_COMPARE_MODE: number; // 34892
    readonly TEXTURE_IMMUTABLE_FORMAT: number; // 37167
    readonly TEXTURE_IMMUTABLE_LEVELS: number; // 33503
    readonly TEXTURE_MAX_LEVEL: number; // 33085
    readonly TEXTURE_MAX_LOD: number; // 33083
    readonly TEXTURE_MIN_LOD: number; // 33082
    readonly TEXTURE_WRAP_R: number; // 32882
    readonly TIMEOUT_EXPIRED: number; // 37147
    readonly TIMEOUT_IGNORED: number; // -1
    readonly TRANSFORM_FEEDBACK: number; // 36386
    readonly TRANSFORM_FEEDBACK_ACTIVE: number; // 36388
    readonly TRANSFORM_FEEDBACK_BINDING: number; // 36389
    readonly TRANSFORM_FEEDBACK_BUFFER: number; // 35982
    readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: number; // 35983
    readonly TRANSFORM_FEEDBACK_BUFFER_MODE: number; // 35967
    readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: number; // 35973
    readonly TRANSFORM_FEEDBACK_BUFFER_START: number; // 35972
    readonly TRANSFORM_FEEDBACK_PAUSED: number; // 36387
    readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: number; // 35976
    readonly TRANSFORM_FEEDBACK_VARYINGS: number; // 35971
    readonly UNIFORM_ARRAY_STRIDE: number; // 35388
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: number; // 35394
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: number; // 35395
    readonly UNIFORM_BLOCK_BINDING: number; // 35391
    readonly UNIFORM_BLOCK_DATA_SIZE: number; // 35392
    readonly UNIFORM_BLOCK_INDEX: number; // 35386
    readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: number; // 35398
    readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: number; // 35396
    readonly UNIFORM_BUFFER: number; // 35345
    readonly UNIFORM_BUFFER_BINDING: number; // 35368
    readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: number; // 35380
    readonly UNIFORM_BUFFER_SIZE: number; // 35370
    readonly UNIFORM_BUFFER_START: number; // 35369
    readonly UNIFORM_IS_ROW_MAJOR: number; // 35390
    readonly UNIFORM_MATRIX_STRIDE: number; // 35389
    readonly UNIFORM_OFFSET: number; // 35387
    readonly UNIFORM_SIZE: number; // 35384
    readonly UNIFORM_TYPE: number; // 35383
    readonly UNPACK_IMAGE_HEIGHT: number; // 32878
    readonly UNPACK_ROW_LENGTH: number; // 3314
    readonly UNPACK_SKIP_IMAGES: number; // 32877
    readonly UNPACK_SKIP_PIXELS: number; // 3316
    readonly UNPACK_SKIP_ROWS: number; // 3315
    readonly UNSIGNALED: number; // 37144
    readonly UNSIGNED_INT_2_10_10_10_REV: number; // 33640
    readonly UNSIGNED_INT_5_9_9_9_REV: number; // 35902
    readonly UNSIGNED_INT_10F_11F_11F_REV: number; // 35899
    readonly UNSIGNED_INT_24_8: number; // 34042
    readonly UNSIGNED_INT_SAMPLER_2D: number; // 36306
    readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: number; // 36311
    readonly UNSIGNED_INT_SAMPLER_3D: number; // 36307
    readonly UNSIGNED_INT_SAMPLER_CUBE: number; // 36308
    readonly UNSIGNED_INT_VEC2: number; // 36294
    readonly UNSIGNED_INT_VEC3: number; // 36295
    readonly UNSIGNED_INT_VEC4: number; // 36296
    readonly UNSIGNED_NORMALIZED: number; // 35863
    readonly VERTEX_ARRAY_BINDING: number; // 34229
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR: number; // 35070
    readonly VERTEX_ATTRIB_ARRAY_INTEGER: number; // 35069
    readonly WAIT_FAILED: number; // 37149

    // WebGL2 Compute constants
    readonly ACTIVE_ATOMIC_COUNTER_BUFFERS: number; // 37593
    readonly ACTIVE_RESOURCES: number; // 37621
    readonly ACTIVE_VARIABLES: number; // 37637
    readonly ALL_BARRIER_BITS: number; // 4294967295
    readonly ARRAY_SIZE: number; // 37627
    readonly ARRAY_STRIDE: number; // 37630
    readonly ATOMIC_COUNTER_BARRIER_BIT: number; // 4096
    readonly ATOMIC_COUNTER_BUFFER: number; // 37568
    readonly ATOMIC_COUNTER_BUFFER_BINDING: number; // 37569
    readonly ATOMIC_COUNTER_BUFFER_INDEX: number; // 37633
    readonly ATOMIC_COUNTER_BUFFER_SIZE: number; // 37571
    readonly ATOMIC_COUNTER_BUFFER_START: number; // 37570
    readonly BLOCK_INDEX: number; // 37629
    readonly BUFFER_BINDING: number; // 37634
    readonly BUFFER_DATA_SIZE: number; // 37635
    readonly BUFFER_UPDATE_BARRIER_BIT: number; // 512
    readonly BUFFER_VARIABLE: number; // 37605
    readonly COMMAND_BARRIER_BIT: number; // 64
    readonly COMPUTE_SHADER: number; // 37305
    readonly DISPATCH_INDIRECT_BUFFER: number; // 37102
    readonly DISPATCH_INDIRECT_BUFFER_BINDING: number; // 37103
    readonly DRAW_INDIRECT_BUFFER: number; // 36671
    readonly DRAW_INDIRECT_BUFFER_BINDING: number; // 36675
    readonly ELEMENT_ARRAY_BARRIER_BIT: number; // 2
    readonly FRAMEBUFFER_BARRIER_BIT: number; // 1024
    readonly IS_ROW_MAJOR: number; // 37632
    readonly LOCATION: number; // 37646
    readonly MATRIX_STRIDE: number; // 37631
    readonly MAX_ATOMIC_COUNTER_BUFFER_BINDINGS: number; // 37596
    readonly MAX_ATOMIC_COUNTER_BUFFER_SIZE: number; // 37592
    readonly MAX_COMBINED_ATOMIC_COUNTERS: number; // 37591
    readonly MAX_COMBINED_ATOMIC_COUNTER_BUFFERS: number; // 37585
    readonly MAX_COMBINED_SHADER_STORAGE_BLOCKS: number; // 37084
    readonly MAX_COMPUTE_ATOMIC_COUNTERS: number; // 33381
    readonly MAX_COMPUTE_ATOMIC_COUNTER_BUFFERS: number; // 33380
    readonly MAX_COMPUTE_IMAGE_UNIFORMS: number; // 37309
    readonly MAX_COMPUTE_SHADER_STORAGE_BLOCKS: number; // 37083
    readonly MAX_COMPUTE_SHARED_MEMORY_SIZE: number; // 33378
    readonly MAX_COMPUTE_TEXTURE_IMAGE_UNITS: number; // 37308
    readonly MAX_COMPUTE_UNIFORM_BLOCKS: number; // 37307
    readonly MAX_COMPUTE_UNIFORM_COMPONENTS: number; // 33379
    readonly MAX_COMPUTE_WORK_GROUP_COUNT: number; // 37310
    readonly MAX_COMPUTE_WORK_GROUP_INVOCATIONS: number; // 37099
    readonly MAX_COMPUTE_WORK_GROUP_SIZE: number; // 37311
    readonly MAX_FRAGMENT_ATOMIC_COUNTERS: number; // 37590
    readonly MAX_FRAGMENT_ATOMIC_COUNTER_BUFFERS: number; // 37584
    readonly MAX_FRAGMENT_SHADER_STORAGE_BLOCKS: number; // 37082
    readonly MAX_NAME_LENGTH: number; // 37622
    readonly MAX_NUM_ACTIVE_VARIABLES: number; // 37623
    readonly MAX_SHADER_STORAGE_BLOCK_SIZE: number; // 37086
    readonly MAX_SHADER_STORAGE_BUFFER_BINDINGS: number; // 37085
    readonly MAX_VERTEX_ATOMIC_COUNTERS: number; // 37586
    readonly MAX_VERTEX_ATOMIC_COUNTER_BUFFERS: number; // 37580
    readonly MAX_VERTEX_SHADER_STORAGE_BLOCKS: number; // 37078
    readonly NAME_LENGTH: number; // 37625
    readonly NUM_ACTIVE_VARIABLES: number; // 37636
    readonly OFFSET: number; // 37628
    readonly PIXEL_BUFFER_BARRIER_BIT: number; // 128
    readonly PROGRAM_INPUT: number; // 37603
    readonly PROGRAM_OUTPUT: number; // 37604
    readonly READ_ONLY: number; // 35000
    readonly READ_WRITE: number; // 35002
    readonly REFERENCED_BY_COMPUTE_SHADER: number; // 37643
    readonly REFERENCED_BY_FRAGMENT_SHADER: number; // 37642
    readonly REFERENCED_BY_VERTEX_SHADER: number; // 37638
    readonly SHADER_IMAGE_ACCESS_BARRIER_BIT: number; // 32
    readonly SHADER_STORAGE_BARRIER_BIT: number; // 8192
    readonly SHADER_STORAGE_BLOCK: number; // 37606
    readonly SHADER_STORAGE_BUFFER: number; // 37074
    readonly SHADER_STORAGE_BUFFER_BINDING: number; // 37075
    readonly SHADER_STORAGE_BUFFER_OFFSET_ALIGNMENT: number; // 37087
    readonly SHADER_STORAGE_BUFFER_SIZE: number; // 37077
    readonly SHADER_STORAGE_BUFFER_START: number; // 37076
    readonly TEXTURE_FETCH_BARRIER_BIT: number; // 8
    readonly TEXTURE_UPDATE_BARRIER_BIT: number; // 256
    readonly TOP_LEVEL_ARRAY_SIZE: number; // 37644
    readonly TOP_LEVEL_ARRAY_STRIDE: number; // 37645
    readonly TRANSFORM_FEEDBACK_BARRIER_BIT: number; // 2048
    readonly TRANSFORM_FEEDBACK_VARYING: number; // 37620
    readonly TYPE: number; // 37626
    readonly UNIFORM: number; // 37601
    readonly UNIFORM_BARRIER_BIT: number; // 4
    readonly UNIFORM_BLOCK: number; // 37602
    readonly UNSIGNED_INT_ATOMIC_COUNTER: number; // 37595
    readonly VERTEX_ATTRIB_ARRAY_BARRIER_BIT: number; // 1
    readonly WRITE_ONLY: number; // 35001
};
