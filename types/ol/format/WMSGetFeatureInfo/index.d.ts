declare module 'ol/format/WMSGetFeatureInfo' {

  import XMLFeature from 'ol/format/XMLFeature';

  export interface Options {
    layers?: string[];
  }

  export default class WMSGetFeatureInfo extends XMLFeature {
    constructor(opt_options?: Options);
    getLayers(): string[];
    setLayers(layers: string[]): void;
  }

}
