import { IUniform } from "three";

export const RGBShiftShader: {
    uniforms: {
        tDiffuse: IUniform;
        amount: IUniform;
        angle: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
