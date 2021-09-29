/**
 * Simple(OpenLayers like)layer switcher, includes base layers, overlays, geo images etc. groups.
 * @class
 * @extends {og.control.Control}
 * @param {Object} [options] - Control options.
 */
export class LayerSwitcher {
    static set numSwitches(arg: any);
    static get numSwitches(): any;
    constructor(options: any);
    dialog: HTMLDivElement;
    baseLayersDiv: HTMLDivElement;
    overlaysDiv: HTMLDivElement;
    _id: number;
    oninit(): void;
    onLayerAdded(layer: any): void;
    onLayerRemoved(layer: any): void;
    addSwitcher(type: any, obj: any, container: any, id: any): void;
    createBaseLayersContainer(): void;
    createOverlaysContainer(): void;
    createDialog(): void;
    createSwitcher(): void;
}
