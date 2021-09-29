export function lighting(options: any): Lighting;
/**
 * Helps to setup lighting.
 * @class
 * @extends {og.control.Control}
 * @param {Object} [options] -
 */
export class Lighting {
    constructor(options?: {});
    _selectedLayer: any;
    bindLayer(layer: any): void;
    oninit(): void;
    _fetchLayers(): void;
    _onLayerAdd(e: any): void;
    _onLayerRemove(e: any): void;
}
