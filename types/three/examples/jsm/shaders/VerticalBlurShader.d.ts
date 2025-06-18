import { IUniform } from "three";

export const VerticalBlurShader: {
    uniforms: {
        tDiffuse: IUniform;
        v: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
