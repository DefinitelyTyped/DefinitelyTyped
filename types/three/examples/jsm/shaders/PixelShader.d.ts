import { Uniform } from '../../../src/Three';

export const PixelShader: {
    uniforms: {
        tDiffuse: Uniform;
        resolution: Uniform;
        pixelSize: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
