import { IUniform } from "../../../src/Three.js";

export const ConvolutionShader: {
    defines: {
        KERNEL_SIZE_FLOAT: string;
        KERNEL_SIZE_INT: string;
    };
    uniforms: {
        tDiffuse: IUniform;
        uImageIncrement: IUniform;
        cKernel: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;

    buildKernel(sigma: number): number[];
};
