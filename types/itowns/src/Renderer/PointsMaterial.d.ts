import * as THREE from "three";

export enum PNTS_MODE {
    COLOR = 0,
    INTENSITY = 1,
    CLASSIFICATION = 2,
    NORMAL = 3,
}

interface Classification {
    visible: boolean;
    name: string;
    color: THREE.Color;
    opacity: number;
}

type ClassificationScheme = Record<number | "DEFAULT", Classification>;

export const ClassificationScheme: ClassificationScheme;

export interface PointsMaterialOptions extends THREE.ShaderMaterialParameters {
    size?: number;
    mode?: PNTS_MODE;
    overlayColor?: THREE.Vector4;
    intensityRange?: THREE.Vector2;
    applyOpacityClassication?: boolean;
    classification?: ClassificationScheme;
    // oiMaterial: THREE.Material;
    // scale: number;
    // overlayColor: THREE.Vector4;
}

declare class PointsMaterial extends THREE.RawShaderMaterial {
    constructor(options?: PointsMaterialOptions);

    scale: number;
    classification: Classification;
    size: number;
    mode: PNTS_MODE;
    picking: boolean;
    opacity: number;
    overlayColor: THREE.Vector4;
    intensityRange: THREE.Vector2;
    applyOpacityClassication: boolean;

    recomputeClassification(): void;

    // onBeforeCompile(shader: any, render: any): void;

    enablePicking(picking: boolean): void;

    // udpdate(source: any): void;
}

export default PointsMaterial;
