import XMLFeature from './XMLFeature';

export interface Options {
    layers?: string[] | undefined;
}
export default class WMSGetFeatureInfo extends XMLFeature {
    constructor(opt_options?: Options);
    getLayers(): string[];
    setLayers(layers: string[]): void;
}
