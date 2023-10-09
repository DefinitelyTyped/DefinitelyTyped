import * as itowns from "itowns";
import * as THREE from "three";

interface BDAltiProp {
    alti_sol: number;
    hauteur: number;
}

// ---------- CREATE A GlobeView FOR SUPPORTING DATA VISUALIZATION : ----------

// Define camera initial position
const placement = {
    coord: new itowns.Coordinates("EPSG:4326", 2.351323, 48.856712),
    range: 5000,
    tilt: 45,
};

// `viewerDiv` will contain iTowns' rendering area (`<canvas>`)
const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;

// Create a GlobeView
const view = new itowns.GlobeView(viewerDiv, placement);

// Define poles texture
view.tileLayer.noTextureColor = new THREE.Color(0x95c1e1);

// Disable atmosphere lighting
// view.getLayerById('atmosphere').visible = false; // TODO
// view.getLayerById('atmosphere').fog.enable = false; // TODO

// ---------- DISPLAY CONTEXTUAL DATA : ----------

// Add two elevation layers, each with a different level of detail. Each layer's properties are defined in
// a json file.
function addElevationLayerFromConfig(json: any) {
    const config = {
        ...json,
        source: new itowns.WMTSSource(json.source),
    };
    view.addLayer(new itowns.ElevationLayer(config.id, config));
}
itowns.Fetcher.json("./layers/JSONLayers/IGN_MNT_HIGHRES.json").then(addElevationLayerFromConfig);
itowns.Fetcher.json("./layers/JSONLayers/WORLD_DTM.json").then(addElevationLayerFromConfig);

// ---------- DISPLAY VECTOR TILED MAP DATA AS A ColorLayer : ----------

// Define the source of the ColorLayer data : a vector tiled map from the geoportail.
const mapSource = new itowns.VectorTilesSource({
    style: "https://wxs.ign.fr/essentiels/static/vectorTiles/styles/PLAN.IGN/standard.json",
    // We don't display mountains and parcels related data to ease visualisation. Also, we don't display
    // buildings related data as it will be displayed in another Layer.
    filter: (layer) => {
        return !layer["source-layer"].includes("bati_surf")
            && !layer["source-layer"].includes("oro_")
            && !layer["source-layer"].includes("routier_ponc")
            && !layer["source-layer"].includes("parcellaire");
    },
});

// Create a ColorLayer to support map data.
const mapLayer = new itowns.ColorLayer("MVT", {
    source: mapSource,
    effect_type: itowns.colorLayerEffects.removeLightColor,
    effect_parameter: 2.5,
    addLabelLayer: { performance: true },
    style: new itowns.Style({
        text: {
            color: "#000000",
            haloColor: "#ffffff",
            haloWidth: 3,
            haloBlur: 2,
        },
    }),
});

// Add the ColorLayer to the scene and to the debug menu.
view.addLayer(mapLayer);

// ---------- DISPLAY ORTHO-IMAGES : ----------

const ortho = itowns.Fetcher.json("./layers/JSONLayers/Ortho.json").then(function _(json: any) {
    const config = {
        ...json,
        source: new itowns.WMTSSource(json.source),
    };
    const layer = new itowns.ColorLayer("Ortho", config);
    return view.addLayer(layer);
});

// ---------- DISPLAY VECTOR TILED BUILDING DATA AS 3D MESHES : ----------

// Define the source of the building data : those are vector tiled data from the geoportail.
const buildingsSource = new itowns.VectorTilesSource({
    style: "https://wxs.ign.fr/essentiels/static/vectorTiles/styles/PLAN.IGN/standard.json",
    // We only want to display buildings related data.
    filter: (layer) => {
        return layer["source-layer"].includes("bati_surf")
            && layer.paint["fill-color"];
    },
});

// Create a FeatureGeometryLayer to support building data.
const buildingsLayer = new itowns.FeatureGeometryLayer("VTBuilding", {
    source: buildingsSource,
    zoom: { min: 15 },
    accurate: false,
    style: new itowns.Style({
        fill: {
            base_altitude: (p: BDAltiProp) => p.alti_sol || 0,
            extrusion_height: (p: BDAltiProp) => p.hauteur || 0,
        },
    }),
});

// Add the FeatureGeometryLayer to the scene and to the debug menu.
view.addLayer(buildingsLayer);
