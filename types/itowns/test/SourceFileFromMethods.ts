import * as itowns from "itowns";

// ---------- CREATE A GlobeView : ----------

// Define camera initial position
const placement = {
    coord: new itowns.Coordinates("EPSG:4326", 3.05, 48.95),
    range: 70000,
};

// `viewerDiv` will contain iTowns' rendering area (`<canvas>`)
const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;

// Instantiate iTowns GlobeView
const view = new itowns.GlobeView(viewerDiv, placement);

// ---------- DISPLAY CONTEXTUAL DATA : ----------

// Add one imagery layer to the scene
// This layer is defined in a json file but it could be defined as a plain js
// object. See Layer* for more info.
itowns.Fetcher.json("./layers/JSONLayers/Ortho.json").then(function _(json) {
    const config = {
        ...json,
        source: new itowns.WMTSSource(json.source),
    };
    const layer = new itowns.ColorLayer("Ortho", config);
    view.addLayer(layer);
});

// ---------- DEFINE DATA SOURCE SPECIFYING FETCHER AND PARSER METHODS : ----------

const sourceFromFetcherAndParser = new itowns.FileSource({
    url: "https://raw.githubusercontent.com/iTowns/iTowns2-sample-data/master/lyon-hydro.geojson",
    crs: "EPSG:4326",
    // Specify fetcher and parser methods. Should you implement some custom ones, they would need to be called here.
    fetcher: itowns.Fetcher.json,
    parser: itowns.GeoJsonParser.parse,
});

view.addLayer(
    new itowns.ColorLayer("Hydro", {
        source: sourceFromFetcherAndParser,
        style: new itowns.Style({
            fill: { color: "cyan", opacity: 0.5 },
            stroke: { color: "blue" },
        }),
    }),
);

// ---------- REORDER ColorLayers AND MOVE CAMERA : ----------

view.addEventListener(itowns.GLOBE_VIEW_EVENTS.GLOBE_INITIALIZED, () => {
    // Organize the order with which layers are superposing.
    itowns.ColorLayersOrdering.moveLayerToIndex(view, "Ortho", 0);
    // Move the camera to visualize all data.
    view.controls?.lookAtCoordinate(sourceFromFetcherAndParser.extent, false);
});
