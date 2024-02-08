import { IUniform } from "../../../src/Three.js";

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
