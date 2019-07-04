import { Extent } from 'ol/extent';
import Feature, { FeatureLike } from 'ol/Feature';
import { FeatureLoader } from 'ol/featureloader';
import FeatureFormat from 'ol/format/Feature';
import Layer from 'ol/layer/Layer';
import Projection from 'ol/proj/Projection';
import ReplayGroup from 'ol/render/ReplayGroup';
import Tile, { LoadFunction, Options } from 'ol/Tile';
import { TileCoord } from 'ol/tilecoord';
import TileState from 'ol/TileState';
export default class VectorTile extends Tile {
    constructor(tileCoord: TileCoord, state: TileState, src: string, format: FeatureFormat, tileLoadFunction: LoadFunction, opt_options?: Options);
    onLoad(features: Feature[], dataProjection: Projection, extent: Extent): void;
    getExtent(): Extent;
    getFormat(): FeatureFormat;
    getProjection(): Projection;
    getReplayGroup(layer: Layer, key: string): ReplayGroup;
    onError(): void;
    getFeatures(): FeatureLike[];
    setExtent(extent: Extent): void;
    setFeatures(features: Feature[]): void;
    setLoader(loader: FeatureLoader): void;
    setProjection(projection: Projection): void;
    setReplayGroup(layer: Layer, key: string, replayGroup: ReplayGroup): void;
}
