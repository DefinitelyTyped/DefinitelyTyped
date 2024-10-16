import { UniformsGroup } from "../../core/UniformsGroup.js";
import { IUniform } from "./UniformsLib.js";

export function cloneUniforms<T extends { [uniform: string]: IUniform }>(uniformsSrc: T): T;
export function mergeUniforms(uniforms: Array<{ [uniform: string]: IUniform }>): { [uniform: string]: IUniform };

export function cloneUniformsGroups(src: UniformsGroup[]): UniformsGroup[];

declare const UniformsUtils: {
    clone: typeof cloneUniforms;
    merge: typeof mergeUniforms;
};

export { UniformsUtils };
