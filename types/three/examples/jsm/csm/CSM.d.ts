import { Camera, Vector3, DirectionalLight, Material, Vector2, Object3D } from '../../../src/Three.js';

export type CSMMode = 'uniform' | 'logarithmic' | 'practical' | 'custom';

export interface CSMParameters {
    camera?: Camera;
    parent?: Object3D;
    cascades?: number;
    maxFar?: number;
    mode?: CSMMode;
    shadowMapSize?: number;
    shadowBias?: number;
    lightDirection?: Vector3;
    lightIntensity?: number;
    lightNear?: number;
    lightFar?: number;
    lightMargin?: number;
    customSplitsCallback?: (cascades: number, cameraNear: number, cameraFar: number, breaks: number[]) => void;
}

export class CSM {
    constructor(data: CSMParameters);
    camera: Camera;
    parent: Object3D;
    cascades: number;
    maxFar: number;
    mode: CSMMode;
    shadowMapSize: number;
    shadowBias: number;
    lightDirection: Vector3;
    lightIntensity: number;
    lightNear: number;
    lightFar: number;
    lightMargin: number;
    customSplitsCallback: (cascades: number, cameraNear: number, cameraFar: number, breaks: number[]) => void;
    fade: boolean;
    mainFrustum: CSMFrustrum;
    frustums: CSMFrustrum[];
    breaks: number[];
    lights: DirectionalLight[];
    shaders: Map<unknown, string>;
    createLights(): void;
    initCascades(): void;
    updateShadowBounds(): void;
    getBreaks(): void;
    update(): void;
    injectInclude(): void;
    setupMaterial(material: Material): void;
    updateUniforms(): void;
    getExtendedBreaks(target: Vector2[]): void;
    updateFrustums(): void;
    remove(): void;
    dispose(): void;
}

import CSMFrustrum from './CSMFrustum.js';
