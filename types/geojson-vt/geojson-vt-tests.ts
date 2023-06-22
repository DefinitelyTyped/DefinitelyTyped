import * as geojsonvt from 'geojson-vt';
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
gjv.options; // $ExpectType Options
gjv.stats; // $ExpectType Record<`z${number}`, number>
gjv.total; // $ExpectType number
gjv.tiles; // $ExpectType Record<`${number}`, Tile>
gjv.tileCoords; // $ExpectType TileCoords

const tile = gjv.getTile(4, 3, 6); // $ExpectType Tile | null
tile?.features; // $ExpectType Features | undefined
tile?.numPoints; // $ExpectType number | undefined
tile?.numSimplified; // $ExpectType number | undefined
tile?.numFeatures; // $ExpectType number | undefined
tile?.source; // $ExpectType Source | null | undefined
tile?.x; // $ExpectType number | undefined
tile?.y; // $ExpectType number | undefined
tile?.z; // $ExpectType number | undefined
tile?.transformed; // $ExpectType boolean | undefined
tile?.minX; // $ExpectType number | undefined
tile?.minY; // $ExpectType number | undefined
tile?.maxX; // $ExpectType number | undefined
tile?.maxY; // $ExpectType number | undefined

gjv.splitTile(tile!, 0, 0, 0, 0, 0, 0); // $ExpectType void

// @ts-expect-error: This class is not exported in the library, nor should it be exposed incorrectly in this .d.ts
gjv.GeoJSONVT; // $ExpectType any
