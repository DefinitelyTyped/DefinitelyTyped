import * as cover from '@mapbox/tile-cover';

const geom: GeoJSON.Point = {
    type: 'Point',
    coordinates: [1, 4]
};
const limits: cover.Limits = { min_zoom: 1, max_zoom: 15 };
const cellFeatures = cover.geojson(geom, limits);

const tiles = cover.tiles(geom, limits);
for (const coord of tiles) {
    const x = coord[0];
    const y = coord[1];
    const z = coord[2];
}

const quadKeys = cover.indexes(geom, limits);
for (const key of quadKeys) {
    const length = key.length;
}
