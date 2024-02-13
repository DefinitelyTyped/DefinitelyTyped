import { UniformsGroup } from "../../core/UniformsGroup.js";

import { WebGLCapabilities } from "./WebGLCapabilities.js";
import { WebGLInfo } from "./WebGLInfo.js";
import { WebGLProgram } from "./WebGLProgram.js";
import { WebGLState } from "./WebGLState.js";

export function WebGLUniformsGroups(
    gl: WebGLRenderingContext,
    info: WebGLInfo,
    capabilities: WebGLCapabilities,
    state: WebGLState,
): {
    dispose: () => void;
    update: (uniformsGroup: UniformsGroup, program: WebGLProgram) => void;
    bind: (uniformsGroup: UniformsGroup, program: WebGLProgram) => void;
};
