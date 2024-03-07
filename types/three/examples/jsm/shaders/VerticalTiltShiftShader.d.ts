import { IUniform } from "three";

export const VerticalTiltShiftShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        v: IUniform;
        r: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
