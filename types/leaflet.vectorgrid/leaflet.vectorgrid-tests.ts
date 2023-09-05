import "leaflet.vectorgrid";
import * as GJ from "geojson";
import * as L from "leaflet";

const data: GJ.FeatureCollection = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            id: "20",
            properties: { name: "Kansas", density: 35.09 },
            geometry: {
                type: "Polygon",
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
data.type; // $ExpectType "FeatureCollection"
data.features[0].type; // $ExpectType "Feature"

const slicerOptions: L.VectorGrid.ProtobufOptions = null!;
const slicerFactory = L.vectorGrid.slicer;
const slicer = slicerFactory(data, slicerOptions); // $ExpectType Slicer
// test leaflet extend worked correctly
const tooltip = slicer.bindTooltip(null!); // $ExpectType Slicer
tooltip.addTo(null!); // $ExpectType Slicer

const slicerClass = L.VectorGrid.Slicer;
new slicerClass(data, slicerOptions); // $ExpectType Slicer

const protobufOptions: L.VectorGrid.ProtobufOptions = null!;
const protobuf = L.vectorGrid.protobuf;
protobuf("", protobufOptions); // $ExpectType Protobuf
// test leaflet extend worked correctly
protobuf("", protobufOptions).bindTooltip(null!); // $ExpectType Protobuf

const protobufClass = L.VectorGrid.Protobuf;
new protobufClass("", protobufOptions); // $ExpectType Protobuf

let vectorgridOptions: L.VectorGridOptions;
vectorgridOptions = {
    // L.GridLayer options
    attribution: "",
    tileSize: 256,
    opacity: 1.0,
    updateWhenIdle: true,
    updateWhenZooming: true,
    updateInterval: 200,
    zIndex: 1,
    bounds: undefined,
    minZoom: 0,
    maxZoom: undefined,
    maxNativeZoom: undefined,
    minNativeZoom: undefined,
    noWrap: false,
    pane: "tilePane",
    className: "",
    keepBuffer: 2,
    // geojsonvt.options
    tolerance: undefined,
    extent: undefined,
    buffer: undefined,
    debug: undefined,
    lineMetrics: false,
    promoteId: null,
    generateId: false,
    indexMaxZoom: undefined,
    indexMaxPoints: undefined,
    // VectorGridOptions
    rendererFactory: undefined,
    vectorTileLayerStyles: undefined,
    interactive: true,
    getFeatureId: undefined,
    filter: undefined,
};
