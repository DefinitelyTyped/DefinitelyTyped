import { IUniform } from '../../../src/Three';

export const KaleidoShader: {
    uniforms: {
        tDiffuse: IUniform;
        sides: IUniform;
        angle: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
