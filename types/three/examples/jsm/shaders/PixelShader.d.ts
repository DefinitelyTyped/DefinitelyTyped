import { IUniform } from '../../../src/Three';

export const PixelShader: {
    uniforms: {
        tDiffuse: IUniform;
        resolution: IUniform;
        pixelSize: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
