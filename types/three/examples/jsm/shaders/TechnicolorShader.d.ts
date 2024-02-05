import { IUniform } from "../../../src/Three.js";

export const TechnicolorShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
