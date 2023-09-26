import * as itowns from "itowns";
import * as THREE from "three";

// # Simple Globe viewer + a vector tile layer

// Define initial camera position
const placement = {
    coord: new itowns.Coordinates("EPSG:4326", 2.475, 48.807),
    range: 12000000,
};
const promises = [];

// `viewerDiv` will contain iTowns' rendering area (`<canvas>`)
const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;

// Instanciate iTowns GlobeView*
const view = new itowns.GlobeView(viewerDiv, placement);

// define pole texture
view.tileLayer.noTextureColor = new THREE.Color(0x95c1e1);

// view.getLayerById('atmosphere').visible = false; // TODO
// view.getLayerById('atmosphere').fog.enable = false; // TODO

promises.push(
    itowns.Fetcher.json("./layers/JSONLayers/Ortho.json").then(function _(config) {
        config.source = new itowns.WMTSSource(config.source);
        const layer = new itowns.ColorLayer("Ortho", config);
        return view.addLayer(layer);
    }),
);

// Define a VectorTilesSource to load Vector Tiles data from the geoportail
const mvtSource = new itowns.VectorTilesSource({
    style: "https://wxs.ign.fr/essentiels/static/vectorTiles/styles/PLAN.IGN/standard.json",
    // We don't display mountains related data to ease visualisation
    filter: (layer) => !layer["source-layer"].includes("oro_") && !layer["source-layer"].includes("parcellaire"),
});

const mvtLayer = new itowns.ColorLayer("MVT", {
    source: mvtSource,
    effect_type: itowns.colorLayerEffects.removeLightColor,
    effect_parameter: 2.5,
    addLabelLayer: { performance: true },
});

view.addLayer(mvtLayer);
