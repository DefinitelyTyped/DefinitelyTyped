import { IUniform } from "../../../src/Three.js";

export const DOFMipMapShader: {
    name: string;
    uniforms: {
        tColor: IUniform;
        tDepth: IUniform;
        focus: IUniform;
        maxblur: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
