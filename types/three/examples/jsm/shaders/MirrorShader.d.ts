import { IUniform } from "three";

export const MirrorShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        side: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
