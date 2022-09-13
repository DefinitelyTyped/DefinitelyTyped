import { UniformsGroup } from '../../core/UniformsGroup';

export function cloneUniforms(uniforms_src: any): any;
export function mergeUniforms(uniforms: any): any;

export function cloneUniformsGroups(src: UniformsGroup[]): UniformsGroup[];

export namespace UniformsUtils {
    export { mergeUniforms as merge, cloneUniforms as clone };
}
