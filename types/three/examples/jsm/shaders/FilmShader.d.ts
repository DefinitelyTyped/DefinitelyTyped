import { IUniform } from '../../../src/Three';

export const FilmShader: {
    uniforms: {
        tDiffuse: IUniform;
        time: IUniform;
        nIntensity: IUniform;
        sIntensity: IUniform;
        sCount: IUniform;
        grayscale: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
