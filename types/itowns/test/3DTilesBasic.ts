import * as itowns from "itowns";
import { OpenSM } from "./jsonLayers";

const placement = {
    coord: new itowns.Coordinates("EPSG:4326", -75.6114, 40.03428, 0),
    range: 4000,
    tilt: 22,
    heading: 180,
};

const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;

const view = new itowns.GlobeView(viewerDiv, placement);
(view.camera.camera3D as THREE.PerspectiveCamera).near = 5;

itowns.Fetcher.json("./layers/JSONLayers/OPENSM.json").then(function _(json: OpenSM) {
    const config = {
        ...json,
        source: new itowns.TMSSource(json.source),
    };
    const layer = new itowns.ColorLayer("Ortho", config);
    view.addLayer(layer);
});

// Create a new Layer 3d-tiles For DiscreteLOD
// -------------------------------------------
const $3dTilesLayerDiscreteLOD = new itowns.C3DTilesLayer("3d-tiles-discrete-lod", {
    name: "DiscreteLOD",
    sseThreshold: 0.05,
    source: new itowns.C3DTilesSource({
        url: "https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithDiscreteLOD/tileset.json",
    }),
}, view);

itowns.View.prototype.addLayer.call(view, $3dTilesLayerDiscreteLOD);

// Create a new Layer 3d-tiles For Viewer Request Volume
// -----------------------------------------------------

const $3dTilesLayerRequestVolume = new itowns.C3DTilesLayer("3d-tiles-request-volume", {
    name: "RequestVolume",
    source: new itowns.C3DTilesSource({
        url: "https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/master/1.0/TilesetWithRequestVolume/tileset.json",
    }),
    sseThreshold: 1,
}, view);

itowns.View.prototype.addLayer.call(view, $3dTilesLayerRequestVolume);
