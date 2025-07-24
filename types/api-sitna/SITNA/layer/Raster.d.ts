import { Layer, LayerOptions } from './Layer';

export interface RasterOptions extends LayerOptions {
    layerNames?: string | string[];
    url?: string;
    filter?: string | object;
    format?: string;
    hideTree?: boolean;
    isBase?: boolean;
    isDefault?: boolean;
    matrixSet?: string;
    overviewMapLayer?: LayerOptions | string;
    thumbnail?: string;
    title?: string;
    transparent?: boolean;
    type?: string;
    params?: any;
    ignorePrefixes?: boolean;
    encoding?: string;
    method?: string;
    fallbackLayer?: LayerOptions | Layer | string;
    inverseTree?: boolean;
}

export class Raster extends Layer {

    constructor(options?: RasterOptions);

}

export default Raster;