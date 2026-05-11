import { IUniform } from "three";

export const AfterimageShader: {
    name: string;
    uniforms: {
        damp: IUniform;
        tOld: IUniform;
        tNew: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
