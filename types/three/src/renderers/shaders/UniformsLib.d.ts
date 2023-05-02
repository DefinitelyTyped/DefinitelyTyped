import { Color } from '../../math/Color';
import { Vector2 } from '../../math/Vector2';
import { Matrix3 } from '../../math/Matrix3';

// tslint:disable-next-line:interface-name
export interface IUniform<TValue = any> {
    value: TValue;
}

export const UniformsLib: {
    common: {
        diffuse: IUniform<Color>;
        opacity: IUniform<number>;
        map: IUniform<unknown>;
        mapTransform: IUniform<Matrix3>;
        alphaMap: IUniform<unknown>;
        alphaMapTransform: IUniform<Matrix3>;
        alphaTest: IUniform<number>;
    };
    specularmap: {
        specularMap: IUniform<unknown>;
        specularMapTransform: IUniform<Matrix3>;
    };
    envmap: {
        envMap: IUniform<unknown>;
        flipEnvMap: IUniform<number>;
        reflectivity: IUniform<number>;
        ior: IUniform<number>;
        refractRatio: IUniform<number>;
    };
    aomap: {
        aoMap: IUniform<unknown>;
        aoMapIntensity: IUniform<number>;
        aoMapTransform: IUniform<Matrix3>;
    };
    lightmap: {
        lightMap: IUniform<number>;
        lightMapIntensity: IUniform<number>;
        lightMapTransform: IUniform<Matrix3>;
    };
    bumpmap: {
        bumpMap: IUniform<unknown>;
        bumpMapTransform: IUniform<Matrix3>;
        bumpScale: IUniform<number>;
    };
    normalmap: {
        normalMap: IUniform<unknown>;
        normalMapTransform: IUniform<Matrix3>;
        normalScale: IUniform<Vector2>;
    };
    displacementmap: {
        displacementMap: IUniform<unknown>;
        displacementMapTransform: IUniform<Matrix3>;
        displacementScale: IUniform<number>;
        displacementBias: IUniform<number>;
    };
    emissivemap: {
        emissiveMap: IUniform<unknown>;
        emissiveMapTransform: IUniform<Matrix3>;
    };
    metalnessmap: {
        metalnessMap: IUniform<unknown>;
        metalnessMapTransform: IUniform<Matrix3>;
    };
    roughnessmap: {
        roughnessMap: IUniform<unknown>;
        roughnessMapTransform: IUniform<Matrix3>;
    };
    gradientmap: {
        gradientMap: IUniform<unknown>;
    };
    fog: {
        fogDensity: IUniform<number>;
        fogNear: IUniform<number>;
        fogFar: IUniform<number>;
        fogColor: IUniform<Color>;
    };
    lights: {
        ambientLightColor: IUniform<unknown[]>;
        lightProbe: IUniform<unknown[]>;
        directionalLights: {
            value: unknown[];
            properties: {
                direction: {};
                color: {};
            };
        };
        directionalLightShadows: {
            value: unknown[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
            };
        };
        directionalShadowMap: IUniform<unknown[]>;
        directionalShadowMatrix: IUniform<unknown[]>;
        spotLights: {
            value: unknown[];
            properties: {
                color: {};
                position: {};
                direction: {};
                distance: {};
                coneCos: {};
                penumbraCos: {};
                decay: {};
            };
        };
        spotLightShadows: {
            value: unknown[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
            };
        };
        spotLightMap: IUniform<unknown[]>;
        spotShadowMap: IUniform<unknown[]>;
        spotLightMatrix: IUniform<unknown[]>;
        pointLights: {
            value: unknown[];
            properties: {
                color: {};
                position: {};
                decay: {};
                distance: {};
            };
        };
        pointLightShadows: {
            value: unknown[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
                shadowCameraNear: {};
                shadowCameraFar: {};
            };
        };
        pointShadowMap: IUniform<unknown[]>;
        pointShadowMatrix: IUniform<unknown[]>;
        hemisphereLights: {
            value: unknown[];
            properties: {
                direction: {};
                skycolor: {};
                groundColor: {};
            };
        };
        rectAreaLights: {
            value: unknown[];
            properties: {
                color: {};
                position: {};
                width: {};
                height: {};
            };
        };
        ltc_1: IUniform<unknown>;
        ltc_2: IUniform<unknown>;
    };
    points: {
        diffuse: IUniform<Color>;
        opacity: IUniform<number>;
        size: IUniform<number>;
        scale: IUniform<number>;
        map: IUniform<unknown>;
        alphaMap: IUniform<unknown>;
        alphaTest: IUniform<number>;
        uvTransform: IUniform<Matrix3>;
    };
    sprite: {
        diffuse: IUniform<Color>;
        opacity: IUniform<number>;
        center: IUniform<Vector2>;
        rotation: IUniform<number>;
        map: IUniform<unknown>;
        mapTransform: IUniform<Matrix3>;
        alphaMap: IUniform<unknown>;
        alphaTest: IUniform<number>;
    };
};
