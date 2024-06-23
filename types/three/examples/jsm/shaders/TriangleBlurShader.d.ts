import { IUniform } from "three";

export const TriangleBlurShader: {
    name: string;
    uniforms: {
        texture: IUniform;
        delta: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
