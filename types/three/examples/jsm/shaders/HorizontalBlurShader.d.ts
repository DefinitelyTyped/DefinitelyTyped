import { IUniform } from "three";

export const HorizontalBlurShader: {
    uniforms: {
        tDiffuse: IUniform;
        h: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
