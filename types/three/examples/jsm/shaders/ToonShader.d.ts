import { IUniform } from "../../../src/Three.js";

export const ToonShader1: {
    uniforms: {
        uDirLightPos: IUniform;
        uDirLightColor: IUniform;
        uAmbientLightColor: IUniform;
        uBaseColor: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const ToonShader2: {
    uniforms: {
        uDirLightPos: IUniform;
        uDirLightColor: IUniform;
        uAmbientLightColor: IUniform;
        uBaseColor: IUniform;
        uLineColor1: IUniform;
        uLineColor2: IUniform;
        uLineColor3: IUniform;
        uLineColor4: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const ToonShaderHatching: {
    uniforms: {
        uDirLightPos: IUniform;
        uDirLightColor: IUniform;
        uAmbientLightColor: IUniform;
        uBaseColor: IUniform;
        uLineColor1: IUniform;
        uLineColor2: IUniform;
        uLineColor3: IUniform;
        uLineColor4: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const ToonShaderDotted: {
    uniforms: {
        uDirLightPos: IUniform;
        uDirLightColor: IUniform;
        uAmbientLightColor: IUniform;
        uBaseColor: IUniform;
        uLineColor1: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
