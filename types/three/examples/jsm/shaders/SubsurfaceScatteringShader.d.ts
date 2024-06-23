import { IUniform } from "three";

export const SubsurfaceScatteringShader: {
    name: string;
    uniforms: {
        alphaMap: IUniform;
        ambientLightColor: IUniform;
        color: IUniform;
        diffuse: IUniform;
        directionalLights: IUniform;
        directionalShadowMap: IUniform;
        directionalShadowMatrix: IUniform;
        emissive: IUniform;
        hemisphereLights: IUniform;
        lightProbe: IUniform;
        map: IUniform;
        opacity: IUniform;
        pointLights: IUniform;
        pointShadowMap: IUniform;
        pointShadowMatrix: IUniform;
        rectAreaLights: IUniform;
        shininess: IUniform;
        specular: IUniform;
        spotLights: IUniform;
        spotShadowMap: IUniform;
        spotShadowMatrix: IUniform;
        thicknessAmbient: IUniform;
        thicknessAttenuation: IUniform;
        thicknessColor: IUniform;
        thicknessDistortion: IUniform;
        thicknessMap: IUniform;
        thicknessPower: IUniform;
        thicknessScale: IUniform;
        uvTransform: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
