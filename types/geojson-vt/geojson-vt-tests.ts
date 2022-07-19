import geojsonvt, { GeoJSONVTOptions } from 'geojson-vt';
import * as GJ from 'geojson';

const GeoJSONData: GJ.FeatureCollection = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            id: '20',
            properties: { name: 'Kansas', density: 35.09 },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [-101.90605, 40.001626],
                        [-95.306337, 40.001626],
                        [-95.207752, 39.908518],
                        [-94.884612, 39.831841],
                        [-95.109167, 39.541563],
                        [-94.983197, 39.442978],
                        [-94.824366, 39.20747],
                        [-94.610765, 39.158177],
                        [-94.616242, 37.000263],
                        [-100.087706, 37.000263],
                        [-102.042974, 36.994786],
                        [-102.053927, 40.001626],
                        [-101.90605, 40.001626],
                    ],
                ],
            },
        },
    ],
};

const GeoJsonVTOptions: GeoJSONVTOptions = {
    maxZoom: 14, // max zoom to preserve detail on; can't be higher than 24
    tolerance: 3, // simplification tolerance (higher means simpler)
    extent: 4096, // tile extent (both width and height)
    buffer: 64, // tile buffer on each side
    debug: 0, // logging level (0 to disable, 1 or 2)
    lineMetrics: false, // whether to enable line metrics tracking for LineString/MultiLineString features
    promoteId: null, // name of a feature property to promote to feature.id. Cannot be used with `generateId`
    generateId: false, // whether to generate feature ids. Cannot be used with `promoteId`
    indexMaxZoom: 5, // max zoom in the initial tile index
    indexMaxPoints: 100000, // max number of points per tile in the index
};

const gjv = geojsonvt(GeoJSONData, GeoJsonVTOptions);
gjv; // $ExpectType GeoJSONVT
const tiles = gjv.getTile(4, 3, 6); // $ExpectType GeoJSONTile
tiles?.features; // $ExpectType Features
tiles?.numPoints; // $ExpectType number
tiles?.numSimplified; // $ExpectType number
tiles?.numFeatures; // $ExpectType number
tiles?.source; // $ExpectType Source
tiles?.x; // $ExpectType number
tiles?.y; // $ExpectType number
tiles?.z; // $ExpectType number
tiles?.transformed; // $ExpectType boolean
tiles?.minX; // $ExpectType number
tiles?.minY; // $ExpectType number
tiles?.maxX; // $ExpectType number
tiles?.maxY; // $ExpectType number

const tilesNull = gjv.getTile(100, 100, 100); // $ExpectType null
// @ts-expect-error: Known error
tilesNull.x; // $ExpectType unknown
