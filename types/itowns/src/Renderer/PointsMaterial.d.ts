import * as THREE from "three";

interface Classification {
    visible: boolean;
    name: string;
    color: THREE.Color;
    opacity: number;
}

type ClassificationScheme = Record<number | "DEFAULT", Classification>;

export enum PNTS_MODE {
    COLOR = 0,
    INTENSITY = 1,
    CLASSIFICATION = 2,
    ELEVATION = 3,
    RETURN_NUMBER = 4,
    RETURN_TYPE = 5,
    RETURN_COUNT = 6,
    POINT_SOURCE_ID = 7,
    SCAN_ANGLE = 8,
    NORMAL = 9,
}

export enum PNTS_SHAPE {
    CIRCLE = 0,
    SQUARE = 1,
}

export enum PNTS_SIZE_MODE {
    VALUE = 0,
    ATTENUATED = 1,
}

export const ClassificationScheme: ClassificationScheme;

export interface PointsMaterialOptions extends THREE.ShaderMaterialParameters {
    size?: number;
    mode?: PNTS_MODE;
    shape?: PNTS_SHAPE;
    sizeMode?: PNTS_SIZE_MODE;
    minAttenuatedSize?: number;
    maxAttenuatedSize?: number;
    overlayColor?: THREE.Vector4;
    intensityRange?: THREE.Vector2;
    applyOpacityClassication?: boolean;
    classification?: ClassificationScheme;
    // orientedImageMaterial: THREE.Material;
    // scale: number;
    // overlayColor: THREE.Vector4;
}

declare class PointsMaterial extends THREE.RawShaderMaterial {
    constructor(options?: PointsMaterialOptions);

    size: number;
    scale: number;
    opacity: number;
    mode: PNTS_MODE;
    shape: PNTS_SHAPE;
    sizeMode: PNTS_SIZE_MODE;
    classification: Classification;
    intensityRange: THREE.Vector2;
    elevationRange: THREE.Vector2;
    angleRange: THREE.Vector2;
    picking: boolean;
    overlayColor: THREE.Vector4;
    applyOpacityClassication: boolean;

    recomputeClassification(): void;
    enablePicking(picking: boolean): void;
}

export default PointsMaterial;
