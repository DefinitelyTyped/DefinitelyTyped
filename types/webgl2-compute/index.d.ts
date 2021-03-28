// Type definitions for non-npm package webgl2-compute 0.0
// Project: https://www.khronos.org/registry/webgl/specs/latest/2.0-compute/
// Definitions by: Aneta Suns <https://github.com/suns-echoes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

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

    bindImageTexture(unit: number, texture: WebGLTexture | null, level: number, layered: boolean, layer: number, access: number, format: number): void;

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
