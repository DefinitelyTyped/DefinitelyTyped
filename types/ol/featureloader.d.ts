import { Extent } from './extent';
import FeatureFormat from './format/Feature';
import Geometry from './geom/Geometry';
import Projection from './proj/Projection';
import VectorSource from './source/Vector';
import VectorTile from './VectorTile';

export type FeatureLoader = (this: VectorSource<Geometry> | VectorTile, p0: Extent, p1: number, p2: Projection) => void;
export type FeatureUrlFunction = (p0: Extent, p1: number, p2: Projection) => string;
export function loadFeaturesXhr(
    url: string | FeatureUrlFunction,
    format: FeatureFormat,
    success: () => void,
    failure: (this: VectorSource<Geometry>) => void,
): FeatureLoader;
export function setWithCredentials(xhrWithCredentials: boolean): void;
export function xhr(url: string | FeatureUrlFunction, format: FeatureFormat): FeatureLoader;
