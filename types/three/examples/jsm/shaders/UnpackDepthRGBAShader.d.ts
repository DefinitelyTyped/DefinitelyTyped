import { IUniform } from "three";

export const UnpackDepthRGBAShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        opacity: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
