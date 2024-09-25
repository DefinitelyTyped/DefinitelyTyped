import { IUniform } from "three";

export const OutputShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        toneMappingExposure: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
