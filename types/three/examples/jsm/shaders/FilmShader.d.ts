import { IUniform } from "../../../src/Three.js";

export const FilmShader: {
    uniforms: {
        tDiffuse: IUniform;
        time: IUniform;
        intensity: IUniform;
        grayscale: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
