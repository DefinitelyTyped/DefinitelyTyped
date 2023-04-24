import { UniformsGroup } from '../../core/UniformsGroup';

import { WebGLCapabilities } from './WebGLCapabilities';
import { WebGLInfo } from './WebGLInfo';
import { WebGLProgram } from './WebGLProgram';
import { WebGLState } from './WebGLState';

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
