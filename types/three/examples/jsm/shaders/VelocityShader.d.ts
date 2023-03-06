import { IUniform, UniformsLib } from '../../../src/Three';

export const VelocityShader: {
    uniforms: typeof UniformsLib['common'] &
        typeof UniformsLib['displacementmap'] & {
            modelMatrixPrev: IUniform;
            currentProjectionViewMatrix: IUniform;
            previousProjectionViewMatrix: IUniform;
        };

    fragmentShader: string;
    vertexShader: string;
};
