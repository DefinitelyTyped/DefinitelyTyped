import Feature, { FeatureCollection } from "../Core/Feature";
import Coordinates from "../Core/Geographic/Coordinates";

declare namespace _default {
    function filterFeaturesUnderCoordinate(
        coordinate: Coordinates,
        collection: Feature | FeatureCollection,
        epsilon?: number,
    ): Feature[];
}
export default _default;
