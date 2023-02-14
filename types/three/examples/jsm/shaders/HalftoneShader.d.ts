import { IUniform } from '../../../src/Three';

export const HalftoneShader: {
    uniforms: {
        tDiffuse: IUniform;
        shape: IUniform;
        radius: IUniform;
        rotateR: IUniform;
        rotateG: IUniform;
        rotateB: IUniform;
        scatter: IUniform;
        width: IUniform;
        height: IUniform;
        blending: IUniform;
        blendingMode: IUniform;
        greyscale: IUniform;
        disable: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
