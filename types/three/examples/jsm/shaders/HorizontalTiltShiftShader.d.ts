import { IUniform } from "../../../src/Three.js";

export const HorizontalTiltShiftShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        h: IUniform;
        r: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
