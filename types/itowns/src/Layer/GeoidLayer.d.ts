import Layer, { LayerOptions } from "./Layer";

export function geoidLayerIsVisible(tilelayer: any): boolean;

declare class GeoidLayer extends Layer {
    constructor(id: string, config?: LayerOptions);

    readonly isGeoidLayer: boolean;

    visible: boolean;

    // updateNodeZ(node: any): void;

    // update(context: any, layer: any, node: any, parent: any): any;
}

export default GeoidLayer;
