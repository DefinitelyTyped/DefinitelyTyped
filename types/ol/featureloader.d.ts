import { Extent } from './extent';
import FeatureFormat from './format/Feature';
import Projection from './proj/Projection';
import VectorSource from './source/Vector';
import VectorTile from './VectorTile';

export function loadFeaturesXhr(url: string | FeatureUrlFunction, format: FeatureFormat, success: (() => void) | (() => void), failure: ((this: VectorSource) => void) | (() => void)): FeatureLoader;
export function xhr(url: string | FeatureUrlFunction, format: FeatureFormat): FeatureLoader;
export type FeatureLoader = ((this: VectorSource | VectorTile, param1: Extent, param2: number, param3: Projection) => void);
export type FeatureUrlFunction = ((param0: Extent, param1: number, param2: Projection) => string);
