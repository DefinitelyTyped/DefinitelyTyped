import * as L from 'leaflet';
import * as GeoJSON from 'geojson';

// Canvas Tile

declare const coords: L.Coords;

// $ExpectType Tile
const canvasTile = L.canvas.tile(coords, L.point(0, 0), {
    tolerance: 10,
});

// $ExpectType Coords
canvasTile.getCoord();

// $ExpectType HTMLCanvasElement
canvasTile.getContainer();

// $ExpectType Coords
canvasTile.getOffset();

// SVG Tile

// $ExpectType Tile
const svgTile = L.svg.tile(coords, L.point(0, 0), {
    tolerance: 10,
});

// $ExpectType Coords
svgTile.getCoord();

// $ExpectType HTMLElement & SVGElement
svgTile.getContainer();

// VectorGrid

// Should not be able to instantiate abstract VectorGrid class
// @ts-expect-error
new L.VectorGrid();

const vectorGridOptions: L.VectorGrid.Options = {
    rendererFactory: L.svg.tile,
    vectorTileLayerStyles: {
        test: {
            fill: true,
            fillColor: '#fff',
            attribution: 'test',
        },
    },
    interactive: true,

    // $ExpectType (feature: Feature<Geometry, GeoJsonProperties>) => string | number
    getFeatureId(feature) {
        return '__test__' as string | number;
    },

    // Option available only in L.VectorGrid.Slicer
    // @ts-expect-error
    vectorTileLayerName: 'sliced',
};

// $ExpectType VectorGrid
const vectorGrid = L.vectorGrid(vectorGridOptions);

// $ExpectType VectorGrid
vectorGrid.setFeatureStyle(123, {
    color: 'red',
});

// $ExpectType string[]
vectorGrid.getDataLayerNames();

// Slicer

// Must pass a GeoJSON or TopoJSON object
// @ts-expect-error
L.vectorGrid.slicer();
// @ts-expect-error
L.vectorGrid.slicer(L.featureGroup());
// @ts-expect-error
L.vectorGrid.slicer(L.geoJSON());

const geoJsonDocument: GeoJSON.FeatureCollection = {
    type: 'FeatureCollection',
    features: [],
};

const slicerOptions: L.VectorGrid.SlicerOptions = {
    rendererFactory: L.canvas.tile,
    vectorTileLayerStyles: {
        test: {
            fill: true,
        },
    },
    interactive: true,

    // $ExpectType (feature: Feature<Geometry, GeoJsonProperties>) => string | number
    getFeatureId(feature) {
        return '__test__' as string | number;
    },

    vectorTileLayerName: 'sliced',
};

// $expectType Slicer
const slicer = L.vectorGrid.slicer(geoJsonDocument, slicerOptions);

// $ExpectType Slicer
slicer.setFeatureStyle(123, {
    color: 'red',
});

// $ExpectType string[]
slicer.getDataLayerNames();

// Protobuf

const protobufOptions: L.VectorGrid.ProtobufOptions = {
    rendererFactory: L.svg.tile,
    vectorTileLayerStyles: {
        test: {
            fill: true,
        },
    },
    interactive: true,

    // $ExpectType (feature: Feature<Geometry, GeoJsonProperties>) => string | number
    getFeatureId(feature) {
        return '__test__' as string | number;
    },

    subdomains: ['a', 'b'],
};

// Must pass at least the URL
// @ts-expect-error
L.vectorGrid.protobuf();

// $ExpectType Protobuf
const protobuf = L.vectorGrid.protobuf('someUrl', protobufOptions);

// $ExpectType Protobuf
protobuf.setFeatureStyle(123, {
    color: 'red',
});

// $ExpectType string[]
protobuf.getDataLayerNames();
