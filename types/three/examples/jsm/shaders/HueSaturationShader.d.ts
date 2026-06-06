import { IUniform } from "three";

export const HueSaturationShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        hue: IUniform;
        saturation: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
