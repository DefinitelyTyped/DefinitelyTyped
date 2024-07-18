import { Color, ColorRepresentation, ShaderMaterial, ShaderMaterialParameters, Vector2 } from "three";

export interface LineMaterialParameters extends ShaderMaterialParameters {
    alphaToCoverage?: boolean | undefined;
    color?: ColorRepresentation | undefined;
    dashed?: boolean | undefined;
    dashScale?: number | undefined;
    dashSize?: number | undefined;
    dashOffset?: number | undefined;
    gapSize?: number | undefined;
    resolution?: Vector2 | undefined;
    worldUnits?: boolean | undefined;
}

export class LineMaterial extends ShaderMaterial {
    constructor(parameters?: LineMaterialParameters);
    color: Color;
    dashed: boolean;
    dashScale: number;
    dashSize: number;
    dashOffset: number;
    gapSize: number;
    opacity: number;
    readonly isLineMaterial: true;
    linewidth: number;
    resolution: Vector2;
    alphaToCoverage: boolean;
    worldUnits: boolean;
}
