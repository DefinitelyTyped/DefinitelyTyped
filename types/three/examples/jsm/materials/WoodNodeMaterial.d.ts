import * as THREE from "three";

export type WoodGenus =
    | "teak"
    | "walnut"
    | "white_oak"
    | "pine"
    | "poplar"
    | "maple"
    | "red_oak"
    | "cherry"
    | "cedar"
    | "mahogany";
export type WoodFinish = "raw" | "matte" | "semigloss" | "gloss";

export const WoodGenuses: WoodGenus[];
export const Finishes: WoodFinish[];

export interface WoodParameters {
    transformationMatrix: THREE.Matrix4;
    centerSize: number;
    largeWarpScale: number;
    largeGrainStretch: number;
    smallWarpStrength: number;
    smallWarpScale: number;
    fineWarpStrength: number;
    fineWarpScale: number;
    ringThickness: number;
    ringBias: number;
    ringSizeVariance: number;
    ringVarianceScale: number;
    barkThickness: number;
    splotchScale: number;
    splotchIntensity: number;
    cellScale: number;
    cellSize: number;
    darkGrainColor: string | THREE.Color;
    lightGrainColor: string | THREE.Color;
    genus: WoodGenus;
    finish: WoodFinish;
    clearcoat: number;
    clearcoatRoughness: number;
    clearcoatDarken: number;
}

export function GetWoodPreset(genus: WoodGenus, finish: WoodFinish): WoodParameters;

export class WoodNodeMaterial extends THREE.MeshPhysicalMaterial {
    readonly isWoodNodeMaterial: true;

    transformationMatrix: THREE.Matrix4;
    centerSize: number;
    largeWarpScale: number;
    largeGrainStretch: number;
    smallWarpStrength: number;
    smallWarpScale: number;
    fineWarpStrength: number;
    fineWarpScale: number;
    ringThickness: number;
    ringBias: number;
    ringSizeVariance: number;
    ringVarianceScale: number;
    barkThickness: number;
    splotchScale: number;
    splotchIntensity: number;
    cellScale: number;
    cellSize: number;
    darkGrainColor: THREE.Color;
    lightGrainColor: THREE.Color;
    clearcoatDarken: number;

    constructor(params?: Partial<WoodParameters>);

    static fromPreset(genus?: WoodGenus, finish?: WoodFinish): WoodNodeMaterial;
}
