import { IUniform } from '../../../src/Three';

export const WaterRefractionShader: {
    uniforms: {
        color: IUniform;
        time: IUniform;
        tDiffuse: IUniform;
        tDudv: IUniform;
        textureMatrix: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
