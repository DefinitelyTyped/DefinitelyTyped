import { IUniform, Texture } from '../../../src/Three';

export const ACESFilmicToneMappingShader: {
    uniforms: {
        tDiffuse: IUniform<Texture>;
        exposure: IUniform<number>;
    };
    vertexShader: string;
    fragmentShader: string;
};
