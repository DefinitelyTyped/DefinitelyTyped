import * as itowns from "itowns";
import * as THREE from "three";

const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;

const view = new itowns.GlobeView(viewerDiv);

// Add one imagery layer to the scene and the miniView
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
// Add two elevation layers.
// These will deform iTowns globe geometry to represent terrain elevation.
function addElevationLayerFromConfig(json: any) {
    const config = {
        ...json,
        source: new itowns.WMTSSource(json.source),
    };
    const layer = new itowns.ElevationLayer(config.id, config);
    view.addLayer(layer);
}
itowns.Fetcher.json("./layers/JSONLayers/IGN_MNT_HIGHRES.json").then(addElevationLayerFromConfig);
itowns.Fetcher.json("./layers/JSONLayers/WORLD_DTM.json").then(addElevationLayerFromConfig);

let eptLayer: itowns.EntwinePointTileLayer;
let eptSource: itowns.EntwinePointTileSource;

function onLayerReady() {
    const lookAt = new THREE.Vector3();
    eptLayer.root.bbox.getCenter(lookAt);
    const coordLookAt = new itowns.Coordinates(view.referenceCrs, lookAt);

    const size = new THREE.Vector3();
    eptLayer.root.bbox.getSize(size);

    view.controls?.lookAtCoordinate({
        coord: coordLookAt,
        range: 2 * size.length(),
    }, false);
}

function readEPTURL() {
    const url = (document.getElementById("ept_url") as HTMLInputElement).value
        || new URL(location.href).searchParams.get("ept");

    if (url) {
        loadEPT(url);

        // tslint:disable-next-line:prefer-template
        (document.getElementById("share") as HTMLDivElement).innerHTML = "<a href=\""
            + location.href.replace(location.search, "?ept=" + url)
            + "\" target=\"_blank\">Link to share this view</a>";
        (document.getElementById("ept_url") as HTMLInputElement).value = url;
    }
}

function loadEPT(url: string) {
    eptSource = new itowns.EntwinePointTileSource({ url });

    if (eptLayer) {
        view.removeLayer("ept");
        view.notifyChange();
    }

    eptLayer = new itowns.EntwinePointTileLayer("Entwine Point Tile", {
        source: eptSource,
        crs: view.referenceCrs,
    });

    itowns.View.prototype.addLayer.call(view, eptLayer).then(onLayerReady);
}

readEPTURL();
