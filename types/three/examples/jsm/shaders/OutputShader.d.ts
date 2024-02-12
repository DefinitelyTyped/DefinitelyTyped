import { IUniform } from "../../../src/Three.js";

export const OutputShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        toneMappingExposure: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
