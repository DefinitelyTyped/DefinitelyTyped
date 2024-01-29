import * as THREE from "three";
import Style from "../Core/Style";
import { Extent, FeatureCollection } from "../Main";
import Layer, { LayerOptions } from "./Layer";
// import { RasterColorTile } from "../Renderer/RasterTile";

type EffectType = 0 | 1 | 2 | 3; // TODO: enum

export interface ColorLayerOptions extends LayerOptions {
    style?: Style;
    visible?: boolean;
    opacity?: number;
    transparent?: boolean;
    magFilter?: THREE.MagnificationTextureFilter;
    minFilter?: THREE.MinificationTextureFilter;
    effect_type?: EffectType;
    effect_parameter?: number;
    noTextureParentOutsideLimit?: boolean;
}

declare class ColorLayer extends Layer {
    constructor(id: string, config?: ColorLayerOptions);

    readonly isColorLayer: boolean;

    style: Style;
    visible: boolean; // TODO: event
    opacity: number; // TODO: event
    sequence: number; // TODO: event
    transparent: boolean;
    noTextureParentOutsideLimit: boolean;
    // buildExtent: boolean;
    // structure: string;
    magFilter?: THREE.MagnificationTextureFilter;
    minFilter?: THREE.MinificationTextureFilter;
    effect_type?: EffectType;
    effect_parameter?: number;

    convert(
        data: FeatureCollection | THREE.Texture,
        extentDestination: Extent,
    ): THREE.Texture;

    // setupRasterNode(node: TileMesh): RasterColorTile; // TODO

    // update(context: any, layer: any, node: any, parent: any): any;
}
export default ColorLayer;
