import * as itowns from "itowns";
import { IgnMNTHighres, Ortho, WorldDTM } from "./jsonLayers";

// ---------- CREATE A GlobeView FOR SUPPORTING DATA VISUALIZATION : ----------

// Define camera initial position
const placement = {
    coord: new itowns.Coordinates("EPSG:4326", 2.351323, 48.856712),
    range: 25000000,
};

// `viewerDiv` contains iTowns' rendering area (`<canvas>`)
const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;

// Create a GlobeView
const view = new itowns.GlobeView(viewerDiv, placement);

// ---------- DISPLAY CONTEXTUAL DATA : ----------

// Add one imagery layer to the scene. This layer's properties are defined in a json file, but it could be
// defined as a plain js object. See `Layer` documentation for more info.
itowns.Fetcher.json("layers/JSONLayers/Ortho.json").then((json) => {
    const config = {
        ...json as Ortho,
        source: new itowns.WMTSSource((json as Ortho).source),
    };
    view.addLayer(
        new itowns.ColorLayer(config.id, config),
    );
});

// Add two elevaion layers, each with a different level of detail. Here again, each layer's properties are
// defined in a json file.
function addElevationLayerFromConfig(json: IgnMNTHighres | WorldDTM) {
    const config = {
        ...json,
        source: new itowns.WMTSSource(json.source),
    };
    view.addLayer(new itowns.ElevationLayer(config.id, config));
}
itowns.Fetcher.json("layers/JSONLayers/IGN_MNT_HIGHRES.json").then(addElevationLayerFromConfig);
itowns.Fetcher.json("layers/JSONLayers/WORLD_DTM.json").then(addElevationLayerFromConfig);

// ---------- DISPLAY GEOID HEIGHT DATA : ----------

// As both ElevationLayers data consist in altitudes, and as iTowns GlobeView displays elevation data as
// ellipsoid heights, we must add a GeoidLayer to display the altitudes correctly.

// Define the source of a geoid height grid, which serves as a conversion grid between altitudes and
// ellipsoid heights.
const geoidSource = new itowns.FileSource({
    url: "https://raw.githubusercontent.com/iTowns/iTowns2-sample-data/master/altitude-conversion-grids/"
        + "RAF20_float.gtx",
    crs: "EPSG:4326",
    format: "application/gtx",
});
// Specify the type geoid height data are encoded with. See GTXParser documentation at
// http://www.itowns-project.org/itowns/docs/#api/Parser/GTXParser for more.
// geoidSource.dataType = 'float'; TODO

// Create a Layer to support geoid height data and add it to the view.
const geoidLayer = new itowns.GeoidLayer("geoid", {
    source: geoidSource,
});
view.addLayer(geoidLayer);
