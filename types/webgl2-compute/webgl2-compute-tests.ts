window.onload = () => {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const gl: WebGL2ComputeRenderingContext | null = canvas.getContext("webgl2-compute");

    if (!(gl instanceof WebGL2ComputeRenderingContext)) {
        console.log("WebGL2 Compute not available");
        return;
    }

    const maxComputeUniformBlocks = gl.getParameter(gl.MAX_COMPUTE_UNIFORM_BLOCKS);

    if (!maxComputeUniformBlocks) {
        console.log("Problem with max uniform blocks");
        return;
    }

    const maxShaderStorageBlocks = gl.getParameter(gl.MAX_COMPUTE_SHADER_STORAGE_BLOCKS);

    if (!maxShaderStorageBlocks) {
        console.log("Problem with max shader storage blocks");
        return;
    }

    const maxWorkGroupInvocations = gl.getParameter(gl.MAX_COMPUTE_WORK_GROUP_INVOCATIONS);

    if (!maxWorkGroupInvocations) {
        console.log("Problem with max work group invocations");
        return;
    }

    if (typeof gl.dispatchCompute !== "function") {
        console.log("Problem with dispatchCompute");
        return;
    }

    console.log("Success!");
};
