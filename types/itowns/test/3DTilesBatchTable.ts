import * as itowns from "itowns";
import { OpenSM } from "./jsonLayers";

// Note: The following positions and camera parameters have been
// obtained manually using view.controls.getCameraCoordinate() ;
// view.controls.getCameraTargetPosition() ;
// view.controls.getCameraOrientation()
const placement = {
    coord: new itowns.Coordinates("EPSG:4326", -75.61349, 40.044259),
    range: 200,
    tilt: 10,
    heading: 145,
};

const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;

const view = new itowns.GlobeView(viewerDiv, placement);

// Add Open Street Map orthographic layer
itowns.Fetcher.json("./layers/JSONLayers/OPENSM.json")
    .then(function _(json) {
        const config = {
            ...json as OpenSM,
            source: new itowns.TMSSource((json as OpenSM).source),
        };
        const layer = new itowns.ColorLayer("Ortho", config);
        view.addLayer(layer);
    });

// Create a new 3D tiles layer with batch table hierarchy extension
const extensions = new itowns.C3DTExtensions();
extensions.registerExtension("3DTILES_batch_table_hierarchy", {
    [itowns.C3DTilesTypes.batchtable]: itowns.C3DTBatchTableHierarchyExtension,
});

// Create the 3D Tiles layer
const $3dTilesLayerBTHierarchy = new itowns.C3DTilesLayer(
    "3d-tiles-bt-hierarchy",
    {
        name: "BTHierarchy",
        source: new itowns.C3DTilesSource({
            url: "https://raw.githubusercontent.com/AnalyticalGraphicsInc/cesium/master/Apps/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json",
        }),
        registeredExtensions: extensions,
    },
    view,
);

itowns.View.prototype.addLayer.call(view, $3dTilesLayerBTHierarchy);
