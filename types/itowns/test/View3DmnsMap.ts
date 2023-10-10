import * as itowns from "itowns";
import { IgnMNTHighres } from "./jsonLayers";

// ---------- CREATE A GlobeView FOR SUPPORTING DATA VISUALIZATION : ----------

// Define camera initial position
const placement = {
    coord: new itowns.Coordinates("EPSG:4326", 6.3486, 45.39023),
    range: 1500,
    tilt: 14,
    heading: 25,
};

// `viewerDiv` will contain iTowns' rendering area (`<canvas>`)
const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;

// Create a GlobeView
const view = new itowns.GlobeView(viewerDiv, placement);

// ---------- DISPLAY ORTHO-IMAGES : ----------

// Add one imagery layer to the scene. This layer's properties are defined in a json file, but it could be
// defined as a plain js object. See `Layer` documentation for more info.
itowns.Fetcher.json("./layers/JSONLayers/Ortho.json").then(function _(config) {
    config.source = new itowns.WMTSSource(config.source);
    view.addLayer(new itowns.ColorLayer("Ortho", config));
});

// ---------- DISPLAY A DIGITAL ELEVATION MODEL : ----------

// Add two elevation layers, each with a different level of detail. Here again, each layer's properties are
// defined in a json file.
function addElevationLayerFromConfig(json: IgnMNTHighres) {
    const config = {
        ...json,
        source: new itowns.WMTSSource(json.source),
    };
    view.addLayer(new itowns.ElevationLayer(config.id, config));
}
itowns.Fetcher.json("./layers/JSONLayers/IGN_MNS_HIGHRES.json").then(addElevationLayerFromConfig);

// ---------- DISPLAY ATMOSPHERIC LIGHTING : ----------

const atmosphere = view.getLayerById("atmosphere");
// atmosphere.setRealisticOn(!view.isDebugMode); // TODO
