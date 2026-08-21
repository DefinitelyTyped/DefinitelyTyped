import { IUniform } from "three";

export const ColorCorrectionShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        powRGB: IUniform;
        mulRGB: IUniform;
        addRGB: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
