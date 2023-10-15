import {
    AdditiveBlending,
    CustomBlending,
    MultiplyBlending,
    NoBlending,
    NormalBlending,
    SubtractiveBlending,
} from "../core/three/";
export interface SupportedMaterialBlendingModes {
    AdditiveBlending: typeof AdditiveBlending;
    CustomBlending: typeof CustomBlending;
    MultiplyBlending: typeof MultiplyBlending;
    NoBlending: typeof NoBlending;
    NormalBlending: typeof NormalBlending;
    SubtractiveBlending: typeof SubtractiveBlending;
}

export const DEFAULT_RATE_NUM_PAN: 1;
export const DEFAULT_RATE_TIME_PAN: 1;

export interface SUPPORTED_MATERIAL_BLENDING_MODES {
    AdditiveBlending: typeof AdditiveBlending;
    CustomBlending: typeof CustomBlending;
    MultiplyBlending: typeof MultiplyBlending;
    NoBlending: typeof NoBlending;
    NormalBlending: typeof NormalBlending;
    SubtractiveBlending: typeof SubtractiveBlending;
}
export const SUPPORTED_MATERIAL_BLENDING_MODES: SUPPORTED_MATERIAL_BLENDING_MODES;

export interface DEFAULT_MATERIAL_PROPERTIES {
    color: number | string;
    blending: SupportedMaterialBlendingModes["AdditiveBlending"];
    fog: boolean;
}
export const DEFAULT_MATERIAL_PROPERTIES: DEFAULT_MATERIAL_PROPERTIES;

export interface DEFAULT_JSON_MATERIAL_PROPERTIES {
    color: number | string;
    blending: SupportedMaterialBlendingModes["AdditiveBlending"];
    fog: boolean;
}
export const DEFAULT_JSON_MATERIAL_PROPERTIES: DEFAULT_JSON_MATERIAL_PROPERTIES;
