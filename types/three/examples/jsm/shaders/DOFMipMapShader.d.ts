import { IUniform } from "three";

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
