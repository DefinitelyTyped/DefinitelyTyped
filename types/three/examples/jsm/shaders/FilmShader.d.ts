import { IUniform } from "three";

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
