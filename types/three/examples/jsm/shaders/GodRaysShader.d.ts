import { IUniform } from '../../../src/Three.js';

export const GodRaysDepthMaskShader: {
    name: string;
    uniforms: {
        tInput: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const GodRaysGenerateShader: {
    name: string;
    uniforms: {
        tInput: IUniform;
        fStepSize: IUniform;
        vSunPositionScreenSpace: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const GodRaysCombineShader: {
    name: string;
    uniforms: {
        tColors: IUniform;
        tGodRays: IUniform;
        fGodRayIntensity: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const GodRaysFakeSunShader: {
    name: string;
    uniforms: {
        vSunPositionScreenSpace: IUniform;
        fAspect: IUniform;
        sunColor: IUniform;
        bgColor: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
