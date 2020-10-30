import Feature, { FeatureLike } from './Feature';
import { FeatureLoader } from './featureloader';
import FeatureFormat from './format/Feature';
import Geometry from './geom/Geometry';
import Projection from './proj/Projection';
import Tile, { LoadFunction, Options } from './Tile';
import { TileCoord } from './tilecoord';
import TileState from './TileState';

export default class VectorTile extends Tile {
    constructor(
        tileCoord: TileCoord,
        state: TileState,
        src: string,
        format: FeatureFormat,
        tileLoadFunction: LoadFunction,
        opt_options?: Options,
    );
    /**
     * Get the features for this tile. Geometries will be in the view projection.
     */
    getFeatures(): FeatureLike[];
    /**
     * Get the feature format assigned for reading this tile's features.
     */
    getFormat(): FeatureFormat;
    getKey(): string;
    /**
     * Load not yet loaded URI.
     */
    load(): void;
    /**
     * Handler for tile load errors.
     */
    onError(): void;
    /**
     * Handler for successful tile load.
     */
    onLoad(features: Feature<Geometry>[], dataProjection: Projection): void;
    /**
     * Function for use in an {@link module:ol/source/VectorTile~VectorTile}'s tileLoadFunction.
     * Sets the features for the tile.
     */
    setFeatures(features: Feature<Geometry>[]): void;
    /**
     * Set the feature loader for reading this tile's features.
     */
    setLoader(loader: FeatureLoader): void;
}
