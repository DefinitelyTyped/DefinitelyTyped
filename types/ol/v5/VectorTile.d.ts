import { Extent } from './extent';
import Feature, { FeatureLike } from './Feature';
import { FeatureLoader } from './featureloader';
import FeatureFormat from './format/Feature';
import Layer from './layer/Layer';
import Projection from './proj/Projection';
import ReplayGroup from './render/ReplayGroup';
import Tile, { LoadFunction, Options } from './Tile';
import { TileCoord } from './tilecoord';
import TileState from './TileState';

export default class VectorTile extends Tile {
    constructor(tileCoord: TileCoord, state: TileState, src: string, format: FeatureFormat, tileLoadFunction: LoadFunction, opt_options?: Options);
    getExtent(): Extent;
    getFeatures(): FeatureLike[];
    getFormat(): FeatureFormat;
    getProjection(): Projection;
    getReplayGroup(layer: Layer, key: string): ReplayGroup;
    onError(): void;
    onLoad(features: Feature[], dataProjection: Projection, extent: Extent): void;
    setExtent(extent: Extent): void;
    setFeatures(features: Feature[]): void;
    setLoader(loader: FeatureLoader): void;
    setProjection(projection: Projection): void;
    setReplayGroup(layer: Layer, key: string, replayGroup: ReplayGroup): void;
}
