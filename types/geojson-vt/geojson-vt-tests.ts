import geojsonvt from 'geojson-vt';
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

const GeoJsonVTOptions: geojsonvt.Options = {
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
const tiles = gjv.getTile(4, 3, 6); // $ExpectType Tile | null
tiles?.features; // $ExpectType Features | undefined
tiles?.numPoints; // $ExpectType number | undefined
tiles?.numSimplified; // $ExpectType number | undefined
tiles?.numFeatures; // $ExpectType number | undefined
tiles?.source; // $ExpectType Source | null | undefined
tiles?.x; // $ExpectType number | undefined
tiles?.y; // $ExpectType number | undefined
tiles?.z; // $ExpectType number | undefined
tiles?.transformed; // $ExpectType boolean | undefined
tiles?.minX; // $ExpectType number | undefined
tiles?.minY; // $ExpectType number | undefined
tiles?.maxX; // $ExpectType number | undefined
tiles?.maxY; // $ExpectType number | undefined
