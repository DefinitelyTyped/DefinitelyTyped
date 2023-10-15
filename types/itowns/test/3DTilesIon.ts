import * as itowns from "itowns";
import * as THREE from "three";
import { IgnMNTHighres, OpenSM, WorldDTM } from "./jsonLayers";

// ---------- CREATE A GlobeView FOR SUPPORTING DATA VISUALIZATION : ----------

// Define camera initial position
const placement = {
    coord: new itowns.Coordinates("EPSG:4326", 2.351323, 48.856712),
    range: 25000000,
};
// `viewerDiv` will contain iTowns' rendering area (`<canvas>`)
const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;

// Create a GlobeView
const viewOptions = {
    diffuse: new THREE.Color(0xa0d5fc),
};
const view = new itowns.GlobeView(viewerDiv, placement, viewOptions);

// ---------- ADD A BASEMAP: ----------

// Add one imagery layer to the scene. This layer's properties are defined in a json file, but it could be
// defined as a plain js object. See `Layer` documentation for more info.
itowns.Fetcher.json("./layers/JSONLayers/OPENSM.json").then(function _(json) {
    const config = {
        ...json as OpenSM,
        source: new itowns.TMSSource((json as OpenSM).source),
    };
    const layer = new itowns.ColorLayer("Ortho", config);
    view.addLayer(layer);
});

// ---------- ADD DIGITAL ELEVATION MODELS : ----------

// Add two elevation layers, each with a different level of detail. Here again, each layer's properties are
// defined in a json file.
function addElevationLayerFromConfig(json: WorldDTM | IgnMNTHighres) {
    const config = {
        ...json,
        source: new itowns.WMTSSource(json.source),
    };
    view.addLayer(
        new itowns.ElevationLayer(config.id, config),
    );
}
itowns.Fetcher.json("./layers/JSONLayers/IGN_MNT_HIGHRES.json")
    .then((json) => addElevationLayerFromConfig(json as IgnMNTHighres));
itowns.Fetcher.json("./layers/JSONLayers/WORLD_DTM.json")
    .then((json) => addElevationLayerFromConfig(json as WorldDTM));

// ---------- ADD 3D TILES MODEL FROM CESIUM ION SERVER : ----------

// Enable draco compression (used by this tileset)
itowns.enableDracoLoader("./libs/draco/");

// Create a new 3D Tiles batch table hierarchy extension manager and add it to the tileset since this tileset
// uses this extension
const extensions = new itowns.C3DTExtensions();
extensions.registerExtension("3DTILES_batch_table_hierarchy", {
    [itowns.C3DTilesTypes.batchtable]: itowns.C3DTBatchTableHierarchyExtension,
});

// Create a 3D Tiles layer from Cesium ion server with Cesium default access token and assetId of the
// OSM buildings dataset.
const threeDTilesIonSource = new itowns.C3DTilesIonSource({
    accessToken: "myAccessToken",
    assetId: 96188,
});
threeDTilesIonSource.whenReady.then(displayAttributions); // Add attributions returned by cesium ion server
const threeDTilesIonLayer = new itowns.C3DTilesLayer("3d-tiles-cesium-ion", {
    name: "3D Tiles from Cesium Ion",
    source: threeDTilesIonSource,
    registeredExtensions: extensions,
}, view);

itowns.View.prototype.addLayer.call(view, threeDTilesIonLayer);

// Automatically convert cesium html attributions into html node elements and append them to the
// attributions div
function displayAttributions() {
    const attribDiv = document.getElementById("attribution") as HTMLDivElement;
    for (const attrib of threeDTilesIonSource.attribution) {
        const attribElt = document.createElement("template");
        attribElt.innerHTML = attrib.html;
        attribDiv.appendChild(attribElt.content.firstChild as Node);
    }
}

// ---------- ADD LIGHTS: ----------
const ambLight = new THREE.AmbientLight(0xffffff, 1);
view.scene.add(ambLight);
