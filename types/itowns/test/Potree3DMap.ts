import * as itowns from "itowns";

const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;
viewerDiv.style.display = "block";

const placement = {
    coord: new itowns.Coordinates("EPSG:4326", 4.631512, 43.675626),
    range: 100,
    tilt: 45,
    heading: -60,
};

const view = new itowns.GlobeView(viewerDiv, placement, {
    handleCollision: false,
});

view.controls!.minDistance = 50;

// Configure Point Cloud layer
const potreeLayer = new itowns.PotreeLayer("eglise_saint_blaise_arles", {
    source: new itowns.PotreeSource({
        file: "eglise_saint_blaise_arles.js",
        url: "https://raw.githubusercontent.com/gmaillet/dataset/master/",
        crs: view.referenceCrs,
    }),
});

// add potreeLayer to scene
function onLayerReady() {
    // update stats window
    const info = document.getElementById("info") as HTMLDivElement;
    view.addFrameRequester(itowns.MAIN_LOOP_EVENTS.AFTER_RENDER, () => {
        info.textContent = potreeLayer.displayedCount.toLocaleString() + " points";
    });
}

itowns.View.prototype.addLayer.call(view, potreeLayer).then(onLayerReady);

itowns.Fetcher.json("./layers/JSONLayers/IGN_MNT_HIGHRES.json").then(function _(config) {
    config.source = new itowns.WMTSSource(config.source);
    const layer = new itowns.ElevationLayer(config.id, config);
    view.addLayer(layer);
});
itowns.Fetcher.json("./layers/JSONLayers/Ortho.json").then(function _(config) {
    config.source = new itowns.WMTSSource(config.source);
    const layer = new itowns.ColorLayer(config.id, config);
    view.addLayer(layer);
});
