import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import { ReadOptions, WriteOptions } from './Feature';
import TextFeature from './TextFeature';

export interface Options {
    altitudeMode?: IGCZ | string;
}
export enum IGCZ {
    BAROMETRIC = 'barometric',
    GPS = 'gps',
    NONE = 'none',
}
export default class IGC extends TextFeature {
    constructor(opt_options?: Options);
    protected readFeatureFromText(text: string, opt_options?: ReadOptions): Feature<Geometry>;
    protected readFeaturesFromText(text: string, opt_options?: ReadOptions): Feature<Geometry>[];
    protected readGeometryFromText(text: string, opt_options?: ReadOptions): Geometry;
    protected writeFeaturesText(features: Feature<Geometry>[], opt_options?: WriteOptions): string;
    protected writeFeatureText(feature: Feature<Geometry>, opt_options?: WriteOptions): string;
    protected writeGeometryText(geometry: Geometry, opt_options?: WriteOptions): string;
}
